import json
from django.shortcuts import render
import flud.utils as utils
from django.http import HttpResponse, QueryDict
import applications.games.controllers as games
import applications.users.controllers as users
from django.conf import settings
import networkx as nx
from simulated_annealing.anneal import SimAnneal
from .tasks import postprocess_task
import math

GraphSpace = settings.GRAPHSPACE
DEFAULT_WEIGHTS = {
    'dpp': 400,
    'edgecrossings': 3,
    'edgelength': 1,
    'nodedistribution': 1,
    'nodeedgedistance': 1,
    'custom': 0
}
DEFAULT_ESTIMATED_TIME = 20
COMPENSATION_DATA = {
    'TOTAL_MAX_BUDGET': 25,
    'DPP_MAX_BUDGET': 20,
    'EC_MAX_BUDGET': 2,
    'EL_MAX_BUDGET': 1,
    'ND_MAX_BUDGET': 1,
    'NED_MAX_BUDGET': 1,

    'DPP_GOAL': 300000,
    'EC_GOAL': 30000,
    'EL_GOAL': 10000,
    'ND_GOAL': 1000,
    'NED_GOAL': 1000,
}
DEFAULT_HIT_SEQUENCE = ['dpp'] * 9 + ['edgecrossings'] * 5 + \
    ['edgelength', 'nodedistribution', 'nodeedgedistance'] * 2
# Create your views here.


def game_selection_page(request, query=dict()):
    context = {'name': "game_selection"}
    context.update(_get_games(request, query=query))
    return render(request, 'game_selection/index.html', context)


def publictutorials_page(request, game_id=None):
    context = {
        'name': 'crowdtutorials_page',
        "hide_header": True,
        'volunteer_user': True
    }

    query = request.GET

    if game_id is not None:
        game = games.get_game_by_id(request, int(game_id))
    else:
        game = games.get_random_game(request)

    graph = GraphSpace.get_graph(graph_id=game.graph_id)

    mode = query.get('mode', None)
    if mode is None:
        total_tasks, tasks = games.find_tasks(request, game_id=game.id)
        hs = graph.get_data().get('HIT_SEQUENCE', DEFAULT_HIT_SEQUENCE)
        mode = hs[total_tasks % len(hs)]

    context['weights'] = graph.get_data().get('weights', DEFAULT_WEIGHTS)
    mode, bonus_pay, compensation_data = get_mode_data(
        mode, game, context['weights'], COMPENSATION_DATA)

    context['bonus_pay'] = bonus_pay
    context['compensation_data'] = compensation_data
    context['mode'] = mode

    graph = GraphSpace.get_graph(
        graph_id=settings.GRAPHSPACE_TUTORIAL_GRAPH_ID)
    layout = GraphSpace.get_graph_layout(
        layout_id=settings.GRAPHSPACE_TUTORIAL_LAYOUT_ID, graph_id=settings.GRAPHSPACE_TUTORIAL_GRAPH_ID)

    context['graph_json'] = json.dumps(graph.graph_json)
    context['style_json'] = json.dumps(graph.style_json)
    context['positions_json'] = json.dumps(layout.positions_json)
    context['score'] = game.score
    context['graph_id'] = graph.id
    context['compensation_data'] = COMPENSATION_DATA

    context['compensation_data'].update({
        'DPP_BUDGET': payment(end=compensation_data['DPP_GOAL'], start=game.dpp, budget=compensation_data['DPP_MAX_BUDGET'], maxp=compensation_data['DPP_GOAL']) if mode == 'dpp' else 0,
        'EC_BUDGET': payment(end=compensation_data['EC_GOAL'], start=game.ec, budget=compensation_data['EC_MAX_BUDGET'], maxp=compensation_data['EC_GOAL']) if mode == 'edgecrossings' else 0,
        'EL_BUDGET': payment(end=compensation_data['EL_GOAL'], start=game.el, budget=compensation_data['EL_MAX_BUDGET'], maxp=compensation_data['EL_GOAL']) if mode == 'edgelength' else 0,
        'ND_BUDGET': payment(end=compensation_data['ND_GOAL'], start=game.nd, budget=compensation_data['ND_MAX_BUDGET'], maxp=compensation_data['ND_GOAL']) if mode == 'nodedistribution' else 0,
        'NED_BUDGET': payment(end=compensation_data['NED_GOAL'], start=game.ned, budget=compensation_data['NED_MAX_BUDGET'], maxp=compensation_data['NED_GOAL']) if mode == 'nodeedgedistance' else 0,

        'DPP_START': float(game.dpp),
        'EC_START': float(game.ec),
        'EL_START': float(game.el),
        'ND_START': float(game.nd),
        'NED_START': float(game.ned),
    })

    context['compensation_data']['TOTAL_BUDGET'] = context['compensation_data']['DPP_BUDGET'] + context['compensation_data']['EC_BUDGET'] + \
        context['compensation_data']['EL_BUDGET'] + \
        context['compensation_data']['ND_BUDGET'] + \
        context['compensation_data']['NED_BUDGET']

    context['game_id'] = game.id
    context['weights'] = DEFAULT_WEIGHTS
    context['num_goals'] = sum([w > 0 for w in context['weights'].values()])
    context['totalweight'] = sum(context['weights'].values())
    context['estimated_time'] = graph.get_data().get(
        'FLUD_ESTIMATED_TIME', DEFAULT_ESTIMATED_TIME)
    context['estimated_pay'] = round(
        (context['estimated_time'] / 60) * 7.25, 1)

    context.update({
        'top_scorers_len': 0,
        'top_scorers': []
    })

    if game is not None:
        return render(request, 'tutorial/tutorial.html', context)
    else:
        context['error_message'] = 'We are sorry. We have encountered an error!'
        return render(request, 'error/index.html', context)


