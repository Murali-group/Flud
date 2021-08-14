"""flud URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin

from applications.home import views

urlpatterns = [
	url(r'^admin/', admin.site.urls),

	# Home Page
	url(r'^$', views.home_page, name='home'),
	url(r'^index/$', views.home_page, name='home'),

	##################### Index VIEWS ############################
	url(r'^login/$', views.login, name='login'),
	url(r'^register/$', views.register, name='register'),
	url(r'^logout/$', views.logout, name='logout'),

	url(r'^help/$', views.help_page, name='help'),
	url(r'^about_us/$', views.about_us_page, name='about_us'),
	url(r'^forgot_password/$', views.forgot_password_page, name='forgot_password'),
	url(r'^reset_password/$', views.reset_password_page, name='reset_password'),


    ## Need to handle ajax login in order to allow anons to play the game
    url(r'^ajaxlogin/$', views.login, name='ajax_login'),
]
