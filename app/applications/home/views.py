import requests
import json
from applications.users.forms import RegisterForm
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
import applications.users.controllers as users
from django.template import RequestContext
from flud.utils import *
from flud.exceptions import *


def home_page(request):
    """
    Wrapper view function for the following pages:
        /
        /index
    Parameters
    ----------
    request : HTTP Request
    Returns
    -------
    response : HTML Page Response
        Rendered home page in HTML.
    Raises
    ------
    MethodNotAllowed: If a user tries to send requests other than GET i.e., POST, PUT or UPDATE.
    Notes
    ------
    """
    context = RequestContext(
        request)  # Checkout base.py file to see what context processors are being applied here.

    if 'GET' == request.method:
        # if the user is logged in go to an alternate page
        # Handle GET request to index page.
        return render(request, 'home/index.html', {'name': "home"})
    else:
        # Handle other type of request methods like POST, PUT, UPDATE.
        raise MethodNotAllowed(request)


def help_page(request):
    """
    Wrapper view function for the following pages:
        /help
    Parameters
    ----------
    request : HTTP Request
    Returns
    -------
    response : HTML Page Response
        Rendered help page in HTML.
    Raises
    ------
    MethodNotAllowed: If a user tries to send requests other than GET i.e., POST, PUT or UPDATE.
    Notes
    ------
    """
    context = RequestContext(
        request)  # Checkout base.py file to see what context processors are being applied here.

    if 'GET' == request.method:
        # Handle GET request to index page.
        return render(request, 'help/index.html', context)
    else:
        # Handle other type of request methods like POST, PUT, UPDATE.
        raise MethodNotAllowed(request)


def about_us_page(request):
    """
    Wrapper view function for the following pages:
        /about_us
    Parameters
    ----------
    request : HTTP Request
    Returns
    -------
    response : HTML Page Response
        Rendered about us page in HTML.
    Raises
    ------
    MethodNotAllowed: If a user tries to send requests other than GET i.e., POST, PUT or UPDATE.
    Notes
    ------
    """
    context = RequestContext(
        request)  # Checkout base.py file to see what context processors are being applied here.

    if 'GET' == request.method:
        return render(request, 'about_us/index.html',
                      {'context': context, 'name': 'about_us'})  # Handle GET request to index page.
    else:
        # Handle other type of request methods like POST, PUT, UPDATE.
        raise MethodNotAllowed(request)


def forgot_password_page(request):
    """
    Wrapper view function for the following pages:
        /forgot_password
    Parameters
    ----------
    request : HTTP Request
    Returns
    -------
    response : HTML Page Response
        Rendered forgot password page in HTML.
    Raises
    ------
    MethodNotAllowed: If a user tries to send requests other than GET i.e., POST, PUT or UPDATE.
    Notes
    ------
    """
    context = RequestContext(
        request)  # Checkout base.py file to see what context processors are being applied here.

    if 'GET' == request.method:
        return render(request, 'forgot_password/index.html',
                      {'context': context, 'name': 'forgot_password'})  # Handle GET request to forgot password page.
    elif 'POST' == request.method:
        password_reset_code = users.add_user_to_password_reset(
            request, email=request.POST.get('forgot_email', None))

        if password_reset_code is not None:
            users.send_password_reset_email(request, password_reset_code)
            context["success_message"] = "Email has been sent!"
        else:
            context["error_message"] = "Email does not exist!"
        return render(request, 'forgot_password/index.html',
                      {'context': context, 'name': 'forgot_password'})  # Handle POST request to forgot password page.
    else:
        # Handle other type of request methods like PUT, UPDATE.
        raise MethodNotAllowed(request)


