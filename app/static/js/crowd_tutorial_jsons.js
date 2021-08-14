var xfactor = 5.5;
var yfactor = 7;
var tutorial_json = {
  1: {
    'style_json': {
      'style': [ {
          'selector': 'node[name="T1"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'triangle',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="T2"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'triangle',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="C1"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'ellipse',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="C2"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'ellipse',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="C3"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'ellipse',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="C4"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'ellipse',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="C5"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'ellipse',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="C6"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'ellipse',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="C7"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'ellipse',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="C8"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'ellipse',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="C9"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'ellipse',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="R1"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'rectangle',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'node[name="R2"]',
          'style': {
            'background-color': '#FFFFFF',
            'height': 90,
            'shape': 'rectangle',
            'text-halign': 'center',
            'text-valign': 'center',
            'text-wrap': 'wrap',
            'width': 90
          }
        },
        {
          'selector': 'edge[source="T1"][target="C2"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="T2"][target="C1"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C1"][target="C7"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C2"][target="C7"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C1"][target="C5"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C1"][target="C6"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C2"][target="C3"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C2"][target="C4"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C5"][target="C8"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C6"][target="C8"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C3"][target="C9"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C4"][target="C9"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C7"][target="C8"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C7"][target="C9"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C8"][target="R2"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        },
        {
          'selector': 'edge[source="C9"][target="R1"]',
          'style': {
            'line-color': '#000000',
            'line-style': 'solid',
            'target-arrow-color': '#000000',
            'target-arrow-fill': 'filled',
            'target-arrow-shape': 'triangle',
            'width': 1.0
          }
        }
      ]
    },
    'name': 'Tutorial 4',
    'top_scorer': 'Tutorial',
    'graph_id': 1024,
    'score': 1,
    'graph_json': {
      'elements': {
        'nodes': [ {
            'data': {
              'id': 'T1',
              'label': 'T1',
              'name': 'T1',
              'shape': 'triangle'
            }
          },
          {
            'data': {
              'id': 'C5',
              'label': 'C5',
              'name': 'C5',
              'shape': 'ellipse'
            }
          },
          {
            'data': {
              'id': 'R1',
              'label': 'R1',
              'name': 'R1',
              'shape': 'rectangle'
            }
          },
          {
            'data': {
              'id': 'C8',
              'label': 'C8',
              'name': 'C8',
              'shape': 'ellipse'
            }
          },
          {
            'data': {
              'id': 'C6',
              'label': 'C6',
              'name': 'C6',
              'shape': 'ellipse'
            }
          },
          {
            'data': {
              'id': 'C2',
              'label': 'C2',
              'name': 'C2',
              'shape': 'ellipse'
            }
          },
          {
            'data': {
              'id': 'C3',
              'label': 'C3',
              'name': 'C3',
              'shape': 'ellipse'
            }
          },
          {
            'data': {
              'id': 'C7',
              'label': 'C7',
              'name': 'C7',
              'shape': 'ellipse'
            }
          },
          {
            'data': {
              'id': 'R2',
              'label': 'R2',
              'name': 'R2',
              'shape': 'rectangle'
            }
          },
          {
            'data': {
              'id': 'T2',
              'label': 'T2',
              'name': 'T2',
              'shape': 'triangle'
            }
          },
          {
            'data': {
              'id': 'C1',
              'label': 'C1',
              'name': 'C1',
              'shape': 'ellipse'
            }
          },
          {
            'data': {
              'id': 'C9',
              'label': 'C9',
              'name': 'C9',
              'shape': 'ellipse'
            }
          },
          {
            'data': {
              'id': 'C4',
              'label': 'C4',
              'name': 'C4',
              'shape': 'ellipse'
            }
          }
        ],
        'edges': [ {
            'data': {
              'id': 'T1_C2',
              'is_directed': true,
              'directed': 'true',
              'name': 'T1_C2',
              'source': 'T1',
              'target': 'C2'
            }
          },
          {
            'data': {
              'id': 'C5_C8',
              'is_directed': true,
              'directed': 'true',
              'name': 'C5_C8',
              'source': 'C5',
              'target': 'C8'
            }
          },
          {
            'data': {
              'id': 'C8_R2',
              'is_directed': true,
              'directed': 'true',
              'name': 'C8_R2',
              'source': 'C8',
              'target': 'R2'
            }
          },
          {
            'data': {
              'id': 'C6_C8',
              'is_directed': true,
              'directed': 'true',
              'name': 'C6_C8',
              'source': 'C6',
              'target': 'C8'
            }
          },
          {
            'data': {
              'id': 'C2_C7',
              'is_directed': true,
              'directed': 'true',
              'name': 'C2_C7',
              'source': 'C2',
              'target': 'C7'
            }
          },
          {
            'data': {
              'id': 'C2_C4',
              'is_directed': true,
              'directed': 'true',
              'name': 'C2_C4',
              'source': 'C2',
              'target': 'C4'
            }
          },
          {
            'data': {
              'id': 'C2_C3',
              'is_directed': true,
              'directed': 'true',
              'name': 'C2_C3',
              'source': 'C2',
              'target': 'C3'
            }
          },
          {
            'data': {
              'id': 'C3_C9',
              'is_directed': true,
              'directed': 'true',
              'name': 'C3_C9',
              'source': 'C3',
              'target': 'C9'
            }
          },
          {
            'data': {
              'id': 'C7_C9',
              'is_directed': true,
              'directed': 'true',
              'name': 'C7_C9',
              'source': 'C7',
              'target': 'C9'
            }
          },
          {
            'data': {
              'id': 'C7_C8',
              'is_directed': true,
              'directed': 'true',
              'name': 'C7_C8',
              'source': 'C7',
              'target': 'C8'
            }
          },
          {
            'data': {
              'id': 'T2_C1',
              'is_directed': true,
              'directed': 'true',
              'name': 'T2_C1',
              'source': 'T2',
              'target': 'C1'
            }
          },
          {
            'data': {
              'id': 'C1_C5',
              'is_directed': true,
              'directed': 'true',
              'name': 'C1_C5',
              'source': 'C1',
              'target': 'C5'
            }
          },
          {
            'data': {
              'id': 'C1_C7',
              'is_directed': true,
              'directed': 'true',
              'name': 'C1_C7',
              'source': 'C1',
              'target': 'C7'
            }
          },
          {
            'data': {
              'id': 'C1_C6',
              'is_directed': true,
              'directed': 'true',
              'name': 'C1_C6',
              'source': 'C1',
              'target': 'C6'
            }
          },
          {
            'data': {
              'id': 'C9_R1',
              'is_directed': true,
              'directed': 'true',
              'name': 'C9_R1',
              'source': 'C9',
              'target': 'R1'
            }
          },
          {
            'data': {
              'id': 'C4_C9',
              'is_directed': true,
              'directed': 'true',
              'name': 'C4_C9',
              'source': 'C4',
              'target': 'C9'
            }
          }
        ]
      },
      'data': {
        'description': 'Tutorial2',
        'tags': [ 'Tutorial' ],
        'title': 'Tutorial2',
        'authors': [ 'LeeLisle' ],
        'pmid': 'not_real',
        'paper_title': 'Tutorial',
        'name': 'tut_2'
      }
    },
    'positions_json': {
      'C1': {
        'x': xfactor * 400,
        'y': yfactor * 400
      },
      'C2': {
        'x': xfactor * 800,
        'y': yfactor * 400
      },
      'C3': {
        'x': xfactor * 1000,
        'y': yfactor * 200
      },
      'C4': {
        'x': xfactor * 1000,
        'y': yfactor * 400
      },
      'C5': {
        'x': xfactor * 200,
        'y': yfactor * 600
      },
      'C6': {
        'x': xfactor * 400,
        'y': yfactor * 600
      },
      'C7': {
        'x': xfactor * 600,
        'y': yfactor * 600
      },
      'C8': {
        'x': xfactor * 400,
        'y': yfactor * 800
      },
      'C9': {
        'x': xfactor * 800,
        'y': yfactor * 800
      },
      'R1': {
        'x': xfactor * 400,
        'y': yfactor * 1000
      },
      'R2': {
        'x': xfactor * 800,
        'y': yfactor * 1000
      },
      'T1': {
        'x': xfactor * 400,
        'y': yfactor * 200
      },
      'T2': {
        'x': xfactor * 800,
        'y': yfactor * 200
      }
    }
  },
}