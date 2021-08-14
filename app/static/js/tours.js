var tours = {};
tours[ 1 ] = new Shepherd.Tour( {
	defaults: {
		classes: 'shepherd-theme-dark',
		// scrollTo: true
	}
} );
tours[ 1 ].addStep( 'Welcome', {
	text: 'Welcome to Flud!  This game is designed to help scientists  better understand protein networks.  Through your gameplay, scientists will be able to understand protein relationships in new ways.',
	buttons: [ {
		text: 'Next',
		classes: 'btn btn-primary',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'welcome_controls', {
	text: 'Let us first introduce you to the controls.',
	buttons: [ {
		text: 'Next',
		classes: 'btn btn-primary',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'sidebar', {
	text: 'This area is called the ‘sidebar.’  It contains information that is relevant to the current game.',
	attachTo: '.side-menu left',
	buttons: [ {
		text: 'Next',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'high_score', {
	text: 'This is the current high score for this game.',
	attachTo: '.flud-current-score left',
	buttons: [ {
		text: 'Next',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'your_score', {
	text: 'This is your current score on this game.  This will often be non-zero when you start playing because you may be building on another player’s progress.',
	attachTo: '.flud-user-score left',
	buttons: [ {
		text: 'Next',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'scoresheet', {
	text: 'These are your scores for different sub goals of this game.  Sometimes when you are working on one of the sub goals, you may gain/lose points for other subgoals.',
	attachTo: '.scores-list left',
	buttons: [ {
		text: 'Next',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'score_weights', {
	text: 'Scores which are shown in darker blue color and higher in the list have higher priority.',
	attachTo: '.weights-legend left',
	buttons: [ {
		text: 'Next',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'undo_redo', {
	text: 'These are the undo and redo buttons for you to easily revert your moves.',
	attachTo: '#UndoRedoBtnGroup left',
	buttons: [ {
		text: 'Next',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'finish_button', {
	text: 'This is the finish button.  Click this when you are done with the current graph.  It will save your score, if it’s the high score, and send you back to the graph selection page.',
	attachTo: '#finishBtn left',
	buttons: [ {
		text: 'Next',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'help_button', {
	text: 'This is the help button to remind you of the different game controls.',
	attachTo: '#help left',
	buttons: [ {
		text: 'Next',
		action: function () {
			tours[ 1 ].next();
		}
	} ]
} );
tours[ 1 ].addStep( 'zoom_buttons', {
	text: 'These are the zoom controls.  You can zoom in and out and pan around.',
	attachTo: '.cy-panzoom-slider right',
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 1000000 );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: tours[ 1 ].next
	} ]
} );
tours[ 1 ].addStep( 'circle_node', {
	text: 'This is a node (in green).  You want to move these nodes around to increase your score. The number displayed in the node represents the number of edges that connect with this node.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		tutorial.highlight( cy.nodes( '#C1' ) );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: function () {
			tutorial.unhighlight( cy.nodes( '#C1' ) );
			tours[ 1 ].next();
		}
	} ]
} );
tours[ 1 ].addStep( 'edge', {
	text: 'This is an edge (in green).  It represents a connection between two nodes. This is a downward edge: its direction is from one node to another node that lies below.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		tutorial.highlight( cy.edges( '#T1_C1' ) );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: function () {
			tutorial.unhighlight( cy.edges( '#T1_C1' ) );
			tours[ 1 ].next();
		}
	} ]
} );
tours[ 1 ].addStep( 'path', {
	text: 'This is a path (in green). A path is just a sequence of edges that starts at a triangle and ends at a rectangle. Paths are very important because the goal of the game is to create as many downward paths as possible, i.e., paths that are made up only of downward edges.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		tutorial.highlight( cy.elements( '#T1, #C1, #R1, #T1_C1, #C1_R1' ) );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: function () {
			tutorial.unhighlight( cy.elements( '#T1, #C1, #R1, #T1_C1, #C1_R1' ) );
			tours[ 1 ].next();
		}
	} ]
} );
tours[ 1 ].addStep( 'dpp_mode', {
	text: 'To highlight all edges that are pointed upward, you can click on the `Downward Pointing Paths` link to enter the corresponding mode.',
	attachTo: ".dpp left",
	advanceOn: ".dpp click",
	buttons: false
} );
tours[ 1 ].addStep( 'dpp_mode_description', {
	text: 'In <b>Downward Pointing Paths</b> mode, edges that are pointed upward are red.  This is to bring them to your attention so that you can move the nodes to make a downward path.',
	beforeShowPromise: function () {
		$( '#DPPTools' ).addClass( 'shepherd-element shepherd-open' );
		return Promise.resolve();
	},
	attachTo: ".dpp left",
	buttons: [ {
		text: 'Next',
		action: function () {
			$( '#DPPTools' ).removeClass( 'shepherd-element shepherd-open' );
			tours[ 1 ].next();
		}
	} ]
} );
tours[ 1 ].addStep( 'you_try', {
	text: 'Now that we have covered the basics of `Downward Pointing Paths` mode, lay out this graph so that all the edges point downward.  Click the “Finish” button when you are done.',
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 3 );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Ok',
		action: tours[ 1 ].complete
	} ]
} );
tours[ 1 ].addStep( 'error_step', {
	text: 'Uh-oh.  It looks like there’s still some work to do on this graph.  Please lay out the graph so that all the edges point downward.  Click the finish button when you are done.',
	buttons: [ {
		text: 'Ok',
		action: function () {
			tours[ 1 ].getById( 'error_step' ).hide();
		}
	} ]
} );
tours[ 1 ].addStep( 'complete_step', {
	text: 'Good job!  You laid out all the downward paths.  Now we will cover more complex graphs.  Please click the continue button.',
	buttons: [ {
		text: 'Continue',
		action: function () {
			tours[ 1 ].getById( 'complete_step' ).hide();
			tutorial.init( 2 );
		}
	} ]
} );

tours[ 2 ] = new Shepherd.Tour( {
	defaults: {
		classes: 'shepherd-theme-dark',
		scrollTo: true
	}
} );
tours[ 2 ].addStep( 'welcome', {
	text: 'As we explained earlier, a node is labeled with the number of edges that it is connected to.  Each downward edge in the graph is worth one point, so highly connected nodes are worth more points.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 1000000 );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: tours[ 2 ].next
	} ]
} );
tours[ 2 ].addStep( 'highly_connected', {
	text: 'Furthermore, moving highly connected nodes can lead to cascading downward paths that can earn a lot of points with a single move!',
	attachTo: "#cy left",
	buttons: [ {
		text: 'Next',
		action: tours[ 2 ].next
	} ]
} );
tours[ 2 ].addStep( 'you_try', {
	text: 'Try moving this node (in green) so that all of its edges are downward.  Click finish when you are done.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		tutorial.highlight( cy.nodes( '#C2' ) );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Ok',
		action: function () {
			// tutorial.unhighlight( cy.nodes( '#C2' ) );
			$( '#cy' ).css( 'z-index', 3 );
			tours[ 2 ].complete();
		}
	} ]
} );
tours[ 2 ].addStep( 'error_step', {
	text: 'Uh oh, it looks like the graph still contains some upward edges.  I’ll go ahead and reset the graph so that you can try again.',
	beforeShowPromise: function () {
		fludGraph.setNodePositions( positions_json );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Ok',
		action: function () {
			tours[ 2 ].getById( 'error_step' ).hide();
		}
	} ]
} );
tours[ 2 ].addStep( 'complete_step', {
	text: 'Good job!  See how you earned points from moving a single node?  There are many different ways to layout a single graph, and even small changes can dramatically increase your score.',
	buttons: [ {
		text: 'Continue',
		action: function () {
			tours[ 2 ].getById( 'complete_step' ).hide();
			tutorial.init( 3 );
		}
	} ]
} );

tours[ 3 ] = new Shepherd.Tour( {
	defaults: {
		classes: 'shepherd-theme-dark',
		scrollTo: false
	}
} );
tours[ 3 ].addStep( 'welcome', {
	text: 'Here we have a typical graph that you might see in Flud.  Now we will cover the ‘Clue’ button.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 1000000 );
		$( '.dpp' ).trigger( 'click' );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: function () {
			$( '#cy' ).css( 'z-index', 3 );
			tours[ 3 ].next();
		}
	} ]
} );
tours[ 3 ].addStep( 'clue', {
	text: 'Sometimes figuring out which node to move next can be difficult.  Clicking the clue button highlights a potential path that has an upward edge in it.  This can help you see the paths that still require movement.  Go ahead and click on the clue button now.',
	attachTo: "#DPPTools left",
	advanceOn: "#hint click",
	buttons: false
} );
tours[ 3 ].addStep( 'dpp_mode', {
	text: 'See the highlighted path?  Figure out how to move the nodes around to get all of its edges pointing downward.  Go ahead and try to beat the current high score for this graph.  Hit finished when you are done.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 1000000 );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Ok',
		action: function () {
			$( '#cy' ).css( 'z-index', 3 );
			tours[ 3 ].hide();
		}
	} ]
} );
tours[ 3 ].addStep( 'error_step', {
	text: 'Uh oh, it looks like you havent beaten the highest score yet.  Go ahead and try to beat the current high score for this graph.  Hit finished when you are done.',
	buttons: [ {
		text: 'Ok',
		action: function () {
			tours[ 3 ].getById( 'error_step' ).hide();
		}
	} ]
} );
tours[ 3 ].addStep( 'complete_step', {
	text: 'Good job!  Next, we will try to maximize the number of non-crossing edge pair.',
	buttons: [ {
		text: 'Continue',
		action: function () {
			tours[ 3 ].getById( 'complete_step' ).hide();
			tutorial.init( 4 );
		}
	} ]
} );


tours[ 4 ] = new Shepherd.Tour( {
	defaults: {
		classes: 'shepherd-theme-dark',
		scrollTo: false
	}
} );

tours[ 4 ].addStep( 'edge_crossing', {
	text: 'This is a edge crossing (in red). One of the sub goals of the game is to remove these edge crossings and maximize the number of non crossing edge pairs.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 1000000 );
		cy.nodes( '.intersections' ).style( 'visibility', 'visible' );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: function () {
			$( '#cy' ).css( 'z-index', 3 );
			cy.nodes( '.intersections' ).style( 'visibility', 'hidden' );
			tours[ 4 ].next();
		}
	} ]
} );

tours[ 4 ].addStep( 'highlight_edge_crossing', {
	text: 'To highlight all edges crossings, you can click on the <b>Non-crossing edge pairs</b> link to enter the corresponding mode.',
	attachTo: ".edgecrossings left",
	advanceOn: ".edgecrossings click",
	buttons: false
} );

tours[ 4 ].addStep( 'edge_crossing_mode', {
	text: 'In <b>Non-crossing edge pairs</b> mode, all edge crossings are highlighted in red.  This is to bring to your attention all the edge crossings that can be removed.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 1000000 );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: function () {
			tours[ 4 ].next();
		}
	} ]
} );

