/**
 * Created by dgwiz on 4/4/2017.
 */
$( document ).ready( function () {
  //Tutorial starts when the help button is pressed
  $( "#help" ).click( function () {

    var intro = introJs();

    intro.setOptions( {
      'scrollToElement': true
    } );
    intro.start();
  } );
} );

var initialScore;
var graph_json;
var style_json;
var positions_json;
var graph_id;
var game_id;
var top_score;
var cy;

var NODE_RADIUS = 125;
var EDGE_WIDTH = 20;

if ( mode === 'dpp' ) {
  var weights = {
    'dpp': 400,
    'edgecrossings': 0,
    'edgelength': 0,
    'nodedistribution': 0,
    'nodeedgedistance': 0,
    'custom': 0
  };
} else if ( mode === 'edgecrossings' ) {
  var weights = {
    'dpp': 0,
    'edgecrossings': 3,
    'edgelength': 0,
    'nodedistribution': 0,
    'nodeedgedistance': 0,
    'custom': 0
  };
} else if ( mode === 'edgelength' ) {
  var weights = {
    'dpp': 0,
    'edgecrossings': 0,
    'edgelength': 1,
    'nodedistribution': 0,
    'nodeedgedistance': 0,
    'custom': 0
  };
} else if ( mode === 'nodedistribution' ) {
  var weights = {
    'dpp': 0,
    'edgecrossings': 0,
    'edgelength': 0,
    'nodedistribution': 1,
    'nodeedgedistance': 0,
    'custom': 0
  };
} else if ( mode === 'nodeedgedistance' ) {
  var weights = {
    'dpp': 0,
    'edgecrossings': 0,
    'edgelength': 0,
    'nodedistribution': 0,
    'nodeedgedistance': 1,
    'custom': 0
  };
} else {
  var weights = {
    'dpp': 400,
    'edgecrossings': 3,
    'edgelength': 1,
    'nodedistribution': 1,
    'nodeedgedistance': 1,
    'custom': 0
  };
}


var tutorial = {
  init: function ( tut_id ) {
    if ( cy ) {
      cy.destroy();
    }
    // graph_json = tutorial_json[ tut_id ][ 'graph_json' ];
    // style_json = tutorial_json[ tut_id ][ 'style_json' ];
    // positions_json = tutorial_json[ tut_id ][ 'positions_json' ];
    // graph_id = tutorial_json[ tut_id ][ 'graph_id' ];
    // game_id = tutorial_json[ tut_id ][ 'graph_id' ];
    // top_score = tutorial_json[ tut_id ][ 'score' ];


    isTutorialModeOn = true;
    // check to see if the username has been defined
    if ( username == "None" ) username = "Anonymous";

    //initially disable the undo and redo buttons, since nothing has changed
    $( "#undo" ).addClass( 'disabled' );
    $( "#redo" ).addClass( 'disabled' );

    $( '#NumStepsLeft' ).html( num_steps );

    undoRedoManager = new UndoManager(
      onUndo = function ( item ) {
        if ( item ) {
          fludGraph.setNodePositions( item );
          $( '#redo' ).removeClass( 'disabled' );
        } else {
          $( '#undo' ).addClass( 'disabled' );
        }
      },
      onRedo = function ( item ) {
        if ( item ) {
          fludGraph.setNodePositions( item );
          $( '#undo' ).removeClass( 'disabled' );
        } else {
          $( '#redo' ).addClass( 'disabled' );
        }
      },
      onUpdate = function ( item ) {
        $( '#undo' ).removeClass( 'disabled' );
      }
    );

    $( '#undo' ).off().click( function () {
      undoRedoManager.undo();
    } );
    $( '#redo' ).off().click( function () {
      undoRedoManager.redo();
    } );

    scoresWidget.init();
    tutGraph.init( tut_id );
    initial_score = top_score;

    $( '.score-tools.' + mode ).removeClass( 'panel-collapse collapse' );
    $( 'li.list-group-item.action' ).attr( 'data-toggle', '' );


    initialScore = EnergyUtil.totalscore( cy, weights );

    $( '#finishGameBtn' ).off().click( function () {
      var currentScore = EnergyUtil.totalscore( cy, weights );
      if ( currentScore > initialScore ) {
        tutorial.complete( tut_id );
      } else {
        tutorial.error( tut_id );
      }
    } );

    //make an alert appear if the user attempts to leave the page
    //due to browser security this must be a default alert instead of the dialogue modal
    // window.onbeforeunload = function () {
    // 	if ( !isGameSaved ) {
    // 		return 'You have unsaved changes!';
    // 	}
    // }

    //set onAppear for save dialogue modal
    $( '#finishedDialogueModal' ).off().on( 'show.bs.modal', function ( event ) {
      //we check to see if the user has created a higher or lower score, and then update the dialogue accordingly.
      var currentScore = EnergyUtil.totalscore( cy, weights );

      //top score
      if ( currentScore == top_score ) {
        $( '#finishedDescription' ).html( "<p>Well done! You are the current leader.</p><p>Your Score: " + currentScore + "</p><p>Their Score: " + top_score + "</p>" );
      }
      //low score
      else if ( currentScore < top_score ) {
        $( '#finishedDescription' ).html( "<p>Keep going - someone still has a higher score than you!</p><p>Your Score: " + currentScore + "</p><p>Their Score: " + top_score + "</p>" );
      }
    } );

  },
  save: function ( exit ) {
    var currentScore = EnergyUtil.totalscore( cy, weights );
    if ( currentScore > top_score ) {
      top_score = currentScore;
      $( '#currentTopScore' ).html( top_score.toFixed( 0 ) );
      tours[ 1 ].next();
    }
  },
  highlight: function ( eles ) {
    eles.addClass( 'highlight' )
  },
  unhighlight: function ( eles ) {
    eles.removeClass( 'highlight' )
  },
  start: function ( tut_id ) {
    tours[ tut_id ].start();
  },
  complete: function ( tut_id ) {
    // console.log( tut_id );
    tours[ tut_id ].getById( 'complete_step' ).show();
  },
  error: function ( tut_id ) {
    tours[ tut_id ].getById( 'error_step' ).show();
  }
};