def crowdtutorials_page(request, game_id=None):
    context = {
        'name': 'crowdtutorials_page',
        "hide_header": True
    }

    query = request.GET
    worker_id = query.get('workerId', None)
    assignment_id = query.get('assignmentId', None)
    hit_id = query.get('hitId', None)
    amazon_host = query.get('turkSubmitTo', None)

    context['worker_id'] = worker_id
    context['assignment_id'] = assignment_id
    context['hit_id'] = hit_id
    context["amazon_host"] = amazon_host

    if game_id is not None:
        game = games.get_game_by_id(request, int(game_id))
    else:
        game = games.get_random_game(request)

    graph = GraphSpace.get_graph(graph_id=game.graph_id)

    mode = query.get('mode', None)
    if mode is None:
        total_tasks, tasks = games.find_tasks(request, game_id=game.id)
        hs = graph.get_data().get('HIT_SEQUENCE', DEFAULT_HIT_SEQUENCE)
        mode = hs[total_tasks % len(hs)]

    context['weights'] = graph.get_data().get(
        'weights', DEFAULT_WEIGHTS)
    mode, bonus_pay, compensation_data = get_mode_data(
        mode, game, context['weights'], COMPENSATION_DATA)

    context['bonus_pay'] = bonus_pay
    context['compensation_data'] = compensation_data
    context['mode'] = mode

    graph = GraphSpace.get_graph(
        graph_id=settings.GRAPHSPACE_TUTORIAL_GRAPH_ID)
    layout = GraphSpace.get_graph_layout(
        layout_id=settings.GRAPHSPACE_TUTORIAL_LAYOUT_ID, graph_id=settings.GRAPHSPACE_TUTORIAL_GRAPH_ID)

    context['graph_json'] = json.dumps(graph.graph_json)
    context['style_json'] = json.dumps(graph.style_json)
    context['positions_json'] = json.dumps(layout.positions_json)
    context['score'] = game.score
    context['graph_id'] = graph.id
    context['compensation_data'] = COMPENSATION_DATA

    context['compensation_data'].update({
        'DPP_BUDGET': payment(end=compensation_data['DPP_GOAL'], start=game.dpp, budget=compensation_data['DPP_MAX_BUDGET'], maxp=compensation_data['DPP_GOAL']) if mode == 'dpp' else 0,
        'EC_BUDGET': payment(end=compensation_data['EC_GOAL'], start=game.ec, budget=compensation_data['EC_MAX_BUDGET'], maxp=compensation_data['EC_GOAL']) if mode == 'edgecrossings' else 0,
        'EL_BUDGET': payment(end=compensation_data['EL_GOAL'], start=game.el, budget=compensation_data['EL_MAX_BUDGET'], maxp=compensation_data['EL_GOAL']) if mode == 'edgelength' else 0,
        'ND_BUDGET': payment(end=compensation_data['ND_GOAL'], start=game.nd, budget=compensation_data['ND_MAX_BUDGET'], maxp=compensation_data['ND_GOAL']) if mode == 'nodedistribution' else 0,
        'NED_BUDGET': payment(end=compensation_data['NED_GOAL'], start=game.ned, budget=compensation_data['NED_MAX_BUDGET'], maxp=compensation_data['NED_GOAL']) if mode == 'nodeedgedistance' else 0,

        'DPP_START': float(game.dpp),
        'EC_START': float(game.ec),
        'EL_START': float(game.el),
        'ND_START': float(game.nd),
        'NED_START': float(game.ned),
    })

    context['compensation_data']['TOTAL_BUDGET'] = context['compensation_data']['DPP_BUDGET'] + context['compensation_data']['EC_BUDGET'] + \
        context['compensation_data']['EL_BUDGET'] + \
        context['compensation_data']['ND_BUDGET'] + \
        context['compensation_data']['NED_BUDGET']

    context['game_id'] = game.id
    context['weights'] = DEFAULT_WEIGHTS
    context['num_goals'] = sum([w > 0 for w in context['weights'].values()])
    context['totalweight'] = sum(context['weights'].values())
    context['estimated_time'] = graph.get_data().get(
        'FLUD_ESTIMATED_TIME', DEFAULT_ESTIMATED_TIME)
    context['estimated_pay'] = round(
        (context['estimated_time'] / 60) * 7.25, 1)

    if worker_id is not None and assignment_id is not None and assignment_id != 'ASSIGNMENT_ID_NOT_AVAILABLE':
        total_tasks, tasks_list = games.find_tasks(
            request, worker_id=worker_id, game_id=game_id)

        if total_tasks == 0 and game is not None:
            return render(request, 'crowd/tutorial.html', context)
        elif total_tasks != 0:
            context['error_message'] = 'We are sorry. It seems that you have already worked on one of our tasks. \n\n At this point we only allow only one HIT per worker. If you see this message, please return the HIT. \n\n Thank you for showing interest in Flud.'
            return render(request, 'error/index.html', context)
        else:
            context['error_message'] = 'We are sorry. We have encountered an error! If you see this message, please return the HIT. \n\n Thank you for showing interest in Flud.'
            return render(request, 'error/index.html', context)

    return render(request, 'crowd/preview.html', context)


