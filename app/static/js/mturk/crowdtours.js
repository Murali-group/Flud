/**
 * Created by adb on 24/03/18.
 */
var task1Score = 0;
var task2Score = 0;

var tours = {};
tours[ 1 ] = new Shepherd.Tour( {
  defaults: {
    classes: 'shepherd-theme-dark',
    // scrollTo: true
  }
} );
tours[ 1 ].addStep( 'Welcome', {
  title: 'Welcome to Flud!',
  text: [
    'This game is designed to help scientists better understand protein networks. Your goal for this task is to follow Part 1 of a two-part interactive tutorial. <br/><br/> ',
    'If you perform well at Part 1 of the tutorial, you will get an opportunity to finish the rest of the tutorial and play a bonus game where you can receive a bonus upto $' + bonus_pay + '.'
  ],
  buttons: [ {
    text: 'Next',
    classes: 'btn btn-primary',
    action: tours[ 1 ].next
  } ]
} );

tours[ 1 ].addStep( 'welcome_controls', {
  title: 'Getting started',
  text: 'Let us first introduce you to the controls.',
  buttons: [ {
    text: 'Next',
    classes: 'btn btn-primary',
    action: tours[ 1 ].next
  } ]
} );

tours[ 1 ].addStep( 'circle_node', {
  title: 'Example node',
  text: [ 'This is a node (in green).  You want to move these nodes around to increase your score.',
    ' The number displayed in the node represents the number of edges that connect with this node.'
  ],
  attachTo: "#cy left",
  beforeShowPromise: function () {
    $( '#cy' ).css( 'z-index', 1000000 );
    cy.autolock( true );
    tutorial.highlight( cy.nodes( '#1848' ) );
    return Promise.resolve();
  },
  buttons: [ {
    text: 'Previous',
    classes: 'btn btn-primary',
    action: function () {
      $( '#cy' ).css( 'z-index', 1 );
      cy.autolock( false );
      tutorial.unhighlight( cy.nodes() );
      tours[ 1 ].back();
    }
  }, {
    text: 'Next',
    action: function () {
      tutorial.unhighlight( cy.nodes( '#1848' ) );
      tours[ 1 ].next();
    }
  } ]
} );

tours[ 1 ].addStep( 'bounding_box', {
  title: 'Bounding box',
  text: [ 'Keep the nodes inside the bounding box (in red). ',
    ' If any node crosses the bounding box, you will lose all points. You can gain them back by moving the node(s) back inside the bounding box.'
  ],
  attachTo: "#cy left",
  buttons: [ {
    text: 'Previous',
    classes: 'btn btn-primary',
    action: function () {
      tours[ 1 ].back();
    }
  }, {
    text: 'Next',
    action: tours[ 1 ].next
  } ]
} );


tours[ 1 ].addStep( 'edge', {
  title: 'Example edge',
  text: [ 'This is an edge (in green).  It represents a connection between two nodes.',
    ' This is a downward edge: its direction is from one node to another node that lies 15 degrees below it.',
    '<img src="/static/img/tutorial/downward-pointing-edge.png" style="height:200px" alt="downward pointing edge">'
  ],
  attachTo: "#cy left",
  beforeShowPromise: function () {
    tutorial.highlight( cy.edges( '[name = "1847-1848"]' ) );
    return Promise.resolve();
  },
  buttons: [ {
    text: 'Previous',
    classes: 'btn btn-primary',
    action: function () {
      tutorial.unhighlight( cy.edges() );
      tours[ 1 ].back();
    }
  }, {
    text: 'Next',
    action: function () {
      tutorial.unhighlight( cy.edges() );
      tours[ 1 ].next();
    }
  } ]
} );


