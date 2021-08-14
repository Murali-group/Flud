from flud.settings.base import *

INSTALLED_APPS = [
    'channels',
    'analytical',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'applications.home',
    'applications.users',
    'applications.games',
    'django_cron'
]


CHANNEL_LAYERS = {
    'default': {
        'BACKEND': "channels_redis.core.RedisChannelLayer",
        'CONFIG': {
            'hosts': [('redis', 6379)],
        },
        # 'ROUTING': 'flud.routing.channel_routing',
    }
}

ASGI_APPLICATION = "flud.routing.application"
