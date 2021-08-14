import applications.users as users
import applications.graphs as graphs
from flud.exceptions import UserNotAuthorized
from flud.utils import get_request_user


class UserRole:
    ADMIN = 3
    LOGGED_IN = 2
    LOGGED_OFF = 1 # When user is not logged in to GraphSpace.


def user_role(request):
    """
    Returns the user role for the user making the request.
    Parameters
    ----------
    request: HTTP request
    Returns
    -------
    Returns UserRole
    """
    user_email = get_request_user(request)
    user = users.controllers.get_user(request, user_email) if user_email is not None else None
    if user is None:
        return UserRole.LOGGED_OFF

    return UserRole.LOGGED_IN


def validate(request, permission, graph_id=None):
    """
    Validates if the user has the given permissions based on information like graph id, group id or layout id.
    Returns
    -------
    Nothing
    Raises
    -------
    UserNotAuthorized - if user doesnt have the given permission.
    """

    # TODO: Each application module should implement a validate method.
    # Then this validate method can plug into the implemented validate method to expose overall validation functionality for the project.
    if graph_id is not None:
        if user_role(request) is UserRole.LOGGED_OFF:
            raise UserNotAuthorized(request)
    return