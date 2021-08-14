from django_cron import CronJobBase, Schedule
from django.conf import settings
import applications.games.dal as dal
from sqlalchemy.orm import sessionmaker
from flud.database import Database
from graphspace_python.graphs.classes.gslayout import GSLayout

Session = sessionmaker()

GraphSpace = settings.GRAPHSPACE


class GraphsSyncCronJob(CronJobBase):
    # TODO: add documentation about crontab
    RUN_EVERY_MINS = 120  # every 1 min

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'flud.crons.GraphsSyncCronJob'  # a unique code

    def do(self):
        db = Database()
        session = db.session()
        print('start')
        # g_list = GraphSpace.get_group_graphs(
            # group_id=settings.GRAPHSPACE_FLUD_GROUP_ID, limit=100)
        g_list = GraphSpace.get_group_graphs(
            group_id=settings.GRAPHSPACE_FLUD_GROUP_ID)
        print('syncing ' + str(len(g_list)) + ' graphs')
        graphspace_ids = []
        for g in g_list:
            try:
                graphspace_ids.append(g.id)
                L = GraphSpace.get_graph_layout(
                    layout_name='flud_layout', graph_id=g.id)
                if L is None:
                    L = GSLayout()
                    L.set_name('flud_layout')
                    L.set_is_shared(1)
                    layout = GraphSpace.post_graph_layout(L, graph_id=g.id)
                else:
                    L.set_is_shared(1)
                    layout = GraphSpace.update_graph_layout(L, graph_id=g.id)
                # print('graph_id', str(g.id), 'layout_id', str(layout.id))
                game = dal.get_game_by_graph_id(session, graph_id=g.id)
                if game is None:
                    game = dal.add_game(session,
                                        graph_id=g.id,
                                        name=g.name,
                                        layout_id=layout.id,
                                        top_scorer=None,
                                        score=None,
                                        is_closed=False,
                                        num_steps=g.data.get(
                                            'FLUD_CROWD_STEPS', settings.DEFAULT_SA_CROWD_STEPS),
                                        num_workers=g.data.get(
                                            'FLUD_NUM_WORKER', settings.DEFAULT_SA_NUM_WORKER),
                                        type=g.data.get('FLUD_GAME_TYPE', settings.DEFAULT_FLUD_GAME_TYPE))
                print('Creating game with', 'graph_id', str(g.id), 'layout_id', str(layout.id), 'type', game.type)
                # print(game.type)
            except Exception as e:
                print('Error ' + str(e))
        try:
            total, flud_graphs = dal.find_games(session)
            for g in flud_graphs:
                if g.graph_id not in graphspace_ids:
                    print('Deleting game with graph id=' + str(g.graph_id))
                    dal.delete_game(session, g.id)
        except Exception as e:
            print('Error ' + str(e))
        session.commit()
        session.close()
        # connection.close()