tours[ 4 ].addStep( 'edge_crossing_click', {
	text: 'You can create a non-crossing edge pair by clicking on an edge crossing (in red). Go ahead and create a non-crossing edge pair.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		cy.nodes( '.intersections' ).one( 'tap', function () {
			setTimeout( function () {
				tours[ 4 ].next();
			}, 1000 );
		} );
		return Promise.resolve();
	},
	buttons: false
} );

tours[ 4 ].addStep( 'edge_crossing_drag', {
	text: 'You can also create a non-crossing edge pair by dragging an edge crossing (in red). By dragging an edge crossing you can decide the length and direction of a non-crossing edge pair.  Go ahead and create a non-crossing edge pair by dragging a edge crossing.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		var temp = setInterval( function () {
			if ( cy.nodes( '.intersections' ).length > 0 ) {
				cy.nodes( '.intersections' ).one( 'free', function () {
					setTimeout( function () {
						tours[ 4 ].next();
					}, 2000 );
				} );
				clearInterval( temp );
				return Promise.resolve();
			}
		}, 500 );
	},
	buttons: false
} );

tours[ 4 ].addStep( 'complete_step', {
	text: 'Good job! Now you know how to create non crossing edge pairs.',
	attachTo: ".edgecrossings left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 3 );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Ok',
		action: function () {
			$( '#cy' ).css( 'z-index', 3 );
			tours[ 4 ].getById( 'complete_step' ).hide();
			tutorial.init( 5 );
		}
	} ]
} );

