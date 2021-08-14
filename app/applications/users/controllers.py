import bcrypt

from django.conf import settings
from django.core.mail import send_mail

# import applications.graphs as graphs
import applications.users.dal as db
from flud.exceptions import BadRequest, ErrorCodes
from flud.utils import generate_uid

# import the logging library
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)


# ================== USER CONTROLLERS =======================

def check_password(hashed_pw, passwd_to_check):

    if isinstance(passwd_to_check, str):
        passwd_to_check = bytes(passwd_to_check, 'utf-8')
    hashed_pw = bytes(hashed_pw, 'utf8')
    return bcrypt.hashpw(passwd_to_check, hashed_pw) == hashed_pw


def authenticate_user(request, username=None, password=None):

    # check the username/password and return a User
    user = db.get_user(request.db_session, username)

    if user:
        hashed_pw = user.password

        # check password. if the password matches, return a
        # User object with associated information
        if check_password(user.password, password):
            return {
                'id': user.id,
                'user_id': user.email,
                'password': user.password,
                'admin': user.is_admin
            }
    else:
        return None


def update_user(request, user_id, email=None, password=None, is_admin=None):
    user = {}
    if email is not None:
        user['email'] = email
    if password is not None:
        user['password'] = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    if is_admin is not None:
        user['is_admin'] = is_admin

    return db.update_user(request.db_session, id=user_id, updated_user=user)


def get_user(request, email):
    return db.get_user(request.db_session, email) if email is not None else None


def get_user_by_id(request, id):
    return db.get_user(request.db_session, id) if id is not None else None

def register(request, username=None, password=None):
    if db.get_user(request.db_session, username):
        raise BadRequest(request, error_code=ErrorCodes.Validation.UserAlreadyExists, args=username)

    return add_user(request, email=username, password=password)


def add_user(request, email=None, password="graphspace_public_user", is_admin=0):
    """
	Add a new user. If email and password is not passed, it will create a user with default values.
	By default a user has no admin access.
	:param db_session: Database session.
	:param email: User ID of the user. Default value is dynamically generated user id.
	:param password: Password of the user. Default value is "public".
	:param admin: 1 if user has admin access else 0. Default value is 0.
	:return: User

	Notes
	-----

	Error explained at https://stackoverflow.com/questions/34548846/flask-bcrypt-valueerror-invalid-salt

	Solution given at https://stackoverflow.com/questions/36057308/bcrypt-how-to-store-salt-with-python3 ( BCrypt. How to store salt with python3?)

	"""

    if isinstance(password, str):
        password = bytes(password, 'utf-8')
    hashed_pw = str(bcrypt.hashpw(password, bcrypt.gensalt()), 'utf8')

    return db.add_user(request.db_session, email=email,
                       password=hashed_pw, is_admin=is_admin)


def get_password_reset_by_code(request, code):
    return db.get_password_reset_by_code(request.db_session, code)


def delete_password_reset_code(request, id):
    return db.delete_password_reset(request.db_session, id)


def add_user_to_password_reset(request, email):
    if get_user(request, email) is not None:
        password_reset_code = db.get_password_reset_by_email(request.db_session, email)
        if password_reset_code is not None:
            password_reset_code.code = generate_uid()
            password_reset_code = db.update_password_reset(request.db_session, password_reset_code.id,
                                                           password_reset_code.serialize())
        else:
            password_reset_code = db.add_password_reset(request.db_session, email)
    else:
        password_reset_code = None
    return password_reset_code


def send_password_reset_email(request, password_reset_code):
    # Construct email message
    mail_title = 'Password Reset Information for Flud'
    message = 'Please go to the following url to reset your password: ' + settings.URL_PATH + 'reset_password/?code=' + password_reset_code.code
    email_from = "Flud Admin"

    return send_mail(mail_title, message, email_from, [password_reset_code.email], fail_silently=False)
