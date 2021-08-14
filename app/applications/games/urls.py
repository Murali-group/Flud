from django.conf.urls import url
from applications.games import views

urlpatterns = [

    ##################### GAME VIEWS ############################
    url(r'^error/$', views.error_page, name='error_page'),

    # Crowd
    url(r'^crowdgame/$', views.crowd_page, name='crowd_page'),
    # url(r'^crowd/$', views.crowdtutorials_page, name='crowdtutorials_page'),
    url(r'^crowd/(?P<game_id>.+)$', views.crowdtutorials_page,
        name='crowdtutorials_page'),

    url(r'^mturk/(?P<game_id>.+)$', views.mturktutorials_page,
        name='mturktutorials_page'),

    url(r'^tutorial/(?P<game_id>.+)$', views.publictutorials_page,
        name='publictutorials_page'),

    url(r'^tutorial/$', views.publictutorials_page,
        name='publictutorials_page'),

    # Games
    url(r'^tasks/(?P<task_id>.+)$', views.task_page, name='task_page'),
    url(r'^games/$', views.game_selection_page, name='game_selection_page'),
    url(r'^games/(?P<game_id>[^/]+)$', views.game_page, name='game_page'),
    url(r'^games/(?P<game_id>[^/]+)/leaderboard$',
        views.leaderboard_page, name='leaderboard_page'),

    # Tutorial
    url(r'^tutorial/(?P<tut_id>.+)$', views.tutorial_page, name='tutorial'),

    # Analysis
    url(r'^analysis/game/(?P<game_id>.+)$',
        views.game_analysis_page, name='game_analysis_page'),

    ##################### AJAX APIs Endpoints ####################
    url(r'^api/v1/games/$', views.games_rest_api, name='games_rest_api'),

    url(r'^api/v1/tasks/$', views.tasks_rest_api, name='tasks_rest_api'),

    url(r'^ajax/games/(?P<game_id>[^/]+)/save/$',
        views.save_game_ajax_api, name='save_game_ajax_api'),
    url(r'^ajax/games/(?P<game_id>[^/]+)/score/$',
        views.get_score_ajax_api, name='get_score_ajax_api'),
    url(r'^ajax/games/(?P<game_id>[^/]+)/finish/$',
        views.finish_game_ajax_api, name='finish_game_ajax_api'),

    url(r'^ajax/tasks/$', views.tasks_ajax_api, name='tasks_ajax_api'),

    url(r'^ajax/tutorials/$', views.tutorials_ajax_api, name='tutorials_ajax_api'),
]
