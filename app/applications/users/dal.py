from sqlalchemy import and_
from sqlalchemy.orm import joinedload
from sqlalchemy.sql import asc, desc

from django.utils.datetime_safe import datetime
from flud.utils import generate_uid
from flud.wrappers import with_session
from applications.users.models import *


# TODO: Add documentation about exception raised.


@with_session
def add_user(db_session, email, password, is_admin):
    """
	Add a new user.
	:param db_session: Database session.
	:param email: User ID of the user.
	:param password: Password of the user.
	:param admin: 1 if user has admin access else 0.
	:return: User
	"""
    user = User(email=email, password=password, is_admin=is_admin)
    db_session.add(user)
    return user


@with_session
def get_user(db_session, email):
    """
	Get a user with given email.
	:param db_session: Database session.
	:param email: email of the user.
	:return: User if email exists else None.
	"""
    return db_session.query(User).filter(User.email == email).one_or_none()


@with_session
def get_user_by_id(db_session, id):
    """
	Get a user with given email.
	:param db_session: Database session.
	:param id: id of the user.
	:return: User if email exists else None.
	"""
    return db_session.query(User).filter(User.id == id).one_or_none()


@with_session
def update_user(db_session, id, updated_user):
    """
	Update the user data with given id with the given updated user data.
	:param db_session: Database session.
	:param id: User ID of the user.
	:param updated_user: Updated user data. Data is stored in dictionary format where keys store the column names and values store the updated value.
	:return: User
	"""
    user = db_session.query(User).filter(User.id == id).one_or_none()
    for (key, value) in updated_user.items():
        setattr(user, key, value)
    return user


@with_session
def delete_user(db_session, email):
    """
	:param db_session: Database session.
	:param email: User ID of the user.
	:return: None
	"""
    user = db_session.query(User).filter(User.email == email)
    db_session.delete(user)
    return


@with_session
def add_password_reset(db_session, email):
    """
	Add a password reset entry for given user id.
	'code' and 'created' column values are generated programmatically. Their values cannot be set by a user.
	:param db_session: Database session.
	:param email: User ID for which password reset row will be generated.
	:return: None
	"""
    password_reset = PasswordResetCode(email=email, code=generate_uid())
    db_session.add(password_reset)
    return password_reset


@with_session
def get_password_reset_by_email(db_session, email):
    """
	:param db_session: Database session.
	:param email: User Email
	:return: PasswordReset if email exists else None
	"""
    return db_session.query(PasswordResetCode).filter(PasswordResetCode.email == email).one_or_none()


@with_session
def get_password_reset_by_code(db_session, code):
    """
	:param db_session: Database session.
	:param code: PasswordReset code
	:return: PasswordReset if email exists else None
	"""
    return db_session.query(PasswordResetCode).filter(PasswordResetCode.code == code).one_or_none()


@with_session
def update_password_reset(db_session, id, updated_password_reset):
    """
	:param db_session: Database session.
	:param id: primary key in password_reset table.
	:param updated_password_reset: updated password_reset row.
	:return: None
	"""
    password_reset = db_session.query(PasswordResetCode).filter(PasswordResetCode.id == id).one_or_none()
    for (key, value) in updated_password_reset.items():
        setattr(password_reset, key, value)
    return password_reset


@with_session
def delete_password_reset(db_session, id):
    """
	:param db_session: Database session.
	:param id: primary key in password_reset table.
	:return: None
	"""
    password_reset = db_session.query(PasswordResetCode).filter(PasswordResetCode.id == id).one_or_none()
    db_session.delete(password_reset)
    return