tours[ 5 ] = new Shepherd.Tour( {
	defaults: {
		classes: 'shepherd-theme-dark',
		scrollTo: false
	}
} );

tours[ 5 ].addStep( 'cluster', {
	text: 'Next, we will try to bring connected nodes closer to each other',
	attachTo: ".edgelength left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 3 );
		$( '.edgelength' ).trigger( 'click' );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: function () {
			tours[ 5 ].next();
		}
	} ]
} );

tours[ 5 ].addStep( 'cluster_select_node', {
	text: 'Sometimes figuring out which nodes are connected to a given node can be difficult.  In <b>Cluster connected nodes</b> mode, when you click on a node it will highlight all of its neighbors along with the clicked node. Go ahead and click the green node.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 1000000 );
		tutorial.highlight( cy.nodes( '#C3' ) );
		cy.nodes( '#C3' ).one( 'tap', function () {
			tutorial.unhighlight( cy.nodes( '#C3' ) );
			$( '#cy' ).css( 'z-index', 3 );
			tours[ 5 ].next();
		} );
		return Promise.resolve();
	},
	buttons: false
} );

tours[ 5 ].addStep( 'squeeze_tool', {
	text: 'You can bring the connected nodes closer to each other using the squeeze tool. Go ahead and bring the connected nodes closer to each other. Hit finished when you are done.',
	beforeShowPromise: function () {
		$( '#squeezeTool' ).css( 'z-index', 1000000 );
		return Promise.resolve();
	},
	attachTo: "#squeezeTool left",
	advanceOn: "#squeezeTool click",
	buttons: false
} );