def reset_password_page(request):
    """
    Wrapper view function for the following pages:
        /reset_password
    Parameters
    ----------
    request : HTTP Request
    Returns
    -------
    response : HTML Page Response
        Rendered reset password page in HTML.
    Raises
    ------
    MethodNotAllowed: If a user tries to send requests other than GET and POST i.e. PUT or UPDATE.
    Notes
    ------
    """
    context = RequestContext(
        request)  # Checkout base.py file to see what context processors are being applied here.

    if 'GET' == request.method:
        password_reset_code = users.get_password_reset_by_code(
            request, request.GET.get('code', None))
        if password_reset_code is None:
            context['error_message'] = "This password reset link is outdated. Please try resetting your password again."
        else:
            context['email'] = password_reset_code.email
        return render(request, 'reset_password/index.html',
                      {'context': context, 'name': 'reset_password'})  # Handle GET request to index page.
    elif 'POST' == request.method:
        password_reset_code = users.get_password_reset_by_code(
            request, request.GET.get('code', None))

        if password_reset_code is not None:
            users.update_user(request, password_reset_code.user.id,
                              password=request.POST['password'])
            context["success_message"] = "Password updated for " + \
                request.POST['reset_email']
            context['email'] = password_reset_code.email
            users.delete_password_reset_code(request, password_reset_code.id)
        else:
            context['error_message'] = "This password reset link is outdated. Please try resetting your password again."

        return render(request, 'reset_password/index.html',
                      {'context': context, 'name': 'reset_password'})  # Handle POST request to forgot password page.
    else:
        # Handle other type of request methods like PUT, UPDATE.
        raise MethodNotAllowed(request)


def login(request):
    """
        Handles login (POST) request.
        :param request: HTTP Request
    """
    if 'POST' == request.method:
        request_body = json.loads(((request.body).decode('utf-8')))
        user = users.authenticate_user(
            request, username=request_body['user_id'], password=request_body['pw'])

        if user is not None:
            request.session['uid'] = user['user_id']
            request.session['admin'] = user['admin']

            response = {}
            response["success"] = 'true'
            response["uid"] = user['user_id']
            response["message"] = '%s, Welcome to GraphSpace!' % user['user_id']

            return HttpResponse(json.dumps(response), content_type="application/json", status=200)
        else:
            raise ValidationError(
                request, ErrorCodes.Validation.UserPasswordMisMatch)
    else:
        # Handle other type of request methods like GET, PUT, UPDATE.
        raise MethodNotAllowed(request)


def ajax_login(request):
    """
    DEPRECATED -- Handles ajax login requests
    :param request:
    :return:
    """
    if 'POST' == request.method:
        request_body = json.loads(((request.body).decode('utf-8')))
        user = users.authenticate_user(
            request, username=request_body['user_id'], password=request_body['pw'])

        if user is not None:
            request.session['uid'] = user['user_id']
            request.session['admin'] = user['admin']
            # Need to return a json indicating success
            return HttpResponse(
                json.dumps(json_success_response(
                    200, message="%s, Thank you for logging in!" % user['user_id'])),
                content_type="application/json")
        else:
            # Need to return a json that declares an error
            return HttpResponse(
                json.dumps(json_error_response(500, error="User, %s, Not Found" % request.session['uid'])), content_type="application/json")


def register(request):
    """
        Register a new user.
        :param request: HTTP POST Request containing:
        {"user_id": <user_id>, "password": <password>}
    """

    if 'POST' == request.method:
        request_body = json.loads(((request.body).decode('utf-8')))
        if 'user_id' in request_body and 'password' in request_body:
            # RegisterForm is bound to POST data
            register_form = RegisterForm(request_body)
            if register_form.is_valid():
                user = users.register(request, username=register_form.cleaned_data['user_id'],
                                      password=register_form.cleaned_data['password'])
                if user is not None:
                    request.session['uid'] = user.email
                    request.session['admin'] = user.is_admin

            return HttpResponse(json.dumps({
                'uid': user.email,
                'admin': user.is_admin
            }), content_type="application/json", status=200)
        else:
            raise BadRequest(request)
    else:
        # Handle other type of request methods like GET, PUT, UPDATE.
        raise MethodNotAllowed(request)


def logout(request):
    """
        Log the user out and display logout page.
        :param request: HTTP GET Request
    """
    try:
        # Deletes the "Uid" key from the session currently being tracked by Django.
        del request.session['uid']
    except KeyError:
        pass  # TODO: should something be done here?

    return HttpResponseRedirect('/')  # redirect to the main page after logout.
