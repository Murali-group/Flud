from django.conf import settings
from django.db import models
import bcrypt
# from applications.games.models import GameSession

# Create your models here.

from sqlalchemy import String, ForeignKey, UniqueConstraint
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import relationship, backref

from flud.mixins import *

Base = settings.BASE


# =========================TABLE DEFINITIONS======================

class User(IDMixin, TimeStampMixin, Base):
    """
    The class representing the schema of the user table.
    :param email: Email ID of the user.
    :param password: Password of the user.
    :param admin: 1 if the user has admin access else 0.
    """
    __tablename__ = "user"

    email = Column(String, nullable=False, unique=True, index=True)
    password = Column(String, nullable=False)
    is_admin = Column(Integer, nullable=False)
    score = Column(Integer, nullable=False, default=0)

    password_reset_codes = relationship("PasswordResetCode", back_populates="user", cascade="all, delete-orphan")

    games = association_proxy('played_games', 'game')

    constraints = ()
    indices = ()


    @declared_attr
    def __table_args__(cls):
        args = tuple() + cls.constraints + cls.indices
        return args

    def serialize(cls):
        return {
            'id': cls.id,
            'email': cls.email,
            'score': cls.score,
            'created_at': cls.created_at.isoformat(),
            'updated_at': cls.updated_at.isoformat()
        }


class PasswordResetCode(IDMixin, TimeStampMixin, Base):
    __tablename__ = 'password_reset_code'

    email = Column(String, ForeignKey('user.email', ondelete="CASCADE", onupdate="CASCADE"), nullable=False, index=True)
    code = Column(String, nullable=False)
    user = relationship("User", back_populates="password_reset_codes", uselist=False)

    constraints = (UniqueConstraint('email', 'code', name='_password_reset_code_uc_email_code'),)
    indices = ()

    @declared_attr
    def __table_args__(cls):
        args = cls.constraints + cls.indices
        return args

    def serialize(cls):
        return {
            'id': cls.id,
            'email': cls.email,
            'code': cls.code,
            'created_at': cls.created_at.isoformat(),
            'updated_at': cls.updated_at.isoformat()
        }
