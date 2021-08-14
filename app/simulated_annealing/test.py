import json
import networkx as nx
from anneal import SimAnneal
# import matplotlib.pyplot as plt

weights = {
    "dpp": 400,
    "nodedistribution": 1,
    "edgelength": 1,
    "edgecrossings": 3,
    "nodeedgedistance": 1
}

with open('test.json') as json_data:
    graph_json = json.load(json_data)
    G = nx.DiGraph()
    for node in graph_json['elements']['nodes']:
        if 'ignore' not in node.get('classes', ''):
            attr = {
                'x': node['position']['x'],
                'y': node['position']['y'],
                'shape': node['data']['shape'],
                'label': node['data']['label'].split(',')[0]
            }

            G.add_node(node['data']['id'], **attr)

    for edge in graph_json['elements']['edges']:
        if 'ignore' not in edge.get('classes', ''):
            attr = {
                'directed': edge['data']['directed'] == 'true'
            }
            G.add_edge(edge['data']['source'],
                       edge['data']['target'], **attr)

    sa = SimAnneal(G, weights,
                   stopping_iter=2,
                   initial_temperature=100,
                   initial_radius=125,
                   min_edge_length=300,
                   min_flow_angle=15,
                   stopping_runs=1)
    sa.simulate()

    # plt.plot(x, y)
    # plt.savefig('test.pdf')

    with open('data.json', 'w') as outfile:
        json.dump(sa.steps, outfile)
