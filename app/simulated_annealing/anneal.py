import math
import random
import time
import networkx as nx
import os
import pickle
from django.conf import settings

Graphspace = settings.GRAPHSPACE

def degrees(x1, y1, x2, y2):
    return math.degrees(math.atan2(float(y2 - y1), float(x2 - x1)))


def energyscores(graph_json, positions, weights,
                 h=6000, w=5000, min_flow_angle=15, initial_radius=125, min_edge_length=300, max_dpp=None):
    G = nx.DiGraph()
    bounding_box = {
        'x1': 0,
        'x2': w,
        'y1': 0,
        'y2': h,
        'w': w,
        'h': h
    }

    for node in graph_json['elements']['nodes']:
        if 'ignore' not in node.get('classes', ''):
            attr = {
                'x': positions[node['data']['id']]['x'],
                'y': positions[node['data']['id']]['y'],
                'shape': node['data']['shape'],
                'label': node['data']['label'].split(',')[0]
            }

            G.add_node(node['data']['id'], attr)

    for edge in graph_json['elements']['edges']:
        if 'ignore' not in edge.get('classes', ''):
            attr = {
                'directed': edge['data']['directed'] == 'true'
            }
            G.add_edge(edge['data']['source'], edge['data']['target'], attr)

    sa = SimAnneal(G, bounding_box['w'], bounding_box['h'], bounding_box['x1'],
                   bounding_box['x2'], bounding_box['y1'], bounding_box['y2'],
                   weights, stopping_iter=100, initial_temperature=1,
                   initial_radius=initial_radius, min_edge_length=min_edge_length, min_flow_angle=min_flow_angle, max_dpp=max_dpp)

    result = {
        'order': G.order(),
        'size': G.size(),
    }
    result.update(sa.energyscores(sa.initial_state))
    return result


