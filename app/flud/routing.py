# from channels.routing import route
# from applications.games.consumers import ws_connect, ws_disconnect

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import applications.games.routing

channel_routing = [
    # route('websocket.connect', ws_connect),
    # route('websocket.disconnect', ws_disconnect),
]

from flud.database import *
from django.conf import settings
settings.db = Database()

application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter(
            applications.games.routing.websocket_urlpatterns
        )
    ),
})