if ( weights[ 'dpp' ] >= 1 && mode == 'dpp' ) {

  tours[ 1 ].addStep( 'path', {
    title: 'Example path',
    text: [ 'This is a path (in green). A path is just a sequence of edges that starts at a triangle and ends at a rectangle.',
      'Paths are very important because one of the subgoals of the game is to create as many downward pointing paths as possible, i.e., paths that are made up only of downward edges.'
    ],
    attachTo: "#cy left",
    beforeShowPromise: function () {
      tutorial.unhighlight( cy.elements() );
      cy.nodes().unselect();
      cy.autolock( true );
      $( '#cy' ).css( 'z-index', 1000000 );
      tutorial.highlight( cy.elements( '#1847, #1848, #1852, [name = "1847-1848"], [name = "1848-1852"]' ) );
      return Promise.resolve();
    },
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        tutorial.unhighlight( cy.elements( '#1847, #1848, #1852, [name = "1847-1848"], [name = "1848-1852"]' ) );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        tutorial.unhighlight( cy.elements( '#1847, #1848, #1852, [name = "1847-1848"], [name = "1848-1852"]' ) );
        $( '#cy' ).css( 'z-index', 3 );
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'dpp_mode_description', {
    title: 'Upward edges highlighted in red',
    text: [
      'To assist you with the task, edges that are pointed upward are highlighted in red.  This is to bring them to your attention so that you can move the nodes to make a downward path.',
      '<b>Tip:</b> Moving highly connected nodes can lead to cascading downward paths that can earn a lot of points with a single move!'
    ],
    beforeShowPromise: function () {
      hintMoved = false;
      fludToolbox.setMode( DPP_MODE );
      $( '#cy' ).css( 'z-index', 1000000 );
      return Promise.resolve();
    },
    attachTo: "#cy left",
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        fludToolbox.setMode( CUSTOM_MODE );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        // $( '#cy' ).css( 'z-index', 3 );
        fludToolbox.DPPTool.hint();
        // $( '#DPPTools' ).removeClass( 'shepherd-element shepherd-open' );
        cy.autolock( false );
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'clue', {
    title: 'Clues',
    text: [ 'Sometimes figuring out which node to move next can be difficult.  Therefore, to help, sometimes we show a clue that highlights a potential path that has an upward edge in it.  This can help you see the paths that still require movement. '
      // 'You can use clue button as many times as you want without any penalty.  Go ahead and click on the clue button now.'
    ],
    beforeShowPromise: function () {
      fludToolbox.DPPTool.hint();
    },
    // attachTo: "#DPPTools left",
    attachTo: "#cy left",
    // advanceOn: "#hint click",
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        hintMoved = false;
        cy.elements( '.hint' ).removeClass( 'hint' );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      classes: 'btn btn-primary',
      action: function () {
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'you_try_1', {
    title: "Task 1: Why don't you solve the clue!",
    attachTo: "#cy left",
    text: [
      'See the highlighted path? Figure out how to move the nodes around to get all of its edges pointing downward.',
      '<img src="/static/img/gifs/increase-dpp-4.gif" style="height:200px" alt="Increase downward pointing paths">'
    ],
    beforeShowPromise: function () {
      task1Score = EnergyUtil.totalscore( cy, weights );
      $( '#cy' ).css( 'z-index', 1000000 );
      return Promise.resolve();
    },
    buttons: false
  } );

  tours[ 1 ].addStep( 'you_try_2', {
    title: "Task 2: Why don't you solve without a clue now!",
    attachTo: "#cy left",
    text: [
      'Sometimes, we cannot give you clues. In such a situation, we need you to increase the Downward Pointing Paths score without clues.',
      'Figure out how to move the nodes around to increase the number of downward pointing paths. ',
      '<img src="/static/img/gifs/increase-dpp-5.gif" style="height:200px" alt="Increase downward pointing paths">'
    ],
    beforeShowPromise: function () {
      HINT_FADE_OUT_DELAY_IN_MICROSECONDS = 600000;
      HINT_FADE_IN_DELAY_IN_MICROSECONDS = 300000;
      cy.elements( '.hint' ).removeClass( 'hint' );
      return Promise.resolve();
    },
    buttons: false
  } );

  tours[ 1 ].addStep( 'you_try_3', {
    title: "Task 3: Why don't you solve by making multiple moves!",
    attachTo: "#cy left",
    text: [
      'Sometimes, it is hard to find a single move to increase the score. In such a situation, we need you to come up with a series of moves that will increase the Downward Pointing Paths score.',
      'Figure out how to move the nodes around to increase the number of downward pointing paths. ',
      '<b>Tip:</b> Try to make red edges downward pointing one by one following a path from triangles to rectangles.',
      '<img src="/static/img/gifs/increase-dpp-6.gif" style="height:200px" alt="Increase downward pointing paths">'
    ],
    beforeShowPromise: function () {
      // task1Score = EnergyUtil.totalscore( cy, weights ) - task1Score
      // task2Score = EnergyUtil.totalscore( cy, weights );
      // fludToolbox.DPPTool.init();
      //
      cy.elements( '.hint' ).removeClass( 'hint' );
      return Promise.resolve();
    },
    buttons: false
  } );

}

if ( weights[ 'edgecrossings' ] >= 1 && mode == 'edgecrossings' ) {

  tours[ 1 ].addStep( 'edge_crossing', {
    title: "Edge crossing",
    text: [ 'Here is an example of edge crossings (in green). One of the sub goals of the game is to remove these edge crossings and maximize the number of non-crossing edge pairs.' ],
    attachTo: "#cy left",
    beforeShowPromise: function () {
      tutorial.unhighlight( cy.elements() );
      tutorial.highlight( cy.elements( '#1789, #1790, #1780, #1781, [name = "1789-1790"], [name = "1780-1781"]' ) );
      cy.nodes().unselect();
      cy.autolock( true );
      $( '#cy' ).css( 'z-index', 1000000 );
      return Promise.resolve();
    },
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        $( '#cy' ).css( 'z-index', 3 );
        tutorial.unhighlight( cy.elements( '#1789, #1790, #1780, #1781, [name = "1789-1790"], [name = "1780-1781"]' ) );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        $( '#cy' ).css( 'z-index', 3 );
        tutorial.unhighlight( cy.elements( '#1789, #1790, #1780, #1781, [name = "1789-1790"], [name = "1780-1781"]' ) );
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'ec_mode_description', {
    title: 'Edge crossings highlighted in red',
    text: [
      'To assist you with the task, edge crossings are highlighted in red.  This is to bring them to your attention so that you can move the nodes to remove edge crossings.'
    ],
    beforeShowPromise: function () {
      HINT_FADE_OUT_DELAY_IN_MICROSECONDS = 600000;
      fludToolbox.setMode( EC_MODE );
      $( '#cy' ).css( 'z-index', 1000000 );
      cy.elements( '.hint' ).removeClass( 'hint' );
      return Promise.resolve();
    },
    attachTo: "#cy left",
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        fludToolbox.setMode( CUSTOM_MODE );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'clue', {
    title: 'Clues',
    text: [ 'Sometimes figuring out which node to move next can be difficult.  Therefore, to help, sometimes we show a clue that highlights a potential crossing that can be removed. ' ],
    beforeShowPromise: function () {
      fludToolbox.ECTool.hint();
    },
    attachTo: "#cy left",
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      classes: 'btn btn-primary',
      action: function () {
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'you_try_1', {
    title: "Task 1: Why don't you solve the clue!",
    attachTo: "#cy left",
    text: [
      'See the highlighted crossing? Figure out how to move the nodes around to remove this crossing without adding a new one.',
      '<img src="/static/img/gifs/remove-edge-crossings-3.gif" style="height:250px" alt="Remove edge crossing">'
    ],
    beforeShowPromise: function () {
      task1Score = EnergyUtil.totalscore( cy, weights );
      cy.autolock( false );
      return Promise.resolve();
    },
    buttons: false
  } );

  tours[ 1 ].addStep( 'you_try_2', {
    title: "Task 2: Why don't you solve without a clue now!",
    attachTo: "#cy left",
    text: [
      'Sometimes, we cannot give you clues. In such a situation, we need you to increase the non-crossing edge pairs score without clues.',
      'Figure out how to move the nodes around to reduce the number of edge crossings. ',
      '<img src="/static/img/gifs/remove-edge-crossings-4.gif" style="height:250px" alt="Remove edge crossing">'
    ],
    beforeShowPromise: function () {
      cy.elements( '.hint' ).removeClass( 'hint' );
      return Promise.resolve();
    },
    buttons: false
  } );

}

if ( weights[ 'edgelength' ] >= 1 && mode == 'edgelength' ) {

  tours[ 1 ].addStep( 'edgelength', {
    title: "Edge length",
    text: [ 'One of the subgoals of the game is to bring connected nodes closer to each other.',
      '<b>Tip:</b> If you bring connected nodes too close, you may loose points. ',
      '<img src="/static/img/tutorial/edge-length.png" style="height:250px" alt="bring connected nodes closer to each other">'
    ],
    attachTo: "#cy left",
    beforeShowPromise: function () {
      tutorial.unhighlight( cy.elements() );
      tutorial.highlight( cy.elements( '#1789, #1790, [name = "1789-1790"]' ) );
      cy.nodes().unselect();
      cy.autolock( true );
      $( '#cy' ).css( 'z-index', 1000000 );
      return Promise.resolve();
    },
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        tutorial.unhighlight( cy.elements( '#1789, #1790, [name = "1789-1790"]' ) );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        tutorial.unhighlight( cy.elements( '#1789, #1790, [name = "1789-1790"]' ) );
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'clue', {
    title: 'Clues',
    text: [ 'Sometimes figuring out which node to move next can be difficult.  Therefore, to help, sometimes we show a clue that highlights a potential edge that can be fixed. ' ],
    beforeShowPromise: function () {
      fludToolbox.setMode( EL_MODE );
    },
    attachTo: "#cy left",
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        fludToolbox.setMode( CUSTOM_MODE );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      classes: 'btn btn-primary',
      action: function () {
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'you_try_1', {
    title: "Task 1: Why don't you solve the clue!",
    attachTo: "#cy left",
    text: [
      'See the highlighted edge? It seems that the connected nodes are too close. Figure out how to move the nodes apart (but not too far!) to increase the edge length score.',
      '<img src="/static/img/gifs/increase-edge-length-2.gif" style="height:250px" alt="Increase edge length">'
    ],
    beforeShowPromise: function () {
      fludToolbox.setMode( CUSTOM_MODE );

      var maxLengthEdge = cy.edges().max( function ( ele ) {
        return ele.data( 'edgelength' );
      } );
      if ( maxLengthEdge.ele.data( 'edgelength' ) === 10000 ) {
        $( '#elTooCloseHintAlert' ).show();
      } else {
        $( '#elTooFarHintAlert' ).show();
      }
      maxLengthEdge.ele.addClass( 'hint' );
      maxLengthEdge.ele.connectedNodes().addClass( 'hint' );

      task1Score = EnergyUtil.totalscore( cy, weights );
      cy.autolock( false );
      return Promise.resolve();
    },
    buttons: false
  } );

  tours[ 1 ].addStep( 'you_try_2', {
    title: "Task 2: Why don't you solve another clue now!",
    attachTo: "#cy left",
    text: [
      'See the highlighted edge? It seems that the connected nodes are too far. Figure out how to move the nodes closer (but not too close!) to increase the edge length score.',
      '<img src="/static/img/gifs/decrease-edge-length-2.gif" style="height:250px" alt="Decrease edge length">'
    ],
    beforeShowPromise: function () {
      cy.elements( '.hint' ).removeClass( 'hint' );
      $( '#elTooCloseHintAlert, #elTooFarHintAlert' ).hide();

      var maxLengthEdge = cy.edges( '[edgelength < ' + EnergyUtil.Distances.MIN_EDGE_LENGTH_COST + ']' ).max( function ( ele ) {
        return ele.data( 'edgelength' );
      } );
      if ( maxLengthEdge.ele.data( 'edgelength' ) === 10000 ) {
        $( '#elTooCloseHintAlert' ).show();
      } else {
        $( '#elTooFarHintAlert' ).show();
      }
      maxLengthEdge.ele.addClass( 'hint' );
      maxLengthEdge.ele.connectedNodes().addClass( 'hint' );

      return Promise.resolve();
    },
    buttons: false
  } );

}

if ( weights[ 'nodedistribution' ] >= 1 && mode == 'nodedistribution' ) {

  tours[ 1 ].addStep( 'nodedistribution', {
    title: 'Node distribution',
    text: [ 'Here is a pair of disconnected nodes (in green).',
      ' One of the goals of the game is to increase the distance between a node and its closest disconnected node while keeping them within the bounding box.',
      '<img src="/static/img/tutorial/nodedistribution.png" style="height:250px" alt="increase the distance between node and its closest disconnected pair of nodes">'
    ],
    attachTo: "#cy left",
    beforeShowPromise: function () {
      tutorial.unhighlight( cy.elements() );
      tutorial.highlight( cy.elements( '#1789, #1780' ) );
      cy.nodes().unselect();
      cy.autolock( true );
      $( '#cy' ).css( 'z-index', 1000000 );
      return Promise.resolve();
    },
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        tutorial.unhighlight( cy.elements( '#1789, #1780' ) );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        tutorial.unhighlight( cy.elements( '#1789, #1780' ) );
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'clue', {
    title: 'Clues',
    text: [ 'Sometimes figuring out which node to move next can be difficult.  Therefore, to help, sometimes we show a clue that highlights a potential pair of nodes that can be fixed. ' ],
    beforeShowPromise: function () {
      fludToolbox.setMode( ND_MODE );
    },
    attachTo: "#cy left",
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        fludToolbox.setMode( CUSTOM_MODE );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      classes: 'btn btn-primary',
      action: function () {
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'you_try_1', {
    title: "Task 1: Why don't you solve the clue!",
    attachTo: "#cy left",
    text: [
      'See the highlighted pair of nodes? It seems that the nodes are too close. Figure out how to move the nodes apart to increase the Node distribution score.',
      '<img src="/static/img/gifs/increase-node-distance-2.gif" style="height:250px" alt="Increase node distance">'
    ],
    beforeShowPromise: function () {
      task1Score = EnergyUtil.totalscore( cy, weights );
      cy.autolock( false );
      return Promise.resolve();
    },
    buttons: false
  } );

  tours[ 1 ].addStep( 'you_try_2', {
    title: "Task 2: Why don't you solve without a clue now!",
    attachTo: "#cy left",
    text: [
      'Sometimes, we cannot give you clues. In such a situation, we need you to increase the Node distribution score without clues.',
      'Figure out how to move a pair of nodes apart to increase the Node distribution score.',
      '<b>Tip:</b> Try to move a node away from its corresponding disconnected nodes.',
      '<img src="/static/img/gifs/increase-node-distance-3.gif" style="height:250px" alt="Increase node distance">'
    ],
    beforeShowPromise: function () {
      fludToolbox.setMode( CUSTOM_MODE );
      return Promise.resolve();
    },
    buttons: false
  } );

}

if ( weights[ 'nodeedgedistance' ] >= 1 && mode == 'nodeedgedistance' ) {

  tours[ 1 ].addStep( 'nodeedgedistance', {
    title: 'Node edge separation',
    text: [ 'Here is a node and its closest edge (in green).',
      ' One of the goals of the game is to increase the separation between nodes and their closest edges.',
      '<img src="/static/img/tutorial/nodeedgedistance.png" style="height:250px" alt="increase the distance between node and its closest edge">'
    ],
    attachTo: "#cy left",
    beforeShowPromise: function () {
      tutorial.unhighlight( cy.elements() );
      tutorial.highlight( cy.elements( '#1789, #1780, #1781, [name = "1780-1781"]' ) );
      cy.nodes().unselect();
      cy.autolock( true );
      $( '#cy' ).css( 'z-index', 1000000 );
      return Promise.resolve();
    },
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        tutorial.unhighlight( cy.elements( '#1789, #1780, #1781, [name = "1780-1781"]' ) );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        tutorial.unhighlight( cy.elements( '#1789, #1780, #1781, [name = "1780-1781"]' ) );
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'clue', {
    title: 'Clues',
    text: [ 'Sometimes figuring out which node to move next can be difficult.  Therefore, to help, sometimes we show a clue that highlights a potential node edge pair that can be fixed. ' ],
    beforeShowPromise: function () {
      fludToolbox.setMode( NED_MODE );
    },
    attachTo: "#cy left",
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        fludToolbox.setMode( CUSTOM_MODE );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      classes: 'btn btn-primary',
      action: function () {
        tours[ 1 ].next();
      }
    } ]
  } );

  tours[ 1 ].addStep( 'you_try_1', {
    title: "Task 1: Why don't you solve the clue!",
    attachTo: "#cy left",
    text: [
      'See the highlighted pair of node and edge? It seems that the node is too close to the highlighted edge. Figure out how to move the nodes away from the edge to increase the Node edge separation score.',
      '<img src="/static/img/gifs/increase-node-edge-distance-2.gif" style="height:250px" alt="Increase node edge distance">'
    ],
    beforeShowPromise: function () {
      task1Score = EnergyUtil.totalscore( cy, weights );
      cy.autolock( false );
      return Promise.resolve();
    },
    buttons: false
  } );

  tours[ 1 ].addStep( 'you_try_2', {
    title: "Task 2: Why don't you solve without a clue now!",
    attachTo: "#cy left",
    text: [
      'Sometimes, we cannot give you clues. In such a situation, we need you to increase the Node edge separation score without clues.',
      'Figure out how to move the node away from the edge to increase the Node edge separation score.',
      '<b>Tip:</b> Try to move the node farthest from all edges.',
      '<img src="/static/img/gifs/increase-node-edge-distance-3.gif" style="height:250px" alt="Increase node edge distance">'
    ],
    beforeShowPromise: function () {
      fludToolbox.setMode( CUSTOM_MODE );
      return Promise.resolve();
    },
    buttons: false
  } );

}


tours[ 1 ].addStep( 'complete_tutorial', {
  title: 'Tutorial Part 1 completed',
  text: 'You have completed Part 1 of the two-part interactive tutorial!',
  beforeShowPromise: function () {
    $( '#cy' ).css( 'z-index', 3 );
    return Promise.resolve();
  },
  buttons: [ {
    text: "Finish",
    action: function () {
      apis.tutorials.add( {
        'game_id': parseInt( game_id ),
        'worker_id': worker_id,
        'assignment_id': assignment_id
      }, successCallback = function () {
        $( '#cy' ).css( 'z-index', 3 );
        task2Score = EnergyUtil.totalscore( cy, weights ) - task2Score
        if ( ( task1Score > 0 ) && ( task2Score > 0 ) && ( parseFloat( bonus_pay ) > 0 ) ) {
          $( '#successTutorial, #promptGamePlay' ).show();
        } else {
          $( '#failTutorial' ).show();
        }
        $( '#bonusModal' ).modal( 'show' );
        tours[ 1 ].complete();
      }, errorCallback = function ( xhr, status, errorThrown ) {
        // This method is called when  error occurs while getting
        console.log( status );
        console.log( errorThrown );
      } );
    }
  } ]
} );