def mturktutorials_page(request, game_id=None):
    context = {
        'name': 'mturktutorials_page',
        "hide_header": True,
        'volunteer_user': True
    }

    query = request.GET
    worker_id = query.get('workerId', None)
    assignment_id = query.get('assignmentId', None)
    hit_id = query.get('hitId', None)
    amazon_host = query.get('turkSubmitTo', None)

    context['worker_id'] = worker_id
    context['assignment_id'] = assignment_id
    context['hit_id'] = hit_id
    context["amazon_host"] = amazon_host

    if game_id is not None:
        game = games.get_game_by_id(request, int(game_id))
    else:
        game = games.get_random_game(request)

    graph = GraphSpace.get_graph(graph_id=game.graph_id)

    mode = query.get('mode', None)
    if mode is None:
        total_tasks, tasks = games.find_tasks(request, game_id=game.id)
        hs = graph.get_data().get('HIT_SEQUENCE', DEFAULT_HIT_SEQUENCE)
        mode = hs[total_tasks % len(hs)]

    context['weights'] = graph.get_data().get('weights', DEFAULT_WEIGHTS)
    # mode, bonus_pay, compensation_data = get_mode_data(
    # mode, game, context['weights'], COMPENSATION_DATA)

    mode, bonus_pay, compensation_data = get_mode_data(
        mode, game, context['weights'], graph.get_data().get(
            'COMPENSATION_DATA', COMPENSATION_DATA))

    context['bonus_pay'] = bonus_pay
    context['compensation_data'] = compensation_data
    context['mode'] = mode

    graph = GraphSpace.get_graph(
        graph_id=settings.GRAPHSPACE_TUTORIAL_GRAPH_ID)
    layout = GraphSpace.get_graph_layout(
        layout_id=settings.GRAPHSPACE_TUTORIAL_LAYOUT_ID, graph_id=settings.GRAPHSPACE_TUTORIAL_GRAPH_ID)

    context['graph_json'] = json.dumps(graph.graph_json)
    context['style_json'] = json.dumps(graph.style_json)
    context['positions_json'] = json.dumps(layout.positions_json)
    context['score'] = game.score
    context['graph_id'] = graph.id

    context['game_id'] = game.id
    context['weights'] = DEFAULT_WEIGHTS
    context['num_goals'] = sum([w > 0 for w in context['weights'].values()])
    context['totalweight'] = sum(context['weights'].values())
    context['estimated_time'] = 2
    context['estimated_pay'] = 0.24
    context['redirect_url'] = '/crowd/%s?mode=%s&workerId=%s&assignmentId=%s&hitId=%s&turkSubmitTo=%s' % (
        game.id, mode, worker_id, assignment_id, hit_id, amazon_host)

    if worker_id is not None and assignment_id is not None and assignment_id != 'ASSIGNMENT_ID_NOT_AVAILABLE':
        # good_tasks = games.count_worker_tasks(request, worker_id=worker_id)

        total_tasks, tasks_list = games.find_tasks(
            request, worker_id=worker_id, game_id=game_id)

        total_tutorials, tutorials_list = games.find_tutorials(
            request, worker_id=worker_id)

        if game is not None and (total_tutorials - total_tasks) < 2:
            return render(request, 'mturk/tutorial.html', context)
        elif total_tasks != 0 or total_tutorials != 0:
            context['error_message'] = 'We are sorry. It seems that you have already worked on one of our tasks. \n\n At this point we only allow only one HIT per worker. If you see this message, please return the HIT. \n\n Thank you for showing interest in Flud.'
            return render(request, 'error/index.html', context)
        else:
            context['error_message'] = 'We are sorry. We have encountered an error! If you see this message, please return the HIT. \n\n Thank you for showing interest in Flud.'
            return render(request, 'error/index.html', context)

    return render(request, 'mturk/preview.html', context)


