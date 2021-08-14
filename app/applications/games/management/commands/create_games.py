from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
import datetime

GraphSpace = settings.GRAPHSPACE

GRAPHS = [32111, 32110, 32109]
# GRAPHS = [32111]


class Command(BaseCommand):
    help = 'Creates new games for Flud\'s demo setup'

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        for gid in GRAPHS:
            g = GraphSpace.get_graph(graph_id=gid)
            g.set_name('-'.join([g.name, datetime.datetime.now().strftime('%Y%m%d%H%M%S')]))
            g_copy = GraphSpace.post_graph(g)
            GraphSpace.share_graph(graph_id=g_copy.id, group_id=settings.GRAPHSPACE_FLUD_GROUP_ID)