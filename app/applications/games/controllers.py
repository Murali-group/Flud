import base64
import os
import applications.games.dal as db
from django.conf import settings
from flud.settings.base import BASE_DIR
from Crypto.Cipher import XOR
import base64
from flud.utils import get_request_user
import applications.users.controllers as users

GraphSpace = settings.GRAPHSPACE


def get_game_by_id(request, id):
    return db.get_game_by_id(request.db_session, id)


def get_random_game(request):
    return db.get_random_game(request.db_session)


def find_games(request, owner_email=None, names=None, limit=20, offset=0, order='desc', sort='name'):
    sort_attr = getattr(db.Game, sort if sort is not None else 'name')
    order_by = getattr(db, order if order is not None else 'desc')(sort_attr)

    total, games_list = db.find_games(request.db_session,
                                      owner_email=owner_email,
                                      names=names,
                                      is_closed=False,
                                      limit=limit,
                                      offset=offset,
                                      order_by=order_by)

    return total, games_list


def update_game(request, id, top_scorer=None, score=None, dpp=None, ec=None, el=None, nd=None, ned=None, graph_json=None, graph_image=None, is_closed=None):
    if id is None:
        raise Exception("Required Parameter is missing!")

    game = db.get_game_by_id(request.db_session, id)
    updated_game = dict()

    if is_closed is not None:
        updated_game['is_closed'] = is_closed

    if score is not None and score > game.score:
        updated_game['score'] = score
        if top_scorer is not None:
            updated_game['top_scorer'] = top_scorer

    if dpp is not None:
        updated_game['dpp'] = dpp

    if ec is not None:
        updated_game['ec'] = ec

    if el is not None:
        updated_game['el'] = el

    if nd is not None:
        updated_game['nd'] = nd

    if ned is not None:
        updated_game['ned'] = ned

    if graph_json is not None:
        layout_id = game.layout_id
        graph_id = game.graph_id

        layout = GraphSpace.get_graph_layout(
            layout_id=layout_id, graph_id=graph_id)
        layout.set_positions_json(graph_json)
        GraphSpace.update_graph_layout(layout, graph_id=graph_id)

    if graph_image is not None:
        graph_image = graph_image.replace("data:image/png;base64,", "", 1)
        graph_image.replace(' ', '+')
        filename = os.path.join(BASE_DIR, 'static', 'img',
                                'graphs', str(id) + ".png")
        fh = open(filename, "wb+")
        fh.write(base64.b64decode(graph_image))
        fh.close()

    return db.update_game(request.db_session, id=id, updated_game=updated_game)


def get_task_by_id(request, id):
    return db.get_task_by_id(request.db_session, id)


def get_task_by_worker_id_assignment_id(request, worker_id, assignment_id):
    return db.get_task_by_worker_id_assignment_id(request.db_session, worker_id, assignment_id)


def add_task(request, game_id, type, mode, steps_json, actions, graph_json, score, bonus, worker_id, assignment_id):
    bonus_token = str(encrypt(settings.MTURK_BONUS_TOKEN, '%s:%s:%s:%s' %
                              (game_id, worker_id, assignment_id, bonus)).decode('utf-8'))
    return db.add_task(request.db_session, game_id, type, mode, steps_json, actions, graph_json, score, bonus, bonus_token, worker_id, assignment_id)


def encrypt(key, plaintext):
    cipher = XOR.new(key)
    return base64.b64encode(cipher.encrypt(plaintext))


def decrypt(key, ciphertext):
    cipher = XOR.new(key)
    return cipher.decrypt(base64.b64decode(ciphertext))


def find_tasks(request, game_id=None, worker_id=None, limit=30, offset=0, order='desc', sort='id'):
    sort_attr = getattr(db.Task, sort if sort is not None else 'id')
    order_by = getattr(db, order if order is not None else 'desc')(sort_attr)

    total, tasks_list = db.get_tasks(request.db_session,
                                     game_id=game_id,
                                     worker_id=worker_id,
                                     limit=limit,
                                     offset=offset,
                                     order_by=order_by)

    return total, tasks_list


def count_worker_tasks(request, worker_id=None, bonus=0):
    return db.count_worker_tasks(request.db_session,
                                 worker_id=worker_id,
                                 bonus=bonus)


def find_tutorials(request, game_id=None, worker_id=None, assignment_id=None, limit=100, offset=0):
    total, tutorials_list = db.get_tutorials(request.db_session,
                                             game_id=game_id,
                                             worker_id=worker_id,
                                             assignment_id=assignment_id,
                                             limit=limit,
                                             offset=offset)

    return total, tutorials_list


def add_tutorial(request, game_id, worker_id, assignment_id):
    return db.add_tutorial(request.db_session, game_id, worker_id, assignment_id)


def get_game_to_user(request, game_id, user_id=None):
    if user_id is None:
        user_email = get_request_user(request)
        user = users.get_user(request, user_email) if user_email is not None else None
        user_id = user.id if user else None

    if user_id:
        return db.get_game_to_user(request.db_session, game_id, user_id)
    else:
        return db.get_game_to_user(request.db_session, game_id, user_id=0)

def add_game_to_user(request, game_id, user_id=None):

    if user_id is None:
        user_email = get_request_user(request)
        user = users.get_user(request, user_email) if user_email is not None else None
        if user is None:
            user_id = 0
            user_email = 'Anonymous'
        else:
            user_id = user.id
    else:
        user = users.get_user_by_id(request, user_id)
        user_email = user.email

    game = db.get_game_by_id(request.db_session, game_id)
    L = GraphSpace.get_graph_layout(layout_id=game.layout_id, graph_id=game.graph_id)
    L.set_name('best_layout_by_%s' % user_email)
    L.set_is_shared(1)
    
    layout = GraphSpace.get_graph_layout(layout_name=L.name, graph_id=game.graph_id)
    if layout is None:
        layout = GraphSpace.post_graph_layout(L, graph_id=game.graph_id)
    return db.add_game_to_user(request.db_session, game_id, user_id, game.score, layout.id)


def get_top_scorers_by_game_id(request, game_id, limit=20, offset=0):
    sort_attr = getattr(db.GameToUser, 'topscore')
    order_by = getattr(db, 'desc')(sort_attr)
    total, users_list = db.get_game_to_users(request.db_session,
                                      game_id=game_id,
                                      limit=limit,
                                      offset=offset,
                                      order_by=order_by)

    return total, users_list



def update_game_to_user_topscore(request, game_id, user_id=None, score=None, graph_json=None):

    game_to_user = get_game_to_user(request, game_id, user_id)

    if game_to_user:
        user_id = game_to_user.user_id

        if score > game_to_user.topscore:
            updated_game_to_user = dict()
            updated_game_to_user['topscore'] = score

            if graph_json is not None:
                game = db.get_game_by_id(request.db_session, game_id)
                layout_id = game.layout_id
                graph_id = game.graph_id

                layout = GraphSpace.get_graph_layout(
                    layout_id=layout_id, graph_id=graph_id)

                layout.set_positions_json(graph_json)

                GraphSpace.update_graph_layout(layout, graph_id=graph_id)

        return db.update_game_to_user(request.db_session,  game_id=game_id, user_id=user_id, updated_game_to_user=updated_game_to_user)
    else:
        return add_game_to_user(request, game_id)