class SimAnneal(object):
    def __init__(self, initial_state, weights,
                 initial_radius=75, initial_temperature=10, alpha=0.995,
                 stopping_temperature=0.00000001, stopping_iter=100000,
                 stopping_runs=20,
                 min_edge_length=100, min_dist=100, min_flow_angle=45,
                 max_dpp=None,
                 dir_name='salogs',
                 graph=None,
                 layout=None,
                 label='sa', logging_enabled=False):

        self.graph = graph
        self.layout = layout
        self.label = label
        self.logging_enabled = logging_enabled

        self.start_time = time.clock()
        self.weights = weights

        self.MIN_EDGE_LENGTH = min_edge_length
        # self.MIN_EDGE_LENGTH_COST = 40000
        self.MIN_EDGE_LENGTH_COST = 10000
        # self.MIN_EDGE_LENGTH_COST = 4500

        self.MIN_NODE_DIST = min_dist
        self.MIN_NODE_DIST_COST = 40000

        self.MIN_FLOW_ANGLE = min_flow_angle

        self.initial_temperature = 100
        self.T = initial_temperature * math.pow(alpha, 0)
        self.alpha = alpha
        self.stopping_temperature = stopping_temperature
        self.stopping_iter = stopping_iter
        self.stopping_runs = stopping_runs

        self.radius = initial_radius  # Start with initial radius value
        self.iteration = 1
        self.run = 1
        self.updates = 10 * initial_state.order()

        self.triangles = [n[0] for n in initial_state.nodes(
            data=True) if n[1]['shape'] == 'triangle']
        self.squares = [n[0] for n in initial_state.nodes(data=True)
                        if n[1]['shape'] == 'square' or n[1]['shape'] == 'rectangle']
        self.dppMem = {}
        self.max_dpp = max_dpp if max_dpp else self.maxDpp(initial_state)
        # print(self.max_dpp)
        # TODO: add code to take bounding box as parameterq
        # self.width = 3600  # 1080
        # self.height = 2500  # 789
        self.width = 5000
        self.height = 6000

        x1, x2, y1, y2, w, h = self.bounding_box(initial_state)

        self.x1 = x1  # -33.62935618633336
        self.x2 = x2  # 1118.7343681599452
        self.y1 = y1  # -4.477818404125706
        self.y2 = y2  # 837.3879024377391
        self.w = w  # 837.3879024377391
        self.h = h  # 837.3879024377391

        self.initial_state = initial_state
        self.current_state = initial_state
        self.best_state = initial_state
        self.current_energy = self.energy(self.current_state)
        self.initial_energy = self.current_energy
        self.best_energy = self.current_energy

        self.steps = [self.get_step(
            self.current_state, self.current_energy, self.subscores)]
        # self.energy_list = [self.current_energy]
        self.log = []
        self.iteration_logs = []
        # self.acceptance_curve = [[]]

        # print('Initial Temperature: %s' % self.initial_temperature)
        # print('Iterations: %s' % self.stopping_iter)
        # print('Updates: %s' % self.updates)
        # print('Initial Energy: %s' % self.initial_energy)

        self.dir_name = dir_name
        if self.logging_enabled:
            self.init_logdir(self.dir_name)

    def init_logdir(self, dir_name):
        if not os.path.isdir(dir_name):
            os.mkdir(dir_name)
        self.updates_filename = os.path.join(dir_name, 'updates.txt')
        self.iterations_filename = os.path.join(dir_name, 'iterations.txt')
        self.runs_filename = os.path.join(dir_name, 'runs.txt')
        self.parameters_filename = os.path.join(dir_name, 'parameters.txt')

        with open(self.parameters_filename, 'w') as f:
            f.write('label=%s\n' % self.label)
            f.write('initial_temperature=%s\n' % self.T)
            f.write('alpha=%s\n' % self.alpha)
            f.write('stopping_iter=%s\n' % self.stopping_iter)
            f.write('stopping_runs=%s\n' % self.stopping_runs)
            f.write('stopping_temperature=%s\n' % self.stopping_temperature)
            f.write('stopping_iter=%s\n' % self.stopping_iter)
            f.write('radius=%s\n' % self.radius)
            f.write('width=%s\n' % self.width)
            f.write('height=%s\n' % self.height)
            f.write('MIN_EDGE_LENGTH=%s\n' % self.MIN_EDGE_LENGTH)
            f.write('MIN_EDGE_LENGTH_COST=%s\n' % self.MIN_EDGE_LENGTH_COST)
            f.write('MIN_FLOW_ANGLE=%s\n' % self.MIN_FLOW_ANGLE)
            f.write('weights=%s\n' % self.weights)
            f.write('\n')

        with open(self.updates_filename, 'w') as f:
            f.write('\t'.join(['run_idx', 'iteration_idx', 'update_idx',
                               'temp', 'current_energy', 'candidate_energy',
                               'dpp', 'el', 'nd', 'ned', 'ec',
                               'prob_accept', 'is_accepted']))
            f.write('\n')

        with open(self.iterations_filename, 'w') as f:
            f.write('\t'.join(['run_idx', 'iteration_idx', 'time_taken',
                               'temp', 'factor', 'best_energy',
                               'improvement']))
            f.write('\n')

        with open(self.runs_filename, 'w') as f:
            f.write('\t'.join(['run_idx', 'time_taken', 'init_temp',
                               'best_energy', 'dpp', 'el', 'nd', 'ned', 'ec']))
            f.write('\n')
            f.write('\t'.join(map(str, [0, round(time.clock() - self.start_time, 2),
                                        self.initial_temperature,
                                        self.best_energy] + self.subscores)))
            f.write('\n')

    def energy(self, state):
        """ Objective value of a state """
        self.dist_matrix = self.to_dist_matrix(state)
        border_score = self.avg_border_distance(state)
        scores = [self.weights.get("dpp", 1) * self.normalized_dpp(state),
                  self.weights.get("edgelength", 1) *
                  self.normalized_avg_edge_length(state),
                  self.weights.get("nodedistribution", 1) *
                  self.node_distribution(state),
                  self.weights.get("nodeedgedistance", 1) *
                  self.normalized_avg_node_edge_distance(state),
                  self.weights.get("edgecrossings", 1) * self.normalized_edge_crossings(state)]
        # print(str([sum(scores) if border_score >
        #            0 else 0, round(border_score, 2), scores]))
        self.subscores = scores
        # print(str([sum(scores), scores]))
        return sum(scores) if border_score > 0 else 0
        # return sum(scores)  # if border_score > 0 else 0

    def energyscores(self, state):
        """ Objective value of a state """
        self.dist_matrix = self.to_dist_matrix(state)
        self.norm_dpp = self.normalized_dpp(state)
        self.norm_avg_edge_length = self.normalized_avg_edge_length(state)
        self.norm_node_distribution = self.node_distribution(state)
        self.norm_avg_node_edge_distance = self.normalized_avg_node_edge_distance(
            state)
        self.norm_edge_crossings = self.normalized_edge_crossings(state)

        scores = [self.weights.get("dpp", 1) * self.norm_dpp,
                  self.weights.get("edgelength", 1) *
                  self.norm_avg_edge_length,
                  self.weights.get("nodedistribution", 1) *
                  self.norm_node_distribution,
                  self.weights.get("nodeedgedistance", 1) *
                  self.norm_avg_node_edge_distance,
                  self.weights.get("edgecrossings", 1) * self.norm_edge_crossings]
        # print(str([sum(scores), scores]))
        return {
            'dpp': scores[0],
            'raw_dpp': self.raw_dpp,
            'norm_dpp': self.norm_dpp,
            'edge_length': scores[1],
            'raw_avg_edge_length': self.raw_avg_edge_length,
            'norm_avg_edge_length': self.norm_avg_edge_length,
            'node_dist': scores[2],
            'norm_node_distribution': self.norm_node_distribution,
            'raw_avg_node_distance': self.raw_avg_node_distance,
            'raw_avg_border_distance': self.raw_avg_border_distance,
            'node_edge_dist': scores[3],
            'norm_avg_node_edge_distance': self.norm_avg_node_edge_distance,
            'raw_avg_node_edge_distance': self.raw_avg_node_edge_distance,
            'crossings': scores[4],
            'norm_edge_crossings': self.norm_edge_crossings,
            'raw_crossings': self.raw_crossings,
            'totalscore': sum(scores)
        }

    def get_step(self, state, energy, subscores):
        return {
            'positions_json': self.get_positions_json(state),
            'scores': {
                'dpp': subscores[0],
                'edgelength': subscores[1],
                'nodedistribution': subscores[2],
                'nodeedgedistance': subscores[3],
                'edgecrossings': subscores[4]
            },
            'timestamp': int(time.time()) * 1000,
            'totalscore': energy
        }

    def get_positions_json(self, state):
        positions_json = {}
        for n in state.nodes():
            position = self.node_position(state, n)
            positions_json[n] = {
                'x': position[0],
                'y': position[1],
            }
        return positions_json

    def dpp(self, state):
        """ Number of downward pointing paths in the state """
        return self._count_downward_pointing_paths_from_triangles(state)

    def maxDpp(self, state):
        """ Number of simple paths in the state """
        return self._count_simple_paths_from_triangles(state)

    def _count_downward_pointing_paths_from_triangles(self, state):
        count = 0
        visited = {}
        self.dppMem = {}
        for triangle in self.triangles:
            count += self._count_downward_pointing_paths(
                state, triangle, visited)
        return count

    def _count_simple_paths_from_triangles(self, state):
        count = 0
        visited = {}
        for triangle in self.triangles:
            count += self._count_paths(state, triangle, visited)
        return count

    def _count_paths(self, state, node, visited):
        visited[node] = True
        if state.node[node]['shape'] == 'square' or state.node[node]['shape'] == 'rectangle':
            visited[node] = False
            return 1

        count = 0
        for e in state.out_edges(node):
            target = e[1]
            if (not visited.get(target, False)) and state[e[0]][e[1]]['directed']:
                count += self._count_paths(state, target, visited)

        visited[node] = False
        return count

    def _count_downward_pointing_paths(self, state, node, visited):
        visited[node] = True
        if node in self.dppMem:
            visited[node] = False
            return self.dppMem[node]

        if state.node[node]['shape'] == 'square' or state.node[node]['shape'] == 'rectangle':
            self.dppMem[node] = 1
            visited[node] = False
            return 1

        count = 0
        for e in state.out_edges(node):
            if (self._is_correct_angle(state, e) and not visited.get(e[1], False)):
                count += self._count_downward_pointing_paths(
                    state, e[1], visited)

        self.dppMem[node] = count
        visited[node] = False
        return count

    def _is_correct_angle(self, state, edge):
        # TODO: we are going to ignore paths with undirected edges because it might cause problems while computing the flow in case of horizontal and can cause computation errors
        if not state[edge[0]][edge[1]]['directed']:
            return False
        # return state.node[edge[0]]['y'] < state.node[edge[1]]['y']
        d = degrees(state.node[edge[0]]['x'], state.node[edge[0]]
                    ['y'], state.node[edge[1]]['x'], state.node[edge[1]]['y'])
        return d >= self.MIN_FLOW_ANGLE and d <= 180 - self.MIN_FLOW_ANGLE

    def normalized_dpp(self, state):
        """ Normalized score for downward pointing paths """
        self.raw_dpp = self.dpp(state)
        return round(math.pow(10, 4) * self.raw_dpp / self.max_dpp)

    def avg_edge_length(self, state):
        """
        Avg edge length

        Edge length between nodes n1, n2 = distance between center of nodes n1, n2 - diameter

        Corner cases:
        1. If edge length is negative, we assign a high edge cost (=self.MIN_EDGE_LENGTH_COST)
        2. If edge length is below a set min edge length threshold, we assign a high edge cost (=self.MIN_EDGE_LENGTH_COST)
        """
        l = 0
        for e in state.edges():
            edge_len = self.dist_matrix[e[0]][e[1]] - 2 * self.radius
            # we dont want algorithm to reduce the edge length beyond a limit.
            # Therefore we increase the edge len contribution to width of the canvas for that edge if edge is smaller than 100px.
            edge_len_contrib = self.MIN_EDGE_LENGTH_COST if edge_len < self.MIN_EDGE_LENGTH else edge_len
            l += edge_len_contrib

        self.raw_avg_edge_length = l / state.size()
        return self.raw_avg_edge_length

    def normalized_avg_edge_length(self, state):
        """ Normalized avg edge length """
        s = round(math.pow(10, 4) *
                  (1 - (self.avg_edge_length(state) / math.sqrt(self.width * self.width + self.height * self.height))))

        return max(min(s, math.pow(10, 4)), 0)

    def dist(self, coord1, coord2):
        """
        Euclidean distance
        """
        return math.sqrt(math.pow(coord1[0] - coord2[0], 2) + math.pow(coord1[1] - coord2[1], 2))

    def distSquared(self, coord1, coord2):
        """
        Euclidean distance
        """
        return math.pow(coord1[0] - coord2[0], 2) + math.pow(coord1[1] - coord2[1], 2)

    def dist_from_segment(self, p, v, w):
        l2 = self.distSquared(v, w)
        if (l2 == 0):
            return self.dist(p, v)
        t = ((p[0] - v[0]) * (w[0] - v[0]) +
             (p[1] - v[1]) * (w[1] - v[1])) / l2

        if (t < 0):
            return self.dist(p, v)
        if (t > 1):
            return self.dist(p, w)

        t = v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1])

        return math.sqrt((p[0] - t[0]) * (p[0] - t[0]) + (p[1] - t[1]) * (p[1] - t[1]))

    def node_position(self, state, node):
        return state.node[node]['x'], state.node[node]['y']

    def to_dist_matrix(self, state):
        mat = {}
        for n1 in state.nodes():
            mat[n1] = {}
            for n2 in state.nodes():
                mat[n1][n2] = self.dist(self.node_position(
                    state, n1), self.node_position(state, n2))
        return mat

    def avg_border_distance(self, state):
        """
        Avg border distance

        Distance of node n1 from border b = distance between center of nodes n1 and border b - radius

        Corner cases:
        1. If any border distance is negative, we set the border distance score to zero. We dont want any node to go outside the limits.
        """
        x1, x2, y1, y2, w, h = self.bounding_box(state)
        self.raw_avg_border_distance = 0

        if w <= self.width and h <= self.height:
            l = 0
            b = 0
            for node in state.nodes():
                xdist = min(state.node[node]['x'] - x1,
                            x2 - state.node[node]['x']) - self.radius
                ydist = min(state.node[node]['y'] - y1,
                            y2 - state.node[node]['y']) - self.radius
                if xdist < 0 or ydist < 0:
                    # If any border distance is negative, we set the border distance score to zero.
                    # We dont want any node to go outside the limits.
                    return 0
                l += (xdist / self.width + ydist / self.height) / 2
                b += (xdist + ydist) / 2
            self.raw_avg_border_distance = b / state.order()
            return l / state.order()
        else:
            return 0

    def normalized_border_distance(self, state):
        self.raw_avg_border_distance = self.avg_border_distance(state)
        return round(math.pow(10, 4) * self.raw_avg_border_distance)

    def node_distribution(self, state):
        # border_score = self.avg_border_distance(state)
        node_dist = self.avg_node_distance(
            state) / math.sqrt(self.width * self.width + self.height * self.height)
        # if border_score == 0:
        #     s = 0
        # else:
        #     s = round(math.pow(10, 4) *
        #               ((2 * node_dist + 0 * border_score) / 2))
        s = round(math.pow(10, 4) * node_dist)
        return max(min(s, math.pow(10, 4)), 0)

    def avg_node_distance(self, state):
        """
        Avg distance between non-connected nodes

        Node distance between nodes n1, n2 = distance between center of nodes n1, n2 - diameter

        Corner cases:
        1. If node distance is negative, nodes are overlap and negative cost already punishes the score.
        """
        l = 0
        n = state.order()
        c = n * (n - 1) / 2 - state.size()
        nodes = list(state.node)
        for i in range(n):
            lengths = []
            # for j in range(i + 1, n, 1):
            for j in range(n):
                if not (state.has_edge(nodes[i], nodes[j]) or state.has_edge(nodes[j], nodes[i])) and i != j:
                    # if i != j:
                    lengths.append(
                        self.dist_matrix[nodes[i]][nodes[j]] - 2 * self.radius)
                    # l += self.dist_matrix[nodes[i]][nodes[j]]
            if len(lengths) > 0:
                l += min(lengths)
        # self.raw_avg_node_distance = l / c
        self.raw_avg_node_distance = l / n
        return self.raw_avg_node_distance

    def normalized_avg_node_distance(self, state):
        """ Normalized avg distance between non-connected nodes """
        s = round(math.pow(10, 4) *
                  self.avg_node_distance(state) / math.sqrt(self.width * self.width + self.height * self.height))
        return s if s > 0 else 0

    def avg_node_edge_distance(self, state):
        """ Avg distance between nodes and edges

        Node edge distance between node n1 and edge e1 = distance between center of nodes n1 and segment e1 - radius

        Corner cases:
        1. If node edge distance is negative, node overlaps the edge and negative cost punishes the score.
        """
        l = 0
        c = (state.order() - 2) * state.size()
        for n in state.nodes():
            lengths = []
            for e in state.edges():
                if n != e[0] and n != e[1]:
                    lengths.append(self.dist_from_segment(self.node_position(state, n),
                                                          self.node_position(
                                                              state, e[0]),
                                                          self.node_position(state, e[1])) - self.radius)
                    # l += self.dist_from_segment(self.node_position(state, n),
                    #                            self.node_position(state, e[0]),
                    #                            self.node_position(state, e[1]))
            if len(lengths) > 0:
                l += min(lengths)

        # self.raw_avg_node_edge_distance = l / c
        self.raw_avg_node_edge_distance = l / state.order()
        return self.raw_avg_node_edge_distance

    def is_edge_intersecting(self, state, edge1, edge2):
        if (edge1[0] == edge2[0] or edge1[0] == edge2[1] or edge1[1] == edge2[0] or edge1[1] == edge2[1]):
            return False

        return self.line_intersect(self.node_position(state, edge1[0]), self.node_position(state, edge1[1]),
                                   self.node_position(state, edge2[0]), self.node_position(state, edge2[1]))

    def line_intersect(self, p1, p2, p3, p4):
        denom = (p4[1] - p3[1]) * (p2[0] - p1[0]) - \
            (p4[0] - p3[0]) * (p2[1] - p1[1])
        if (denom == 0.0):
            return self.is_line_overlapping(p1, p2, p3, p4)

        ua = ((p4[0] - p3[0]) * (p1[1] - p3[1]) -
              (p4[1] - p3[1]) * (p1[0] - p3[0])) / denom
        ub = ((p2[0] - p1[0]) * (p1[1] - p3[1]) -
              (p2[1] - p1[1]) * (p1[0] - p3[0])) / denom
        if (ua > 0.0 and ua < 1.0 and ub > 0.0 and ub < 1.0):
            return True
        return False

    def is_line_overlapping(self, p1, p2, p3, p4):
        # parallel line overlapping helper function: does line segment(p1, p2) overlap  parallel segment(p3, p4) ?
        denom = (p4[1] - p3[1]) * (p2[0] - p1[0]) - \
            (p4[0] - p3[0]) * (p2[1] - p1[1])
        if (denom != 0.0):  # not parallel lines
            return False

        u = (p3[1] - p1[1]) * (p2[0] - p1[0]) - \
            (p3[0] - p1[0]) * (p2[1] - p1[1])
        v = (p4[1] - p1[1]) * (p2[0] - p1[0]) - \
            (p4[0] - p1[0]) * (p2[1] - p1[1])
        # parallel but do not overlap - just testing if p4 or p3 lie on line p1 to p2
        if (u != 0.0 or v != 0.0):
            return False

        l1 = self.distSquared(p1, p2)
        d23 = self.distSquared(p2, p3)
        d13 = self.distSquared(p1, p3)
        l2 = self.distSquared(p3, p4)
        d14 = self.distSquared(p1, p4)

        if (l1 + d23 + l2 - d14 == 0.0):  # no overlapping portion
            return False
        else:
            if (d13 + l2 - d14 == 0.0):
                return True
            else:
                return True

    def normalized_avg_node_edge_distance(self, state):
        """ Normalized avg distance between nodes and edges """
        s = round(math.pow(10, 4) * self.avg_node_edge_distance(state) / math.sqrt(
            self.width * self.width + self.height * self.height))

        # if self.raw_avg_border_distance is not None and self.raw_avg_border_distance != 0:
        #     return max(min(s, math.pow(10, 4)), 0)
        # else:
        #     return 0
        return max(min(s, math.pow(10, 4)), 0)

    def edge_crossings(self, state):
        """ Number of edge crossings """
        c = 0

        m = state.size()
        edges = list(state.edges())
        for i in range(m):
            for j in range(i + 1, m, 1):
                if self.is_edge_intersecting(state, edges[i], edges[j]):
                    c += 1
        self.raw_crossings = c
        return c

    def normalized_edge_crossings(self, state):
        """ Normalized score for edge crossings """
        m = round(state.size())
        s = round(math.pow(10, 4) *
                  (1 - self.edge_crossings(state) / (m * (m - 1) / 2)))
        return max(min(s, math.pow(10, 4)), 0)

    def neighboring_state(self):
        next_state = self.current_state.copy()
        nodes = list(next_state.node)
        selectedNode = nodes[random.randint(0, len(nodes) - 1)]
        self.factor = math.pow(self.T / 100, 2) / 2

        scaleX = (self.x2 - self.x1) * self.factor
        scaleY = (self.y2 - self.y1) * self.factor
        # scaleX = 600 * self.factor
        # scaleY = 600 * self.factor
        next_state.node[selectedNode]['x'] = next_state.node[selectedNode]['x'] + random.random() * scaleX - (
            scaleX / 2)
        next_state.node[selectedNode]['y'] = next_state.node[selectedNode]['y'] + random.random() * scaleY - (
            scaleY / 2)
        next_state.node[selectedNode]['x'] = max(
            self.x1, min(next_state.node[selectedNode]['x'], self.x2))
        next_state.node[selectedNode]['y'] = max(
            self.y1, min(next_state.node[selectedNode]['y'], self.y2))
        return next_state

    def p_accept(self, candidate_energy):
        """
        Probability of accepting if the candidate is worse than current
        depends on the current temperature and difference between candidate and current energy
        """
        # print(str([abs(candidate_energy - self.current_energy),
        #            self.T, math.exp(-abs(candidate_energy - self.current_energy) / self.T)]))
        return math.exp(-abs(candidate_energy - self.current_energy) / self.T)

    def accept(self, candidate):
        """
        Accept with probability 1 if candidate is better than current
        Accept with probabilty p_accept(..) if candidate is worse
        """
        candidate_energy = self.energy(candidate)
        if candidate_energy > self.current_energy:
            self.current_energy = candidate_energy
            self.current_state = candidate
            if candidate_energy > self.best_energy:
                self.best_energy = candidate_energy
                self.best_state = candidate.copy()
            self.log.extend([candidate_energy] + self.subscores + [1, True])
        else:
            if random.random() < self.p_accept(candidate_energy):
                self.log.extend([candidate_energy] + self.subscores +
                                [self.p_accept(candidate_energy), True])
                # self.acceptance_curve[-1].append(
                #     [self.current_energy, candidate_energy, self.T, self.p_accept(candidate_energy), True])
                self.current_energy = candidate_energy
                self.current_state = candidate
            else:
                self.log.extend([candidate_energy] + self.subscores +
                                [self.p_accept(candidate_energy), False])
                # self.acceptance_curve[-1].append(
                #     [self.current_energy, candidate_energy, self.T, self.p_accept(candidate_energy), False])

    def save_progress(self):
        improvement = self.best_energy - self.initial_energy
        time_taken = round(time.clock() - self.start_time, 2)
        if self.logging_enabled:
            with open(self.updates_filename, 'a') as f:
                f.write('\n'.join(self.iteration_logs))
                f.write('\n')

            with open(self.iterations_filename, 'a') as f:
                f.writelines('\t'.join(map(str, [self.run, self.iteration, time_taken,
                                                 self.T, self.factor, self.best_energy, improvement])))
                f.write('\n')
        else:
            print('\t'.join(map(str, [self.run, self.iteration, time_taken,
                                      self.T, self.factor, self.best_energy, improvement])))

        self.iteration_logs = []

        # print('Iteration: %s \t Time Taken: %s \t Temperature: %s \t Factor: %s \t Best Energy: %s \t Improvement: %s' %
        # (self.iteration, time_taken, round(self.T, 4), round(self.factor, 4), self.best_energy, improvement))

    def save_layout(self, state, label):
        if self.graph and self.layout:
            layout = self.layout
            layout.set_positions_json(self.get_positions_json(state))
            layout.set_name(label)
            for node in state.nodes(data=True):
                layout.add_node_style(node[0], content=node[1]['label'],
                                      width=2 * self.radius, height=2 * self.radius, shape=node[1]['shape'], color='green' if node[1]['shape'] == 'triangle' else 'yellow' if node[1]['shape'] == 'rectangle' else 'grey',
                                      attr_dict={
                                          "font-size": "75px",
                })
            Graphspace.post_graph_layout(
                layout, graph_id=self.graph.id)

    def anneal(self):
        """
        Execute simulated annealing algorithm
        """
        while self.T >= self.stopping_temperature and self.iteration <= self.stopping_iter:
            for i in range(self.updates):
                self.log.extend([self.run, self.iteration,
                                 i + 1, self.T, self.current_energy])
                candidate = self.neighboring_state()
                self.accept(candidate)
                # self.energy_list.append(self.current_energy)
                self.steps.append(self.get_step(
                    self.current_state, self.current_energy, self.subscores))
                self.iteration_logs.append('\t'.join(map(str, self.log)))
                self.log = []
            # print(str([self.iteration, self.current_energy]))
            # self.acceptance_curve.append([])
            self.save_progress()
            self.T *= self.alpha
            self.iteration += 1

        # self.save_progress()
        # print('Best fitness obtained: %s' % self.best_energy)
        # print('Improvement: %s' % round((self.best_energy - self.initial_energy) / (self.initial_energy), 4))

    def simulate(self):
        while self.run <= self.stopping_runs:
            self.iteration = 1
            self.anneal()
            self.save_layout(self.best_state, '%s_run_%s' %
                             (self.label, self.run))
            if self.logging_enabled:
                with open(os.path.join(self.dir_name, 'simulated_annealing_run_%s.p' % self.run), 'wb') as handle:
                    pickle.dump(self, handle, protocol=pickle.HIGHEST_PROTOCOL)

                with open(self.runs_filename, 'a') as f:
                    f.write('\t'.join(map(str, [self.run, round(time.clock() - self.start_time, 2),
                                                self.initial_temperature,
                                                self.best_energy] + self.subscores)))

                    f.write('\n')

            self.run += 1
            self.initial_temperature = 0.9 * self.initial_temperature
            self.T = self.initial_temperature

            self.current_state = self.best_state
            self.current_energy = self.best_energy

    def bounding_box(self, state):
        x1 = 10000000000000
        x2 = -1000000000000
        y1 = 10000000000000
        y2 = -1000000000000
        for node in state.nodes():
            x1 = state.node[node]['x'] if state.node[node]['x'] < x1 else x1
            y1 = state.node[node]['y'] if state.node[node]['y'] < y1 else y1

            x2 = state.node[node]['x'] if state.node[node]['x'] > x2 else x2
            y2 = state.node[node]['y'] if state.node[node]['y'] > y2 else y2

        # Bounding box should bound the borders of the nodes.
        # Note we are assuming all nodes are circles of radius r = self.radius
        x1, x2 = x1 - self.radius, x2 + self.radius
        y1, y2 = y1 - self.radius, y2 + self.radius

        w = x2 - x1
        h = y2 - y1
        # print(x1, x2, y1, y2, w, h)
        return x1, x2, y1, y2, w, h

    def find_best_size(self, state):
        max_energy = 0
        max_radius = 1
        for radius in range(1, 500):
            self.radius = radius
            curr_energy = self.energy(self.best_state)
            print(radius, curr_energy)
            if curr_energy > max_energy:
                max_energy = curr_energy
                max_radius = radius
            if curr_energy == 0:
                break
        return max_energy, max_radius