tours[ 5 ].addStep( 'squeeze_tool_good_job', {
	text: 'Good job! Now you know how to cluster connected nodes. Next, we will try to maximize the distance between disconnected pair node of nodes. ',
	attachTo: ".edgelength left",
	beforeShowPromise: function () {
		$( '#squeezeTool' ).css( 'z-index', 3 );
		return Promise.resolve();
	},
} );

tours[ 5 ].addStep( 'node_distribution', {
	text: 'Here is a disconnected pair of nodes (in green). Your goal is to maximize the distance between them.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		$( '.nodedistribution' ).trigger( 'click' );
		cy.nodes().unselect();
		$( '#cy' ).css( 'z-index', 1000000 );
		tutorial.highlight( cy.nodes( '#T1, #T2' ) );
		return Promise.resolve();
	},
} );

tours[ 5 ].addStep( 'expand_tool', {
	text: 'You can increase the distance among the set of selected nodes using the expand tool. Go ahead, select the green nodes and increase the distance between them using the expand tool.',
	attachTo: "#expandTool left",
	advanceOn: "#expandTool click",
	buttons: false,
	beforeShowPromise: function () {
		$( '#expandTool' ).css( 'z-index', 1000000 );
		return Promise.resolve();
	},
} );

tours[ 5 ].addStep( 'expand_tool_good_job', {
	text: 'Good job! Now you know how to increase the distance between disconnected pair of nodes.',
	attachTo: ".nodedistribution left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 3 );
		$( '#expandTool' ).css( 'z-index', 3 );
		return Promise.resolve();
	},
} );

tours[ 5 ].addStep( 'node_edge_separation', {
	text: 'Next, we will try to maximize the separation between nodes and edges.',
	attachTo: ".nodeedgedistance left",
	beforeShowPromise: function () {
		cy.nodes().unselect();
		$( '.nodeedgedistance' ).trigger( 'click' );
		$( '#NEDTools' ).addClass( 'shepherd-element shepherd-open' );
		cy.nodes( '#T2' ).position( {
			'x': 130,
			'y': 150
		} );
		fludToolbox.CustomTool.onNodesMoved( cy.nodes( '#T2' ) );
		return Promise.resolve();
	},
	buttons: [ {
		text: 'Next',
		action: function () {
			$( '#NEDTools' ).removeClass( 'shepherd-element shepherd-open' );
			tours[ 5 ].next();
		}
	} ]
} );

tours[ 5 ].addStep( 'node_edge_pair', {
	text: 'Here is a pair of node and edge (in green). Your goal is to maximize the distance between them.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 1000000 );
		tutorial.highlight( cy.elements( '#T1_C1, #T2, #T1, #C1' ) );
		return Promise.resolve();
	},
} );

tours[ 5 ].addStep( 'increase_node_edge_separartion', {
	text: 'You can increase the distance them by dragging the node far from the edge. Go ahead and drag the node away from the edge.',
	attachTo: "#cy left",
	beforeShowPromise: function () {
		cy.nodes( '#T2' ).one( 'free', function () {
			tours[ 5 ].next();
		} );
		return Promise.resolve();
	},
	buttons: false,
} );

tours[ 5 ].addStep( 'node_edge_good_job', {
	text: 'Good job! Now you know how to increase the distance between an edge and a node.',
	attachTo: ".nodeedgedistance left",
	beforeShowPromise: function () {
		$( '#cy' ).css( 'z-index', 3 );
		return Promise.resolve();
	}
} );

tours[ 5 ].addStep( 'complete_tutorial', {
	text: 'Congratulations!  You have successfully completed the tutorial.  We hope you will play many of the graphs and have fun while helping the scientific community.',
	buttons: [ {
		text: 'Complete',
		action: tours[ 5 ].complete
	} ]
} );