def get_mode_data(mode, game, weights, compensation_data):
    next_mode_sequence = {
        'dpp': 'edgecrossings',
        'edgecrossings': 'edgelength',
        'edgelength': 'nodedistribution',
        'nodedistribution': 'nodeedgedistance',
        'nodeedgedistance': 'nodeedgedistance'
    }

    computed_compensation_data = compensation_data.copy()
    computed_compensation_data.update({
        'DPP_BUDGET': payment(end=compensation_data['DPP_GOAL'], start=game.dpp, budget=compensation_data['DPP_MAX_BUDGET'], maxp=compensation_data['DPP_GOAL']) if mode == 'dpp' else 0,
        'EC_BUDGET': payment(end=compensation_data['EC_GOAL'], start=game.ec, budget=compensation_data['EC_MAX_BUDGET'], maxp=compensation_data['EC_GOAL']) if mode == 'edgecrossings' else 0,
        'EL_BUDGET': payment(end=compensation_data['EL_GOAL'], start=game.el, budget=compensation_data['EL_MAX_BUDGET'], maxp=compensation_data['EL_GOAL']) if mode == 'edgelength' else 0,
        'ND_BUDGET': payment(end=compensation_data['ND_GOAL'], start=game.nd, budget=compensation_data['ND_MAX_BUDGET'], maxp=compensation_data['ND_GOAL']) if mode == 'nodedistribution' else 0,
        'NED_BUDGET': payment(end=compensation_data['NED_GOAL'], start=game.ned, budget=compensation_data['NED_MAX_BUDGET'], maxp=compensation_data['NED_GOAL']) if mode == 'nodeedgedistance' else 0,

        'DPP_START': float(game.dpp),
        'EC_START': float(game.ec),
        'EL_START': float(game.el),
        'ND_START': float(game.nd),
        'NED_START': float(game.ned),
    })

    bonus_pay = round((1 if weights['dpp'] > 0 else 0) * computed_compensation_data['DPP_BUDGET'] +
                      (1 if weights['edgecrossings'] else 0) * computed_compensation_data['EC_BUDGET'] +
                      (1 if weights['edgelength'] else 0) * computed_compensation_data['EL_BUDGET'] +
                      (1 if weights['nodedistribution'] else 0) * computed_compensation_data['ND_BUDGET'] +
                      (1 if weights['nodeedgedistance'] else 0) * computed_compensation_data['NED_BUDGET'], 2)

    if bonus_pay > 0:
        return mode, bonus_pay, computed_compensation_data
    else:
        return get_mode_data(next_mode_sequence[mode], game, weights, compensation_data)


