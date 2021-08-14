from __future__ import unicode_literals
from applications.users.models import *
from applications.users.models import User
from django.conf import settings
from flud.mixins import *
from sqlalchemy import String, Numeric, Boolean

from sqlalchemy.ext.associationproxy import association_proxy

Base = settings.BASE


class Game(IDMixin, TimeStampMixin, Base):
    __tablename__ = 'game'

    name = Column(String, nullable=True)
    graph_id = Column(Integer, nullable=False, unique=True)
    layout_id = Column(Integer, nullable=False)
    top_scorer = Column(String, nullable=True)
    score = Column(Numeric, nullable=False, default=0)

    dpp = Column(Numeric, nullable=False, default=0)
    ec = Column(Numeric, nullable=False, default=0)
    el = Column(Numeric, nullable=False, default=0)
    nd = Column(Numeric, nullable=False, default=0)
    ned = Column(Numeric, nullable=False, default=0)

    # when a game is closed it cannot be assigned to a user
    is_closed = Column(Boolean, nullable=False, default=False)
    num_steps = Column(Integer, nullable=False,
                       default=settings.DEFAULT_SA_CROWD_STEPS)  # to restrict users from doing manipulations beyond a limit
    num_workers = Column(Integer, nullable=False,
                         default=settings.DEFAULT_SA_NUM_WORKER)  # to restrict number of crowd workers working on a single game
    type = Column(String, nullable=False,
                  default=settings.DEFAULT_FLUD_GAME_TYPE)  # type of game

    users = association_proxy('participating_users', 'user')

    constraints = ()
    indices = ()

    @declared_attr
    def __table_args__(cls):
        args = cls.constraints + cls.indices
        return args

    def serialize(cls):
        return {
            'id': cls.id,
            'name': cls.name,
            'graph_id': cls.graph_id,
            'layout_id': cls.layout_id,
            'top_scorer': cls.top_scorer,
            'score': float(cls.score),
            'dpp': float(cls.dpp),
            'el': float(cls.el),
            'ec': float(cls.ec),
            'nd': float(cls.nd),
            'ned': float(cls.ned),
            'is_closed': cls.is_closed,
            'num_steps': cls.num_steps,
            'num_workers': cls.num_workers,
            'type': cls.type,
            'created_at': cls.created_at.isoformat(),
            'updated_at': cls.updated_at.isoformat()
        }


class GameToUser(TimeStampMixin, Base):
    """
    The class representing the schema of the game_to_user table.
    """
    __tablename__ = "game_to_user"

    user_id = Column(Integer, ForeignKey('user.id', ondelete="CASCADE", onupdate="CASCADE"), primary_key=True)
    game_id = Column(Integer, ForeignKey('game.id', ondelete="CASCADE", onupdate="CASCADE"), primary_key=True)

    graph = relationship("Game", backref=backref("participating_users", cascade="all, delete-orphan"))
    user = relationship("User", backref=backref("played_games", cascade="all, delete-orphan"))

    topscore = Column(Numeric, nullable=False, default=0)
    layout_id = Column(Integer, nullable=False)

    indices = (Index('game2user_idx_game_id_user_id', 'game_id', 'user_id'),)

    constraints = ()
    indices = ()


    @declared_attr
    def __table_args__(cls):
        args = tuple() + cls.constraints + cls.indices
        return args

    def serialize(cls):
        return {
            'game_id': cls.game_id,
            'user_id': cls.user_id,
            'user': cls.user.serialize(),
            'topscore': int(cls.topscore),
            'layout_id': cls.layout_id,
            'created_at': cls.created_at.isoformat(),
            'updated_at': cls.updated_at.isoformat()
        }


class Task(IDMixin, TimeStampMixin, Base):
    __tablename__ = 'task'

    game_id = Column(Integer, nullable=False)
    steps_json = Column(String, nullable=False)
    actions = Column(String, nullable=False)
    type = Column(String, nullable=False)
    mode = Column(String, nullable=False)
    graph_json = Column(String, nullable=False)
    score = Column(Numeric, nullable=False, default=0)
    bonus = Column(Numeric, nullable=False, default=0)
    bonus_token = Column(String, nullable=False)
    worker_id = Column(String, nullable=False)
    assignment_id = Column(String, nullable=False)

    constraints = ()
    indices = ()

    @declared_attr
    def __table_args__(cls):
        args = cls.constraints + cls.indices
        return args

    def serialize(cls):
        return {
            'id': cls.id,
            'game_id': cls.game_id,
            'type': cls.type,
            'mode': cls.mode,
            'worker_id': cls.worker_id,
            'assignment_id': cls.assignment_id,
            'steps_json': cls.steps_json,
            'actions': cls.actions,
            'graph_json': cls.graph_json,
            'score': float(cls.score),
            'bonus': float(cls.bonus),
            'bonus_token': cls.bonus_token,
            'created_at': cls.created_at.isoformat(),
            'updated_at': cls.updated_at.isoformat()
        }


class Tutorial(IDMixin, Base):
    __tablename__ = 'tutorial'

    game_id = Column(Integer, nullable=False)
    worker_id = Column(String, nullable=False)
    assignment_id = Column(String, nullable=False)

    constraints = ()
    indices = ()

    @declared_attr
    def __table_args__(cls):
        args = cls.constraints + cls.indices
        return args

    def serialize(cls):
        return {
            'id': cls.id,
            'game_id': cls.game_id,
            'worker_id': cls.worker_id,
            'assignment_id': cls.assignment_id
        }
