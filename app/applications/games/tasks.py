# Create your tasks here
from __future__ import absolute_import, unicode_literals
from celery import shared_task
import applications.games.dal as dal
import networkx as nx
from simulated_annealing.anneal import SimAnneal
from django.conf import settings
import json
import math
from celery.contrib import rdb
from sqlalchemy.orm import sessionmaker
from flud.database import Database
from boto.mturk.question import ExternalQuestion
import boto3

DEFAULT_ESTIMATED_TIME = 20

DEFAULT_WEIGHTS = {
    'dpp': 1,
    'edgecrossings': 0,
    'edgelength': 0,
    'nodedistribution': 0,
    'nodeedgedistance': 0,
    'custom': 0
}


GraphSpace = settings.GRAPHSPACE
Session = sessionmaker()


@shared_task
def hello(name):
    print('Hello ' + name)
    return


@shared_task
def postprocess_task(task, game, force_sa=False):
    # rdb.set_trace()
    try:
        db = Database()
        db_session = db.session()
        layout = GraphSpace.get_graph_layout(
            layout_id=game['layout_id'], graph_id=game['graph_id'])
        graph = GraphSpace.get_graph(graph_id=game['graph_id'])
        weights = graph.get_data().get('weights', DEFAULT_WEIGHTS)
        totalweight = sum(weights.values())

        estimated_time = graph.get_data().get(
            'FLUD_ESTIMATED_TIME', DEFAULT_ESTIMATED_TIME)
        estimated_pay = round((estimated_time / 60) * 7.25, 2)

        total_workers, workers = dal.get_tasks(db_session, game_id=game['id'])

        # TODO Add a new layout to graphspace under name like worker_1, sa_1 etc
        if not force_sa and 'id' in task:
            layout.set_name('crowd_%s' % str(total_workers))
            layout = GraphSpace.post_graph_layout(
                layout, graph_id=game['graph_id'])

        if (task['type'] == 'CROWD_ONLY'):
            dal.update_game(db_session, id=game['id'], updated_game={
                'is_closed': total_workers >= game['num_workers'] or game['score'] >= totalweight * math.pow(10, 4)
            })
            if not (total_workers >= game['num_workers'] or game['score'] >= totalweight * math.pow(10, 4)):
                create_hit(game['id'], estimated_pay)
        else:
            layout = GraphSpace.get_graph_layout(
                layout_id=game['layout_id'], graph_id=game['graph_id'])
            positions = layout.positions_json
            graph_json = json.loads(task['graph_json'])
            if isinstance(graph_json, str):
                graph_json = json.loads(graph_json)

            G = nx.DiGraph()
            for node in graph_json['elements']['nodes']:
                if 'ignore' not in node.get('classes', ''):
                    attr = {
                        'x': positions[node['data']['id']]['x'],
                        'y': positions[node['data']['id']]['y'],
                        'shape': node['data']['shape'],
                        'label': node['data']['label'].split(',')[0]
                    }

                    G.add_node(node['data']['id'], **attr)

            for edge in graph_json['elements']['edges']:
                if 'ignore' not in edge.get('classes', ''):
                    attr = {
                        'directed': edge['data']['directed'] == 'true'
                    }
                    G.add_edge(edge['data']['source'],
                               edge['data']['target'], **attr)

            sa = SimAnneal(G, weights,
                           stopping_iter=graph.graph_json['data']['SA_ITERATIONS'],
                           # stopping_iter=1,
                           initial_temperature=graph.graph_json['data']['SA_INITIAL_TEMPERATURE'],
                           initial_radius=graph.graph_json['data']['NODE_RADIUS'],
                           max_dpp=graph.graph_json['data']['MAX_DPP'],
                           min_edge_length=300,
                           min_flow_angle=15,
                           stopping_runs=1)
            sa.simulate()

            # Adding simulated annealing steps as a task done by simulated annealing worker
            dal.add_task(db_session,
                         game_id=game['id'],
                         type=task['type'],
                         mode=task['mode'],
                         bonus=0,
                         bonus_token='',
                         steps_json=json.dumps(sa.steps),
                         actions=json.dumps([]),
                         graph_json=task['graph_json'],
                         score=sa.best_energy,
                         worker_id='SimulatedAnnealing',
                         assignment_id='SimulatedAnnealing')

            # Updating the best layout for the game
            layout.set_positions_json(sa.get_positions_json(sa.best_state))
            if sa.best_energy > game['score']:
                GraphSpace.update_graph_layout(
                    layout, graph_id=game['graph_id'])

            # Add a new layout to store layouts after each SA task on graphspace
            layout.set_name('sa_%s' % str(total_workers + 1))
            layout = GraphSpace.post_graph_layout(
                layout, graph_id=game['graph_id'])

            dal.update_game(db_session, id=game['id'], updated_game={
                'is_closed': total_workers + 1 >= 2 * game['num_workers'],
                'top_scorer': 'SimulatedAnnealing',
                'score': max(game['score'], sa.best_energy)
            })

            if not total_workers + 1 >= 2 * game['num_workers']:
                create_hit(game['id'], estimated_pay)

    except Exception as e:
        print(str(e))

    db_session.commit()
    db_session.close()


def create_hit(game_id, estimated_pay):
    mturk = boto3.client('mturk',
                         aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                         aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
                         region_name=settings.REGION_NAME,
                         endpoint_url=settings.SANDBOX_HOST if settings.SANDBOX else settings.PRODUCTION_HOST,
                         )
    URL = "https://flud.graphspace.org/mturk/"
    title = "Play a game and improve a science visualization"
    description = "You will play a science game called Flud and try to maximize your score by improving a visualization of a biological network."
    keywords = ["game", "layout", "design", "science"]
    frame_height = 800  # the height of the iframe holding the external hit
    amount = 0.24
    duration = 5400  # number of seconds a workers will have to finish the HIT after accepting it

    # Example of using qualification to restrict responses to Workers who have had
    # at least 97% of their assignments approved. See:
    # http://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_QualificationRequirementDataStructureArticle.html#ApiReference_QualificationType-IDs
    worker_requirements = [{
        'QualificationTypeId': '000000000000000000L0',
        'Comparator': 'GreaterThanOrEqualTo',
        'IntegerValues': [97],
        'RequiredToPreview': True,
    }, {
        'QualificationTypeId': '00000000000000000040',
        'Comparator': 'GreaterThanOrEqualTo',
        'IntegerValues': [100],
        'RequiredToPreview': True,
    }, {
        'QualificationTypeId': '00000000000000000071',
        'Comparator': 'In',
        'LocaleValues': [
            {'Country': 'US'}
        ],
        'RequiredToPreview': True
    }]

    questionform = ExternalQuestion(
        URL + str(game_id), frame_height).get_as_xml()
    # Create the HIT
    response = mturk.create_hit(
        MaxAssignments=1,
        LifetimeInSeconds=1 * 3 * 60 * 60,
        AutoApprovalDelayInSeconds=1 * 4 * 60 * 60,
        AssignmentDurationInSeconds=duration,
        Reward=str(amount),
        Title=title,
        Keywords=str(keywords),
        Description=description,
        Question=questionform,
        QualificationRequirements=worker_requirements,
    )
    hit_id = response['HIT']['HITId']
    print("Game ID: %s Created HIT: %s Pay: %s" % (game_id, hit_id, amount))