def error_page(request):
    context = {
        'name': "error_page",
        "hide_header": True
    }
    query = request.GET
    context['error_message'] = query.get(
        'message', 'We are sorry, It seems that your device or screen size is not compatible for this task! \n\n If you see this message, please return the HIT. \n\n Thank you for showing interest in Flud.')
    return render(request, 'error/index.html', context)


def crowd_page(request):
    context = {
        'name': "crowd_page",
        "hide_header": True
    }
    query = request.GET
    worker_id = query.get('workerId', None)
    game_id = query.get('gameId', None)
    assignment_id = query.get('assignmentId', None)
    hit_id = query.get('hitId', None)
    amazon_host = query.get('turkSubmitTo', None)

    if worker_id is not None and assignment_id is not None:
        total_tasks, tasks_list = games.find_tasks(
            request, worker_id=worker_id, game_id=game_id)
        if total_tasks == 0 and game_id is not None:
            game = games.get_game_by_id(request, game_id)
            # games.update_game(request, game.id, is_closed=True)

            graph = GraphSpace.get_graph(graph_id=game.graph_id)
            layout = GraphSpace.get_graph_layout(
                layout_id=game.layout_id, graph_id=game.graph_id)

            mode = query.get('mode', None)
            if mode is None:
                total_tasks, tasks = games.find_tasks(request, game_id=game_id)
                hs = graph.get_data().get('HIT_SEQUENCE', DEFAULT_HIT_SEQUENCE)
                mode = hs[total_tasks % len(hs)]

            context['weights'] = graph.get_data().get(
                'weights', DEFAULT_WEIGHTS)

            context['num_goals'] = sum(
                [w > 0 for w in context['weights'].values()])
            context['totalweight'] = sum(context['weights'].values())

            mode, bonus_pay, compensation_data = get_mode_data(
                mode, game, context['weights'], graph.get_data().get(
                    'COMPENSATION_DATA', COMPENSATION_DATA))

            context['bonus_pay'] = bonus_pay
            context['compensation_data'] = compensation_data
            context['mode'] = mode

            context['compensation_data']['TOTAL_BUDGET'] = context['compensation_data']['DPP_BUDGET'] + context['compensation_data']['EC_BUDGET'] + \
                context['compensation_data']['EL_BUDGET'] + \
                context['compensation_data']['ND_BUDGET'] + \
                context['compensation_data']['NED_BUDGET']

            context['score'] = game.score
            context['top_scorer'] = game.top_scorer
            context['graph_id'] = game.id
            context['layout_id'] = game.layout_id
            context['graph_json'] = json.dumps(graph.graph_json)
            context['style_json'] = json.dumps(graph.style_json)
            context['positions_json'] = json.dumps(layout.positions_json)

            context['is_closed'] = game.is_closed
            context['num_steps'] = game.num_steps
            context['num_workers'] = game.num_workers
            context['type'] = game.type

            context['worker_id'] = worker_id
            context['assignment_id'] = assignment_id
            context['hit_id'] = hit_id
            context["amazon_host"] = amazon_host

            return render(request, 'gameplay/index.html', context)

    context['error_message'] = 'We are sorry, there are no tasks left to work on! Thank you for showing interest in Flud.'
    return render(request, 'error/index.html', context)


