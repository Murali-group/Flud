var tutorial_json = {
	1: {
		'style_json': {
			'style': [ {
					'style': {
						'width': 465,
						'shape': 'triangle',
						'height': 160,
						'background-color': '#5DB9D5',
						'text-wrap': 'wrap'
					},
					'selector': "node[name='T1']"
				},
				{
					'style': {
						'width': 300,
						'shape': 'rectangle',
						'height': 20,
						'background-color': '#D65DBA',
						'text-wrap': 'wrap'
					},
					'selector': "node[name='R1']"
				},
				{
					'style': {
						'shape': 'rectangle',
						'height': 20,
						'background-color': '#D65DBA',
						'text-wrap': 'wrap'
					},
					'selector': "node[name='R2']"
				},
				{
					'style': {
						'shape': 'triangle',
						'height': 140,
						'background-color': '#5DB9D5',
						'text-wrap': 'wrap'
					},
					'selector': "node[name='T2']"
				},
				{
					'style': {
						'width': 510,
						'shape': 'ellipse',
						'height': 20,
						'background-color': '#D65DBA',
						'text-wrap': 'wrap'
					},
					'selector': "node[name='C1']"
				},
				{
					'style': {
						'shape': 'ellipse',
						'height': 20,
						'background-color': '#CCCCCC',
						'text-wrap': 'wrap'
					},
					'selector': "node[name='C2']"
				},
				{
					'style': {
						'shape': 'ellipse',
						'height': 20,
						'background-color': '#CCCCCC',
						'text-wrap': 'wrap'
					},
					'selector': "node[name='C3']"
				},
				{
					'style': {
						'width': 3,
						'line-color': '#000000',
						'target-arrow-shape': 'triangle',
						'target-arrow-color': '#000000'
					},
					'selector': "edge[name='C1_R1']"
				},
				{
					'style': {
						'width': 3,
						'line-color': '#000000',
						'target-arrow-shape': 'triangle',
						'target-arrow-color': '#000000'
					},
					'selector': "edge[name='T1_C1']"
				},
				{
					'style': {
						'width': 3,
						'line-color': '#D65DBA',
						'target-arrow-shape': 'triangle',
						'target-arrow-color': '#D65DBA'
					},
					'selector': "edge[name='C1_R1']"
				},
				{
					'style': {
						'width': 3,
						'line-color': '#000000',
						'target-arrow-shape': 'triangle',
						'target-arrow-color': '#000000'
					},
					'selector': "edge[name='C1_R1']"
				},
				{
					'style': {
						'width': 3,
						'line-color': '#000000',
						'target-arrow-shape': 'triangle',
						'target-arrow-color': '#000000'
					},
					'selector': "edge[name='C1_R1']"
				},
				{
					'style': {
						'width': 3,
						'line-color': '#000000',
						'target-arrow-shape': 'triangle',
						'target-arrow-color': '#000000'
					},
					'selector': "edge[name='T2_C2']"
				},
				{
					'style': {
						'width': 3,
						'line-color': '#000000',
						'target-arrow-shape': 'triangle',
						'target-arrow-color': '#000000'
					},
					'selector': "edge[name='C2_C3']"
				},
				{
					'style': {
						'width': 3,
						'line-color': '#000000',
						'target-arrow-shape': 'triangle',
						'target-arrow-color': '#000000'
					},
					'selector': "edge[name='C3_R2']"
				}
			],
			'target_cytoscapejs_version': '~2.1',
			'generated_by': 'graphspace-2.0.0',
			'format_version': '1.0'
		},
		'name': 'Tutorial 1',
		'top_scorer': 'Tutorial',
		'graph_id': 1024,
		'score': 1,
		'graph_json': {
			'elements': {
				'nodes': [ {
						'data': {
							'id': 'T1',
							'aliases': [],
							'name': 'T1',
							'label': 'T1'
						},
						'position': {
							'x': '100.0',
							'y': '100.0'
						}
					},
					{
						'data': {
							'id': 'R1',
							'aliases': [],
							'name': 'R1',
							'label': 'R1'
						},
						'position': {
							'x': '100.0',
							'y': '500.0'
						}
					},
					{
						'data': {
							'id': 'T2',
							'aliases': [],
							'name': 'T2',
							'label': 'T2'
						},
						'position': {
							'x': '400.0',
							'y': '100.0'
						}
					},
					{
						'data': {
							'id': 'C1',
							'aliases': [],
							'name': 'C1',
							'label': 'C1',
						},
						'position': {
							'x': '100.0',
							'y': '300.0'
						}
					},
					{
						'data': {
							'id': 'R2',
							'aliases': [],
							'name': 'R2',
							'label': 'R2'
						},
						'position': {
							'x': '400.0',
							'y': '500.0'
						}
					},
					{
						'data': {
							'id': 'C2',
							'aliases': [],
							'name': 'C2',
							'label': 'C2',
						},
						'position': {
							'x': '300.0',
							'y': '300.0'
						}
					},
					{
						'data': {
							'id': 'C3',
							'aliases': [],
							'name': 'C3',
							'label': 'C3',
						},
						'position': {
							'x': '500.0',
							'y': '200.0'
						}
					}
				],
				'edges': [ {
						'data': {
							'directed': 'true',
							'target': 'R1',
							'k': 1,
							'source': 'C1',
							'is_directed': true,
							'id': 'C1_R1',
							'name': 'C1_R1'
						},
						'is_directed': 1
					}, {
						'data': {
							'directed': 'true',
							'target': 'C1',
							'k': 1,
							'source': 'T1',
							'is_directed': true,
							'id': 'T1_C1',
							'name': 'T1_C1'
						},
						'is_directed': 1
					},
					{
						'data': {
							'directed': 'true',
							'target': 'C2',
							'k': 1,
							'source': 'T2',
							'is_directed': true,
							'id': 'T2_C2',
							'name': 'T2_C2'
						},
						'is_directed': 1
					}, {
						'data': {
							'directed': 'true',
							'target': 'C3',
							'k': 1,
							'source': 'C2',
							'is_directed': true,
							'id': 'C2_C3',
							'name': 'C2_C3'
						},
						'is_directed': 1
					},
					{
						'data': {
							'directed': 'true',
							'target': 'R2',
							'k': 1,
							'source': 'C3',
							'is_directed': true,
							'id': 'C3_R2',
							'name': 'C3_R2'
						},
						'is_directed': 1
					}
				]
			},
			'data': {
				'description': 'Tutorial1',
				'tags': [ 'Tutorial' ],
				'title': 'Tutorial1',
				'authors': [ 'LeeLisle' ],
				'pmid': 'not_real',
				'paper_title': 'Tutorial',
				'name': 'tut_1'
			}
		},
		'positions_json': {
			"T1": {
				"x": 423.9725403775124,
				"y": 63.11106743497692
			},
			"R1": {
				"x": 413.6739841527514,
				"y": 671.35528713846
			},
			"T2": {
				"x": 755.5063593327234,
				"y": 62.3910922165772
			},
			"C1": {
				"x": 419.5557407388193,
				"y": 413.53312530248496
			},
			"R2": {
				"x": 778.2134800172486,
				"y": 674.7515299802351
			},
			"C2": {
				"x": 755.9347555027414,
				"y": 366.14880475649466
			},
			"C3": {
				"x": 936.3289035129642,
				"y": 282.0822631525545
			}
		},
	},
	2: {
		'style_json': {
			'style': [ {
				'style': {
					'shape': 'triangle'
				},
				'selector': "node[name='T1']"
			}, {
				'style': {
					'shape': 'rectangle'
				},
				'selector': "node[name='R1']"
			}, {
				'style': {
					'shape': 'rectangle'
				},
				'selector': "node[name='R2']"
			}, {
				'style': {
					'shape': 'rectangle'
				},
				'selector': "node[name='R3']"
			}, {
				'style': {
					'shape': 'rectangle'
				},
				'selector': "node[name='R4']"
			}, {
				'style': {
					'shape': 'triangle'
				},
				'selector': "node[name='T2']"
			}, {
				'style': {
					'shape': 'triangle'
				},
				'selector': "node[name='T3']"
			}, {
				'style': {
					'shape': 'triangle'
				},
				'selector': "node[name='T4']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C1']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C2']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C3']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='T1_C1']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='T2_C1']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='T3_C1']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='T4_C1']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C2_R1']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C1_C2']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C2_R2']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C2_R3']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C2_R4']"
			} ],
			'target_cytoscapejs_version': '~2.1',
			'generated_by': 'graphspace-2.0.0',
			'format_version': '1.0'
		},
		'name': 'Tutorial 2',
		'top_scorer': 'Tutorial',
		'graph_id': 1024,
		'score': 1,
		'graph_json': {
			'elements': {
				'nodes': [ {
						'data': {
							'id': 'T1',
							'aliases': [],
							'name': 'T1',
							'label': 'T1'
						},
						'position': {
							'x': '100.0',
							'y': '100.0'
						}
					},
					{
						'data': {
							'id': 'R1',
							'aliases': [],
							'name': 'R1',
							'label': 'R1'
						},
						'position': {
							'x': '100.0',
							'y': '500.0'
						}
					},
					{
						'data': {
							'id': 'T2',
							'aliases': [],
							'name': 'T2',
							'label': 'T2'
						},
						'position': {
							'x': '400.0',
							'y': '100.0'
						}
					},
					{
						'data': {
							'id': 'T3',
							'aliases': [],
							'name': 'T3',
							'label': 'T3'
						},
						'position': {
							'x': '400.0',
							'y': '100.0'
						}
					},
					{
						'data': {
							'id': 'T4',
							'aliases': [],
							'name': 'T4',
							'label': 'T4'
						},
						'position': {
							'x': '400.0',
							'y': '100.0'
						}
					},
					{
						'data': {
							'id': 'C1',
							'aliases': [],
							'name': 'C1',
							'label': 'C1',
						},
						'position': {
							'x': '100.0',
							'y': '350.0'
						}
					},
					{
						'data': {
							'id': 'R2',
							'aliases': [],
							'name': 'R2',
							'label': 'R2'
						},
						'position': {
							'x': '400.0',
							'y': '500.0'
						}
					},
					{
						'data': {
							'id': 'R3',
							'aliases': [],
							'name': 'R3',
							'label': 'R3'
						},
						'position': {
							'x': '400.0',
							'y': '500.0'
						}
					},
					{
						'data': {
							'id': 'R4',
							'aliases': [],
							'name': 'R4',
							'label': 'R4'
						},
						'position': {
							'x': '400.0',
							'y': '500.0'
						}
					},
					{
						'data': {
							'id': 'C2',
							'aliases': [],
							'name': 'C2',
							'label': 'C2',
						},
						'position': {
							'x': '300.0',
							'y': '250.0'
						}
					}
				],
				'edges': [ {
						'data': {
							'directed': 'true',
							'target': 'C1',
							'k': 1,
							'source': 'T1',
							'is_directed': true,
							'id': 'T1_C1',
							'name': 'T1_C1'
						},
						'is_directed': 1
					}, {
						'data': {
							'directed': 'true',
							'target': 'C1',
							'k': 1,
							'source': 'T2',
							'is_directed': true,
							'id': 'T2_C1',
							'name': 'T2_C1'
						},
						'is_directed': 1
					},
					{
						'data': {
							'directed': 'true',
							'target': 'C1',
							'k': 1,
							'source': 'T3',
							'is_directed': true,
							'id': 'T3_C1',
							'name': 'T3_C1'
						},
						'is_directed': 1
					}, {
						'data': {
							'directed': 'true',
							'target': 'C1',
							'k': 1,
							'source': 'T4',
							'is_directed': true,
							'id': 'T4_C1',
							'name': 'T4_C1'
						},
						'is_directed': 1
					},
					{
						'data': {
							'directed': 'true',
							'target': 'C2',
							'k': 1,
							'source': 'C1',
							'is_directed': true,
							'id': 'C1_C2',
							'name': 'C1_C2'
						},
						'is_directed': 1
					}, {
						'data': {
							'directed': 'true',
							'target': 'R1',
							'k': 1,
							'source': 'C2',
							'is_directed': true,
							'id': 'C2_R1',
							'name': 'C2_R1'
						},
						'is_directed': 1
					},
					{
						'data': {
							'directed': 'true',
							'target': 'R2',
							'k': 1,
							'source': 'C2',
							'is_directed': true,
							'id': 'C2_R2',
							'name': 'C2_R2'
						},
						'is_directed': 1
					}, {
						'data': {
							'directed': 'true',
							'target': 'R3',
							'k': 1,
							'source': 'C2',
							'is_directed': true,
							'id': 'C2_R3',
							'name': 'C2_R3'
						},
						'is_directed': 1
					},
					{
						'data': {
							'directed': 'true',
							'target': 'R4',
							'k': 1,
							'source': 'C2',
							'is_directed': true,
							'id': 'C2_R4',
							'name': 'C2_R4'
						},
						'is_directed': 1
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
			"T1": {
				"x": 135,
				"y": 80
			},
			"R1": {
				"x": 135,
				"y": 774
			},
			"T2": {
				"x": 404.99999999998545,
				"y": 80
			},
			"T3": {
				"x": 675,
				"y": 80
			},
			"T4": {
				"x": 945.0000000000146,
				"y": 80
			},
			"C1": {
				"x": 210,
				"y": 541.7999999999993
			},
			"R2": {
				"x": 404.99999999998545,
				"y": 774
			},
			"R3": {
				"x": 675,
				"y": 774
			},
			"R4": {
				"x": 945.0000000000146,
				"y": 774
			},
			"C2": {
				"x": 630,
				"y": 387
			}
		}
	},
	3: {
		"style_json": {
			"format_version": "1.0",
			"generated_by": "graphspace-2.0.0",
			"target_cytoscapejs_version": "~2.7",
			"style": [ {
					"selector": "node[name='NFATC2']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "NFATC2\n75",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='RYK']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "RYK\n59",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='TCF4']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "TCF4\n92",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='SMAD4']",
					"style": {
						"text-outline-color": "#AC58FA",
						"width": "45px",
						"border-color": "#AC58FA",
						"label": "SMAD4\n109",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#AC58FA"
					}
				},
				{
					"selector": "node[name='GNAO1']",
					"style": {
						"text-outline-color": "#D8D8D8",
						"width": "45px",
						"border-color": "#D8D8D8",
						"label": "GNAO1\n124",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#D8D8D8"
					}
				},
				{
					"selector": "node[name='RPS27A']",
					"style": {
						"text-outline-color": "#D8D8D8",
						"width": "45px",
						"border-color": "#D8D8D8",
						"label": "RPS27A\n71",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#D8D8D8"
					}
				},
				{
					"selector": "node[name='EGFR']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "EGFR\n139",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='SMAD1']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "SMAD1\n13",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='SMAD2']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "SMAD2\n112",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='SMAD3']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "SMAD3\n105",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='CTNNB1']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "CTNNB1\n1",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='AKT1']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "AKT1\n98",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='PLCB3']",
					"style": {
						"text-outline-color": "#AC58FA",
						"width": "45px",
						"border-color": "#AC58FA",
						"label": "PLCB3\n141",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#AC58FA"
					}
				},
				{
					"selector": "node[name='DAB2']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "DAB2\n4",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD10']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD10\n10",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD1']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD1\n11",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD2']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD2\n6",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD3']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD3\n8",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD4']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD4\n9",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD5']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD5\n5",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='AXIN1']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "AXIN1\n24",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD7']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD7\n3",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD8']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD8\n7",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD9']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD9\n1",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='SLC9A3R1']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "SLC9A3R1\n49",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='MAP3K7']",
					"style": {
						"text-outline-color": "#AC58FA",
						"width": "45px",
						"border-color": "#AC58FA",
						"label": "MAP3K7\n60",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#AC58FA"
					}
				},
				{
					"selector": "node[name='DVL2']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "DVL2\n14",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='DVL3']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "DVL3\n15",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='CSNK1E']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "CSNK1E\n99",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='PIK3R1']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "PIK3R1\n133",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='CDH2']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "CDH2\n26",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='MAPK3']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "MAPK3\n127",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='DVL1']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "DVL1\n12",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='SRC']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "SRC\n130",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='PLCB2']",
					"style": {
						"text-outline-color": "#AC58FA",
						"width": "45px",
						"border-color": "#AC58FA",
						"label": "PLCB2\n139",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#AC58FA"
					}
				},
				{
					"selector": "node[name='SMAD7']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "SMAD7\n92",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='PLCB4']",
					"style": {
						"text-outline-color": "#AC58FA",
						"width": "45px",
						"border-color": "#AC58FA",
						"label": "PLCB4\n144",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#AC58FA"
					}
				},
				{
					"selector": "node[name='TCF3']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "TCF3\n127",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='PRKCA']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "PRKCA\n120",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='PLCB1']",
					"style": {
						"text-outline-color": "#AC58FA",
						"width": "45px",
						"border-color": "#AC58FA",
						"label": "PLCB1\n151",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#AC58FA"
					}
				},
				{
					"selector": "node[name='PAX2']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "PAX2\n81",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='LEF1']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "LEF1\n95",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='ROR2']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "ROR2\n60",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='CSNK2A1']",
					"style": {
						"text-outline-color": "#AC58FA",
						"width": "45px",
						"border-color": "#AC58FA",
						"label": "CSNK2A1\n104",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#AC58FA"
					}
				},
				{
					"selector": "node[name='GNAQ']",
					"style": {
						"text-outline-color": "#D8D8D8",
						"width": "45px",
						"border-color": "#D8D8D8",
						"label": "GNAQ\n135",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#D8D8D8"
					}
				},
				{
					"selector": "node[name='LRP6']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "LRP6\n4",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FZD6']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "FZD6\n2",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='LRP5']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "LRP5\n24",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='WNT1']",
					"style": {
						"text-outline-color": "#01DF01",
						"mid-target-arrow-color": "#0169D9",
						"line-color": "#0169D9",
						"width": "45px",
						"border-color": "#01DF01",
						"source-arrow-color": "#0169D9",
						"label": "WNT1\n81",
						"mid-source-arrow-color": "#0169D9",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01",
						"target-arrow-color": "#0169D9"
					}
				},
				{
					"selector": "node[name='NOTCH1']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "NOTCH1\n113",
						"text-outline-width": "4px",
						"shape": "triangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='GSK3B']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "GSK3B\n73",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='MAPK1']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "MAPK1\n129",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='UBA52']",
					"style": {
						"text-outline-color": "#D8D8D8",
						"width": "45px",
						"border-color": "#D8D8D8",
						"label": "UBA52\n72",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#D8D8D8"
					}
				},
				{
					"selector": "node[name='PIK3CA']",
					"style": {
						"text-outline-color": "#FACC2E",
						"width": "45px",
						"border-color": "#FACC2E",
						"label": "PIK3CA\n132",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#FACC2E"
					}
				},
				{
					"selector": "node[name='APC']",
					"style": {
						"text-outline-color": "#01DF01",
						"width": "45px",
						"border-color": "#01DF01",
						"label": "APC\n12",
						"text-outline-width": "4px",
						"shape": "rectangle",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#01DF01"
					}
				},
				{
					"selector": "node[name='FLNA']",
					"style": {
						"text-outline-color": "#D8D8D8",
						"width": "45px",
						"border-color": "#D8D8D8",
						"label": "FLNA\n91",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#D8D8D8"
					}
				},
				{
					"selector": "node[name='CFTR']",
					"style": {
						"text-outline-color": "#D8D8D8",
						"width": "45px",
						"border-color": "#D8D8D8",
						"label": "CFTR\n59",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#D8D8D8"
					}
				},
				{
					"selector": "node[name='CSNK2B']",
					"style": {
						"text-outline-color": "#AC58FA",
						"width": "45px",
						"border-color": "#AC58FA",
						"label": "CSNK2B\n103",
						"text-outline-width": "4px",
						"shape": "ellipse",
						"text-wrap": "wrap",
						"text-halign": "center",
						"height": "45px",
						"text-valign": "center",
						"background-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='RYK-WNT1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='RYK-DVL1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='RYK-CFTR']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD4-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD4-LEF1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='SMAD4-SMAD1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAO1-SRC']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAO1-MAPK3']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAO1-PIK3CA']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAO1-DVL2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAO1-DVL3']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAO1-MAPK1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAO1-PIK3R1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAO1-DVL1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='RPS27A-SMAD1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='EGFR-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD2-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD2-DAB2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD2-LEF1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD2-SMAD1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD3-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD3-DAB2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD3-LEF1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD3-SMAD1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='AKT1-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='PLCB3-PRKCA']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='PLCB3-SLC9A3R1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='PLCB3-EGFR']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD10-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD10-DVL2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD10-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD10-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD1-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD1-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD1-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD1-DVL2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD2-DVL2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD2-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD2-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD2-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD3-DVL2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD3-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD3-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD3-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD4-DVL2']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='FZD4-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD4-SLC9A3R1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='FZD4-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD4-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD5-DVL2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD5-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD5-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD5-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD5-GSK3B']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='AXIN1-CTNNB1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='AXIN1-APC']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='FZD7-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD7-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD7-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD7-DVL2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD8-DVL2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD8-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD8-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD8-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD9-PLCB1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD9-PLCB2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD9-PLCB3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD9-PLCB4']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD9-GNAQ']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD9-GNAO1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD9-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD9-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD9-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD9-DVL2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='SLC9A3R1-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='MAP3K7-DAB2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='DVL2-PRKCA']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='DVL2-APC']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='DVL2-AXIN1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='DVL2-GSK3B']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='DVL3-APC']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='DVL3-DAB2']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='DVL3-AXIN1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='DVL3-GSK3B']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='CSNK1E-APC']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='PIK3R1-DAB2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='CDH2-CTNNB1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='MAPK3-SMAD1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='MAPK3-TCF3']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='DVL1-AXIN1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='DVL1-SMAD4']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='DVL1-SMAD7']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='DVL1-NOTCH1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='DVL1-SMAD2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='DVL1-SMAD1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='DVL1-SMAD3']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='DVL1-AKT1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='DVL1-CSNK1E']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='DVL1-APC']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='DVL1-GSK3B']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='DVL1-CSNK2B']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='DVL1-CSNK2A1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='SRC-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='PLCB2-PRKCA']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='PLCB2-EGFR']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD7-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD7-TCF4']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD7-LEF1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='SMAD7-SMAD1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='PLCB4-PRKCA']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='PLCB4-EGFR']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='PRKCA-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='PLCB1-PRKCA']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='PLCB1-EGFR']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='ROR2-WNT1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='ROR2-MAP3K7']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='ROR2-DVL2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='ROR2-DVL3']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='ROR2-DVL1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='ROR2-FLNA']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='CSNK2A1-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAQ-DVL2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAQ-DVL3']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GNAQ-DVL1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='LRP6-AXIN1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='LRP6-RPS27A']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='LRP6-GSK3B']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='LRP6-UBA52']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='LRP6-DAB2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='LRP6-CDH2']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='FZD6-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD6-PLCB2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD6-GNAQ']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD6-GNAO1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FZD6-DVL2']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD6-DVL3']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='FZD6-DVL1']",
					"style": {
						"line-color": "#AC58FA",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#AC58FA"
					}
				},
				{
					"selector": "edge[name='LRP5-CDH2']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='LRP5-AXIN1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='LRP5-GSK3B']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='WNT1-PAX2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='NOTCH1-LEF1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='NOTCH1-SMAD1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='GSK3B-CTNNB1']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='GSK3B-APC']",
					"style": {
						"line-color": "#01DF01",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#01DF01"
					}
				},
				{
					"selector": "edge[name='GSK3B-NFATC2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='MAPK1-SMAD1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='MAPK1-TCF3']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='UBA52-SMAD1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='PIK3CA-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='FLNA-APC']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='CFTR-DAB2']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "none",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				},
				{
					"selector": "edge[name='CSNK2B-CTNNB1']",
					"style": {
						"line-color": "#D8D8D8",
						"target-arrow-shape": "triangle",
						"width": "3px",
						"curve-style": "bezier",
						"line-style": "solid",
						"target-arrow-color": "#D8D8D8"
					}
				}
			]
		},
		'name': 'Tutorial 3',
		'top_scorer': 'Tutorial',
		'graph_id': 1024,
		'score': 1,
		'graph_json': {
			"elements": {
				"nodes": [ {
						"data": {
							"popup": "<b>NFATC2</b><hr /><b>Edge Rankings</b>: 75.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q13469\" target=\"UniProtKB\">Q13469</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4773\" target=\"EntrezGene\">4773</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q13469&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "NFATC2",
							"k": 75,
							"label": "NFATC2\n75",
							"id": "NFATC2",
							"aliases": []
						},
						"position": {
							"y": 1080.9697998288318,
							"x": 525.0892578859456
						}
					},
					{
						"data": {
							"popup": "<b>RYK</b><hr /><b>Edge Rankings</b>: 59.0,79.0,81.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P34925\" target=\"UniProtKB\">P34925</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/6259\" target=\"EntrezGene\">6259</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P34925&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "RYK",
							"k": 59,
							"label": "RYK\n59",
							"id": "RYK",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 214.2331987509591
						}
					},
					{
						"data": {
							"popup": "<b>TCF4</b><hr /><b>Edge Rankings</b>: 92.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P15884\" target=\"UniProtKB\">P15884</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/6925\" target=\"EntrezGene\">6925</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P15884&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "TCF4",
							"k": 92,
							"label": "TCF4\n92",
							"id": "TCF4",
							"aliases": []
						},
						"position": {
							"y": 1083.0388803972648,
							"x": 288.17227784398034
						}
					},
					{
						"data": {
							"popup": "<b>SMAD4</b><hr /><b>Edge Rankings</b>: 109.0,110.0,111.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q13485\" target=\"UniProtKB\">Q13485</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4089\" target=\"EntrezGene\">4089</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q13485&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "SMAD4",
							"k": 109,
							"label": "SMAD4\n109",
							"id": "SMAD4",
							"aliases": []
						},
						"position": {
							"y": 1081.4225623481013,
							"x": 1143.2045258515072
						}
					},
					{
						"data": {
							"popup": "<b>GNAO1</b><hr /><b>Edge Rankings</b>: 124.0,126.0,127.0,129.0,130.0,132.0,133.0,134.0,185.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P09471\" target=\"UniProtKB\">P09471</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/2775\" target=\"EntrezGene\">2775</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P09471&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "GNAO1",
							"k": 124,
							"label": "GNAO1\n124",
							"id": "GNAO1",
							"aliases": []
						},
						"position": {
							"y": 556.3760719166094,
							"x": 450.46312162289377
						}
					},
					{
						"data": {
							"popup": "<b>RPS27A</b><hr /><b>Edge Rankings</b>: 71.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P62979\" target=\"UniProtKB\">P62979</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/6233\" target=\"EntrezGene\">6233</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P62979&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "RPS27A",
							"k": 71,
							"label": "RPS27A\n71",
							"id": "RPS27A",
							"aliases": []
						},
						"position": {
							"y": 978.6910575862208,
							"x": 993.21808210249
						}
					},
					{
						"data": {
							"popup": "<b>EGFR</b><hr /><b>Edge Rankings</b>: 139.0,142.0,144.0,151.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P00533\" target=\"UniProtKB\">P00533</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1956\" target=\"EntrezGene\">1956</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P00533&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "EGFR",
							"k": 139,
							"label": "EGFR\n139",
							"id": "EGFR",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 1114.5624261362861
						}
					},
					{
						"data": {
							"popup": "<b>SMAD1</b><hr /><b>Edge Rankings</b>: 13.0,71.0,72.0,94.0,107.0,110.0,113.0,116.0,128.0,131.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q15797\" target=\"UniProtKB\">Q15797</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4086\" target=\"EntrezGene\">4086</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q15797&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "SMAD1",
							"k": 13,
							"label": "SMAD1\n13",
							"id": "SMAD1",
							"aliases": []
						},
						"position": {
							"y": 1083.0388803972648,
							"x": 365.7555442038316
						}
					},
					{
						"data": {
							"popup": "<b>SMAD2</b><hr /><b>Edge Rankings</b>: 112.0,115.0,116.0,117.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q15796\" target=\"UniProtKB\">Q15796</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4087\" target=\"EntrezGene\">4087</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q15796&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "SMAD2",
							"k": 112,
							"label": "SMAD2\n112",
							"id": "SMAD2",
							"aliases": []
						},
						"position": {
							"y": 1081.4225623481013,
							"x": 986.4216750826425
						}
					},
					{
						"data": {
							"popup": "<b>SMAD3</b><hr /><b>Edge Rankings</b>: 105.0,106.0,107.0,108.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P84022\" target=\"UniProtKB\">P84022</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4088\" target=\"EntrezGene\">4088</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P84022&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "SMAD3",
							"k": 105,
							"label": "SMAD3\n105",
							"id": "SMAD3",
							"aliases": []
						},
						"position": {
							"y": 1081.4225623481013,
							"x": 1064.0049414424925
						}
					},
					{
						"data": {
							"popup": "<b>CTNNB1</b><hr /><b>Edge Rankings</b>: 1.0,2.0,3.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,25.0,26.0,49.0,74.0,93.0,98.0,103.0,104.0,105.0,109.0,112.0,120.0,130.0,132.0,139.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P35222\" target=\"UniProtKB\">P35222</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1499\" target=\"EntrezGene\">1499</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P35222&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "CTNNB1",
							"k": 1,
							"label": "CTNNB1\n1",
							"id": "CTNNB1",
							"aliases": []
						},
						"position": {
							"y": 1083.0388803972648,
							"x": 443.33881056368284
						}
					},
					{
						"data": {
							"popup": "<b>AKT1</b><hr /><b>Edge Rankings</b>: 98.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P31749\" target=\"UniProtKB\">P31749</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/207\" target=\"EntrezGene\">207</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P31749&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "AKT1",
							"k": 98,
							"label": "AKT1\n98",
							"id": "AKT1",
							"aliases": []
						},
						"position": {
							"y": 647.4027364547593,
							"x": 683.909841460724
						}
					},
					{
						"data": {
							"popup": "<b>PLCB3</b><hr /><b>Edge Rankings</b>: 141.0,142.0,143.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q01970\" target=\"UniProtKB\">Q01970</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/5331\" target=\"EntrezGene\">5331</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q01970&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "PLCB3",
							"k": 141,
							"label": "PLCB3\n141",
							"id": "PLCB3",
							"aliases": []
						},
						"position": {
							"y": 565.3560052591148,
							"x": 1002.0530517387424
						}
					},
					{
						"data": {
							"popup": "<b>DAB2</b><hr /><b>Edge Rankings</b>: 4.0,15.0,59.0,60.0,106.0,115.0,133.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P98082\" target=\"UniProtKB\">P98082</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1601\" target=\"EntrezGene\">1601</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P98082&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "DAB2",
							"k": 4,
							"label": "DAB2\n4",
							"id": "DAB2",
							"aliases": []
						},
						"position": {
							"y": 1081.6594933516428,
							"x": 207.11152404452886
						}
					},
					{
						"data": {
							"popup": "<b>FZD10</b><hr /><b>Edge Rankings</b>: 10.0,51.0,53.0,54.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q9ULW2\" target=\"UniProtKB\">Q9ULW2</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/11211\" target=\"EntrezGene\">11211</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q9ULW2&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD10",
							"k": 10,
							"label": "FZD10\n10",
							"id": "FZD10",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 278.35160070124954
						}
					},
					{
						"data": {
							"popup": "<b>FZD1</b><hr /><b>Edge Rankings</b>: 11.0,55.0,57.0,58.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q9UP38\" target=\"UniProtKB\">Q9UP38</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/8321\" target=\"EntrezGene\">8321</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q9UP38&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD1",
							"k": 11,
							"label": "FZD1\n11",
							"id": "FZD1",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 342.47000265153974
						}
					},
					{
						"data": {
							"popup": "<b>FZD2</b><hr /><b>Edge Rankings</b>: 6.0,34.0,36.0,37.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q14332\" target=\"UniProtKB\">Q14332</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/2535\" target=\"EntrezGene\">2535</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q14332&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD2",
							"k": 6,
							"label": "FZD2\n6",
							"id": "FZD2",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 406.5884046018304
						}
					},
					{
						"data": {
							"popup": "<b>FZD3</b><hr /><b>Edge Rankings</b>: 8.0,42.0,44.0,45.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q9NPG1\" target=\"UniProtKB\">Q9NPG1</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/7976\" target=\"EntrezGene\">7976</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q9NPG1&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD3",
							"k": 8,
							"label": "FZD3\n8",
							"id": "FZD3",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 470.70680655212084
						}
					},
					{
						"data": {
							"popup": "<b>FZD4</b><hr /><b>Edge Rankings</b>: 9.0,46.0,48.0,49.0,50.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q9ULV1\" target=\"UniProtKB\">Q9ULV1</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/8322\" target=\"EntrezGene\">8322</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q9ULV1&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD4",
							"k": 9,
							"label": "FZD4\n9",
							"id": "FZD4",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 534.825208502411
						}
					},
					{
						"data": {
							"popup": "<b>FZD5</b><hr /><b>Edge Rankings</b>: 5.0,30.0,32.0,33.0,88.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q13467\" target=\"UniProtKB\">Q13467</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/7855\" target=\"EntrezGene\">7855</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q13467&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD5",
							"k": 5,
							"label": "FZD5\n5",
							"id": "FZD5",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 598.9436104527011
						}
					},
					{
						"data": {
							"popup": "<b>AXIN1</b><hr /><b>Edge Rankings</b>: 24.0,25.0,27.0,96.0,118.0,146.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O15169\" target=\"UniProtKB\">O15169</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/8312\" target=\"EntrezGene\">8312</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O15169&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "AXIN1",
							"k": 24,
							"label": "AXIN1\n24",
							"id": "AXIN1",
							"aliases": []
						},
						"position": {
							"y": 856.015973478658,
							"x": 591.3351231321067
						}
					},
					{
						"data": {
							"popup": "<b>FZD7</b><hr /><b>Edge Rankings</b>: 3.0,20.0,22.0,23.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O75084\" target=\"UniProtKB\">O75084</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/8324\" target=\"EntrezGene\">8324</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O75084&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD7",
							"k": 3,
							"label": "FZD7\n3",
							"id": "FZD7",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 727.1804143532817
						}
					},
					{
						"data": {
							"popup": "<b>FZD8</b><hr /><b>Edge Rankings</b>: 7.0,38.0,40.0,41.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q9H461\" target=\"UniProtKB\">Q9H461</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/8325\" target=\"EntrezGene\">8325</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q9H461&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD8",
							"k": 7,
							"label": "FZD8\n7",
							"id": "FZD8",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 791.2988163035725
						}
					},
					{
						"data": {
							"popup": "<b>FZD9</b><hr /><b>Edge Rankings</b>: 1.0,12.0,14.0,15.0,124.0,135.0,139.0,141.0,144.0,151.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O00144\" target=\"UniProtKB\">O00144</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/8326\" target=\"EntrezGene\">8326</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O00144&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD9",
							"k": 1,
							"label": "FZD9\n1",
							"id": "FZD9",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 855.4172182538624
						}
					},
					{
						"data": {
							"popup": "<b>SLC9A3R1</b><hr /><b>Edge Rankings</b>: 49.0,141.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O14745\" target=\"UniProtKB\">O14745</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/9368\" target=\"EntrezGene\">9368</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O14745&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "SLC9A3R1",
							"k": 49,
							"label": "SLC9A3R1\n49",
							"id": "SLC9A3R1",
							"aliases": []
						},
						"position": {
							"y": 684.9170256034172,
							"x": 774.4773471061998
						}
					},
					{
						"data": {
							"popup": "<b>MAP3K7</b><hr /><b>Edge Rankings</b>: 60.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O43318\" target=\"UniProtKB\">O43318</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/6885\" target=\"EntrezGene\">6885</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O43318&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "MAP3K7",
							"k": 60,
							"label": "MAP3K7\n60",
							"id": "MAP3K7",
							"aliases": []
						},
						"position": {
							"y": 604.4175278274597,
							"x": 1083.165139134604
						}
					},
					{
						"data": {
							"popup": "<b>DVL2</b><hr /><b>Edge Rankings</b>: 14.0,18.0,22.0,32.0,36.0,40.0,44.0,48.0,53.0,57.0,84.0,118.0,120.0,121.0,126.0,137.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O14641\" target=\"UniProtKB\">O14641</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1856\" target=\"EntrezGene\">1856</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O14641&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "DVL2",
							"k": 14,
							"label": "DVL2\n14",
							"id": "DVL2",
							"aliases": []
						},
						"position": {
							"y": 559.7337531660113,
							"x": 830.1186719468901
						}
					},
					{
						"data": {
							"popup": "<b>DVL3</b><hr /><b>Edge Rankings</b>: 15.0,19.0,23.0,33.0,37.0,41.0,45.0,50.0,54.0,58.0,61.0,86.0,134.0,138.0,146.0,148.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q92997\" target=\"UniProtKB\">Q92997</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1857\" target=\"EntrezGene\">1857</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q92997&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "DVL3",
							"k": 15,
							"label": "DVL3\n15",
							"id": "DVL3",
							"aliases": []
						},
						"position": {
							"y": 499.4436166070751,
							"x": 795.310145375109
						}
					},
					{
						"data": {
							"popup": "<b>CSNK1E</b><hr /><b>Edge Rankings</b>: 99.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P49674\" target=\"UniProtKB\">P49674</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1454\" target=\"EntrezGene\">1454</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P49674&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "CSNK1E",
							"k": 99,
							"label": "CSNK1E\n99",
							"id": "CSNK1E",
							"aliases": []
						},
						"position": {
							"y": 775.4845312488927,
							"x": 811.9916362548579
						}
					},
					{
						"data": {
							"popup": "<b>PIK3R1</b><hr /><b>Edge Rankings</b>: 133.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P27986\" target=\"UniProtKB\">P27986</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/5295\" target=\"EntrezGene\">5295</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P27986&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "PIK3R1",
							"k": 133,
							"label": "PIK3R1\n133",
							"id": "PIK3R1",
							"aliases": []
						},
						"position": {
							"y": 754.1204737566721,
							"x": 394.5409319567406
						}
					},
					{
						"data": {
							"popup": "<b>CDH2</b><hr /><b>Edge Rankings</b>: 26.0,29.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P19022\" target=\"UniProtKB\">P19022</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1000\" target=\"EntrezGene\">1000</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P19022&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "CDH2",
							"k": 26,
							"label": "CDH2\n26",
							"id": "CDH2",
							"aliases": []
						},
						"position": {
							"y": 866.0520368943684,
							"x": 774.4773471061998
						}
					},
					{
						"data": {
							"popup": "<b>MAPK3</b><hr /><b>Edge Rankings</b>: 127.0,128.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P27361\" target=\"UniProtKB\">P27361</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/5595\" target=\"EntrezGene\">5595</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P27361&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "MAPK3",
							"k": 127,
							"label": "MAPK3\n127",
							"id": "MAPK3",
							"aliases": []
						},
						"position": {
							"y": 701.8607249240472,
							"x": 322.611558495151
						}
					},
					{
						"data": {
							"popup": "<b>DVL1</b><hr /><b>Edge Rankings</b>: 12.0,13.0,16.0,20.0,30.0,34.0,38.0,42.0,46.0,51.0,55.0,79.0,82.0,92.0,96.0,98.0,99.0,100.0,103.0,104.0,105.0,109.0,112.0,113.0,124.0,135.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O14640\" target=\"UniProtKB\">O14640</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1855\" target=\"EntrezGene\">1855</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O14640&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "DVL1",
							"k": 12,
							"label": "DVL1\n12",
							"id": "DVL1",
							"aliases": []
						},
						"position": {
							"y": 559.7337531660113,
							"x": 760.5016188033279
						}
					},
					{
						"data": {
							"popup": "<b>SRC</b><hr /><b>Edge Rankings</b>: 130.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P12931\" target=\"UniProtKB\">P12931</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/6714\" target=\"EntrezGene\">6714</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P12931&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "SRC",
							"k": 130,
							"label": "SRC\n130",
							"id": "SRC",
							"aliases": []
						},
						"position": {
							"y": 838.6785236113918,
							"x": 367.06635608389803
						}
					},
					{
						"data": {
							"popup": "<b>PLCB2</b><hr /><b>Edge Rankings</b>: 139.0,140.0,200.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q00722\" target=\"UniProtKB\">Q00722</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/5330\" target=\"EntrezGene\">5330</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q00722&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "PLCB2",
							"k": 139,
							"label": "PLCB2\n139",
							"id": "PLCB2",
							"aliases": []
						},
						"position": {
							"y": 692.18797232868,
							"x": 1103.1981703363303
						}
					},
					{
						"data": {
							"popup": "<b>SMAD7</b><hr /><b>Edge Rankings</b>: 92.0,93.0,94.0,95.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O15105\" target=\"UniProtKB\">O15105</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4092\" target=\"EntrezGene\">4092</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O15105&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "SMAD7",
							"k": 92,
							"label": "SMAD7\n92",
							"id": "SMAD7",
							"aliases": []
						},
						"position": {
							"y": 1081.4225623481013,
							"x": 908.8384087227912
						}
					},
					{
						"data": {
							"popup": "<b>PLCB4</b><hr /><b>Edge Rankings</b>: 144.0,145.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q15147\" target=\"UniProtKB\">Q15147</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/5332\" target=\"EntrezGene\">5332</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q15147&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "PLCB4",
							"k": 144,
							"label": "PLCB4\n144",
							"id": "PLCB4",
							"aliases": []
						},
						"position": {
							"y": 762.5744038625733,
							"x": 1047.0668642496576
						}
					},
					{
						"data": {
							"popup": "<b>TCF3</b><hr /><b>Edge Rankings</b>: 127.0,129.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P15923\" target=\"UniProtKB\">P15923</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/6929\" target=\"EntrezGene\">6929</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P15923&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "TCF3",
							"k": 127,
							"label": "TCF3\n127",
							"id": "TCF3",
							"aliases": []
						},
						"position": {
							"y": 1083.0388803972648,
							"x": 598.5053432833859
						}
					},
					{
						"data": {
							"popup": "<b>PRKCA</b><hr /><b>Edge Rankings</b>: 120.0,140.0,143.0,145.0,152.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P17252\" target=\"UniProtKB\">P17252</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/5578\" target=\"EntrezGene\">5578</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P17252&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "PRKCA",
							"k": 120,
							"label": "PRKCA\n120",
							"id": "PRKCA",
							"aliases": []
						},
						"position": {
							"y": 903.5663260430264,
							"x": 683.9098414607242
						}
					},
					{
						"data": {
							"popup": "<b>PLCB1</b><hr /><b>Edge Rankings</b>: 151.0,152.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q9NQ66\" target=\"UniProtKB\">Q9NQ66</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/23236\" target=\"EntrezGene\">23236</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q9NQ66&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "PLCB1",
							"k": 151,
							"label": "PLCB1\n151",
							"id": "PLCB1",
							"aliases": []
						},
						"position": {
							"y": 762.5744038625733,
							"x": 957.0392392278278
						}
					},
					{
						"data": {
							"popup": "<b>PAX2</b><hr /><b>Edge Rankings</b>: 81.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q02962\" target=\"UniProtKB\">Q02962</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/5076\" target=\"EntrezGene\">5076</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q02962&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "PAX2",
							"k": 81,
							"label": "PAX2\n81",
							"id": "PAX2",
							"aliases": []
						},
						"position": {
							"y": 1083.0388803972648,
							"x": 676.088609643238
						}
					},
					{
						"data": {
							"popup": "<b>LEF1</b><hr /><b>Edge Rankings</b>: 95.0,108.0,111.0,114.0,117.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q9UJU2\" target=\"UniProtKB\">Q9UJU2</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/51176\" target=\"EntrezGene\">51176</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q9UJU2&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "LEF1",
							"k": 95,
							"label": "LEF1\n95",
							"id": "LEF1",
							"aliases": []
						},
						"position": {
							"y": 1083.0388803972648,
							"x": 753.6718760030888
						}
					},
					{
						"data": {
							"popup": "<b>ROR2</b><hr /><b>Edge Rankings</b>: 60.0,82.0,84.0,85.0,86.0,91.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/Q01974\" target=\"UniProtKB\">Q01974</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4920\" target=\"EntrezGene\">4920</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=Q01974&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "ROR2",
							"k": 60,
							"label": "ROR2\n60",
							"id": "ROR2",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 919.5356202041528
						}
					},
					{
						"data": {
							"popup": "<b>CSNK2A1</b><hr /><b>Edge Rankings</b>: 104.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P68400\" target=\"UniProtKB\">P68400</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1457\" target=\"EntrezGene\">1457</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P68400&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "CSNK2A1",
							"k": 104,
							"label": "CSNK2A1\n104",
							"id": "CSNK2A1",
							"aliases": []
						},
						"position": {
							"y": 692.1879723286804,
							"x": 900.907933141155
						}
					},
					{
						"data": {
							"popup": "<b>GNAQ</b><hr /><b>Edge Rankings</b>: 135.0,137.0,138.0,196.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P50148\" target=\"UniProtKB\">P50148</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/2776\" target=\"EntrezGene\">2776</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P50148&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "GNAQ",
							"k": 135,
							"label": "GNAQ\n135",
							"id": "GNAQ",
							"aliases": []
						},
						"position": {
							"y": 504.9196845107962,
							"x": 474.1853937959102
						}
					},
					{
						"data": {
							"popup": "<b>LRP6</b><hr /><b>Edge Rankings</b>: 4.0,27.0,29.0,71.0,72.0,76.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O75581\" target=\"UniProtKB\">O75581</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4040\" target=\"EntrezGene\">4040</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O75581&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "LRP6",
							"k": 4,
							"label": "LRP6\n4",
							"id": "LRP6",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 983.6540221544435
						}
					},
					{
						"data": {
							"popup": "<b>FZD6</b><hr /><b>Edge Rankings</b>: 2.0,16.0,18.0,19.0,185.0,196.0,200.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O60353\" target=\"UniProtKB\">O60353</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/8323\" target=\"EntrezGene\">8323</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O60353&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FZD6",
							"k": 2,
							"label": "FZD6\n2",
							"id": "FZD6",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 663.0620124029913
						}
					},
					{
						"data": {
							"popup": "<b>LRP5</b><hr /><b>Edge Rankings</b>: 24.0,26.0,73.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/O75197\" target=\"UniProtKB\">O75197</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4041\" target=\"EntrezGene\">4041</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=O75197&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "LRP5",
							"k": 24,
							"label": "LRP5\n24",
							"id": "LRP5",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 1047.7724241047335
						}
					},
					{
						"data": {
							"popup": "<b>WNT1</b><hr /><b>Edge Rankings</b>: 81.0,85.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P04628\" target=\"UniProtKB\">P04628</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/7471\" target=\"EntrezGene\">7471</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P04628&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "WNT1",
							"k": 81,
							"label": "WNT1\n81",
							"id": "WNT1",
							"aliases": []
						},
						"position": {
							"y": 775.484531248893,
							"x": 555.8280466665908
						}
					},
					{
						"data": {
							"popup": "<b>NOTCH1</b><hr /><b>Edge Rankings</b>: 113.0,114.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P46531\" target=\"UniProtKB\">P46531</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/4851\" target=\"EntrezGene\">4851</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P46531&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "NOTCH1",
							"k": 113,
							"label": "NOTCH1\n113",
							"id": "NOTCH1",
							"aliases": []
						},
						"position": {
							"y": 391.36558437556164,
							"x": 1178.680828086576
						}
					},
					{
						"data": {
							"popup": "<b>GSK3B</b><hr /><b>Edge Rankings</b>: 73.0,74.0,75.0,76.0,88.0,100.0,121.0,148.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P49841\" target=\"UniProtKB\">P49841</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/2932\" target=\"EntrezGene\">2932</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P49841&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "GSK3B",
							"k": 73,
							"label": "GSK3B\n73",
							"id": "GSK3B",
							"aliases": []
						},
						"position": {
							"y": 693.9494826775565,
							"x": 574.273815325399
						}
					},
					{
						"data": {
							"popup": "<b>MAPK1</b><hr /><b>Edge Rankings</b>: 129.0,131.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P28482\" target=\"UniProtKB\">P28482</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/5594\" target=\"EntrezGene\">5594</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P28482&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "MAPK1",
							"k": 129,
							"label": "MAPK1\n129",
							"id": "MAPK1",
							"aliases": []
						},
						"position": {
							"y": 838.6785236113918,
							"x": 278.15676090640403
						}
					},
					{
						"data": {
							"popup": "<b>UBA52</b><hr /><b>Edge Rankings</b>: 72.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P62987\" target=\"UniProtKB\">P62987</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/7311\" target=\"EntrezGene\">7311</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P62987&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "UBA52",
							"k": 72,
							"label": "UBA52\n72",
							"id": "UBA52",
							"aliases": []
						},
						"position": {
							"y": 1012.6541105163095,
							"x": 919.4555848046285
						}
					},
					{
						"data": {
							"popup": "<b>PIK3CA</b><hr /><b>Edge Rankings</b>: 132.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P42336\" target=\"UniProtKB\">P42336</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/5290\" target=\"EntrezGene\">5290</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P42336&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "PIK3CA",
							"k": 132,
							"label": "PIK3CA\n132",
							"id": "PIK3CA",
							"aliases": []
						},
						"position": {
							"y": 754.1204737566721,
							"x": 250.68218503356155
						}
					},
					{
						"data": {
							"popup": "<b>APC</b><hr /><b>Edge Rankings</b>: 12.0,14.0,24.0,61.0,73.0,91.0,99.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P25054\" target=\"UniProtKB\">P25054</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/324\" target=\"EntrezGene\">324</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P25054&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "APC",
							"k": 12,
							"label": "APC\n12",
							"id": "APC",
							"aliases": []
						},
						"position": {
							"y": 1083.0388803972648,
							"x": 831.2551423629405
						}
					},
					{
						"data": {
							"popup": "<b>FLNA</b><hr /><b>Edge Rankings</b>: 91.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P21333\" target=\"UniProtKB\">P21333</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/2316\" target=\"EntrezGene\">2316</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P21333&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "FLNA",
							"k": 91,
							"label": "FLNA\n91",
							"id": "FLNA",
							"aliases": []
						},
						"position": {
							"y": 962.5711668917902,
							"x": 895.2795453072417
						}
					},
					{
						"data": {
							"popup": "<b>CFTR</b><hr /><b>Edge Rankings</b>: 59.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P13569\" target=\"UniProtKB\">P13569</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1080\" target=\"EntrezGene\">1080</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P13569&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "CFTR",
							"k": 59,
							"label": "CFTR\n59",
							"id": "CFTR",
							"aliases": []
						},
						"position": {
							"y": 906.1777453989223,
							"x": 208.30615262346257
						}
					},
					{
						"data": {
							"popup": "<b>CSNK2B</b><hr /><b>Edge Rankings</b>: 103.0<hr /><b>Uniprot ID:</b> <a style=\"color:blue\" href=\"http://www.uniprot.org/uniprot/P67870\" target=\"UniProtKB\">P67870</a><br><b>Entrez ID:</b> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/gene/1460\" target=\"EntrezGene\">1460</a><br><b>Search in </b> <a style=\"color:blue\" href=\"http://www.ihop-net.org/UniPub/iHOP/?search=P67870&field=UNIPROT__AC&ncbi_tax_id=9606\" target=\"IHOP\">IHOP</a>",
							"name": "CSNK2B",
							"k": 103,
							"label": "CSNK2B\n103",
							"id": "CSNK2B",
							"aliases": []
						},
						"position": {
							"y": 604.4175278274598,
							"x": 920.9409643428812
						}
					}
				],
				"edges": [ {
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 81.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15454084\" target=\"PubMed\">pmid:15454084</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15454084\" target=\"PubMed\">pmid:15454084</a> </FONT></li></ul><dl>",
							"target": "WNT1",
							"k": 81,
							"source": "RYK",
							"is_directed": false,
							"id": "RYK-WNT1",
							"name": "RYK-WNT1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.3826<hr /><b>Edge Ranking</b>: 79.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15454084\" target=\"PubMed\">pmid:15454084</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15454084\" target=\"PubMed\">pmid:15454084</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 79,
							"source": "RYK",
							"is_directed": false,
							"id": "RYK-DVL1",
							"name": "RYK-DVL1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7262<hr /><b>Edge Ranking</b>: 59.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from IntAct: MI:0914 (association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-12000\" target=\"IMEX\">imex:IM-12000</a></FONT></li><li><FONT COLOR=\"black\">from IntAct: MI:0914 (association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17110338\" target=\"PubMed\">pmid:17110338</a></FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17145710\" target=\"PubMed\">pmid:17145710</a> </FONT></li></ul><dl>",
							"target": "CFTR",
							"k": 59,
							"source": "RYK",
							"is_directed": false,
							"id": "RYK-CFTR",
							"name": "RYK-CFTR"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 109.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=3) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/None\" target=\"PubMed\">pmid:None</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12000714\" target=\"PubMed\">pmid:12000714</a> </FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 109,
							"source": "SMAD4",
							"is_directed": false,
							"id": "SMAD4-CTNNB1",
							"name": "SMAD4-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 111.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,activation)</FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10890911\" target=\"PubMed\">pmid:10890911</a> </FONT></li></ul><dl>",
							"target": "LEF1",
							"k": 111,
							"source": "SMAD4",
							"is_directed": true,
							"id": "SMAD4-LEF1",
							"name": "SMAD4-LEF1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 110.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17183365\" target=\"PubMed\">pmid:17183365</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-11264\" target=\"IMEX\">imex:IM-11264</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0018 (two hybrid) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15231748\" target=\"PubMed\">pmid:15231748</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from BIND:  MI:0018 (2 hybrid) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15231748\" target=\"PubMed\">pmid:15231748</a></FONT></li><li><FONT COLOR=\"black\">from BIND:  MI:0019 (coip) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15761153\" target=\"PubMed\">pmid:15761153</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome: MI:0915 (physical association) MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17367534\" target=\"PubMed\">pmid:17367534</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">TGF-beta signaling pathway (PPrel,group-entry)</FONT></li><li><FONT COLOR=\"black\">TGF-beta signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,binding/association)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,group-entry)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,binding/association)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15231748\" target=\"PubMed\">pmid:15231748</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16189514\" target=\"PubMed\">pmid:16189514</a> </FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 110,
							"source": "SMAD4",
							"is_directed": false,
							"id": "SMAD4-SMAD1",
							"name": "SMAD4-SMAD1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 130.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Oxytocin signaling pathway (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "SRC",
							"k": 130,
							"source": "GNAO1",
							"is_directed": true,
							"id": "GNAO1-SRC",
							"name": "GNAO1-SRC"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 127.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Retrograde endocannabinoid signaling (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Circadian entrainment (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "MAPK3",
							"k": 127,
							"source": "GNAO1",
							"is_directed": true,
							"id": "GNAO1-MAPK3",
							"name": "GNAO1-MAPK3"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 132.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/179530\" target=\"OMIM\">doi:00179530</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/167000\" target=\"OMIM\">doi:00167000</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/114480\" target=\"OMIM\">doi:00114480</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Oxytocin signaling pathway (PPrel,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Toxoplasmosis (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "PIK3CA",
							"k": 132,
							"source": "GNAO1",
							"is_directed": true,
							"id": "GNAO1-PIK3CA",
							"name": "GNAO1-PIK3CA"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 126.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 126,
							"source": "GNAO1",
							"is_directed": true,
							"id": "GNAO1-DVL2",
							"name": "GNAO1-DVL2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 134.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 134,
							"source": "GNAO1",
							"is_directed": true,
							"id": "GNAO1-DVL3",
							"name": "GNAO1-DVL3"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 129.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Retrograde endocannabinoid signaling (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Circadian entrainment (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "MAPK1",
							"k": 129,
							"source": "GNAO1",
							"is_directed": true,
							"id": "GNAO1-MAPK1",
							"name": "GNAO1-MAPK1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 133.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Oxytocin signaling pathway (PPrel,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Cholinergic synapse (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Toxoplasmosis (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "PIK3R1",
							"k": 133,
							"source": "GNAO1",
							"is_directed": true,
							"id": "GNAO1-PIK3R1",
							"name": "GNAO1-PIK3R1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 124.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19705439\" target=\"PubMed\">pmid:19705439</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19705439\" target=\"PubMed\">pmid:19705439</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19561403\" target=\"PubMed\">pmid:19561403</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19705439\" target=\"PubMed\">pmid:19705439</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 124,
							"source": "GNAO1",
							"is_directed": true,
							"id": "GNAO1-DVL1",
							"name": "GNAO1-DVL1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.6296<hr /><b>Edge Ranking</b>: 71.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from BIND:  MI:0019 (coip) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15761153\" target=\"PubMed\">pmid:15761153</a></FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 71,
							"source": "RPS27A",
							"is_directed": false,
							"id": "RPS27A-SMAD1",
							"name": "RPS27A-SMAD1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 139.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/155255\" target=\"OMIM\">doi:00155255</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/156845\" target=\"OMIM\">doi:00156845</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/116952\" target=\"OMIM\">doi:00116952</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0064 (interologs mapping) </FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/09233779\" target=\"PubMed\">pmid:09233779</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/09233779\" target=\"PubMed\">pmid:09233779</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Adherens junction (PPrel,inhibition,phosphorylation)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=3) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/None\" target=\"PubMed\">pmid:None</a> </FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 139,
							"source": "EGFR",
							"is_directed": true,
							"id": "EGFR-CTNNB1",
							"name": "EGFR-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 112.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18952601\" target=\"PubMed\">pmid:18952601</a></FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">Apoptosis In The Ear - 25 9 09 Arn (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15292219\" target=\"PubMed\">pmid:15292219</a> </FONT></li><li><FONT COLOR=\"black\">Hearing and Vision SMALL 2910 09 ARNON (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15292219\" target=\"PubMed\">pmid:15292219</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Complex)</FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15292219\" target=\"PubMed\">pmid:15292219</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12000714\" target=\"PubMed\">pmid:12000714</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15292219\" target=\"PubMed\">pmid:15292219</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Complex)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 112,
							"source": "SMAD2",
							"is_directed": false,
							"id": "SMAD2-CTNNB1",
							"name": "SMAD2-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 115.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16713569\" target=\"PubMed\">pmid:16713569</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11387212\" target=\"PubMed\">pmid:11387212</a> </FONT></li></ul><dl>",
							"target": "DAB2",
							"k": 115,
							"source": "SMAD2",
							"is_directed": false,
							"id": "SMAD2-DAB2",
							"name": "SMAD2-DAB2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 117.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10890911\" target=\"PubMed\">pmid:10890911</a> </FONT></li></ul><dl>",
							"target": "LEF1",
							"k": 117,
							"source": "SMAD2",
							"is_directed": false,
							"id": "SMAD2-LEF1",
							"name": "SMAD2-LEF1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 116.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0676 (tandem affinity purification) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18729074\" target=\"PubMed\">pmid:18729074</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 116,
							"source": "SMAD2",
							"is_directed": true,
							"id": "SMAD2-SMAD1",
							"name": "SMAD2-SMAD1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 105.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/180630\" target=\"OMIM\">doi:00180630</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/190198\" target=\"OMIM\">doi:00190198</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/190080\" target=\"OMIM\">doi:00190080</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) </FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15292219\" target=\"PubMed\">pmid:15292219</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=3) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/None\" target=\"PubMed\">pmid:None</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15292219\" target=\"PubMed\">pmid:15292219</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12000714\" target=\"PubMed\">pmid:12000714</a> </FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 105,
							"source": "SMAD3",
							"is_directed": false,
							"id": "SMAD3-CTNNB1",
							"name": "SMAD3-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 106.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/601236\" target=\"OMIM\">doi:00601236</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11387212\" target=\"PubMed\">pmid:11387212</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11387212\" target=\"PubMed\">pmid:11387212</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16713569\" target=\"PubMed\">pmid:16713569</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11387212\" target=\"PubMed\">pmid:11387212</a> </FONT></li></ul><dl>",
							"target": "DAB2",
							"k": 106,
							"source": "SMAD3",
							"is_directed": false,
							"id": "SMAD3-DAB2",
							"name": "SMAD3-DAB2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 108.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14991726\" target=\"PubMed\">pmid:14991726</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10890911\" target=\"PubMed\">pmid:10890911</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/605523\" target=\"OMIM\">doi:00605523</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) </FONT></li><li><FONT COLOR=\"black\">from BIND:  MI:0019 (coip) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15750622\" target=\"PubMed\">pmid:15750622</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10890911\" target=\"PubMed\">pmid:10890911</a> </FONT></li></ul><dl>",
							"target": "LEF1",
							"k": 108,
							"source": "SMAD3",
							"is_directed": false,
							"id": "SMAD3-LEF1",
							"name": "SMAD3-LEF1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 107.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from BIND:  MI:0019 (coip) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15761153\" target=\"PubMed\">pmid:15761153</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0676 (tandem affinity purification) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18729074\" target=\"PubMed\">pmid:18729074</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 107,
							"source": "SMAD3",
							"is_directed": true,
							"id": "SMAD3-SMAD1",
							"name": "SMAD3-SMAD1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 98.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/116806\" target=\"OMIM\">doi:00116806</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/164831\" target=\"OMIM\">doi:00164831</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/114500\" target=\"OMIM\">doi:00114500</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0217 (phosphorylation reaction) MI:0423 (in-gel kinase assay) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17287208\" target=\"PubMed\">pmid:17287208</a></FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 98,
							"source": "AKT1",
							"is_directed": false,
							"id": "AKT1-CTNNB1",
							"name": "AKT1-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 143.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome: MI:0914 (association) MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17367534\" target=\"PubMed\">pmid:17367534</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Long-term potentiation (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Long-term depression (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">GnRH signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Gap junction (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">African trypanosomiasis (PPrel,compound,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Circadian entrainment (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Amoebiasis (PPrel,compound,activation)</FONT></li><li><FONT COLOR=\"black\">Calcium signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Melanogenesis (PPrel,compound)</FONT></li></ul><dl>",
							"target": "PRKCA",
							"k": 143,
							"source": "PLCB3",
							"is_directed": true,
							"id": "PLCB3-PRKCA",
							"name": "PLCB3-PRKCA"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 141.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0096 (pull down) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11285285\" target=\"PubMed\">pmid:11285285</a></FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11285285\" target=\"PubMed\">pmid:11285285</a> </FONT></li></ul><dl>",
							"target": "SLC9A3R1",
							"k": 141,
							"source": "PLCB3",
							"is_directed": false,
							"id": "PLCB3-SLC9A3R1",
							"name": "PLCB3-SLC9A3R1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 142.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Oxytocin signaling pathway (PPrel,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Rap1 signaling pathway (PPrel,activation)</FONT></li></ul><dl>",
							"target": "EGFR",
							"k": 142,
							"source": "PLCB3",
							"is_directed": false,
							"id": "PLCB3-EGFR",
							"name": "PLCB3-EGFR"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 10.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15647854\" target=\"PubMed\">pmid:15647854</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12941626\" target=\"PubMed\">pmid:12941626</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/606147\" target=\"OMIM\">doi:00606147</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0064 (interologs mapping) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 10,
							"source": "FZD10",
							"is_directed": true,
							"id": "FZD10-CTNNB1",
							"name": "FZD10-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 53.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 53,
							"source": "FZD10",
							"is_directed": true,
							"id": "FZD10-DVL2",
							"name": "FZD10-DVL2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 51.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 51,
							"source": "FZD10",
							"is_directed": true,
							"id": "FZD10-DVL1",
							"name": "FZD10-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 54.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 54,
							"source": "FZD10",
							"is_directed": true,
							"id": "FZD10-DVL3",
							"name": "FZD10-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 11.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/604157\" target=\"OMIM\">doi:00604157</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/603408\" target=\"OMIM\">doi:00603408</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/605083\" target=\"OMIM\">doi:00605083</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0064 (interologs mapping) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 11,
							"source": "FZD1",
							"is_directed": true,
							"id": "FZD1-CTNNB1",
							"name": "FZD1-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 58.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 58,
							"source": "FZD1",
							"is_directed": true,
							"id": "FZD1-DVL3",
							"name": "FZD1-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 55.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 55,
							"source": "FZD1",
							"is_directed": true,
							"id": "FZD1-DVL1",
							"name": "FZD1-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 57.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11742073\" target=\"PubMed\">pmid:11742073</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/601365\" target=\"OMIM\">doi:00601365</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/604579\" target=\"OMIM\">doi:00604579</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 57,
							"source": "FZD1",
							"is_directed": true,
							"id": "FZD1-DVL2",
							"name": "FZD1-DVL2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 36.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 36,
							"source": "FZD2",
							"is_directed": true,
							"id": "FZD2-DVL2",
							"name": "FZD2-DVL2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 6.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 6,
							"source": "FZD2",
							"is_directed": true,
							"id": "FZD2-CTNNB1",
							"name": "FZD2-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 34.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 34,
							"source": "FZD2",
							"is_directed": true,
							"id": "FZD2-DVL1",
							"name": "FZD2-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 37.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 37,
							"source": "FZD2",
							"is_directed": true,
							"id": "FZD2-DVL3",
							"name": "FZD2-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 44.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16865240\" target=\"PubMed\">pmid:16865240</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16273260\" target=\"PubMed\">pmid:16273260</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16487141\" target=\"PubMed\">pmid:16487141</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 44,
							"source": "FZD3",
							"is_directed": true,
							"id": "FZD3-DVL2",
							"name": "FZD3-DVL2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 45.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 45,
							"source": "FZD3",
							"is_directed": true,
							"id": "FZD3-DVL3",
							"name": "FZD3-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 8.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15754011\" target=\"PubMed\">pmid:15754011</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/606143\" target=\"OMIM\">doi:00606143</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15647854\" target=\"PubMed\">pmid:15647854</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 8,
							"source": "FZD3",
							"is_directed": true,
							"id": "FZD3-CTNNB1",
							"name": "FZD3-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 42.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 42,
							"source": "FZD3",
							"is_directed": true,
							"id": "FZD3-DVL1",
							"name": "FZD3-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 48.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/602151\" target=\"OMIM\">doi:00602151</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/107941\" target=\"OMIM\">doi:00107941</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/604579\" target=\"OMIM\">doi:00604579</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) </FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>NetPath</dt><ul></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12958364\" target=\"PubMed\">pmid:12958364</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 48,
							"source": "FZD4",
							"is_directed": true,
							"id": "FZD4-DVL2",
							"name": "FZD4-DVL2"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 50.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 50,
							"source": "FZD4",
							"is_directed": true,
							"id": "FZD4-DVL3",
							"name": "FZD4-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 49.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dl>",
							"target": "SLC9A3R1",
							"k": 49,
							"source": "FZD4",
							"is_directed": false,
							"id": "FZD4-SLC9A3R1",
							"name": "FZD4-SLC9A3R1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 46.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 46,
							"source": "FZD4",
							"is_directed": true,
							"id": "FZD4-DVL1",
							"name": "FZD4-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 9.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12072409\" target=\"PubMed\">pmid:12072409</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10893270\" target=\"PubMed\">pmid:10893270</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/613138\" target=\"OMIM\">doi:00613138</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 9,
							"source": "FZD4",
							"is_directed": true,
							"id": "FZD4-CTNNB1",
							"name": "FZD4-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 32.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17939044\" target=\"PubMed\">pmid:17939044</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 32,
							"source": "FZD5",
							"is_directed": true,
							"id": "FZD5-DVL2",
							"name": "FZD5-DVL2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 33.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 33,
							"source": "FZD5",
							"is_directed": true,
							"id": "FZD5-DVL3",
							"name": "FZD5-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 5.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12165812\" target=\"PubMed\">pmid:12165812</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12857724\" target=\"PubMed\">pmid:12857724</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/606146\" target=\"OMIM\">doi:00606146</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0064 (interologs mapping) </FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 5,
							"source": "FZD5",
							"is_directed": true,
							"id": "FZD5-CTNNB1",
							"name": "FZD5-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 30.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 30,
							"source": "FZD5",
							"is_directed": true,
							"id": "FZD5-DVL1",
							"name": "FZD5-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.1995<hr /><b>Edge Ranking</b>: 88.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0018 (two hybrid) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21900206\" target=\"PubMed\">pmid:21900206</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0018 (two hybrid) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-16799\" target=\"IMEX\">imex:IM-16799</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17400545\" target=\"PubMed\">pmid:17400545</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/09054360\" target=\"PubMed\">pmid:09054360</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12244165\" target=\"PubMed\">pmid:12244165</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li></ul><dl>",
							"target": "GSK3B",
							"k": 88,
							"source": "FZD5",
							"is_directed": false,
							"id": "FZD5-GSK3B",
							"name": "FZD5-GSK3B"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 25.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17318191\" target=\"PubMed\">pmid:17318191</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-10860\" target=\"IMEX\">imex:IM-10860</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-11642\" target=\"IMEX\">imex:IM-11642</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19166851\" target=\"PubMed\">pmid:19166851</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17318191\" target=\"PubMed\">pmid:17318191</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-10860\" target=\"IMEX\">imex:IM-10860</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/114550\" target=\"OMIM\">doi:00114550</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/104311\" target=\"OMIM\">doi:00104311</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/114500\" target=\"OMIM\">doi:00114500</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/09734785\" target=\"PubMed\">pmid:09734785</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/09734785\" target=\"PubMed\">pmid:09734785</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-11642\" target=\"IMEX\">imex:IM-11642</a></FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19166851\" target=\"PubMed\">pmid:19166851</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17208333\" target=\"PubMed\">pmid:17208333</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,group-entry)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,group-entry)</FONT></li></ul><dt>NetPath</dt><ul></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Complex)</FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Complex)</FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/9734785\" target=\"PubMed\">pmid:9734785</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17318191\" target=\"PubMed\">pmid:17318191</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12000790\" target=\"PubMed\">pmid:12000790</a> </FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 25,
							"source": "AXIN1",
							"is_directed": false,
							"id": "AXIN1-CTNNB1",
							"name": "AXIN1-CTNNB1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 24.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0914 (association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19131971\" target=\"PubMed\">pmid:19131971</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0914 (association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-13842\" target=\"IMEX\">imex:IM-13842</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,group-entry)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,group-entry)</FONT></li><li><FONT COLOR=\"black\">Endometrial cancer (PPrel,group-entry)</FONT></li></ul><dt>NetPath</dt><ul></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Complex)</FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=3) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/None\" target=\"PubMed\">pmid:None</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=3) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10021369\" target=\"PubMed\">pmid:10021369</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10330403\" target=\"PubMed\">pmid:10330403</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Complex)</FONT></li></ul><dl>",
							"target": "APC",
							"k": 24,
							"source": "AXIN1",
							"is_directed": false,
							"id": "AXIN1-APC",
							"name": "AXIN1-APC"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 3.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15901282\" target=\"PubMed\">pmid:15901282</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17576136\" target=\"PubMed\">pmid:17576136</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17804636\" target=\"PubMed\">pmid:17804636</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0064 (interologs mapping) </FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 3,
							"source": "FZD7",
							"is_directed": true,
							"id": "FZD7-CTNNB1",
							"name": "FZD7-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 23.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Interoporc:  MI:0064 (interologs mapping) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18508856\" target=\"PubMed\">pmid:18508856</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 23,
							"source": "FZD7",
							"is_directed": true,
							"id": "FZD7-DVL3",
							"name": "FZD7-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 20.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 20,
							"source": "FZD7",
							"is_directed": true,
							"id": "FZD7-DVL1",
							"name": "FZD7-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 22.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17716656\" target=\"PubMed\">pmid:17716656</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/601365\" target=\"OMIM\">doi:00601365</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 22,
							"source": "FZD7",
							"is_directed": true,
							"id": "FZD7-DVL2",
							"name": "FZD7-DVL2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 40.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/601365\" target=\"OMIM\">doi:00601365</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 40,
							"source": "FZD8",
							"is_directed": true,
							"id": "FZD8-DVL2",
							"name": "FZD8-DVL2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 41.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 41,
							"source": "FZD8",
							"is_directed": true,
							"id": "FZD8-DVL3",
							"name": "FZD8-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 7.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/605189\" target=\"OMIM\">doi:00605189</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/606146\" target=\"OMIM\">doi:00606146</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/605083\" target=\"OMIM\">doi:00605083</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0064 (interologs mapping) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 7,
							"source": "FZD8",
							"is_directed": true,
							"id": "FZD8-CTNNB1",
							"name": "FZD8-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 38.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 38,
							"source": "FZD8",
							"is_directed": true,
							"id": "FZD8-DVL1",
							"name": "FZD8-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 151.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li></ul><dl>",
							"target": "PLCB1",
							"k": 151,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-PLCB1",
							"name": "FZD9-PLCB1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 139.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li></ul><dl>",
							"target": "PLCB2",
							"k": 139,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-PLCB2",
							"name": "FZD9-PLCB2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 141.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li></ul><dl>",
							"target": "PLCB3",
							"k": 141,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-PLCB3",
							"name": "FZD9-PLCB3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 144.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li></ul><dl>",
							"target": "PLCB4",
							"k": 144,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-PLCB4",
							"name": "FZD9-PLCB4"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 135.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "GNAQ",
							"k": 135,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-GNAQ",
							"name": "FZD9-GNAQ"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 124.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "GNAO1",
							"k": 124,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-GNAO1",
							"name": "FZD9-GNAO1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 1.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 1,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-CTNNB1",
							"name": "FZD9-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 15.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 15,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-DVL3",
							"name": "FZD9-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 12.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 12,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-DVL1",
							"name": "FZD9-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 14.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 14,
							"source": "FZD9",
							"is_directed": true,
							"id": "FZD9-DVL2",
							"name": "FZD9-DVL2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 49.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/601728\" target=\"OMIM\">doi:00601728</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17325659\" target=\"PubMed\">pmid:17325659</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17900349\" target=\"PubMed\">pmid:17900349</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12830000\" target=\"PubMed\">pmid:12830000</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0059 (gst pull down) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17242191\" target=\"PubMed\">pmid:17242191</a></FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 49,
							"source": "SLC9A3R1",
							"is_directed": false,
							"id": "SLC9A3R1-CTNNB1",
							"name": "SLC9A3R1-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 60.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dl>",
							"target": "DAB2",
							"k": 60,
							"source": "MAP3K7",
							"is_directed": false,
							"id": "MAP3K7-DAB2",
							"name": "MAP3K7-DAB2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 120.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) </FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12958364\" target=\"PubMed\">pmid:12958364</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12958364\" target=\"PubMed\">pmid:12958364</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12958364\" target=\"PubMed\">pmid:12958364</a> </FONT></li></ul><dl>",
							"target": "PRKCA",
							"k": 120,
							"source": "DVL2",
							"is_directed": false,
							"id": "DVL2-PRKCA",
							"name": "DVL2-PRKCA"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 14.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20224554\" target=\"PubMed\">pmid:20224554</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-15079\" target=\"IMEX\">imex:IM-15079</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li></ul><dl>",
							"target": "APC",
							"k": 14,
							"source": "DVL2",
							"is_directed": false,
							"id": "DVL2-APC",
							"name": "DVL2-APC"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 118.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/601365\" target=\"OMIM\">doi:00601365</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10329628\" target=\"PubMed\">pmid:10329628</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10829020\" target=\"PubMed\">pmid:10829020</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) </FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li></ul><dt>NetPath</dt><ul></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10329628\" target=\"PubMed\">pmid:10329628</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16713569\" target=\"PubMed\">pmid:16713569</a> </FONT></li></ul><dl>",
							"target": "AXIN1",
							"k": 118,
							"source": "DVL2",
							"is_directed": false,
							"id": "DVL2-AXIN1",
							"name": "DVL2-AXIN1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 121.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11290401\" target=\"PubMed\">pmid:11290401</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/107941\" target=\"OMIM\">doi:00107941</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10829020\" target=\"PubMed\">pmid:10829020</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Melanogenesis (PPrel,inhibition)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16303557\" target=\"PubMed\">pmid:16303557</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14734535\" target=\"PubMed\">pmid:14734535</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16303557\" target=\"PubMed\">pmid:16303557</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14734535\" target=\"PubMed\">pmid:14734535</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> </FONT></li></ul><dl>",
							"target": "GSK3B",
							"k": 121,
							"source": "DVL2",
							"is_directed": true,
							"id": "DVL2-GSK3B",
							"name": "DVL2-GSK3B"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.4572<hr /><b>Edge Ranking</b>: 61.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li></ul><dl>",
							"target": "APC",
							"k": 61,
							"source": "DVL3",
							"is_directed": false,
							"id": "DVL3-APC",
							"name": "DVL3-APC"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 15.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16713569\" target=\"PubMed\">pmid:16713569</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12805222\" target=\"PubMed\">pmid:12805222</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12805222\" target=\"PubMed\">pmid:12805222</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16713569\" target=\"PubMed\">pmid:16713569</a> </FONT></li></ul><dl>",
							"target": "DAB2",
							"k": 15,
							"source": "DVL3",
							"is_directed": false,
							"id": "DVL3-DAB2",
							"name": "DVL3-DAB2"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 146.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Interoporc:  MI:0064 (interologs mapping) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18508856\" target=\"PubMed\">pmid:18508856</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li></ul><dt>NetPath</dt><ul></ul><dl>",
							"target": "AXIN1",
							"k": 146,
							"source": "DVL3",
							"is_directed": false,
							"id": "DVL3-AXIN1",
							"name": "DVL3-AXIN1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 148.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Melanogenesis (PPrel,inhibition)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14734535\" target=\"PubMed\">pmid:14734535</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16303557\" target=\"PubMed\">pmid:16303557</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16303557\" target=\"PubMed\">pmid:16303557</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14734535\" target=\"PubMed\">pmid:14734535</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> </FONT></li></ul><dl>",
							"target": "GSK3B",
							"k": 148,
							"source": "DVL3",
							"is_directed": true,
							"id": "DVL3-GSK3B",
							"name": "DVL3-GSK3B"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 99.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from IntAct: MI:0217 (phosphorylation reaction) MI:0424 (protein kinase assay) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17218255\" target=\"PubMed\">pmid:17218255</a></FONT></li><li><FONT COLOR=\"black\">from IntAct: MI:0217 (phosphorylation reaction) MI:0424 (protein kinase assay) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-11852\" target=\"IMEX\">imex:IM-11852</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17145710\" target=\"PubMed\">pmid:17145710</a> </FONT></li></ul><dl>",
							"target": "APC",
							"k": 99,
							"source": "CSNK1E",
							"is_directed": true,
							"id": "CSNK1E-APC",
							"name": "CSNK1E-APC"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 133.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0407 (direct interaction) MI:0081 (peptide array) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17474147\" target=\"PubMed\">pmid:17474147</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20601259\" target=\"PubMed\">pmid:20601259</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17474147\" target=\"PubMed\">pmid:17474147</a></FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0081 (peptide array) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-11903\" target=\"IMEX\">imex:IM-11903</a></FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0081 (peptide array) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17474147\" target=\"PubMed\">pmid:17474147</a></FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17474147\" target=\"PubMed\">pmid:17474147</a> </FONT></li></ul><dl>",
							"target": "DAB2",
							"k": 133,
							"source": "PIK3R1",
							"is_directed": false,
							"id": "PIK3R1-DAB2",
							"name": "PIK3R1-DAB2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 26.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0096 (pull down) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-11003\" target=\"IMEX\">imex:IM-11003</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0096 (pull down) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17057644\" target=\"PubMed\">pmid:17057644</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/116805\" target=\"OMIM\">doi:00116805</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/104311\" target=\"OMIM\">doi:00104311</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/114020\" target=\"OMIM\">doi:00114020</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0064 (interologs mapping) </FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) </FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18948590\" target=\"PubMed\">pmid:18948590</a></FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-14345\" target=\"IMEX\">imex:IM-14345</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome: MI:0915 (physical association) MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17367534\" target=\"PubMed\">pmid:17367534</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li><li><FONT COLOR=\"black\">BDNF</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17057644\" target=\"PubMed\">pmid:17057644</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12604612\" target=\"PubMed\">pmid:12604612</a> </FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 26,
							"source": "CDH2",
							"is_directed": false,
							"id": "CDH2-CTNNB1",
							"name": "CDH2-CTNNB1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 128.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">TGF-beta signaling pathway (PPrel,inhibition,phosphorylation)</FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 128,
							"source": "MAPK3",
							"is_directed": true,
							"id": "MAPK3-SMAD1",
							"name": "MAPK3-SMAD1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 127.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Notch</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14592976\" target=\"PubMed\">pmid:14592976</a> </FONT></li></ul><dl>",
							"target": "TCF3",
							"k": 127,
							"source": "MAPK3",
							"is_directed": true,
							"id": "MAPK3-TCF3",
							"name": "MAPK3-TCF3"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 96.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li></ul><dt>NetPath</dt><ul></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/9482734\" target=\"PubMed\">pmid:9482734</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18339531\" target=\"PubMed\">pmid:18339531</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11278246\" target=\"PubMed\">pmid:11278246</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10428961\" target=\"PubMed\">pmid:10428961</a> </FONT></li></ul><dl>",
							"target": "AXIN1",
							"k": 96,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-AXIN1",
							"name": "DVL1-AXIN1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 109.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12650946\" target=\"PubMed\">pmid:12650946</a> </FONT></li></ul><dl>",
							"target": "SMAD4",
							"k": 109,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-SMAD4",
							"name": "DVL1-SMAD4"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 92.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12650946\" target=\"PubMed\">pmid:12650946</a> </FONT></li></ul><dl>",
							"target": "SMAD7",
							"k": 92,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-SMAD7",
							"name": "DVL1-SMAD7"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 113.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Notch signaling pathway (PPrel,inhibition)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/8596950\" target=\"PubMed\">pmid:8596950</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18651172\" target=\"PubMed\">pmid:18651172</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12015117\" target=\"PubMed\">pmid:12015117</a> </FONT></li></ul><dl>",
							"target": "NOTCH1",
							"k": 113,
							"source": "DVL1",
							"is_directed": true,
							"id": "DVL1-NOTCH1",
							"name": "DVL1-NOTCH1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 112.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12650946\" target=\"PubMed\">pmid:12650946</a> </FONT></li></ul><dl>",
							"target": "SMAD2",
							"k": 112,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-SMAD2",
							"name": "DVL1-SMAD2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 13.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16621789\" target=\"PubMed\">pmid:16621789</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12650946\" target=\"PubMed\">pmid:12650946</a> </FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 13,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-SMAD1",
							"name": "DVL1-SMAD1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 105.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12650946\" target=\"PubMed\">pmid:12650946</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15955531\" target=\"PubMed\">pmid:15955531</a> </FONT></li></ul><dl>",
							"target": "SMAD3",
							"k": 105,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-SMAD3",
							"name": "DVL1-SMAD3"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 98.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12533515\" target=\"PubMed\">pmid:12533515</a> </FONT></li></ul><dl>",
							"target": "AKT1",
							"k": 98,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-AKT1",
							"name": "DVL1-AKT1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 99.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,group-entry)</FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14966280\" target=\"PubMed\">pmid:14966280</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14966280\" target=\"PubMed\">pmid:14966280</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20215527\" target=\"PubMed\">pmid:20215527</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14966280\" target=\"PubMed\">pmid:14966280</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14966280\" target=\"PubMed\">pmid:14966280</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10517632\" target=\"PubMed\">pmid:10517632</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16965538\" target=\"PubMed\">pmid:16965538</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14966280\" target=\"PubMed\">pmid:14966280</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20215527\" target=\"PubMed\">pmid:20215527</a> </FONT></li></ul><dl>",
							"target": "CSNK1E",
							"k": 99,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-CSNK1E",
							"name": "DVL1-CSNK1E"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 12.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0914 (association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20224554\" target=\"PubMed\">pmid:20224554</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0914 (association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-15079\" target=\"IMEX\">imex:IM-15079</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20224554\" target=\"PubMed\">pmid:20224554</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-15079\" target=\"IMEX\">imex:IM-15079</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li></ul><dl>",
							"target": "APC",
							"k": 12,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-APC",
							"name": "DVL1-APC"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 100.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Melanogenesis (PPrel,inhibition)</FONT></li></ul><dt>NetPath</dt><ul></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14734535\" target=\"PubMed\">pmid:14734535</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16303557\" target=\"PubMed\">pmid:16303557</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16303557\" target=\"PubMed\">pmid:16303557</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14734535\" target=\"PubMed\">pmid:14734535</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> </FONT></li></ul><dl>",
							"target": "GSK3B",
							"k": 100,
							"source": "DVL1",
							"is_directed": true,
							"id": "DVL1-GSK3B",
							"name": "DVL1-GSK3B"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 103.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10806215\" target=\"PubMed\">pmid:10806215</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10806215\" target=\"PubMed\">pmid:10806215</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10806215\" target=\"PubMed\">pmid:10806215</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/9214626\" target=\"PubMed\">pmid:9214626</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10806215\" target=\"PubMed\">pmid:10806215</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> </FONT></li></ul><dl>",
							"target": "CSNK2B",
							"k": 103,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-CSNK2B",
							"name": "DVL1-CSNK2B"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 104.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,binding/association)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10806215\" target=\"PubMed\">pmid:10806215</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10806215\" target=\"PubMed\">pmid:10806215</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10806215\" target=\"PubMed\">pmid:10806215</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/9214626\" target=\"PubMed\">pmid:9214626</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10806215\" target=\"PubMed\">pmid:10806215</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> </FONT></li></ul><dl>",
							"target": "CSNK2A1",
							"k": 104,
							"source": "DVL1",
							"is_directed": false,
							"id": "DVL1-CSNK2A1",
							"name": "DVL1-CSNK2A1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 130.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Adherens junction (PPrel,inhibition,phosphorylation)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">Hearing related SIX1 Interactions 16.6.09 (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18815812\" target=\"PubMed\">pmid:18815812</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18815812\" target=\"PubMed\">pmid:18815812</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=3) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/None\" target=\"PubMed\">pmid:None</a> </FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 130,
							"source": "SRC",
							"is_directed": true,
							"id": "SRC-CTNNB1",
							"name": "SRC-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 140.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome: MI:0914 (association) MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17367534\" target=\"PubMed\">pmid:17367534</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Long-term potentiation (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Long-term depression (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">GnRH signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Gap junction (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">African trypanosomiasis (PPrel,compound,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Circadian entrainment (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Amoebiasis (PPrel,compound,activation)</FONT></li><li><FONT COLOR=\"black\">Calcium signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Melanogenesis (PPrel,compound)</FONT></li></ul><dl>",
							"target": "PRKCA",
							"k": 140,
							"source": "PLCB2",
							"is_directed": true,
							"id": "PLCB2-PRKCA",
							"name": "PLCB2-PRKCA"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 139.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Oxytocin signaling pathway (PPrel,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Rap1 signaling pathway (PPrel,activation)</FONT></li></ul><dl>",
							"target": "EGFR",
							"k": 139,
							"source": "PLCB2",
							"is_directed": false,
							"id": "PLCB2-EGFR",
							"name": "PLCB2-EGFR"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 93.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15684397\" target=\"PubMed\">pmid:15684397</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16775010\" target=\"PubMed\">pmid:16775010</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/114500\" target=\"OMIM\">doi:00114500</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) </FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15684397\" target=\"PubMed\">pmid:15684397</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 93,
							"source": "SMAD7",
							"is_directed": false,
							"id": "SMAD7-CTNNB1",
							"name": "SMAD7-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 92.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dl>",
							"target": "TCF4",
							"k": 92,
							"source": "SMAD7",
							"is_directed": false,
							"id": "SMAD7-TCF4",
							"name": "SMAD7-TCF4"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 95.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15684397\" target=\"PubMed\">pmid:15684397</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15684397\" target=\"PubMed\">pmid:15684397</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15684397\" target=\"PubMed\">pmid:15684397</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dl>",
							"target": "LEF1",
							"k": 95,
							"source": "SMAD7",
							"is_directed": false,
							"id": "SMAD7-LEF1",
							"name": "SMAD7-LEF1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 94.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome: MI:0915 (physical association) MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17367534\" target=\"PubMed\">pmid:17367534</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">TGF-beta signaling pathway (PPrel,inhibition)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=3) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/None\" target=\"PubMed\">pmid:None</a> </FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 94,
							"source": "SMAD7",
							"is_directed": true,
							"id": "SMAD7-SMAD1",
							"name": "SMAD7-SMAD1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 145.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/602382\" target=\"OMIM\">doi:00602382</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/01313123\" target=\"PubMed\">pmid:01313123</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/01312046\" target=\"PubMed\">pmid:01312046</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome: MI:0914 (association) MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17367534\" target=\"PubMed\">pmid:17367534</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Long-term potentiation (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Long-term depression (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">GnRH signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Gap junction (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">African trypanosomiasis (PPrel,compound,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Circadian entrainment (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Amoebiasis (PPrel,compound,activation)</FONT></li><li><FONT COLOR=\"black\">Calcium signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Melanogenesis (PPrel,compound)</FONT></li></ul><dl>",
							"target": "PRKCA",
							"k": 145,
							"source": "PLCB4",
							"is_directed": true,
							"id": "PLCB4-PRKCA",
							"name": "PLCB4-PRKCA"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 144.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Oxytocin signaling pathway (PPrel,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Rap1 signaling pathway (PPrel,activation)</FONT></li></ul><dl>",
							"target": "EGFR",
							"k": 144,
							"source": "PLCB4",
							"is_directed": false,
							"id": "PLCB4-EGFR",
							"name": "PLCB4-EGFR"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 120.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://dx.doi.org/10.1038/emboj.2011.351\" target=\"DOI\">doi:10.1038/emboj.2011.351</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-16665\" target=\"IMEX\">imex:IM-16665</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21952047\" target=\"PubMed\">pmid:21952047</a></FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 120,
							"source": "PRKCA",
							"is_directed": false,
							"id": "PRKCA-CTNNB1",
							"name": "PRKCA-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 152.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/602382\" target=\"OMIM\">doi:00602382</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/610392\" target=\"OMIM\">doi:00610392</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/01312046\" target=\"PubMed\">pmid:01312046</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11278470\" target=\"PubMed\">pmid:11278470</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11278470\" target=\"PubMed\">pmid:11278470</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome: MI:0914 (association) MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17367534\" target=\"PubMed\">pmid:17367534</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Long-term potentiation (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Long-term depression (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">GnRH signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Gap junction (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">African trypanosomiasis (PPrel,compound,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Circadian entrainment (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Amoebiasis (PPrel,compound,activation)</FONT></li><li><FONT COLOR=\"black\">Calcium signaling pathway (PPrel,compound)</FONT></li><li><FONT COLOR=\"black\">Melanogenesis (PPrel,compound)</FONT></li></ul><dl>",
							"target": "PRKCA",
							"k": 152,
							"source": "PLCB1",
							"is_directed": true,
							"id": "PLCB1-PRKCA",
							"name": "PLCB1-PRKCA"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 151.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Oxytocin signaling pathway (PPrel,activation,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Rap1 signaling pathway (PPrel,activation)</FONT></li></ul><dl>",
							"target": "EGFR",
							"k": 151,
							"source": "PLCB1",
							"is_directed": false,
							"id": "PLCB1-EGFR",
							"name": "PLCB1-EGFR"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 85.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dl>",
							"target": "WNT1",
							"k": 85,
							"source": "ROR2",
							"is_directed": false,
							"id": "ROR2-WNT1",
							"name": "ROR2-WNT1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.5068<hr /><b>Edge Ranking</b>: 60.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18762249\" target=\"PubMed\">pmid:18762249</a></FONT></li></ul><dl>",
							"target": "MAP3K7",
							"k": 60,
							"source": "ROR2",
							"is_directed": false,
							"id": "ROR2-MAP3K7",
							"name": "ROR2-MAP3K7"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.3826<hr /><b>Edge Ranking</b>: 84.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16273260\" target=\"PubMed\">pmid:16273260</a></FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20215527\" target=\"PubMed\">pmid:20215527</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20215527\" target=\"PubMed\">pmid:20215527</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 84,
							"source": "ROR2",
							"is_directed": false,
							"id": "ROR2-DVL2",
							"name": "ROR2-DVL2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.3826<hr /><b>Edge Ranking</b>: 86.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20215527\" target=\"PubMed\">pmid:20215527</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20215527\" target=\"PubMed\">pmid:20215527</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 86,
							"source": "ROR2",
							"is_directed": false,
							"id": "ROR2-DVL3",
							"name": "ROR2-DVL3"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.3826<hr /><b>Edge Ranking</b>: 82.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20215527\" target=\"PubMed\">pmid:20215527</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21285348\" target=\"PubMed\">pmid:21285348</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20215527\" target=\"PubMed\">pmid:20215527</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 82,
							"source": "ROR2",
							"is_directed": false,
							"id": "ROR2-DVL1",
							"name": "ROR2-DVL1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.3826<hr /><b>Edge Ranking</b>: 91.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20359892\" target=\"PubMed\">pmid:20359892</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20359892\" target=\"PubMed\">pmid:20359892</a> </FONT></li></ul><dl>",
							"target": "FLNA",
							"k": 91,
							"source": "ROR2",
							"is_directed": false,
							"id": "ROR2-FLNA",
							"name": "ROR2-FLNA"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 104.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Adherens junction (PPrel,activation,phosphorylation)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">Hearing related SIX1 Interactions 16.6.09 (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15951851\" target=\"PubMed\">pmid:15951851</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12432063\" target=\"PubMed\">pmid:12432063</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12700239\" target=\"PubMed\">pmid:12700239</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12700239\" target=\"PubMed\">pmid:12700239</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12432063\" target=\"PubMed\">pmid:12432063</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12432063\" target=\"PubMed\">pmid:12432063</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12700239\" target=\"PubMed\">pmid:12700239</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15951851\" target=\"PubMed\">pmid:15951851</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12700239\" target=\"PubMed\">pmid:12700239</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12432063\" target=\"PubMed\">pmid:12432063</a> </FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 104,
							"source": "CSNK2A1",
							"is_directed": true,
							"id": "CSNK2A1-CTNNB1",
							"name": "CSNK2A1-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 137.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20176724\" target=\"PubMed\">pmid:20176724</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 137,
							"source": "GNAQ",
							"is_directed": true,
							"id": "GNAQ-DVL2",
							"name": "GNAQ-DVL2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 138.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 138,
							"source": "GNAQ",
							"is_directed": true,
							"id": "GNAQ-DVL3",
							"name": "GNAQ-DVL3"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 135.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 135,
							"source": "GNAQ",
							"is_directed": true,
							"id": "GNAQ-DVL1",
							"name": "GNAQ-DVL1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 27.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12897152\" target=\"PubMed\">pmid:12897152</a> </FONT></li></ul><dl>",
							"target": "AXIN1",
							"k": 27,
							"source": "LRP6",
							"is_directed": false,
							"id": "LRP6-AXIN1",
							"name": "LRP6-AXIN1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.5068<hr /><b>Edge Ranking</b>: 71.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18378904\" target=\"PubMed\">pmid:18378904</a></FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-9208\" target=\"IMEX\">imex:IM-9208</a></FONT></li></ul><dl>",
							"target": "RPS27A",
							"k": 71,
							"source": "LRP6",
							"is_directed": false,
							"id": "LRP6-RPS27A",
							"name": "LRP6-RPS27A"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.3826<hr /><b>Edge Ranking</b>: 76.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21606194\" target=\"PubMed\">pmid:21606194</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19107203\" target=\"PubMed\">pmid:19107203</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21606194\" target=\"PubMed\">pmid:21606194</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19107203\" target=\"PubMed\">pmid:19107203</a> </FONT></li></ul><dl>",
							"target": "GSK3B",
							"k": 76,
							"source": "LRP6",
							"is_directed": true,
							"id": "LRP6-GSK3B",
							"name": "LRP6-GSK3B"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.5068<hr /><b>Edge Ranking</b>: 72.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18378904\" target=\"PubMed\">pmid:18378904</a></FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-9208\" target=\"IMEX\">imex:IM-9208</a></FONT></li></ul><dl>",
							"target": "UBA52",
							"k": 72,
							"source": "LRP6",
							"is_directed": false,
							"id": "LRP6-UBA52",
							"name": "LRP6-UBA52"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 4.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://dx.doi.org/10.1038/emboj.2012.83\" target=\"DOI\">doi:10.1038/emboj.2012.83</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-17576\" target=\"IMEX\">imex:IM-17576</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0096 (pull down) <a style=\"color:blue\" href=\"http://dx.doi.org/10.1038/emboj.2012.83\" target=\"DOI\">doi:10.1038/emboj.2012.83</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0096 (pull down) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-17576\" target=\"IMEX\">imex:IM-17576</a></FONT></li></ul><dl>",
							"target": "DAB2",
							"k": 4,
							"source": "LRP6",
							"is_directed": false,
							"id": "LRP6-DAB2",
							"name": "LRP6-DAB2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 29.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dl>",
							"target": "CDH2",
							"k": 29,
							"source": "LRP6",
							"is_directed": false,
							"id": "LRP6-CDH2",
							"name": "LRP6-CDH2"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 2.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12915680\" target=\"PubMed\">pmid:12915680</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15754011\" target=\"PubMed\">pmid:15754011</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15647854\" target=\"PubMed\">pmid:15647854</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Proteoglycans in cancer (PPrel,activation,indirect-effect)</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 2,
							"source": "FZD6",
							"is_directed": true,
							"id": "FZD6-CTNNB1",
							"name": "FZD6-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 200.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li></ul><dl>",
							"target": "PLCB2",
							"k": 200,
							"source": "FZD6",
							"is_directed": true,
							"id": "FZD6-PLCB2",
							"name": "FZD6-PLCB2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 196.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "GNAQ",
							"k": 196,
							"source": "FZD6",
							"is_directed": true,
							"id": "FZD6-GNAQ",
							"name": "FZD6-GNAQ"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 185.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Melanogenesis (PPrel,activation,phosphorylation)</FONT></li></ul><dl>",
							"target": "GNAO1",
							"k": 185,
							"source": "FZD6",
							"is_directed": true,
							"id": "FZD6-GNAO1",
							"name": "FZD6-GNAO1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 18.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16865240\" target=\"PubMed\">pmid:16865240</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16273260\" target=\"PubMed\">pmid:16273260</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL2",
							"k": 18,
							"source": "FZD6",
							"is_directed": true,
							"id": "FZD6-DVL2",
							"name": "FZD6-DVL2"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 19.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL3",
							"k": 19,
							"source": "FZD6",
							"is_directed": true,
							"id": "FZD6-DVL3",
							"name": "FZD6-DVL3"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 16.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,indirect-effect)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">Pathways in cancer (PPrel,activation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,activation,indirect-effect)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20940260\" target=\"PubMed\">pmid:20940260</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/14636582\" target=\"PubMed\">pmid:14636582</a> </FONT></li></ul><dl>",
							"target": "DVL1",
							"k": 16,
							"source": "FZD6",
							"is_directed": true,
							"id": "FZD6-DVL1",
							"name": "FZD6-DVL1"
						},
						"style": {
							"line-color": "#AC58FA",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#AC58FA"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 26.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16266997\" target=\"PubMed\">pmid:16266997</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/180200\" target=\"OMIM\">doi:00180200</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17203201\" target=\"PubMed\">pmid:17203201</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dl>",
							"target": "CDH2",
							"k": 26,
							"source": "LRP5",
							"is_directed": false,
							"id": "LRP5-CDH2",
							"name": "LRP5-CDH2"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 24.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/603507\" target=\"OMIM\">doi:00603507</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/603506\" target=\"OMIM\">doi:00603506</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/603816\" target=\"OMIM\">doi:00603816</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11336703\" target=\"PubMed\">pmid:11336703</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11336703\" target=\"PubMed\">pmid:11336703</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11336703\" target=\"PubMed\">pmid:11336703</a> </FONT></li></ul><dl>",
							"target": "AXIN1",
							"k": 24,
							"source": "LRP5",
							"is_directed": false,
							"id": "LRP5-AXIN1",
							"name": "LRP5-AXIN1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.3826<hr /><b>Edge Ranking</b>: 73.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/603507\" target=\"OMIM\">doi:00603507</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/608271\" target=\"OMIM\">doi:00608271</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/144250\" target=\"OMIM\">doi:00144250</a></FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21606194\" target=\"PubMed\">pmid:21606194</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/21606194\" target=\"PubMed\">pmid:21606194</a> </FONT></li></ul><dl>",
							"target": "GSK3B",
							"k": 73,
							"source": "LRP5",
							"is_directed": true,
							"id": "LRP5-GSK3B",
							"name": "LRP5-GSK3B"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.3826<hr /><b>Edge Ranking</b>: 81.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">NOTCH1 Sinaling In The Ear (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18495817\" target=\"PubMed\">pmid:18495817</a> </FONT></li><li><FONT COLOR=\"black\">Hearing related SIX1 Interactions 16.6.09 (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18495817\" target=\"PubMed\">pmid:18495817</a> </FONT></li><li><FONT COLOR=\"black\">Apoptosis In The Ear - 25 9 09 Arn (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18495817\" target=\"PubMed\">pmid:18495817</a> </FONT></li><li><FONT COLOR=\"black\">Hearing and Vision SMALL 2910 09 ARNON (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18495817\" target=\"PubMed\">pmid:18495817</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18495817\" target=\"PubMed\">pmid:18495817</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18495817\" target=\"PubMed\">pmid:18495817</a> </FONT></li></ul><dl>",
							"target": "PAX2",
							"k": 81,
							"source": "WNT1",
							"is_directed": true,
							"id": "WNT1-PAX2",
							"name": "WNT1-PAX2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 114.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/104311\" target=\"OMIM\">doi:00104311</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/153245\" target=\"OMIM\">doi:00153245</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/116806\" target=\"OMIM\">doi:00116806</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11604490\" target=\"PubMed\">pmid:11604490</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Notch</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11604490\" target=\"PubMed\">pmid:11604490</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16713569\" target=\"PubMed\">pmid:16713569</a> </FONT></li></ul><dl>",
							"target": "LEF1",
							"k": 114,
							"source": "NOTCH1",
							"is_directed": false,
							"id": "NOTCH1-LEF1",
							"name": "NOTCH1-LEF1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 113.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Notch</FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 113,
							"source": "NOTCH1",
							"is_directed": false,
							"id": "NOTCH1-SMAD1",
							"name": "NOTCH1-SMAD1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 74.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17318191\" target=\"PubMed\">pmid:17318191</a></FONT></li><li><FONT COLOR=\"black\">from MINT: MI:0915 (physical association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-10860\" target=\"IMEX\">imex:IM-10860</a></FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/152700\" target=\"OMIM\">doi:00152700</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/116806\" target=\"OMIM\">doi:00116806</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/153245\" target=\"OMIM\">doi:00153245</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0045 (experimental interaction detection) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10330181\" target=\"PubMed\">pmid:10330181</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10330181\" target=\"PubMed\">pmid:10330181</a></FONT></li><li><FONT COLOR=\"gray\">from BIND:  MI:0045 (experimental interac) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16039586\" target=\"PubMed\">pmid:16039586</a></FONT></li><li><FONT COLOR=\"gray\">from BIND:  MI:0045 (experimental interac) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15829978\" target=\"PubMed\">pmid:15829978</a></FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0217 (phosphorylation reaction) MI:0424 (protein kinase assay) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-12075\" target=\"IMEX\">imex:IM-12075</a></FONT></li><li><FONT COLOR=\"black\">from DIP: MI:0217 (phosphorylation reaction) MI:0424 (protein kinase assay) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/19303846\" target=\"PubMed\">pmid:19303846</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/8638126\" target=\"PubMed\">pmid:8638126</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/11154277\" target=\"PubMed\">pmid:11154277</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18952601\" target=\"PubMed\">pmid:18952601</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Focal adhesion (PPrel,inhibition,phosphorylation)</FONT></li><li><FONT COLOR=\"black\">Wnt signaling pathway (PPrel,inhibition,phosphorylation)</FONT></li><li><FONT COLOR=\"black\">Signaling pathways regulating pluripotency of stem cells (PPrel,inhibition,phosphorylation)</FONT></li><li><FONT COLOR=\"black\">Basal cell carcinoma (PPrel,inhibition)</FONT></li><li><FONT COLOR=\"black\">Thyroid hormone signaling pathway (PPrel,inhibition,phosphorylation)</FONT></li><li><FONT COLOR=\"black\">Prostate cancer (PPrel,inhibition,phosphorylation)</FONT></li><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,inhibition,phosphorylation)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,inhibition,phosphorylation)</FONT></li><li><FONT COLOR=\"black\">Melanogenesis (PPrel,inhibition,phosphorylation)</FONT></li></ul><dt>NetPath</dt><ul></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18387957\" target=\"PubMed\">pmid:18387957</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Complex)</FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17318191\" target=\"PubMed\">pmid:17318191</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Complex)</FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/18387957\" target=\"PubMed\">pmid:18387957</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> </FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 74,
							"source": "GSK3B",
							"is_directed": true,
							"id": "GSK3B-CTNNB1",
							"name": "GSK3B-CTNNB1"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 73.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0217 (phosphorylation reaction) MI:0424 (protein kinase assay) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/8638126\" target=\"PubMed\">pmid:8638126</a></FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/8638126\" target=\"PubMed\">pmid:8638126</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Hippo signaling pathway (PPrel,inhibition,phosphorylation)</FONT></li><li><FONT COLOR=\"black\">Endometrial cancer (PPrel,group-entry)</FONT></li><li><FONT COLOR=\"black\">HTLV-I infection (PPrel,inhibition,phosphorylation)</FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Wnt</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">WNT signaling  (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10698523\" target=\"PubMed\">pmid:10698523</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Complex)</FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=2) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/10698523\" target=\"PubMed\">pmid:10698523</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16568235\" target=\"PubMed\">pmid:16568235</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Complex)</FONT></li></ul><dl>",
							"target": "APC",
							"k": 73,
							"source": "GSK3B",
							"is_directed": false,
							"id": "GSK3B-APC",
							"name": "GSK3B-APC"
						},
						"style": {
							"line-color": "#01DF01",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#01DF01"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 75.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/600855\" target=\"OMIM\">doi:00600855</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/603496\" target=\"OMIM\">doi:00603496</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/190685\" target=\"OMIM\">doi:00190685</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">T cell receptor signaling pathway (PPrel,inhibition,phosphorylation)</FONT></li></ul><dl>",
							"target": "NFATC2",
							"k": 75,
							"source": "GSK3B",
							"is_directed": true,
							"id": "GSK3B-NFATC2",
							"name": "GSK3B-NFATC2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 131.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">TGF-beta signaling pathway (PPrel,inhibition,phosphorylation)</FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 131,
							"source": "MAPK1",
							"is_directed": true,
							"id": "MAPK1-SMAD1",
							"name": "MAPK1-SMAD1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 129.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">Notch</FONT></li></ul><dl>",
							"target": "TCF3",
							"k": 129,
							"source": "MAPK1",
							"is_directed": true,
							"id": "MAPK1-TCF3",
							"name": "MAPK1-TCF3"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.6296<hr /><b>Edge Ranking</b>: 72.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li><li><FONT COLOR=\"black\">from BIND:  MI:0019 (coip) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15761153\" target=\"PubMed\">pmid:15761153</a></FONT></li></ul><dl>",
							"target": "SMAD1",
							"k": 72,
							"source": "UBA52",
							"is_directed": false,
							"id": "UBA52-SMAD1",
							"name": "UBA52-SMAD1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 132.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/114550\" target=\"OMIM\">doi:00114550</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/158340\" target=\"OMIM\">doi:00158340</a></FONT></li><li><FONT COLOR=\"gray\">from STRING: MI:0190 MI:0087 (predictive text mining) <a style=\"color:blue\" href=\"http://omim.org/entry/114500\" target=\"OMIM\">doi:00114500</a></FONT></li><li><FONT COLOR=\"gray\">from STRING:  MI:0364 (inferred by curator) </FONT></li><li><FONT COLOR=\"black\">from InnateDB: MI:0915 (physical association) MI:0007 (anti tag coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/16219695\" target=\"PubMed\">pmid:16219695</a></FONT></li></ul><dt>NetPath</dt><ul><li><FONT COLOR=\"black\">TGF_beta_Receptor</FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 132,
							"source": "PIK3CA",
							"is_directed": false,
							"id": "PIK3CA-CTNNB1",
							"name": "PIK3CA-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.3826<hr /><b>Edge Ranking</b>: 91.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20936779\" target=\"PubMed\">pmid:20936779</a> </FONT></li></ul><dl>",
							"target": "APC",
							"k": 91,
							"source": "FLNA",
							"is_directed": false,
							"id": "FLNA-APC",
							"name": "FLNA-APC"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "false",
							"popup": "Weight: 0.7262<hr /><b>Edge Ranking</b>: 59.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"black\">from IntAct: MI:0914 (association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ebi.ac.uk/intact/imex/main.xhtml?query=IM-12000\" target=\"IMEX\">imex:IM-12000</a></FONT></li><li><FONT COLOR=\"black\">from IntAct: MI:0914 (association) MI:0006 (anti bait coimmunoprecipitation) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17110338\" target=\"PubMed\">pmid:17110338</a></FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/17145710\" target=\"PubMed\">pmid:17145710</a> </FONT></li></ul><dl>",
							"target": "DAB2",
							"k": 59,
							"source": "CFTR",
							"is_directed": false,
							"id": "CFTR-DAB2",
							"name": "CFTR-DAB2"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "none",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					},
					{
						"data": {
							"directed": "true",
							"popup": "Weight: 0.7500<hr /><b>Edge Ranking</b>: 103.0000<hr /><h><b>Sources of Evidence</b></h><dl><dt>CSBDB</dt><ul><li><FONT COLOR=\"gray\">from Reactome-FIs:  MI:0046 (experimental knowledge based) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/20482850\" target=\"PubMed\">pmid:20482850</a></FONT></li></ul><dt>KEGG</dt><ul><li><FONT COLOR=\"black\">Adherens junction (PPrel,activation,phosphorylation)</FONT></li></ul><dt>SPIKE</dt><ul><li><FONT COLOR=\"black\">Hearing related SIX1 Interactions 16.6.09 (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15951851\" target=\"PubMed\">pmid:15951851</a> </FONT></li><li><FONT COLOR=\"black\">WNT signaling  (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12700239\" target=\"PubMed\">pmid:12700239</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12432063\" target=\"PubMed\">pmid:12432063</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12432063\" target=\"PubMed\">pmid:12432063</a> <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/12700239\" target=\"PubMed\">pmid:12700239</a> </FONT></li><li><FONT COLOR=\"black\">2013-06-LatestSpikeDB (Integrity=1) <a style=\"color:blue\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/15951851\" target=\"PubMed\">pmid:15951851</a> </FONT></li></ul><dl>",
							"target": "CTNNB1",
							"k": 103,
							"source": "CSNK2B",
							"is_directed": true,
							"id": "CSNK2B-CTNNB1",
							"name": "CSNK2B-CTNNB1"
						},
						"style": {
							"line-color": "#D8D8D8",
							"target-arrow-shape": "triangle",
							"width": "3px",
							"curve-style": "bezier",
							"line-style": "solid",
							"target-arrow-color": "#D8D8D8"
						}
					}
				]
			},
			"data": {
				"name": "Flud test graph",
				"title": "Wnt Pathway Reconstruction",
				"descriptionOPT": "Edges ranked less than or equal to 200<hr />Coloring netpath Wnt nodes/edges #01DF01; coloring other nodes/edges #AC58FA if they are in KEGG Wnt<hr /><b>Sources of Evidence</b><br> Sources are black if they were used to construct the interactome and <FONT COLOR=\"gray\">gray</FONT> if they were not used to construct the interactome.<ul><li><FONT COLOR=\"black\"><b>CSBDB</b> are protein-protein interactions from the CSBDB database</FONT></li><li><FONT COLOR=\"black\"><b>KEGG</b> are protein interactions from the KEGG database</FONT></li><li><FONT COLOR=\"black\"><b>NetPath</b> are protein interactions from the NetPath database</FONT></li><li><FONT COLOR=\"black\"><b>SPIKE</b> are protein interactions from the SPIKE database</FONT></li></ul><br>Edge file: results/pathlinker-signaling-children-reg/weighted//wnt-all-receptors/pathlinker/Wnt-k_20000-ranked-edges.txt",
				"tags": [
					"graphspace-paper",
					"pathlinker-paper",
					"2015-npj-sysbio-appl-pathlinker"
				],
				"paper_title": "Top-down network analysis to drive bottom-up modeling of physiological processes.",
				"taxon_id": "9606",
				"organism": "Homo sapiens",
				"pubmed_authors": [
					"Anna Ritz",
					"Christopher L Poirel",
					"Allison N Tegge",
					"Nicholas Sharp",
					"Kelsey Simmons",
					"Allison Powell",
					"Shiv D Kale",
					"T. M. Murali"
				],
				"FLUD_GAME_TYPE": "CROWD_ONLY",
				"FLUD_NUM_WORKER": 10,
				"FLUD_CROWD_STEPS": 100,
				"SA_INITIAL_TEMPERATURE": 10,
				"SA_ITERATIONS": 10,
				"description": "<center><b>First 200 PathLinker Paths <br>in the Wnt Reconstruction</b> <br></center></hr /> <center> <img style=\"width: 80%; height: 80%\" align=\"center\" vspace=\"15\" src=\"http://www.reed.edu/biology/ritz/files/wnt-legend.png\"></center><hr /><b>Sources of Evidence</b><br> Sources are black if they were used to construct the interactome and <FONT COLOR=\"gray\">gray</FONT> if they were not used to construct the interactome.<ul><li><FONT COLOR=\"black\"><b>CSBDB</b> are protein-protein interactions from the CSBDB database</FONT></li><li><FONT COLOR=\"black\"><b>KEGG</b> are protein interactions from the KEGG database</FONT></li><li><FONT COLOR=\"black\"><b>NetPath</b> are protein interactions from the NetPath database</FONT></li><li><FONT COLOR=\"black\"><b>SPIKE</b> are protein interactions from the SPIKE database</FONT></li></ul><br>Edge file: results/pathlinker-signaling-children-reg/weighted//wnt-all-receptors/pathlinker/Wnt-k_20000-ranked-edges.txt"
			}
		},
		'positions_json': {}
	},
	4: {
		'style_json': {
			'style': [ {
				'style': {
					'shape': 'triangle'
				},
				'selector': "node[name='T1']"
			}, {
				'style': {
					'shape': 'triangle'
				},
				'selector': "node[name='T2']"
			}, {
				'style': {
					'shape': 'rectangle'
				},
				'selector': "node[name='R1']"
			}, {
				'style': {
					'shape': 'rectangle'
				},
				'selector': "node[name='R2']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C1']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C2']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='T1_C2']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='T2_C1']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C2_R1']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C1_R2']"
			} ],
			'target_cytoscapejs_version': '~2.1',
			'generated_by': 'graphspace-2.0.0',
			'format_version': '1.0'
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
						'aliases': [],
						'name': 'T1',
						'label': 'T1'
					},
					'position': {
						'x': '100.0',
						'y': '100.0'
					}
				}, {
					'data': {
						'id': 'R1',
						'aliases': [],
						'name': 'R1',
						'label': 'R1'
					},
					'position': {
						'x': '100.0',
						'y': '300.0'
					}
				}, {
					'data': {
						'id': 'T2',
						'aliases': [],
						'name': 'T2',
						'label': 'T2',
					},
					'position': {
						'x': '200.0',
						'y': '100.0'
					}
				}, {
					'data': {
						'id': 'R2',
						'aliases': [],
						'name': 'R2',
						'label': 'R2',
					},
					'position': {
						'x': '200.0',
						'y': '300.0'
					}
				}, {
					'data': {
						'id': 'C1',
						'aliases': [],
						'name': 'C1',
						'label': 'C1',
					},
					'position': {
						'x': '100.0',
						'y': '500.0'
					}
				}, {
					'data': {
						'id': 'C2',
						'aliases': [],
						'name': 'C2',
						'label': 'C2',
					},
					'position': {
						'x': '200.0',
						'y': '500.0'
					}
				} ],
				'edges': [ {
					'data': {
						'directed': 'true',
						'target': 'C2',
						'k': 1,
						'source': 'T1',
						'is_directed': true,
						'id': 'T1_C2',
						'name': 'T1_C2'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'C1',
						'k': 1,
						'source': 'T2',
						'is_directed': true,
						'id': 'T2_C1',
						'name': 'T2_C1'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'R1',
						'k': 1,
						'source': 'C1',
						'is_directed': true,
						'id': 'C1_R1',
						'name': 'C1_R1'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'R2',
						'k': 1,
						'source': 'C2',
						'is_directed': true,
						'id': 'C2_R2',
						'name': 'C2_R2'
					},
					'is_directed': 1
				} ]
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
			"T1": {
				"x": 100,
				"y": 100
			},
			"R1": {
				"x": 100,
				"y": 500
			},
			"T2": {
				"x": 200,
				"y": 100
			},
			"R2": {
				"x": 200,
				"y": 500
			},
			"C1": {
				"x": 100,
				"y": 300
			},
			"C2": {
				"x": 200,
				"y": 300
			}
		}
	},
	5: {
		'style_json': {
			'style': [ {
				'style': {
					'shape': 'triangle'
				},
				'selector': "node[name='T1']"
			}, {
				'style': {
					'shape': 'triangle'
				},
				'selector': "node[name='T2']"
			}, {
				'style': {
					'shape': 'rectangle'
				},
				'selector': "node[name='R1']"
			}, {
				'style': {
					'shape': 'rectangle'
				},
				'selector': "node[name='R2']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C1']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C2']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C3']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C4']"
			}, {
				'style': {
					'shape': 'ellipse'
				},
				'selector': "node[name='C5']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='T1_C1']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='T2_C2']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C4_R1']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C5_R2']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C1_C3']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C2_C3']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C3_C4']"
			}, {
				'style': {
					'width': 3,
					'line-color': '#000000',
					'target-arrow-shape': 'triangle',
					'target-arrow-color': '#000000'
				},
				'selector': "edge[name='C3_C5']"
			} ],
			'target_cytoscapejs_version': '~2.1',
			'generated_by': 'graphspace-2.0.0',
			'format_version': '1.0'
		},
		'name': 'Tutorial 5',
		'top_scorer': 'Tutorial',
		'graph_id': 1024,
		'score': 1,
		'graph_json': {
			'elements': {
				'nodes': [ {
					'data': {
						'id': 'T1',
						'aliases': [],
						'name': 'T1',
						'label': 'T1'
					}
				}, {
					'data': {
						'id': 'R1',
						'aliases': [],
						'name': 'R1',
						'label': 'R1'
					}
				}, {
					'data': {
						'id': 'T2',
						'aliases': [],
						'name': 'T2',
						'label': 'T2',
					}
				}, {
					'data': {
						'id': 'R2',
						'aliases': [],
						'name': 'R2',
						'label': 'R2',
					}
				}, {
					'data': {
						'id': 'C1',
						'aliases': [],
						'name': 'C1',
						'label': 'C1',
					}
				}, {
					'data': {
						'id': 'C2',
						'aliases': [],
						'name': 'C2',
						'label': 'C2',
					}
				}, {
					'data': {
						'id': 'C3',
						'aliases': [],
						'name': 'C3',
						'label': 'C3',
					}
				}, {
					'data': {
						'id': 'C4',
						'aliases': [],
						'name': 'C4',
						'label': 'C4',
					}
				}, {
					'data': {
						'id': 'C5',
						'aliases': [],
						'name': 'C5',
						'label': 'C5',
					}
				} ],
				'edges': [ {
					'data': {
						'directed': 'true',
						'target': 'C1',
						'k': 1,
						'source': 'T1',
						'is_directed': true,
						'id': 'T1_C1',
						'name': 'T1_C1'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'C2',
						'k': 1,
						'source': 'T2',
						'is_directed': true,
						'id': 'T2_C2',
						'name': 'T2_C2'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'R1',
						'k': 1,
						'source': 'C4',
						'is_directed': true,
						'id': 'C4_R1',
						'name': 'C4_R1'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'R2',
						'k': 1,
						'source': 'C5',
						'is_directed': true,
						'id': 'C5_R2',
						'name': 'C5_R2'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'C3',
						'k': 1,
						'source': 'C1',
						'is_directed': true,
						'id': 'C1_C3',
						'name': 'C1_C3'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'C3',
						'k': 1,
						'source': 'C2',
						'is_directed': true,
						'id': 'C2_C3',
						'name': 'C2_C3'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'C4',
						'k': 1,
						'source': 'C3',
						'is_directed': true,
						'id': 'C3_C4',
						'name': 'C3_C4'
					},
					'is_directed': 1
				}, {
					'data': {
						'directed': 'true',
						'target': 'C5',
						'k': 1,
						'source': 'C3',
						'is_directed': true,
						'id': 'C3_C5',
						'name': 'C3_C5'
					},
					'is_directed': 1
				} ]
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
			"T1": {
				"x": 100,
				"y": 100
			},
			"T2": {
				"x": 300,
				"y": 100
			},
			"R1": {
				"x": 100,
				"y": 500
			},
			"R2": {
				"x": 300,
				"y": 500
			},
			"C1": {
				"x": 100,
				"y": 200
			},
			"C2": {
				"x": 300,
				"y": 200
			},
			"C3": {
				"x": 200,
				"y": 300
			},
			"C4": {
				"x": 100,
				"y": 400
			},
			"C5": {
				"x": 300,
				"y": 400
			}
		}
	},
}