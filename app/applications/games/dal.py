from sqlalchemy import or_, desc, asc
from applications.games.models import *
from flud.wrappers import with_session
from sqlalchemy.sql import func
from django.utils.datetime_safe import datetime



@with_session
def add_game(db_session, name, graph_id, layout_id, top_scorer, score, is_closed, num_steps, num_workers, type):
    game = Game(name=name,
                graph_id=graph_id,
                layout_id=layout_id,
                top_scorer=top_scorer,
                score=score,
                is_closed=is_closed,
                num_steps=num_steps,
                num_workers=num_workers,
                type=type)
    db_session.add(game)
    return game


@with_session
def get_random_game(db_session):
    return db_session.query(Game).filter(Game.is_closed == False).order_by(func.random()).first()


@with_session
def get_game_by_id(db_session, id):
    return db_session.query(Game).filter(Game.id == id).one_or_none()


@with_session
def get_game_by_graph_id(db_session, graph_id):
    return db_session.query(Game).filter(Game.graph_id == graph_id).one_or_none()


@with_session
def find_games(db_session, owner_email=None, names=None, is_closed=None, limit=None, offset=None, order_by=desc(Game.updated_at)):
    query = db_session.query(Game)

    if owner_email is not None:
        query = query.filter(Game.owner_email == owner_email)

    if is_closed is not None:
        query = query.filter(Game.is_closed == is_closed)

    if names is not None:
        names_filter = [Game.name.ilike(name) for name in names]
        query = query.filter(or_(*names_filter))

    total = query.count()

    if order_by is not None:
        query = query.order_by(order_by)

    if offset is not None and limit is not None:
        query = query.limit(limit).offset(offset)

    return total, query.all()


@with_session
def update_game(db_session, id, updated_game):
    game = db_session.query(Game).filter(Game.id == id).one_or_none()
    for (key, value) in updated_game.items():
        setattr(game, key, value)

    game.updated_at = datetime.now()
    return game


@with_session
def delete_game(db_session, id):
    game = db_session.query(Game).filter(Game.id == id).one_or_none()
    db_session.delete(game)
    return game


"""
TASK table DAL operations
"""


@with_session
def get_task_by_id(db_session, id):
    return db_session.query(Task).filter(Task.id == id).one_or_none()


@with_session
def get_task_by_worker_id_assignment_id(db_session, worker_id, assignment_id):
    return db_session.query(Task).filter(Task.worker_id == worker_id).filter(Task.assignment_id == assignment_id).one_or_none()


@with_session
def get_tasks(db_session, game_id=None, worker_id=None, type=None, limit=100, offset=0, order_by=desc(Task.updated_at)):
    query = db_session.query(Task)

    if game_id is not None:
        query = query.filter(Task.game_id == game_id)

    if worker_id is not None:
        query = query.filter(Task.worker_id == worker_id)

    if type is not None:
        query = query.filter(Task.type == type)

    total = query.count()

    if order_by is not None:
        query = query.order_by(order_by)

    if offset is not None and limit is not None:
        query = query.limit(limit).offset(offset)

    return total, query.all()


@with_session
def count_worker_tasks(db_session, worker_id=None, bonus=0):
    query = db_session.query(Task)

    if worker_id is not None:
        query = query.filter(Task.worker_id == worker_id)

    query = query.filter(Task.bonus > 0)

    return query.count()


@with_session
def add_task(db_session, game_id, type, mode, steps_json, actions,  graph_json, score, bonus, bonus_token,  worker_id, assignment_id):
    task = Task(game_id=game_id,
                type=type,
                mode=mode,
                steps_json=steps_json,
                actions=actions,
                graph_json=graph_json,
                score=score,
                bonus=bonus,
                bonus_token=bonus_token,
                worker_id=worker_id,
                assignment_id=assignment_id)
    db_session.add(task)
    return task


@with_session
def delete_task(db_session, id):
    task = db_session.query(Task).filter(Task.id == id).one_or_none()
    db_session.delete(task)
    return task


@with_session
def update_task(db_session, id, updated_task):
    task = db_session.query(Task).filter(Task.id == id).one_or_none()
    for (key, value) in updated_task.items():
        setattr(task, key, value)

    task.updated_at = datetime.now()
    return task


@with_session
def get_tutorials(db_session, game_id=None, worker_id=None, assignment_id=None, limit=100, offset=0, order_by=desc(Tutorial.id)):
    query = db_session.query(Tutorial)

    if game_id is not None:
        query = query.filter(Tutorial.game_id == game_id)

    if worker_id is not None:
        query = query.filter(Tutorial.worker_id == worker_id)

    if assignment_id is not None:
        query = query.filter(Tutorial.assignment_id == assignment_id)

    total = query.count()

    if order_by is not None:
        query = query.order_by(order_by)

    if offset is not None and limit is not None:
        query = query.limit(limit).offset(offset)

    return total, query.all()


@with_session
def add_tutorial(db_session, game_id, worker_id, assignment_id):
    tutorial = Tutorial(game_id=game_id,
                        worker_id=worker_id,
                        assignment_id=assignment_id)
    db_session.add(tutorial)
    return tutorial



@with_session
def get_game_to_users(db_session, game_id=None, limit=20, offset=0, order_by=desc(GameToUser.topscore)):
    query = db_session.query(GameToUser)

    if game_id is not None:
        query = query.filter(GameToUser.game_id == game_id)

    total = query.count()

    if order_by is not None:
        query = query.order_by(order_by)

    if offset is not None and limit is not None:
        query = query.limit(limit).offset(offset)

    return total, query.all()

@with_session
def add_game_to_user(db_session, game_id, user_id, topscore, layout_id):
    game_to_user = GameToUser(game_id=game_id,
                      user_id=user_id,
                      topscore=topscore,
                      layout_id=layout_id)
    db_session.add(game_to_user)
    return game_to_user


@with_session
def get_game_to_user(db_session, game_id, user_id):
    return db_session.query(GameToUser).filter(GameToUser.game_id == game_id).filter(GameToUser.user_id == user_id).one_or_none()

@with_session
def update_game_to_user(db_session, game_id, user_id, updated_game_to_user):
    game_to_user = db_session.query(GameToUser).filter(GameToUser.game_id == game_id).filter(GameToUser.user_id == user_id).one_or_none()
    for (key, value) in updated_game_to_user.items():
        setattr(game_to_user, key, value)

    game_to_user.updated_at = datetime.now()
    return game_to_user