def payment(end, start=0, budget=0, maxp=200000):
    end = max(min(end, maxp), 0)
    start = max(min(start, maxp), 0)
    if end > start:
        def f(x):
            return int(100 * math.pow(budget + 1, x / maxp))
        return (f(end) - f(start)) / 100
    else:
        return 0


def game_page(request, game_id):
    context = {'name': 'game_graph',
                'game_id': game_id,
               'volunteer_user': True, 'hide_header': False}

    game = games.get_game_by_id(request, game_id)

    graph = GraphSpace.get_graph(graph_id=game.graph_id)
    layout = GraphSpace.get_graph_layout(
        layout_id=game.layout_id, graph_id=game.graph_id)

    query = request.GET
    mode = query.get('mode', None)
    if mode is None:
        total_tasks, tasks = games.find_tasks(request, game_id=game_id)
        hs = graph.get_data().get('HIT_SEQUENCE', DEFAULT_HIT_SEQUENCE)
        mode = hs[total_tasks % len(hs)]

    context['mode'] = mode

    context['weights'] = graph.get_data().get('weights', DEFAULT_WEIGHTS)
    context['num_goals'] = sum([w > 0 for w in context['weights'].values()])
    context['totalweight'] = sum(context['weights'].values())
    context['compensation_data'] = graph.get_data().get(
        'COMPENSATION_DATA', COMPENSATION_DATA)
    compensation_data = context['compensation_data']
    context['compensation_data'].update({
        'DPP_BUDGET': payment(end=compensation_data['DPP_GOAL'], start=game.dpp, budget=compensation_data['DPP_MAX_BUDGET'], maxp=compensation_data['DPP_GOAL']) if mode == 'dpp' else 0,
        'EC_BUDGET': payment(end=compensation_data['EC_GOAL'], start=game.ec, budget=compensation_data['EC_MAX_BUDGET'], maxp=compensation_data['EC_GOAL']) if mode == 'edgecrossings' else 0,
        'EL_BUDGET': payment(end=compensation_data['EL_GOAL'], start=game.el, budget=compensation_data['EL_MAX_BUDGET'], maxp=compensation_data['EL_GOAL']) if mode == 'edgelength' else 0,
        'ND_BUDGET': payment(end=compensation_data['ND_GOAL'], start=game.nd, budget=compensation_data['ND_MAX_BUDGET'], maxp=compensation_data['ND_GOAL']) if mode == 'nodedistribution' else 0,
        'NED_BUDGET': payment(end=compensation_data['NED_GOAL'], start=game.ned, budget=compensation_data['NED_MAX_BUDGET'], maxp=compensation_data['NED_GOAL']) if mode == 'nodeedgedistance' else 0,

        'DPP_START': float(game.dpp),
        'EC_START': float(game.ec),
        'EL_START': float(game.el),
        'ND_START': float(game.nd),
        'NED_START': float(game.ned),
    })

    context['compensation_data']['TOTAL_BUDGET'] = context['compensation_data']['DPP_BUDGET'] + context['compensation_data']['EC_BUDGET'] + \
        context['compensation_data']['EL_BUDGET'] + \
        context['compensation_data']['ND_BUDGET'] + \
        context['compensation_data']['NED_BUDGET']

    context['score'] = game.score
    context['top_scorer'] = game.top_scorer
    context['graph_id'] = game.id
    context['layout_id'] = game.layout_id
    context['graph_json'] = json.dumps(graph.graph_json)
    context['style_json'] = json.dumps(graph.style_json)
    context['positions_json'] = json.dumps(layout.positions_json)

    context['is_closed'] = game.is_closed
    context['num_steps'] = game.num_steps
    context['num_workers'] = game.num_workers
    context['type'] = game.type

    top_scorers_len, top_scorers = games.get_top_scorers_by_game_id(request, game_id, limit=20, offset=0)

    context.update({
        'top_scorers_len': top_scorers_len,
        'top_scorers': [utils.serializer(top_scorer) for top_scorer in top_scorers]
    })

    return render(request, 'gameplay/index.html', context)