var DEFAULT_COLOR = '#809fff';
var NODE_OVERLAY_COLOR = 'red';
var GREY_COLOR = '#dadee5';
var DPP_COLOR = '#9999cc';
var UPP_COLOR = '#cc9999';
var DPP_HINT_COLOR = 'blue';
var UPP_HINT_COLOR = 'red';

var tutGraph = {
  init: function ( tut_id ) {

    style_json[ 'style' ].push( {
      'selector': 'node:selected',
      'style': {
        'overlay-color': NODE_OVERLAY_COLOR,
        'overlay-padding': 10,
        'overlay-opacity': 0.3,
        'z-index': 10,
        'background-color': DEFAULT_COLOR
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge',
      'style': {
        "curve-style": "bezier",
        'line-style': 'solid'
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.undirected',
      'style': {
        'line-color': DEFAULT_COLOR,
        'target-arrow-color': DEFAULT_COLOR,
        'width': EDGE_WIDTH,
        'z-index': 1
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.grey',
      'style': {
        'line-color': GREY_COLOR,
        'target-arrow-color': GREY_COLOR,
        'width': EDGE_WIDTH,
        'z-index': 0
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.dpp',
      'style': {
        'line-color': DPP_COLOR,
        'target-arrow-color': DPP_COLOR,
        'width': EDGE_WIDTH,
        'z-index': 2,
        'target-arrow-shape': 'triangle'
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.upp',
      'style': {
        'line-color': UPP_COLOR,
        'target-arrow-color': UPP_COLOR,
        'width': 1.5 * EDGE_WIDTH,
        'z-index': 3,
        'target-arrow-shape': 'triangle'
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.upp.hint',
      'style': {
        'z-index': 100,
        'line-color': UPP_HINT_COLOR,
        'target-arrow-color': UPP_HINT_COLOR,
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.dpp.hint',
      'style': {
        'z-index': 100,
        'line-color': DPP_HINT_COLOR,
        'target-arrow-color': DPP_HINT_COLOR,
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.dpp.hover',
      'style': {
        'z-index': 100,
        'line-color': DPP_HINT_COLOR,
        'target-arrow-color': DPP_HINT_COLOR,
      }
    } );

    style_json[ 'style' ].push( {
      'selector': ':parent',
      'style': {
        'background-opacity': 0.333,
        'background-color': '#ad1a66'
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'node',
      'style': {
        'font-size': '100px',
        'background-color': DPP_COLOR,
        'width': 2 * NODE_RADIUS,
        'height': 2 * NODE_RADIUS,
        'text-opacity': 1,
        'z-index': 50
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'node.grey',
      'style': {
        'background-color': GREY_COLOR,
        'text-opacity': 0,
        'z-index': 0
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'node.hint',
      'style': {
        'background-color': DEFAULT_COLOR,
        'z-index': 110
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'node.hover',
      'style': {
        'background-color': DEFAULT_COLOR,
        'z-index': 100
      }
    } );

    style_json[ 'style' ].push( {
      selector: 'node.intersections',
      style: {
        'width': NODE_RADIUS / 3,
        'height': NODE_RADIUS / 3,
        'background-color': UPP_COLOR,
        'z-index': 10,
      }
    } );

    style_json[ 'style' ].push( {
      selector: 'node.intersections.hint',
      style: {
        'background-color': UPP_HINT_COLOR,
        'z-index': 100,
      }
    } );

    style_json[ 'style' ].push( {
      'selector': '*',
      'style': {
        'z-index-compare': 'manual',
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.highlight',
      'style': {
        'line-color': 'green',
        'target-arrow-color': 'green',
        'target-arrow-shape': 'triangle',
        'z-index': 100
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'node.highlight',
      'style': {
        'background-color': 'green',
      }
    } );


    cy = window.cy = cytoscape( {
      container: document.getElementById( 'cy' ),
      touchTapThreshold: 8,
      desktopTapThreshold: 4,
      userZoomingEnabled: false,
      userPanningEnabled: false,
      zoom: 1,
      pan: {
        x: 0,
        y: 0
      },
      style: style_json[ 'style' ],
      elements: graph_json[ 'elements' ]
    } );

    cy.ready( function () {

      cy.layout( {
        name: 'preset',
        positions: positions_json,
        fit: true,
        padding: 30
      } ).run();

      undoRedoManager.update( fludGraph.getNodePositions() );

      fludGraph.initShapesAsDataVariables();
      fludGraph.initSquaresAndTriangles();
      fludGraph.removeDirectEdgesAmongSquaresAndTriangles();

      cy.edges().each( function ( edge ) {
        if ( edge.data( 'source' ) == edge.data( 'target' ) ) {
          cy.remove( edge );
        }
      } )

      fludGraph.removeIsolatedNodes();

      if ( Object.keys( positions_json ).length == 0 ) {
        fludGraph.moveSquaresAndTriangles();
      }

      positions_json = fludGraph.getNodePositions();

      // fludToolbox.setMode( DPP_MODE );
      fludGraph.displayNumEdgesOnNodes(); //provide label information for all nodes
      fludToolbox.recolorGraph();

      fludGraph.panzoom.init();
      fludToolbox.init();
      cy.on( 'drag', 'node', fludToolbox.onDrag ); //bind drag node event
      cy.on( 'grab', 'node', fludToolbox.onGrab ); //bind grab node event
      cy.on( 'select, tap', 'node', fludToolbox.onSelect ); //bind select node event
      cy.on( 'free', 'node', fludToolbox.onFree ); //bind release node event
      cy.on( 'position', 'node', fludToolbox.onPosition ); //bind node position change event
      // cy.fit();

      var layer = cy.cyCanvas( {
        zIndex: -1,
      } );
      var canvas = layer.getCanvas();
      var ctx = canvas.getContext( '2d' );

      cy.on( "render cyCanvas.resize", function ( evt ) {
        layer.clear( ctx );
        layer.setTransform( ctx );

        // Draw fixed elements
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = 15;
        var bb = EnergyUtil.Distances.computeBoundingBox( cy );
        var center = {
          x: ( bb.x1 + bb.x2 ) / 2,
          y: ( bb.y1 + bb.y2 ) / 2
        };
        ctx.strokeRect( center.x - 2500, center.y - 3000, 5000, 6000 ); // Top left corner
      } );

      tutorial.start( tut_id );
    } );

  },
  moveSquaresTrianglesAndEllipses: function () {
    //moves triangles to top and squares to bottom
    //gather the current canvas size
    var canvas = {
      x: cy.width(),
      y: cy.height()
    };

    //space the size past the initial 0
    var triangleCounterX = ( canvas.x / fludGraph.triangles.nodes().length ) / 2;
    var squareCounterX = ( canvas.x / fludGraph.squares.nodes().length ) / 2;

    fludGraph.triangles.nodes().each( function ( node ) {
      node.renderedPosition( {
        x: triangleCounterX,
        y: 80
      } );
      triangleCounterX = triangleCounterX + canvas.x / fludGraph.triangles.nodes().length;
    } );

    fludGraph.squares.nodes().each( function ( node ) {
      node.renderedPosition( {
        x: squareCounterX,
        y: canvas.y - 30
      } );
      squareCounterX = squareCounterX + canvas.x / fludGraph.squares.nodes().length;
    } );

    var bb = {
      top: 30,
      bottom: canvas.y - 30
    }

    cy.nodes( '[shape = "ellipse"]' ).not( '.ignore' ).each( function ( node ) {
      node.renderedPosition( {
        x: node.position( 'x' ) * ( canvas.x - 60 ) / 500,
        y: node.position( 'y' ) * ( canvas.y - 30 ) / 500
      } );
    } );

    cy.fit( cy.elements(), 10 );
  }
}