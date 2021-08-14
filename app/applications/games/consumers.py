# games/consumers.py
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json

class LeaderboardConsumer(WebsocketConsumer):
    def connect(self):
        self.game_id = self.scope['url_route']['kwargs']['game_id']
        self.room_group_name = 'chat_%s' % self.game_id

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive topscore from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        topscore = text_data_json['topscore']
        player = text_data_json['player']

        # Send topscore to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'update_topscore',
                'topscore': topscore,
                'player': player
            }
        )

    # Receive topscore from room group
    def update_topscore(self, event):
        topscore = event['topscore']
        player = event['player']

        # Send topscore to WebSocket
        self.send(text_data=json.dumps({
            'topscore': topscore,
            'player': player
        }))