def task_page(request, task_id):
    context = {'name': 'task_page', 'hide_header': True}

    task = games.get_task_by_id(request, task_id)
    game = games.get_game_by_id(request, task.game_id)
    graph = GraphSpace.get_graph(graph_id=game.graph_id)

    context['mode'] = task.mode

    context['worker_id'] = task.worker_id
    context['assignment_id'] = task.assignment_id
    context['steps_json'] = task.steps_json
    context['actions'] = task.actions

    context['graph_json'] = json.dumps(graph.graph_json)
    context['style_json'] = json.dumps(graph.style_json)

    context['name'] = game.name
    context['is_closed'] = game.is_closed
    context['num_steps'] = game.num_steps
    context['num_workers'] = game.num_workers
    context['type'] = game.type

    return render(request, 'task/index.html', context)


def game_analysis_page(request, game_id):
    context = {'name': 'game_analysis_page'}

    game = games.get_game_by_id(request, game_id)
    graph = GraphSpace.get_graph(graph_id=game.graph_id)

    context['game_id'] = game_id
    # total_tasks, tasks = games.find_tasks(request, game_id=game_id)
    # tasks = [{
    #     'id': task.id,
    #     'game_id': task.game_id,
    #     'type': task.type,
    #     'mode': task.mode,
    #     'worker_id': task.worker_id,
    #     'assignment_id': task.assignment_id,
    #     'steps_json': json.loads(json.loads(task.steps_json)),
    #     'actions': json.loads(json.loads(task.actions)),
    #     'graph_json': task.graph_json,
    #     'score': float(task.score),
    #     'bonus': float(task.bonus),
    #     'bonus_token': task.bonus_token,
    #     'created_at': task.created_at.isoformat(),
    #     'updated_at': task.updated_at.isoformat()
    # } for task in tasks]

    # return HttpResponse(json.dumps({
    #     'total_tasks': total_tasks,
    #     'tasks': tasks
    # }), content_type="application/json", status=200)
    return render(request, 'game_analysis/index.html', context)

def leaderboard_page(request, game_id):
    context = {
        'name': 'leaderboard',
        'game_id': game_id
    }

    total, top_scorers = games.get_top_scorers_by_game_id(request, game_id, limit=20, offset=0)

    context.update({
        'total': total,
        'top_scorers': [utils.serializer(top_scorer) for top_scorer in top_scorers]
    })

    return render(request, 'leaderboard/index.html', context)


def tutorial_page(request, tut_id):
    context = {
        'name': 'tutorial',
        'tutorial_number': tut_id
    }
    return render(request, 'tutorials/index.html', context)


def _get_tasks(request, query=dict()):
    querydict = QueryDict('', mutable=True)
    querydict.update(query)
    query = querydict

    total, tasks_list = games.find_tasks(request,
                                         game_id=query.get('game_id', None),
                                         limit=query.get('limit', 100),
                                         offset=query.get('offset', 0),
                                         order=query.get('order', 'asc'),
                                         sort=query.get('sort', 'id'))

    return {
        'total': total,
        'tasks': [utils.serializer(task) for task in tasks_list]
    }


def tasks_rest_api(request):
    """
    Handles any request sent to following urls:
        /ajax/tasks
    Parameters
    ----------
    request - HTTP Request
    Returns
    -------
    response : JSON Response
    """

    return HttpResponse(json.dumps(_get_tasks(request, query=request.GET)), content_type="application/json", status=200)


def _get_games(request, query=dict()):
    querydict = QueryDict('', mutable=True)
    querydict.update(query)
    query = querydict

    total, games_list = games.find_games(request,
                                         owner_email=query.get(
                                             'owner_email', None),
                                         names=list(
                                             filter(None, query.getlist('names[]', []))),
                                         limit=query.get('limit', 50),
                                         offset=query.get('offset', 0),
                                         order=query.get('order', 'desc'),
                                         sort=query.get('sort', 'name'))

    return {
        'total': total,
        'games': [utils.serializer(game) for game in games_list]
    }


def games_rest_api(request):
    """
    Handles any request sent to following urls:
        /ajax/games
    Parameters
    ----------
    request - HTTP Request
    Returns
    -------
    response : JSON Response
    """

    return HttpResponse(json.dumps(_get_games(request, query=request.GET)), content_type="application/json", status=200)


def save_game_ajax_api(request, game_id):
    if request.META.get('HTTP_ACCEPT', None) == 'application/json':
        if request.method == "PUT" and game_id is not None:
            updated_game = json.loads(request.body.decode())
            game = utils.serializer(games.update_game(request,
                                                      id=game_id,
                                                      top_scorer=updated_game['top_scorer'],
                                                      score=updated_game['score'],
                                                      dpp=updated_game['dpp'],
                                                      ec=updated_game['ec'],
                                                      el=updated_game['el'],
                                                      nd=updated_game['nd'],
                                                      ned=updated_game['ned'],
                                                      graph_json=updated_game['json'],
                                                      graph_image=updated_game['image']))

            # Updating game session data
            game_to_user = games.update_game_to_user_topscore(request,
                                                          game_id=game_id,
                                                          score=updated_game['score'],
                                                          graph_json=updated_game['json'])

            return HttpResponse(json.dumps(game), content_type="application/json", status=200)

    return None


def get_score_ajax_api(request, game_id):
    return HttpResponse(json.dumps(utils.serializer(games.get_game_by_id(request, game_id))),
                        content_type="application/json",
                        status=200)


def finish_game_ajax_api(request, game_id):
    if request.META.get('HTTP_ACCEPT', None) == 'application/json':
        if request.method == "POST" and game_id is not None:
            game = games.get_game_by_id(request, game_id)
            layout = GraphSpace.get_graph_layout(
                layout_id=game.layout_id, graph_id=game.graph_id)
            body = json.loads(request.body.decode())

            d = body['graph_json']
            positions = layout.positions_json
            G = nx.DiGraph()
            for node in d['elements']['nodes']:
                attr = {
                    'x': positions[node['data']['id']]['x'],
                    'y': positions[node['data']['id']]['y'],
                    'shape': node['data']['shape']
                }
                G.add_node(node['data']['id'], attr)
            for edge in d['elements']['edges']:
                attr = {
                    'directed': edge['data']['directed'] == 'true'
                }
                G.add_edge(edge['data']['source'],
                           edge['data']['target'], attr)

            sa = SimAnneal(G, body['w'], body['h'], body['x1'], body['x2'], body['y1'], body['y2'], stopping_iter=10,
                           initial_temperature=10)
            sa.anneal()

            x = list(range(0, len(sa.energy_list)))
            y = sa.energy_list
            plt.plot(x, y)
            plt.savefig('test.pdf')

            with open('data.json', 'w') as outfile:
                json.dump(sa.position_json(), outfile)

            return HttpResponse(json.dumps(utils.serializer(game)),
                                content_type="application/json",
                                status=200)


def tutorials_ajax_api(request):
    if request.META.get('HTTP_ACCEPT', None) == 'application/json':
        if request.method == "POST":
            tutorial = json.loads(request.body.decode())
            tutorial = utils.serializer(games.add_tutorial(request, game_id=tutorial['game_id'],
                                                           worker_id=tutorial['worker_id'],
                                                           assignment_id=tutorial['assignment_id']))
            return HttpResponse(json.dumps(tutorial), content_type="application/json", status=201)
    return None


def tasks_ajax_api(request):
    if request.META.get('HTTP_ACCEPT', None) == 'application/json':
        if request.method == "POST":
            task = json.loads(request.body.decode())
            if len(task['worker_id']) > 0 and games.get_task_by_worker_id_assignment_id(
                    request, worker_id=task['worker_id'], assignment_id=task['assignment_id']) is None:
                task = utils.serializer(games.add_task(request, game_id=task['game_id'],
                                                       mode=task['mode'],
                                                       type=task['type'],
                                                       steps_json=json.dumps(
                    task['steps_json']),
                    actions=json.dumps(
                    task['actions']),
                    graph_json=json.dumps(
                    task['graph_json']),
                    score=task['score'],
                    bonus=task['bonus'],
                    worker_id=task['worker_id'],
                    assignment_id=task['assignment_id']))
            game = games.get_game_by_id(request, task['game_id'])
            postprocess_task.delay(task, utils.serializer(game),
                                   force_sa=task.get('force_sa', False))
            return HttpResponse(json.dumps(task), content_type="application/json", status=201)
    return None
