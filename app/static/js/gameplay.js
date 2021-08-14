/**
 * Created by adb on 21/02/18.
 */

// Defining mode constants

var DPP_MODE = 'DPP_MODE';
var EC_MODE = 'EC_MODE'; // edge crossing mode
var CUSTOM_MODE = 'CUSTOM_MODE';
var ND_MODE = 'ND_MODE'; // Node distribution mode
var NED_MODE = 'NED_MODE'; // Node distribution mode
var EL_MODE = 'EL_MODE'; // Edge length mode

// Defining layout name constants

var CIRCLE_LAYOUT = 'circle';
var TREE_LAYOUT = 'breadthfirst';
var CONCENTRIC_LAYOUT = 'concentric';
var SQUARE_LAYOUT = 'square';
var GRID_LAYOUT = 'grid';
var SPRING_LAYOUT = 'cose';

var HORIZONTAL_LAYOUT = 'horizontal';
var VERTICAL_LAYOUT = 'vertical';
var EXPAND_LAYOUT = 'expand';
var SQUEEZE_LAYOUT = 'squeeze';

// Defining shape constants

var TRIANGLE = 'triangle';
var SQUARE = 'square';
var RECTANGLE = 'rectangle';
var ELLIPSE = 'ellipse';

var NODE_RADIUS = 125;
var EDGE_WIDTH = 20;
var HINT_FADE_OUT_DELAY_IN_MICROSECONDS = 500;
var HINT_FADE_IN_DELAY_IN_MICROSECONDS = 1000;

// simple function to get a random integer between two given random numbers
function getRandomInt( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min ) ) + min; //The maximum is exclusive and the minimum is inclusive
}

var undoRedoManager, taskManager;
var isGameSaved = false;
var isTutorialModeOn = false;
var DO_NOT_PROMPT_FOR_LOGIN = false;
var initial_score;
var initial_scores;
var callHint;
var hintMoved = true;
var finishCalled = false;

var main_goal;
if ( mode === 'dpp' ) {
  main_goal = 'Downward Pointing Paths';
} else if ( mode === 'edgecrossings' ) {
  main_goal = 'Non-crossing edge pairs';
} else if ( mode === 'edgelength' ) {
  main_goal = 'Edge length';
} else if ( mode === 'nodedistribution' ) {
  main_goal = 'Node distribution';
} else if ( mode === 'nodeedgedistance' ) {
  main_goal = 'Node edge separation';
} else {
  main_goal = 'Downward Pointing Paths';
}

var gameplay = {
  init: function () {
    if ( worker_id.length > 0 ) {
      DO_NOT_PROMPT_FOR_LOGIN = true;
    }
    // check to see if the username has been defined
    if ( username == "None" ) username = "Anonymous";

    //initially disable the undo and redo buttons, since nothing has changed
    $( "#undo" ).addClass( 'disabled' );
    $( "#redo" ).addClass( 'disabled' );

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
    num_steps = 10000;
    taskManager = new TaskManager( game_id, num_steps + 1, worker_id, assignment_id,
      onAddStep = function () {
        $( '#NumStepsLeft' ).html( this.num_steps - this.steps_json.length );
        if ( this.steps_json.length >= this.num_steps ) {
          gameplay.finish();
        } else {
          // console.log( this.num_steps, this.steps_json.length );
        }
      } );

    $( '.action' ).click( function ( evt ) {
      taskManager.addAction( $( evt.target ).closest( '.action' ).attr( 'id' ) )
    } );

    $( '#undo' ).click( function () {
      undoRedoManager.undo();
    } );
    $( '#redo' ).click( function () {
      undoRedoManager.redo();
    } );
    timerWidget.init();
    scoresWidget.init();
    fludGraph.init();

    if ( mode === 'dpp' ) {
      fludToolbox.setMode( DPP_MODE );
    } else if ( mode === 'edgecrossings' ) {
      fludToolbox.setMode( EC_MODE );
    } else if ( mode === 'edgelength' ) {
      fludToolbox.setMode( EL_MODE );
    } else if ( mode === 'nodedistribution' ) {
      fludToolbox.setMode( ND_MODE );
    } else if ( mode === 'nodeedgedistance' ) {
      fludToolbox.setMode( NED_MODE );
    } else {
      fludToolbox.setMode( CUSTOM_MODE );
    }

    $( '.score-tools.' + mode ).removeClass( 'panel-collapse collapse' );
    $( 'li.list-group-item.action' ).attr( 'data-toggle', '' );


    initial_score = top_score;
    initial_scores = EnergyUtil.scores( cy );

    leaderboard.init();

    $( '#finishGameBtn' ).click( function () {
      $( '#finishGameBtn' ).hide();
      gameplay.finish();
    } );

    $( '#anonymousUserLoginBtn' ).click( function () {
      $( "#login_but" ).trigger( 'click' );
    } );

    $( '#continueAnonymousBtn' ).click( function () {
      DO_NOT_PROMPT_FOR_LOGIN = true;
    } );

    $( '[data-toggle="tooltip"]' ).tooltip();
    //make an alert appear if the user attempts to leave the page
    //due to browser security this must be a default alert instead of the dialogue modal
    // window.onbeforeunload = function () {
    // 	if ( !isGameSaved ) {
    // 		return 'You have unsaved changes!';
    // 	}
    // }

    //set onAppear for save dialogue modal
    $( '#finishedDialogueModal' ).on( 'show.bs.modal', function ( event ) {
      //we check to see if the user has created a higher or lower score, and then update the dialogue accordingly.
      var currentScore = EnergyUtil.totalscore( cy, weights );

      apis.score.get( game_id,
        successCallback = function ( response ) {
          if ( currentScore > response.score ) { //top score until check
            top_score = currentScore;
            $( '#finishedDescription' ).html( "<p>Well done! You are the current leader.</p><p>Your Score: " + currentScore + "</p><p>Top Score: " + response.score + "</p>" );
          } else if ( response.score > top_score ) { //top score until check
            top_score = response.score;
            $( '#finishedDescription' ).html( "<p>Oh No! While you were playing, someone else got a higher score!</p><p>Your Score: " + currentScore + "</p><p>Top Score: " + response.score + "</p>" );
          } else if ( currentScore < top_score ) { //low score
            $( '#finishedDescription' ).html( "<p>Keep going - someone still has a higher score than you!</p><p>Your Score: " + currentScore + "</p><p>Top Score: " + response.score + "</p>" );
          } else {
            $( '#finishedDescription' ).html( "<p>Keep going! You currently have the same score as the leader.</p><p>Your Score: " + currentScore + "</p><p>Top Score: " + response.score + "</p>" );
          }
          $( '#currentTopScore' ).text( top_score.toFixed( 0 ) );
        },
        errorCallback = function ( xhr, status, errorThrown ) {
          // This method is called when  error occurs while getting
          console.log( status );
          console.log( errorThrown );
          alert( "I'm sorry, an error occurred. Please try again." );
        } );
    } );

    $( '#resubmitGameBtn' ).click( function () {
      gameplay.finish();
    } );

    $( '#bonusTableModal' ).on( 'show.bs.modal', function ( e ) {
      scoresWidget.initBonusTable();
    } );
  },
  finish: function () {
    window.onbeforeunload = undefined;
    $( '#gameOverModal' ).modal( {
      show: true,
      backdrop: 'static',
      keyboard: false
    } );

    if ( !finishCalled ) {
      finishCalled = false;
      setTimeout( function () {
        window.location.href = '/games/';
      }, 1000 );
      // UNCOMMENT THE FOLLOWING CODE TO CREATE MTURK HITS AT THE END OF TASK
      // THIS IS COMMENT SINCE THIS IS A PUBLIC VERSION
      // taskManager.save( successCallback = function ( response ) {
      //     finishCalled = false;
      //     if ( worker_id.length == 0 ) {
      //       setTimeout( function () {
      //         window.location.href = '/games/';
      //       }, 1000 );
      //     } else {
      //       if ( response.bonus > 0 ) {
      //         $( '#bonusToken' ).html( response.bonus_token );
      //       } else {
      //         $( '#bonusToken' ).html( 'No bonus token required for zero bonus!' );
      //       }
      //
      //       $( '#gameOverModal' ).modal( 'hide' );
      //       $( '#bonusModal' ).modal( {
      //         show: true,
      //         backdrop: 'static',
      //         keyboard: false
      //       } );
      //     }
      //   },
      //   errorCallback = function ( xhr, status, errorThrown ) {
      //     finishCalled = false;
      //     $( '#gameOverModal' ).modal( {
      //       show: false
      //     } );
      //     // This method is called when  error occurs while getting
      //     console.log( status );
      //     console.log( errorThrown );
      //
      //     $( '#resubmitGameModal' ).modal( {
      //       show: true,
      //       backdrop: 'static',
      //       keyboard: false
      //     } );
      //   } );
    }
  },
  save: function ( exit ) {
    var currentScore = EnergyUtil.totalscore( cy, weights );
    var currentPositions = fludGraph.getNodeModelPositions();
    var scores = EnergyUtil.scores( cy );

    apis.score.get( game_id,
      successCallback = function ( response ) {

        if ( response.score > top_score ) {
          top_score = response.score;
        }

        if ( currentScore > response.score ) {
          if ( username == "Anonymous" && !DO_NOT_PROMPT_FOR_LOGIN ) {
            $( '#AnonymousUserLoginPromptModel' ).modal(); // If user is Anonymous, prompt user to log in
          }

          top_score = currentScore;

          isGameSaved = false;

          apis.games.update( game_id, {
              'top_scorer': username,
              'score': currentScore,
              'dpp': scores[ 'dpp' ] * weights[ 'dpp' ],
              'ec': scores[ 'edgecrossings' ] * weights[ 'edgecrossings' ],
              'el': scores[ 'edgelength' ] * weights[ 'edgelength' ],
              'nd': scores[ 'nodedistribution' ] * weights[ 'nodedistribution' ],
              'ned': scores[ 'nodeedgedistance' ] * weights[ 'nodeedgedistance' ],
              'json': currentPositions,
              'image': cy.png()
            },
            successCallback = function ( response ) {
              isGameSaved = true;
              scoresWidget._updateTotalBonus();
            },
            errorCallback = function ( xhr, status, errorThrown ) {
              //alert("I'm sorry, an error occurred. Please try again.");
              console.log( "xhr:" );
              console.log( xhr );
              console.log( "status:" );
              console.log( status );
              console.log( "error thrown:" );
              console.log( errorThrown );
              alert( "I'm sorry, an error occurred. Please try again." );
            } );

          gameplay.bestLayout = JSON.parse( JSON.stringify( currentPositions ) );

          leaderboard.socket.send( JSON.stringify( {
            'player': username,
            'topscore': top_score.toFixed( 0 ),
          } ) );

        }

        $( '#currentTopScore' ).text( top_score.toFixed( 0 ) );

      },
      errorCallback = function ( xhr, status, errorThrown ) {
        // This method is called when  error occurs while getting
        console.log( status );
        console.log( errorThrown );
        alert( "I'm sorry, an error occurred. Please try again." );
      } );

  }
};


var leaderboard = {
  $table: $( '#leaderboardTable' ),
  data: [],
  socket: new WebSocket( 'ws://' + window.location.host + '/ws/games/' + gameId + '/leaderboard' ),
  init: function () {
    for ( var i = 0; i < topScorers.length; i++ ) {
      leaderboard.data.push( {
        'player': topScorers[ i ].user.email,
        'topscore': topScorers[ i ].topscore,
      } );
    }
    leaderboard.$table.bootstrapTable( {
      data: leaderboard.data
    } )

    leaderboard.socket.onmessage = function ( e ) {
      var data = JSON.parse( e.data );
      var topscore = parseInt( data[ 'topscore' ] );
      var player = data[ 'player' ];
      var playerfound = false;
      var bestTopScore = topscore;

      for ( var i = 0; i < leaderboard.data.length; i++ ) {
        if ( player === leaderboard.data[ i ][ 'player' ] ) {
          leaderboard.data[ i ][ 'topscore' ] = topscore > leaderboard.data[ i ][ 'topscore' ] ? topscore : leaderboard.data[ i ][ 'topscore' ];
          playerfound = true;
        }
        bestTopScore = Math.max( bestTopScore, leaderboard.data[ i ][ 'topscore' ] )
      }
      if ( !playerfound ) {
        leaderboard.data.push( {
          'player': player,
          'topscore': topscore,
        } );
      }

      $( '#currentTopScore' ).text( bestTopScore.toFixed( 0 ) );

      leaderboard.$table.bootstrapTable( 'load', leaderboard.data );
    };

    leaderboard.socket.onclose = function ( e ) {
      console.error( 'Chat socket closed unexpectedly' );
    };
  },
  responseHandler: function ( res ) {
    res.forEach( function ( row, i ) {
      row.index = i
    } )
    return res;
  }
}

var DEFAULT_COLOR = '#809fff';
var NODE_OVERLAY_COLOR = 'red';
var GREY_COLOR = '#dadee5';
var DPP_COLOR = '#9999cc';
var UPP_COLOR = '#cc9999';
var DPP_HINT_COLOR = 'blue';
var UPP_HINT_COLOR = 'red';

var fludGraph = {
  triangles: undefined,
  squares: undefined,
  order: 0,
  size: 0,
  init: function () {

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

    var cy = window.cy = cytoscape( {
      container: document.getElementById( 'cy' ),
      touchTapThreshold: 8,
      desktopTapThreshold: 4,
      wheelSensitivity: 0.2,
      userZoomingEnabled: false,
      userPanningEnabled: false,
      minZoom: 0.01,
      maxZoom: 5,
      zoom: 1,
      pan: {
        x: 0,
        y: 0
      },
      style: style_json[ 'style' ],
      elements: graph_json[ 'elements' ],
      layout: {
        name: 'random',
        fit: true,
        boundingBox: {
          x1: 0,
          y1: 0,
          w: 5000,
          h: 6000
        }
      }
    } );

    cy.ready( function () {

      var initialLayout = cy.elements().not( '.ignore' ).layout( {
        name: 'preset',
        positions: positions_json,
        padding: 10,
        fit: true,
        animate: false,
        stop: function () {
          undoRedoManager.update( fludGraph.getNodePositions() );

          fludGraph.order = cy.nodes().length;
          fludGraph.size = cy.edges().length;

          fludGraph.initShapesAsDataVariables();
          fludGraph.initSquaresAndTriangles();
          // fludGraph.removeDirectEdgesAmongSquaresAndTriangles();
          // fludGraph.removeIsolatedNodes();
          // fludGraph.initSquaresAndTriangles(); // some triangles or squares may have been deleted

          if ( Object.keys( positions_json ).length == 0 ) {
            fludGraph.moveSquaresAndTriangles();
          }

          fludGraph.displayNumEdgesOnNodes(); //provide label information for all nodes
          fludToolbox.recolorGraph();
          // fludGraph.initialNodeColoration(); //initial colorization of nodes
          // fludGraph.initialEdgeColoration(); //initial colorization of edges
          // fludGraph.panzoom.init();
          fludToolbox.init();

          cy.on( 'drag', 'node', fludToolbox.onDrag ); //bind drag node event
          cy.on( 'grab', 'node', fludToolbox.onGrab ); //bind grab node event
          cy.on( 'select, tap', 'node', fludToolbox.onSelect ); //bind select node event
          cy.on( 'free', 'node', fludToolbox.onFree ); //bind release node event
          cy.on( 'position', 'node', fludToolbox.onPosition ); //bind node position change event

          // cy.nodes().on( 'boxselect', function ( evt ) {
          //   evt.target.style( 'z-index', 100 );
          // } );

          cy.on( 'tap', function ( evt ) {
            if ( evt.target === cy ) {
              // cy.nodes().selectify().unselect().unselectify();
              cy.nodes().selectify().unselect();
              // cy.elements( '.hint' ).removeClass( 'hint' );
              // fludToolbox.recolorGraph();
            }
          } );

          cy.on( 'free', 'node', function ( evt ) {
            // var nodes = cy.nodes( ':selected' ).length > 0 ? cy.nodes( ':selected' ) : evt.target;
            if ( evt.target.selected() ) {
              var nodes = cy.nodes( ':selected' );
            } else {
              var nodes = evt.target;
            }
            var fn = function ( prevVal, ele, i, eles ) {
              if ( prevVal ) {
                return prevVal + ' ; ' + ele.id();
              } else {
                return ele.id();
              }
            };
            var ids = nodes.reduce( fn, null );
            if ( evt.target.hasClass( 'hint' ) ) {
              taskManager.addAction( 'moveClue( [' + ids + '] )' );
            } else {
              taskManager.addAction( 'move( [' + ids + '] )' );
            }
          } );

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

          gameplay.bestLayout = JSON.parse( JSON.stringify( fludGraph.getNodeModelPositions() ) );

          cy.elements().not( '.ignore' ).layout( {
            name: 'preset',
            padding: 10,
            positions: positions_json,
            fit: true,
            animate: false
          } ).run();
        }
      } ).run();

    } );
  },
  setNodePositions: function ( positions ) {
    clearTimeout( window.loadingPositions );
    for ( var node in positions ) {
      cy.nodes( '#' + node.replace( /,/g, '\\,' ) ).renderedPosition( positions[ node ] );
    }
    scoresWidget.calculatingScores();
    fludToolbox.recolorGraph();
    window.loadingPositions = setTimeout( function () {
      scoresWidget.update( cy.nodes().not( '.ignore' ) );
      fludToolbox.recolorGraph();
      fludToolbox.positionChanged = false;
    }, 1000 );
  },
  getNodePositions: function () {
    current_positions = {}
    cy.nodes().not( '.ignore' ).each( function ( n ) {
      current_positions[ n.id() ] = n.renderedPosition();
    } );
    return current_positions;
  },
  getNodeModelPositions: function () {
    var p = {};
    cy.nodes().not( '.ignore' ).each( function ( n ) {
      p[ n.id() ] = n.position();
    } );
    return p;
  },
  getShapeJson: function () {
    current_shapes = {}
    cy.nodes().not( '.ignore' ).each( function ( n ) {
      current_shapes[ n.id() ] = n.data( 'shape' );
    } );
    return current_shapes;
  },
  initShapesAsDataVariables: function () {
    cy.nodes().each( function ( node ) {
      var shape = node.style()[ 'shape' ];
      if ( shape == SQUARE || shape == RECTANGLE ) {
        shape = SQUARE;
      }
      node.data( 'shape', shape );
    } );
  },
  initSquaresAndTriangles: function () {
    fludGraph.triangles = cy.nodes( '[shape = "triangle"]' );
    fludGraph.squares = cy.nodes( 'node[shape = "rectangle"], node[shape = "square"]' );
  },
  removeDirectEdgesAmongSquaresAndTriangles: function () {
    cy.nodes( 'node[shape = "rectangle"], node[shape = "square"], node[shape = "triangle"]' )
      .edgesWith( cy.nodes( 'node[shape = "rectangle"], node[shape = "square"], node[shape = "triangle"]' ) )
      .each( function ( edge ) {
        cy.remove( edge );
      } );

    // cy.nodes( 'node[shape = "ellipse"]' )
    //   .edgesTo( cy.nodes( 'node[shape = "triangle"]' ) )
    //   .each( function ( edge ) {
    //     cy.remove( edge );
    //   } );
    //
    // cy.nodes( 'node[shape = "rectangle"], node[shape = "square"]' )
    //   .edgesTo( cy.nodes( 'node[shape = "ellipse"]' ) )
    //   .each( function ( edge ) {
    //     cy.remove( edge );
    //   } );
  },
  removeIsolatedNodes: function () {
    cy.nodes().each( function ( node ) {
      if ( node.totalDegree( true ) == 0 )
        cy.remove( node );
    } );
  },
  moveSquaresAndTriangles: function () {
    //moves triangles to top and squares to bottom
    //gather the current canvas size
    var canvas = {
      x: 5000 - 2 * NODE_RADIUS,
      y: 6000 - 2 * NODE_RADIUS
    };

    //space the size past the initial 0
    var triangleCounterX = ( canvas.x / fludGraph.triangles.nodes().length ) / 2;
    var squareCounterX = ( canvas.x / fludGraph.squares.nodes().length ) / 2;

    fludGraph.triangles.nodes().each( function ( node ) {
      node.position( {
        x: triangleCounterX,
        y: 0
      } );
      triangleCounterX = triangleCounterX + canvas.x / fludGraph.triangles.nodes().length;
    } );

    fludGraph.squares.nodes().each( function ( node ) {
      node.position( {
        x: squareCounterX,
        y: canvas.y
      } );
      squareCounterX = squareCounterX + canvas.x / fludGraph.squares.nodes().length;
    } );

    var bb = {
      top: 0,
      bottom: canvas.y,
      left: 0,
      right: canvas.x
    }

    // ensures that each circle is below the triangles and above the squares by
    // assigning a new random y value if it was not originally
    cy.nodes( '[shape = "ellipse"]' ).not( '.ignore' ).each( function ( node ) {
      // move the node to a random spot between triangles and rectangles
      // for now, use a extra padding of 80 to make sure the circle is not
      // on top of or right next to the triangles or squares
      // console.log(bb);

      var randomY = getRandomInt( bb.top + 2 * NODE_RADIUS, bb.bottom - 2 * NODE_RADIUS );
      var randomX = getRandomInt( bb.left + 2 * NODE_RADIUS, bb.right - 2 * NODE_RADIUS );
      node.position( {
        'x': randomX,
        'y': randomY,
      } );

      // if ( node.position( 'y' ) < bb.top + 2 * NODE_RADIUS || node.position( 'y' ) > bb.bottom - 2 * NODE_RADIUS ) {
      //
      // }
    } );

    cy.fit( cy.elements(), 10 );
  },
  initialNodeColoration: function () {
    cy.nodes().not( '.ignore' ).removeClass( 'grey' );
    //color initial nodes
    //also sets initial z index
    // cy.nodes().not( '.ignore' ).style( 'background-color', '#809fff' );
    // cy.nodes().not( '.ignore' ).style( 'width', 2 * NODE_RADIUS );
    // cy.nodes().not( '.ignore' ).style( 'height', 2 * NODE_RADIUS );
    // cy.nodes().not( '.ignore' ).style( 'z-index', 2 );
    // cy.elements().not( '.ignore' ).style( 'z-index-compare', 'manual' );
  },
  initialEdgeColoration: function () {
    //color initial edges
    // cy.edges().not( '.ignore' ).style( 'line-color', '#809fff' );
    // cy.edges().not( '.ignore' ).style( 'line-style', 'solid' );
    // cy.edges().not( '.ignore,.hint' ).style( 'z-index', 1 );
    cy.edges().not( '.ignore' ).removeClass( 'grey' );
    cy.edges( "[directed='false'], [!is_directed]" ).not( '.ignore' ).addClass( 'undirected' );
    // cy.edges().not( '.ignore' ).style( 'z-index-compare', 'manual' );
    cy.edges( "[directed='true'], [?is_directed]" ).not( '.ignore' ).each( function ( edge ) {
      fludGraph.colorDirectedEdge( edge );
    } );
  },
  defaultNodeColoration: function ( nodes ) {
    nodes.not( '.ignore' ).removeClass( 'grey' );
    // nodes.not( '.ignore' ).style( 'background-color', '#809fff' );
    // nodes.not( '.ignore' ).style( 'width', 2 * NODE_RADIUS );
    // nodes.not( '.ignore' ).style( 'height', 2 * NODE_RADIUS );
    // nodes.not( '.ignore,.hint' ).style( 'z-index', 2 );
    // nodes.filter( ':selected' ).style( 'z-index', 100 );
  },
  defaultEdgeColoration: function ( edges ) {
    // edges.not( '.ignore' ).style( 'line-color', '#809fff' );
    // edges.not( '.ignore' ).style( 'line-style', 'solid' );
    cy.edges( "[directed='false'], [!is_directed]" ).not( '.ignore' ).addClass( 'undirected' ).removeClass( 'grey' );
    edges.filter( "[directed='true'], [?is_directed]" ).not( '.ignore' ).each( function ( edge ) {
      fludGraph.colorDirectedEdge( edge );
    } );
  },
  colorDirectedEdge: function ( edge ) {
    var source_shape = String( edge.source().style().shape ).replace( /\s/g, '' );
    var target_shape = String( edge.target().style().shape ).replace( /\s/g, '' );
    //if the angle is below horizontal it is considered an downward slope
    //update, only make the arrow red if it can be changed to be blue
    //square->node and node->triangle edges are upward pointing and cannot be changed to be blue
    if ( Graph.isCorrectAngle( edge ) ) {
      hintMoved = edge.hasClass( 'upp' ) || cy.elements( '.hint' ).length > 0 || hintMoved;
      edge.removeClass( 'grey' ).removeClass( 'dpp' ).removeClass( 'upp' )
      edge.addClass( 'dpp' );
    } else {
      hintMoved = edge.hasClass( 'dpp' ) || cy.elements( '.hint' ).length > 0 || hintMoved;
      edge.removeClass( 'grey' ).removeClass( 'dpp' ).removeClass( 'upp' )
      edge.addClass( 'upp' );
    }
  },
  isCorrectAngle: function ( edge ) {
    return Graph.isCorrectAngle( edge );
  },
  displayNumEdgesOnNodes: function () {
    cy.nodes().not( '.ignore' ).each( function ( node ) {
      node.style( 'label', node.totalDegree( true ) );
      node.style( 'text-valign', 'center' );
      node.style( 'text-outline-width', '0' );
    } );
  },
  isGoodHint: function ( edge ) {
    //Compare function
    //Return true if changing the position of target edge can increase the score
    //edge is not correctAngle()
    //currentScore variable
    var cy2 = cytoscape( {
      elements: cy.elements().clone().jsons(),
      layout: {
        name: 'preset'
      }
    } );

    var origScore = EnergyUtil.DPP.countDownwardPointingPathsFromTriangles( cy2 );

    var source = cy2.nodes( '#' + edge.source().id().replace( /,/g, '\\,' ) );
    var target = cy2.nodes( '#' + edge.target().id().replace( /,/g, '\\,' ) );

    //Initially targetY > sourceY
    var sourceY = source.position( 'y' );
    var targetY = target.position( 'y' );

    var sourceX = source.position( 'x' );
    var targetX = target.position( 'x' );

    // try moving the source node to barely above the target node
    // and then compute the score
    var possiblePositionSource = {
      "x": targetX,
      "y": targetY - 1
    };
    source.position( possiblePositionSource, true );

    //New score when changing source node
    var sourceScore = EnergyUtil.DPP.countDownwardPointingPathsFromTriangles( cy2 );

    //Render source node back to original position
    var possiblePositionSource = {
      "x": sourceX,
      "y": sourceY
    };
    source.position( possiblePositionSource, true );

    // try moving the target node to barely below the source node
    // and then compute the score
    var possiblePositionTarget = {
      "x": sourceX,
      "y": sourceY + 1
    };
    target.position( possiblePositionTarget, true );

    //New score when changing target node
    var targetScore = EnergyUtil.DPP.countDownwardPointingPathsFromTriangles( cy2 );

    //Render target node back to original position
    var newPossiblePositionTarget = {
      "x": targetX,
      "y": targetY
    };
    target.position( newPossiblePositionTarget, true );

    if ( sourceScore > targetScore ) {
      // will return true if sourceScore > origScore, otherwise false
      if ( sourceScore > origScore ) {
        return true;
      }
    }
    if ( targetScore > origScore ) {
      return true;
    }
    return false;
  },
  isGoodHint1: function ( edge ) {
    //Compare function
    //Return true if changing the position of target edge can increase the score
    //edge is not correctAngle()
    //currentScore variable
    var origScore = EnergyUtil.DPP.countDownwardPointingPathsFromTriangles( cy );

    var source = edge.source();
    var target = edge.target();

    //Initially targetY > sourceY
    var sourceY = source.position( 'y' );
    var targetY = target.position( 'y' );

    var sourceX = source.position( 'x' );
    var targetX = target.position( 'x' );

    // try moving the source node to barely above the target node
    // and then compute the score
    var possiblePositionSource = {
      "x": targetX,
      "y": targetY - 1
    };
    source.position( possiblePositionSource, true );

    //New score when changing source node
    var sourceScore = EnergyUtil.DPP.countDownwardPointingPathsFromTriangles( cy );

    //Render source node back to original position
    var possiblePositionSource = {
      "x": sourceX,
      "y": sourceY
    };
    source.position( possiblePositionSource, true );

    // try moving the target node to barely below the source node
    // and then compute the score
    var possiblePositionTarget = {
      "x": sourceX,
      "y": sourceY + 1
    };
    target.position( possiblePositionTarget, true );

    //New score when changing target node
    var targetScore = EnergyUtil.DPP.countDownwardPointingPathsFromTriangles( cy );

    //Render target node back to original position
    var newPossiblePositionTarget = {
      "x": targetX,
      "y": targetY
    };
    target.position( newPossiblePositionTarget, true );

    if ( sourceScore > targetScore ) {
      // will return true if sourceScore > origScore, otherwise false
      if ( sourceScore > origScore ) {
        return true;
      }
    }
    if ( targetScore > origScore ) {
      return true;
    }
    return false;
  },
  greyOutGraph: function () {
    // cy.edges().not( '.ignore' ).style( 'line-color', '#dadee5' );
    // cy.edges().not( '.ignore' ).style( 'target-arrow-color', '#dadee5' );
    // cy.edges().not( '.ignore' ).style( 'width', EDGE_WIDTH );
    cy.edges().not( '.hint' ).removeClass( 'undirected' ).removeClass( 'upp' ).removeClass( 'dpp' ).addClass( 'grey' );
    cy.nodes().not( '.hint' ).addClass( 'grey' );
    // cy.nodes().not( '.ignore' ).style( 'background-color', '#dadee5' );
    // cy.nodes().not( '.ignore' ).style( 'text-opacity', '0' );
    // cy.nodes().not( '.ignore' ).style( 'z-index', 0 );
    // cy.edges().not( '.ignore' ).style( 'z-index', 0 );
  },
  recolorGraph: function () {
    //recolors the graph after the selected node has been deselected
    cy.$( ".intersections" ).style( 'visibility', 'hidden' );

    fludGraph.initialNodeColoration();
    fludGraph.initialEdgeColoration();

    //let the numbers reappear
    // cy.nodes().style( 'text-opacity', '1' );
  },
  colorConnectedEdges: function ( node ) {
    node.connectedEdges().not( '.ignore' ).each( function ( edge ) {
      var edgeData = edge.data();
      //is this a directed graph?
      if ( edgeData.directed == 'true' ) {
        fludGraph.colorDirectedEdge( edge );
      } else {
        edge.removeClass( 'grey' ).removeClass( 'dpp' ).removeClass( 'upp' ).addClass( 'undirected' );
      }
    } );
  },
  highlightSelectedNodeAndEdges: function ( node ) {

    fludGraph.greyOutGraph(); //grey out the entire graph
    node.removeClass( 'grey' )
    fludGraph.colorConnectedEdges( node ); //color the edges from the selected node
  },
  panzoom: {
    init: function () {
      // add in the panzoom widget for ease of use
      // the default values of each option are outlined below:
      var defaults = {
        zoomFactor: 0.05, // zoom factor per zoom tick
        zoomDelay: 45, // how many ms between zoom ticks
        minZoom: 0.1, // min zoom level
        maxZoom: 5, // max zoom level
        fitPadding: 10, // padding when fitting
        panSpeed: 10, // how many ms in between pan ticks
        panDistance: 10, // max pan distance per tick
        panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
        panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
        panInactiveArea: 8, // radius of inactive area in pan drag box
        panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
        zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
        fitSelector: undefined, // selector of elements to fit
        animateOnFit: function () { // whether to animate on fit
          return false;
        },
        fitAnimationDuration: 1000, // duration of animation on fit

        // icon class names
        sliderHandleIcon: 'fa fa-minus',
        zoomInIcon: 'fa fa-plus',
        zoomOutIcon: 'fa fa-minus',
        resetIcon: 'fa fa-expand'
      };
      cy.panzoom( defaults );
      //add in the tutorial information to panzoom
      $( '.cy-panzoom-slider' ).attr( {
        "value": "pan",
        "data-intro": "Zoom in and out.",
        "data-step": "5"
      } );
      $( '.cy-panzoom-reset' ).attr( {
        "value": "pan",
        "data-intro": "Scale graph to fit page.",
        "data-step": "6"
      } );
      $( '.cy-panzoom-panner-handle' ).attr( {
        "value": "pan",
        "data-intro": "Pan around the screen.",
        "data-step": "7"
      } );
    }
  }
};

var timerWidget = {
  timer: undefined,
  minsSpent: 0,
  init: function () {
    timerWidget.timer = setInterval( timerWidget.minuteTimer, 60000 );
  },
  minuteTimer: function () {
    if ( timerWidget.minsSpent < 59 ) {
      timerWidget.minsSpent += 1;
      $( '#NumMinsLeft' ).html( parseFloat( $( '#NumMinsLeft' ).html() ) - 1 );
    } else {
      clearInterval( timerWidget.timer );
      gameplay.finish();
      console.log( 'Time Out!!!' );
    }
  }


};

var scoresWidget = {
  init: function () {
    $( '#currentTopScore' ).text( top_score.toFixed( 0 ) );

    // var bgPalette = [ '#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b' ];
    // var colorPalette = [ '#08306b', '#08306b', '#08306b', '#08306b', '#08306b', '#08306b', '#ffffff', '#ffffff', '#ffffff', '#ffffff' ];
    //
    // for ( var name in weights ) {
    //   if ( weights[ name ] <= 0 ) {
    //     $( '.' + name ).hide();
    //   }
    //   $( 'li.list-group-item.' + name ).css( 'background', bgPalette[ Math.round( weights[ name ] / 1 ) ] );
    //   $( 'li.list-group-item.' + name ).css( 'color', colorPalette[ Math.round( weights[ name ] / 1 ) ] );
    //   $( 'li.list-group-item.' + name ).data( 'position', weights[ name ] );
    // }

    // var sortedScoreItems = $( ".list-group.scores-list" ).children( 'li.list-group-item' ).sort( function ( a, b ) {
    // 	return ( $( b ).data( 'position' ) ) > ( $( a ).data( 'position' ) ) ? 1 : -1;
    // } );

    // var newList = [];
    // sortedScoreItems.each( function ( i, item ) {
    // 	newList.push( item );
    // 	newList.push( $( $( item ).attr( 'href' ) ) );
    // } );

    // $( ".list-group.scores-list" ).html( newList );

    $( 'ul.scores-list > li.list-group-item' ).click( function ( evt ) {
      $( '.panel-collapse' ).collapse( 'hide' );
      $( 'ul.scores-list > li.list-group-item' ).not( evt.target ).find( '.accordian-icon' ).addClass( 'fa-plus-square' ).removeClass( 'fa-minus-square' );
      $( evt.target ).find( '.panel-collapse' ).collapse( 'toggle' );
      $( evt.target ).find( '.accordian-icon' ).toggleClass( 'fa-plus-square' ).toggleClass( 'fa-minus-square' );
    } );

    // $( 'ul.scores-list' ).on( 'show.bs.collapse', function ( evt ) {
    //   fludToolbox.setMode( $( evt.target ).data( 'mode' ) );
    // } )
    //
    // $( 'ul.scores-list' ).on( 'hide.bs.collapse', function ( evt ) {
    //   fludToolbox.setMode( CUSTOM_MODE );
    // } )

    //setInterval(function () {
    //    $('.blinking-icon').toggleClass('transparent');
    //}, 500);
  },
  update: function ( movedNodes ) {
    scoresWidget.calculatingScores();
    layout.update( movedNodes );
    scoresWidget._updateScores();
    fludToolbox.positionChanged = false;
  },
  calculatingScores: function () {
    $( '.flud-sub-score' ).html( '<i class="fas fa-spinner fa-pulse fa-fw"></i>' );
  },
  _updateScores: function () {

    var scores = EnergyUtil.scores( cy );
    var oldScores = EnergyUtil.oldScores( cy );

    if ( weights[ 'edgecrossings' ] > 0 )
      scoresWidget._updateScore( scores[ 'edgecrossings' ], oldScores[ 'edgecrossings' ], 'edgeCrossingsScore' );
    if ( weights[ 'nodedistribution' ] > 0 )
      scoresWidget._updateScore( scores[ 'nodedistribution' ], oldScores[ 'nodedistribution' ], 'nodeDistributionScore' );
    if ( weights[ 'nodeedgedistance' ] > 0 )
      scoresWidget._updateScore( scores[ 'nodeedgedistance' ], oldScores[ 'nodeedgedistance' ], 'nodeEdgeDistanceScore' );
    if ( weights[ 'edgelength' ] > 0 )
      scoresWidget._updateScore( scores[ 'edgelength' ], oldScores[ 'edgelength' ], 'edgeLengthScore' );
    if ( weights[ 'dpp' ] > 0 )
      scoresWidget._updateScore( scores[ 'dpp' ], oldScores[ 'dpp' ], 'downwardPointingPathScore' );

    var currentScore = EnergyUtil.totalscore( cy, weights );
    if ( !isNaN( parseInt( $( '#score' ).html() ) ) ) {
      var changeInScore = currentScore - parseInt( $( '#score' ).html() );
      if ( changeInScore < 0 ) {
        // Lost points
        // $( '.flud-thumbs-icon.flud-thumbs-down' ).show();

        $( '.flud-thumbs-icon.flud-thumbs-down > div' ).html( changeInScore );
        $( '.flud-thumbs-icon.flud-thumbs-down' ).show();
        setTimeout( function () {
          $( '.flud-thumbs-icon.flud-thumbs-down' ).hide();
        }, 1000 );
      } else if ( changeInScore > 0 ) {
        // Gained points
        // $( '.flud-thumbs-icon.flud-thumbs-up' ).show();
        $( '.flud-thumbs-icon.flud-thumbs-up > div' ).html( '+' + changeInScore );
        $( '.flud-thumbs-icon.flud-thumbs-up' ).show();
        setTimeout( function () {
          $( '.flud-thumbs-icon.flud-thumbs-up' ).hide();
        }, 1000 );
      }
      scoresWidget._updatePoints( currentScore - initial_score, initial_score );
    }

    $( '#score' ).html( currentScore.toFixed( 0 ) );

    if ( !isTutorialModeOn ) {
      gameplay.save();
      taskManager.addStep( fludGraph.getNodeModelPositions() );
    } else {
      tutorial.save();
    }
    scoresWidget.initBonusTable();
  },
  _getBonuses: function () {
    var scores = EnergyUtil.scores( cy );
    if ( initial_scores ) {
      return {
        'dpp': compensation_data[ 'DPP_BUDGET' ] ? scoresWidget.payment( scores[ 'dpp' ] * weights[ 'dpp' ], initial_scores[ 'dpp' ] * weights[ 'dpp' ], compensation_data[ 'DPP_MAX_BUDGET' ], compensation_data[ 'DPP_GOAL' ] ) : 0,
        'edgecrossings': compensation_data[ 'EC_BUDGET' ] ? scoresWidget.payment( scores[ 'edgecrossings' ] * weights[ 'edgecrossings' ], initial_scores[ 'edgecrossings' ] * weights[ 'edgecrossings' ], compensation_data[ 'EC_MAX_BUDGET' ], compensation_data[ 'EC_GOAL' ] ) : 0,
        'edgelength': compensation_data[ 'EL_BUDGET' ] ? scoresWidget.payment( scores[ 'edgelength' ] * weights[ 'edgelength' ], initial_scores[ 'edgelength' ] * weights[ 'edgelength' ], compensation_data[ 'EL_MAX_BUDGET' ], compensation_data[ 'EL_GOAL' ] ) : 0,
        'nodeedgedistance': compensation_data[ 'ND_BUDGET' ] ? scoresWidget.payment( scores[ 'nodeedgedistance' ] * weights[ 'nodeedgedistance' ], initial_scores[ 'nodeedgedistance' ] * weights[ 'nodeedgedistance' ], compensation_data[ 'NED_MAX_BUDGET' ], compensation_data[ 'NED_GOAL' ] ) : 0,
        'nodedistribution': compensation_data[ 'NED_BUDGET' ] ? scoresWidget.payment( scores[ 'nodedistribution' ] * weights[ 'nodedistribution' ], initial_scores[ 'nodedistribution' ] * weights[ 'nodedistribution' ], compensation_data[ 'ND_MAX_BUDGET' ], compensation_data[ 'ND_GOAL' ] ) : 0,
      }
    } else {
      return {
        'dpp': 0,
        'edgecrossings': 0,
        'edgelength': 0,
        'nodeedgedistance': 0,
        'nodedistribution': 0
      }
    }
  },
  _updateTotalBonus: function () {
    var bonuses = scoresWidget._getBonuses();
    var totalBonus = bonuses[ 'dpp' ] + bonuses[ 'edgecrossings' ] + bonuses[ 'edgelength' ] + bonuses[ 'nodedistribution' ] + bonuses[ 'nodeedgedistance' ];
    if ( totalBonus > parseFloat( $( '#totalBonus' ).html() ) ) {
      $( '#totalBonus' ).html( totalBonus.toFixed( 2 ) );
      $( '#bonusProgressBar' ).css( 'width', ( 100 * totalBonus / compensation_data[ 'DPP_BUDGET' ] ).toFixed( 0 ) + '%' );
      $( '#downwardPointingPathScorePay' ).html( ( compensation_data[ 'DPP_BUDGET' ] - bonuses[ 'dpp' ] ).toFixed( 2 ) );
      $( '#edgeCrossingsScorePay' ).html( ( compensation_data[ 'EC_BUDGET' ] - bonuses[ 'edgecrossings' ] ).toFixed( 2 ) );
      $( '#edgeLengthScorePay' ).html( ( compensation_data[ 'EL_BUDGET' ] - bonuses[ 'edgelength' ] ).toFixed( 2 ) );
      $( '#nodeDistributionScorePay' ).html( ( compensation_data[ 'ND_BUDGET' ] - bonuses[ 'nodedistribution' ] ).toFixed( 2 ) );
      $( '#nodeEdgeDistanceScorePay' ).html( ( compensation_data[ 'NED_BUDGET' ] - bonuses[ 'nodeedgedistance' ] ).toFixed( 2 ) );
    }
  },
  payment: function ( end, start, budget, points ) {
    start = Math.max( 0, Math.min( start, points ) );
    end = Math.max( 0, Math.min( end, points ) );
    if ( end > start ) {
      return parseFloat( ( Math.pow( budget + 1, end / points ) - Math.pow( budget + 1, start / points ) ).toFixed( 2 ) );
    } else {
      return 0;
    }
  },
  bonus2points: function ( bonus, start, budget, maxp ) {
    if ( bonus > 0 ) {
      var y = bonus + Math.pow( budget + 1, start / maxp );
      return Math.round( ( maxp * Math.log( y ) / Math.log( budget + 1 ) ) - start );
    } else {
      return 0;
    }
  },
  initBonusTable: function () {
    var scores = EnergyUtil.scores( cy );
    // if ( !initial_scores ) {
    //   initial_scores = EnergyUtil.scores( cy );
    // }

    $( '#dppBonusTable' ).html( '' );
    $( '#mainGoal' ).html( main_goal );
    if ( parseFloat( $( '#downwardPointingPathScorePay' ).html() ) > 0 ) {
      // for ( var i = Math.min( 0.25, parseFloat( $( '#downwardPointingPathScorePay' ).html() ) ); i <= Math.min( 2, parseFloat( $( '#downwardPointingPathScorePay' ).html() ) ); i = i * 2 ) {
      //   $( '#dppBonusTable' ).append( $( '<li>' ).append( scoresWidget.bonus2points( i, scores[ 'dpp' ], compensation_data[ 'DPP_MAX_BUDGET' ], compensation_data[ 'DPP_GOAL' ] / weights[ 'dpp' ] ) + ' more points to earn $' + i ) );
      //   $( '#dppBonusPanel' ).show();
      // }
      var i = Math.min( 0.25, parseFloat( $( '#downwardPointingPathScorePay' ).html() ) );
      $( '#dppBonusTip' ).html( scoresWidget.bonus2points( i, scores[ 'dpp' ], compensation_data[ 'DPP_MAX_BUDGET' ], compensation_data[ 'DPP_GOAL' ] / weights[ 'dpp' ] ) + ' more points to earn next $' + i );
    }

    $( '#ecBonusTable' ).html( '' );
    if ( parseFloat( $( '#edgeCrossingsScorePay' ).html() ) > 0 ) {
      // for ( var i = Math.min( 0.25, parseFloat( $( '#edgeCrossingsScorePay' ).html() ) ); i <= Math.min( 2, parseFloat( $( '#edgeCrossingsScorePay' ).html() ) ); i = i * 2 ) {
      //   $( '#ecBonusTable' ).append( $( '<li>' ).append( scoresWidget.bonus2points( i, scores[ 'edgecrossings' ], compensation_data[ 'EC_MAX_BUDGET' ], compensation_data[ 'EC_GOAL' ] / weights[ 'edgecrossings' ] ) + ' more points to earn $' + i ) );
      //   $( '#ecBonusPanel' ).show();
      // }

      var i = Math.min( 0.25, parseFloat( $( '#edgeCrossingsScorePay' ).html() ) );
      $( '#ecBonusTip' ).html( scoresWidget.bonus2points( i, scores[ 'edgecrossings' ], compensation_data[ 'EC_MAX_BUDGET' ], compensation_data[ 'EC_GOAL' ] / weights[ 'edgecrossings' ] ) + ' more points to earn next $' + i );
    }


    $( '#elBonusTable' ).html( '' );
    if ( parseFloat( $( '#edgeLengthScorePay' ).html() ) > 0 ) {
      // for ( var i = Math.min( 0.25, parseFloat( $( '#edgeLengthScorePay' ).html() ) ); i <= parseFloat( $( '#edgeLengthScorePay' ).html() ); i = i * 2 ) {
      //   $( '#elBonusTable' ).append( $( '<li>' ).append( scoresWidget.bonus2points( i, scores[ 'edgelength' ], compensation_data[ 'EL_MAX_BUDGET' ], compensation_data[ 'EL_GOAL' ] / weights[ 'edgelength' ] ) + ' more points to earn $' + i ) );
      //   $( '#elBonusPanel' ).show();
      // }

      var i = Math.min( 0.25, parseFloat( $( '#edgeLengthScorePay' ).html() ) );
      $( '#elBonusTip' ).html( scoresWidget.bonus2points( i, scores[ 'edgelength' ], compensation_data[ 'EL_MAX_BUDGET' ], compensation_data[ 'EL_GOAL' ] / weights[ 'edgelength' ] ) + ' more points to earn next $' + i );
    }
    $( '#ndBonusTable' ).html( '' );
    if ( parseFloat( $( '#nodeDistributionScorePay' ).html() ) > 0 ) {
      // for ( var i = Math.min( 0.25, parseFloat( $( '#nodeDistributionScorePay' ).html() ) ); i <= parseFloat( $( '#nodeDistributionScorePay' ).html() ); i = i * 2 ) {
      //   $( '#ndBonusTable' ).append( $( '<li>' ).append( scoresWidget.bonus2points( i, scores[ 'nodedistribution' ], compensation_data[ 'ND_MAX_BUDGET' ], compensation_data[ 'ND_GOAL' ] / weights[ 'nodedistribution' ] ) + ' more points to earn $' + i ) );
      //   $( '#ndBonusPanel' ).show();
      // }

      var i = Math.min( 0.25, parseFloat( $( '#nodeDistributionScorePay' ).html() ) );
      $( '#ndBonusTip' ).html( scoresWidget.bonus2points( i, scores[ 'nodedistribution' ], compensation_data[ 'ND_MAX_BUDGET' ], compensation_data[ 'ND_GOAL' ] / weights[ 'nodedistribution' ] ) + ' more points to earn next $' + i );
    }

    $( '#nedBonusTable' ).html( '' );
    if ( parseFloat( $( '#nodeEdgeDistanceScorePay' ).html() ) > 0 ) {
      // for ( var i = Math.min( 0.25, parseFloat( $( '#nodeEdgeDistanceScorePay' ).html() ) ); i <= parseFloat( $( '#nodeEdgeDistanceScorePay' ).html() ); i = i * 2 ) {
      //   $( '#nedBonusTable' ).append( $( '<li>' ).append( scoresWidget.bonus2points( i, scores[ 'nodeedgedistance' ], compensation_data[ 'NED_MAX_BUDGET' ], compensation_data[ 'NED_GOAL' ] / weights[ 'nodeedgedistance' ] ) + ' more points to earn $' + i ) );
      //   $( '#nedBonusPanel' ).show();
      // }

      var i = Math.min( 0.25, parseFloat( $( '#nodeEdgeDistanceScorePay' ).html() ) );
      $( '#nedBonusTip' ).html( scoresWidget.bonus2points( i, scores[ 'nodeedgedistance' ], compensation_data[ 'NED_MAX_BUDGET' ], compensation_data[ 'NED_GOAL' ] / weights[ 'nodeedgedistance' ] ) + ' more points to earn next $' + i );
    }
  },
  _updatePoints: function ( points, initialScore ) {
    if ( initialScore != 0 ) {
      if ( points > 0 ) {

        // $( '#userPoints' ).html( '+' + points.toFixed( 0 ) + ' <i class="fas fa-sm fa-arrow-up green "></i>' );
        $( '#userPoints' ).html( '<i class="fas fa-sm fa-arrow-up green "></i> ' + '+' + points.toFixed( 0 ) );
        $( '#userPoints' ).css( 'color', 'limegreen' );
      } else if ( points < 0 ) {

        $( '#userPoints' ).html( '<i class="fas fa-sm fa-arrow-down red "></i> ' + points.toFixed( 0 ) );
        $( '#userPoints' ).css( 'color', 'red' );
      } else {
        $( '#userPoints' ).html( '' );
      }
    } else {
      $( '#userPoints' ).html( '' );
    }
  },
  _updateScore: function ( newScore, oldScore, elementID ) {
    var score = Math.floor( newScore ).toString();
    if ( newScore > oldScore ) {
      score = '<i class="fas fa-sm fa-arrow-up green "></i> ' + score;
    } else if ( newScore < oldScore ) {
      score = '<i class="fas fa-sm fa-arrow-down red"></i> ' + score;
    } else {
      score = '<i class="fas fa-sm fa-arrow-up transparent"></i> ' + score;
    }
    $( '#' + elementID ).html( score );
  }
}

var fludToolbox = {
  _mode: CUSTOM_MODE,
  positionChanged: false,
  init: function () {
    var layout = window.layout = cy.layout( {
      name: 'cytoscape-simulated-annealing',
      iterations: 10,
      //iterations: 5,
      animationDuration: 10,
      steps: 30 * cy.nodes().length,
      //steps: 2,
      steps: 20,
      excluded: '.ignore',
      boundingBox: cy.extent(),
      weights: weights,
      maxDPP: graph_json[ 'data' ][ 'MAX_DPP' ],
      SAInitialTemperature: 50,
      onStep: function ( obj ) {
        console.log( obj );
        scoresWidget.update();
      }
    } );
    layout = layout.init();
    scoresWidget.update();
  },
  getMode: function () {
    return fludToolbox._mode;
  },
  setMode: function ( mode ) {
    /*
     Sets the given mode and calls corresponding initialization functions.
     */
    fludToolbox._mode = mode;
    cy.nodes().selectify().unselect();
    if ( mode == DPP_MODE ) {
      fludToolbox.DPPTool.init();
    } else if ( mode == EC_MODE ) {
      fludToolbox.ECTool.init();
    } else if ( mode == CUSTOM_MODE ) {
      fludToolbox.CustomTool.init();
    } else if ( mode == EL_MODE ) {
      fludToolbox.ELTool.init();
    } else if ( mode == ND_MODE ) {
      fludToolbox.NDTool.init();
    } else if ( mode == NED_MODE ) {
      fludToolbox.NEDTool.init();
    } else {
      // Add logic which handles situation when user is not in any mode.
      fludToolbox.CustomTool.init();
    }
  },
  onDrag: function ( evt ) {
    scoresWidget.calculatingScores();

    var mode = fludToolbox.getMode();
    if ( mode == DPP_MODE ) {
      fludToolbox.DPPTool.onDrag( evt );
    } else if ( mode == EC_MODE ) {
      fludToolbox.ECTool.onDrag( evt );
    } else if ( mode == CUSTOM_MODE ) {
      fludToolbox.CustomTool.onDrag( evt );
    } else {
      // Add logic which handles situation when user is not in any mode.
      fludToolbox.CustomTool.onDrag( evt );
    }
  },
  onSelect: function ( evt ) {
    console.log( evt );
    var mode = fludToolbox.getMode();
    if ( mode == DPP_MODE ) {
      fludToolbox.DPPTool.onSelect( evt );
    } else if ( mode == EC_MODE ) {
      fludToolbox.ECTool.onSelect( evt );
    } else if ( mode == CUSTOM_MODE ) {
      fludToolbox.CustomTool.onSelect( evt );
    } else if ( mode == EL_MODE ) {
      fludToolbox.ELTool.onSelect( evt );
    } else {
      // Add logic which handles situation when user is not in any mode.
      fludToolbox.CustomTool.onSelect( evt );
    }
  },
  onGrab: function ( evt ) {
    var mode = fludToolbox.getMode();
    if ( mode == DPP_MODE ) {
      fludToolbox.DPPTool.onGrab( evt );
    } else if ( mode == EC_MODE ) {
      fludToolbox.ECTool.onGrab( evt );
    } else if ( mode == CUSTOM_MODE ) {
      fludToolbox.CustomTool.onGrab( evt );
    } else {
      // Add logic which handles situation when user is not in any mode.
      fludToolbox.CustomTool.onGrab( evt );
    }
  },
  onFree: function ( evt ) {
    var mode = fludToolbox.getMode();
    if ( mode == DPP_MODE ) {
      fludToolbox.DPPTool.onFree( evt );
    } else if ( mode == EC_MODE ) {
      fludToolbox.ECTool.onFree( evt );
    } else if ( mode == CUSTOM_MODE ) {
      fludToolbox.CustomTool.onFree( evt );
    } else {
      // Add logic which handles situation when user is not in any mode.
      fludToolbox.CustomTool.onFree( evt );
    }
  },
  onPosition: function ( evt ) {
    var mode = fludToolbox.getMode();
    fludToolbox.positionChanged = true;
  },
  recolorGraph: function () {
    var mode = fludToolbox.getMode();
    if ( mode == DPP_MODE ) {
      fludToolbox.DPPTool.recolorGraph();
    } else if ( mode == EC_MODE ) {
      fludToolbox.ECTool.recolorGraph();
    } else if ( mode == EL_MODE ) {
      fludToolbox.ELTool.recolorGraph();
    } else if ( mode == ND_MODE ) {
      fludToolbox.NDTool.recolorGraph();
    } else if ( mode == NED_MODE ) {
      fludToolbox.NEDTool.recolorGraph();
    } else if ( mode == CUSTOM_MODE ) {
      fludToolbox.CustomTool.recolorGraph();
    } else {
      fludToolbox.CustomTool.recolorGraph();
    }
  },
  DPPTool: {
    init: function () {
      $( '#dppHelp' ).show();
      cy.elements( '.hint' ).removeClass( 'hint' );
      cy.nodes().not( '.ignore' ).grabify();
      fludToolbox.DPPTool.recolorGraph();
    },
    recolorGraph: function () {
      cy.$( ".intersections" ).style( 'visibility', 'hidden' ); //recolors the graph after the selected node has been deselected

      var nodes = cy.nodes();
      var edges = cy.edges();
      fludGraph.defaultNodeColoration( nodes );
      fludGraph.defaultEdgeColoration( edges );

      if ( hintMoved && cy.elements( '.hint.upp' ).length == 0 ) {

        if ( callHint ) {
          clearTimeout( callHint );
        }

        callHint = setTimeout( fludToolbox.DPPTool.hint, HINT_FADE_OUT_DELAY_IN_MICROSECONDS );
        HINT_FADE_OUT_DELAY_IN_MICROSECONDS = 3000;
      }
    },
    hint: function () {

      return new Promise( function ( resolve, reject ) {
        console.log( 'Hint start' );
        hintMoved = false;
        cy.elements( '.hint' ).removeClass( 'hint' );
        //grab all directed edges
        var allEdges = cy.edges().not( '.ignore' );
        for ( var i = 0; i < allEdges.length; i++ ) {
          //If the edge is red edges under flud operation
          if ( !allEdges[ i ].hidden() && !Graph.isCorrectAngle( allEdges[ i ] ) ) {
            //When the node is from the source
            if ( allEdges[ i ].target().style()[ 'shape' ] == "triangle" ) {
              continue;
            }
            //When the node is targeting sink
            else if ( allEdges[ i ].source().style()[ 'shape' ] == "square" ||
              allEdges[ i ].source().style()[ 'shape' ] == "rectangle" ) {
              continue;
            }
            //When the source and target of the node are both circles
            //This edge may be suitable candidate for a hint
            //Note that commit e69c3da ensures that we cannot have an upward edge from a triangle
            // to a circle or from a circle to a square/rectangle
            else {
              //Check removing allEdges[i] will increase the number of downward paths or not
              if ( fludGraph.isGoodHint( allEdges[ i ] ) ) {
                break;
              }
            }
          }
          //When there is no isGoodHint(allEdges[i])
          if ( i == allEdges.length - 1 ) {
            //We assume that if there are no good hints, then there is no way to increase the
            // number of downward paths
            console.log( "I cannot compute any more clues" );
            $( '#dppHintAlert, #dppNoHintAlert, #dppHintRequest' ).hide();
            // $( '#dppNoHintAlert' ).show();
            return;
          }
        }


        //Set the Dijkstra's algorithm for super source as a root
        var shortestPathTreeFromSuperSource = cy.elements().not( 'edge.upp' ).not( allEdges[ i ].target() ).dijkstra( {
          //Super source
          root: '#start',

          //Add the weight to the edges to prevent the path with multiple sources
          // and sinks
          //
          //Make the weight of an edge from a square/rectangle or to a triangle
          // very large in order to ensure that the compute path does not contain
          // a triangle/square/rectangle as an internal node
          weight: function ( edge ) {
            //When the edge is from sink
            if ( edge.source().style()[ 'shape' ] == "square" ||
              edge.source().style()[ 'shape' ] == "rectangle" ) {
              return Number.MAX_SAFE_INTEGER;
            }
            //When the edge is targeting source
            else if ( edge.target().style()[ 'shape' ] == "triangle" ) {
              return Number.MAX_SAFE_INTEGER;
            } else {
              return 1;
            }
          },
          directed: true
        } );

        //Find the path from super source '#start' to source of the edge
        var pathToEndFirst = shortestPathTreeFromSuperSource.pathTo( allEdges[ i ].source() );

        //Set Dijkstra's algorithm for the allEdges[i].target()
        var shortestPathTreeFromEdgeTarget = cy.elements().not( 'edge.upp' ).not( allEdges[ i ].source() ).dijkstra( {
          root: allEdges[ i ].target(),
          weight: function ( edge ) {
            if ( edge.source().style()[ 'shape' ] == "square" ||
              edge.source().style()[ 'shape' ] == "rectangle" ) {
              return Number.MAX_SAFE_INTEGER;
            } else if ( edge.target().style()[ 'shape' ] == "triangle" ) {
              return Number.MAX_SAFE_INTEGER;
            } else {
              return 1;
            }
          },
          directed: true
        } );

        //Find the path from the target red edge allEdges[i]'s target
        // to the super source of the graph ('#end')
        var pathToEndSecond = shortestPathTreeFromEdgeTarget.pathTo( cy.nodes( '#end' ) );


        //highlight the nodes in path
        setTimeout( function () {
          if ( cy.elements( '.hint.upp' ).length == 0 && allEdges[ i ].hasClass( 'upp' ) && pathToEndFirst.length > 0 && pathToEndSecond.length > 0 ) {
            cy.startBatch();
            allEdges[ i ].addClass( 'hint' );
            pathToEndFirst.addClass( 'hint' );
            pathToEndSecond.addClass( 'hint' );
            cy.endBatch();
            $( '#dppHintAlert' ).show();
          }
        }, HINT_FADE_IN_DELAY_IN_MICROSECONDS )


        console.log( 'End DPP.Hint' );
        resolve();
      } );
    },
    onDrag: function ( evt ) {
      if ( callHint ) {
        clearTimeout( callHint );
      }
      //

      var node = evt.target;
      fludGraph.colorConnectedEdges( node ); //colors edges directly connected to the selected node
    },
    onFree: function ( evt ) {
      if ( fludToolbox.positionChanged ) {
        // if ( !evt.target.hasClass( 'hint' ) ) {
        //   cy.elements( '.hint' ).removeClass( 'hint' );
        // }
        undoRedoManager.update( fludGraph.getNodePositions() );
        scoresWidget.update( evt.target );
        // fludToolbox.recolorGraph(); // update the user's score
      }
      fludToolbox.recolorGraph();
    },
    onSelect: function ( evt ) {

    },
    onGrab: function ( evt ) {
      var node = evt.target;
      //grey out all edges except those in contact with the selected node
      fludGraph.highlightSelectedNodeAndEdges( node );
    }
  },
  CustomTool: {
    layoutStopped: undefined,
    init: function () {
      cy.elements( '.hint' ).removeClass( 'hint' );
      cy.nodes().not( '.ignore' ).grabify();
      fludToolbox.CustomTool.recolorGraph();
    },
    recolorGraph: function () {
      cy.$( ".intersections" ).style( 'visibility', 'hidden' );

      cy.nodes().not( '.ignore' ).removeClass( 'grey' );
      cy.edges().not( '.ignore' ).removeClass( 'grey' ).removeClass( 'undirected' ).removeClass( 'upp' ).addClass( 'dpp' );
    },
    hint: function () {
      // nothing
    },
    onGrab: function ( evt ) {
      clearTimeout( fludToolbox.CustomTool.layoutStopped );
    },
    onFree: function ( evt ) {
      if ( fludToolbox.positionChanged ) {
        // if ( !evt.target.hasClass( 'hint' ) ) {
        //   cy.elements( '.hint' ).removeClass( 'hint' );
        // }

        undoRedoManager.update( fludGraph.getNodePositions() );
        fludToolbox.CustomTool.onNodesMoved( evt.target.union( cy.nodes( ':selected' ) ) );
      }
    },
    onNodesMoved: function ( movedNodes ) {
      fludToolbox.recolorGraph();
      cy.$( ".intersections" ).style( 'visibility', 'hidden' ); //recolors the graph after the selected node has been deselected
      fludToolbox.CustomTool.layoutStopped = setTimeout( function () {
        scoresWidget.update( movedNodes ); // update the user's score
        fludToolbox.recolorGraph();
        fludToolbox.positionChanged = false;
      }, 1000 );
    },
    onSelect: function ( evt ) {
      clearTimeout( fludToolbox.CustomTool.layoutStopped );
    },
    onDrag: function ( evt ) {
      clearTimeout( fludToolbox.CustomTool.layoutStopped );
      //var nodes = cy.nodes(':selected').union(evt.target);
      //fludGraph.colorConnectedEdges(nodes); //colors edges directly connected to the selected node
    },
    toggleSelect: function ( e, shape ) {
      if ( !$( e ).hasClass( 'active' ) ) {
        cy.nodes( "[shape = '" + shape + "']" ).select().unselectify();
      } else {
        cy.nodes( "[shape = '" + shape + "']" ).selectify().unselect();
      }
    },
    layout: function ( layout_option ) {
      // console.log( layout_option );


      var selectedNodes = cy.nodes( ':selected' );
      var collection, options = {};

      if ( selectedNodes.length < 2 && layout_option != 'preset' ) {
        // collection = cy.elements().not( '.ignore' );
        $.notifyClose();
        $.notify( {
          icon: 'fas fa-exclamation-circle',
          message: "Please, select more than 1 nodes to use this functionality. <br><br> <b>Tip:</b> You can select multiple nodes one by one via <code>Shift + Click</code>or by drawing a selection box via <code>Shift + mousedrag</code>",
        }, {
          type: 'warning',
          newest_on_top: true
        } );
        return;
      } else {
        scoresWidget.calculatingScores();
        collection = selectedNodes.union( selectedNodes.edgesWith( selectedNodes ) ).not( '.ignore' );
        if ( layout_option == SQUARE_LAYOUT ) {
          fludToolbox.CustomTool.runSquareLayoutOnCollection( cy, collection );
        } else if ( layout_option == HORIZONTAL_LAYOUT || layout_option == VERTICAL_LAYOUT ) {
          fludToolbox.CustomTool.runHorizontalVerticalLayoutOnCollection( cy, collection, layout_option );
        } else if ( layout_option == SQUEEZE_LAYOUT || layout_option == EXPAND_LAYOUT ) {
          fludToolbox.CustomTool.runSqueezeReleaseOnCollection( collection, layout_option )
        } else if ( layout_option == 'preset' ) {
          collection = cy.elements().not( '.ignore' );
          collection.layout( {
            name: layout_option,
            padding: 10,
            positions: gameplay.bestLayout,
            fit: true,
            animate: false,
            stop: function () {
              fludToolbox.CustomTool.onNodesMoved( collection.nodes() );
            }
          } ).run();
        } else {
          if ( layout_option == TREE_LAYOUT ) {
            options = {
              directed: true,
              roots: collection.nodes( "[shape = 'triangle']" )
            }
          }

          $.extend( options, {
            name: layout_option,
            padding: 10,
            fit: selectedNodes.length == 0, // when none of the nodes are selected
            avoidOverlap: true,
            animate: false,
            stop: function () {
              fludToolbox.CustomTool.onNodesMoved( collection.nodes() );
            }
          } );

          collection.layout( options ).run();
        }
        undoRedoManager.update( fludGraph.getNodePositions() );
      }
    },
    runSqueezeReleaseOnCollection: function ( collection, type ) {
      clearTimeout( fludToolbox.CustomTool.layoutStopped );
      var data = fludToolbox.CustomTool.computeCollectionCentroid( collection );
      var centroid = data[ 0 ];
      var selectedNodes = collection.nodes();

      for ( var i = 0; i < selectedNodes.length; i++ ) {
        var node = selectedNodes[ i ];
        var position = node.renderedPosition();
        var distance = fludToolbox.CustomTool.travelDistance( centroid, position );

        if ( !isNaN( position.x ) ) {
          if ( position.x < centroid.x ) {
            if ( type === 'squeeze' ) {
              position.x += distance.x;
            } else {
              position.x -= distance.x;
            }

          }
          if ( position.x > centroid.x ) {
            if ( type == 'squeeze' ) {
              position.x -= distance.x;
            } else {
              position.x += distance.x;
            }
          }
        }

        if ( !isNaN( position.y ) ) {
          if ( position.y < centroid.y ) {
            if ( type == 'squeeze' ) {
              position.y += distance.y;
            } else {
              position.y -= distance.y;
            }
          }
          if ( position.y > centroid.y ) {
            if ( type == 'squeeze' ) {
              position.y -= distance.y;
            } else {
              position.y += distance.y;
            }
          }
        }

        if ( !isNaN( position.x ) && !isNaN( position.y ) ) {
          node.renderedPosition( position );
        }
      }
      fludToolbox.CustomTool.onNodesMoved( collection.nodes() );
    },
    runSquareLayoutOnCollection: function ( cy, collection ) {
      var minDistance = 0;
      var selectedArray = [];

      _.each( collection.nodes(), function ( node ) {
        selectedArray.push( node );
        minDistance = Math.max( node.boundingBox()[ "h" ], minDistance );
      } );

      //calculate center of the viewport
      var center = {
        x: cy.width() / 2,
        y: cy.height() / 2
      };


      var radius = ( selectedArray.length / 4 * minDistance ) / 2;

      if ( selectedArray.length <= 4 ) {

        if ( selectedArray.length == 0 ) {
          return;
        } else if ( selectedArray.length == 1 ) {
          var newPosition = {
            "x": center.x,
            "y": center.y
          }
          selectedArray[ 0 ].renderedPosition( newPosition );
        } else if ( selectedArray.length == 2 ) {
          var newPosition = {
            "x": center.x,
            "y": center.y + radius + minDistance
          }
          selectedArray[ 0 ].renderedPosition( newPosition );
          var newPosition = {
            "x": center.x,
            "y": center.y - radius
          }
          selectedArray[ 1 ].renderedPosition( newPosition );

        } else if ( selectedArray.length == 3 ) {
          var newPosition = {
            "x": center.x - radius,
            "y": center.y - radius
          }
          selectedArray[ 0 ].renderedPosition( newPosition );
          var newPosition = {
            "x": center.x + radius + minDistance,
            "y": center.y - radius
          }
          selectedArray[ 1 ].renderedPosition( newPosition );
          var newPosition = {
            "x": center.x + radius + minDistance,
            "y": center.y + radius + minDistance
          }
          selectedArray[ 2 ].renderedPosition( newPosition );

        } else if ( selectedArray.length == 4 ) {
          var newPosition = {
            "x": center.x - radius,
            "y": center.y - radius
          }
          selectedArray[ 0 ].renderedPosition( newPosition );
          var newPosition = {
            "x": center.x + radius + minDistance,
            "y": center.y - radius
          }
          selectedArray[ 1 ].renderedPosition( newPosition );
          var newPosition = {
            "x": center.x + radius + minDistance,
            "y": center.y + radius + minDistance
          }
          selectedArray[ 2 ].renderedPosition( newPosition );
          var newPosition = {
            "x": center.x - radius,
            "y": center.y + radius + minDistance
          }
          selectedArray[ 3 ].renderedPosition( newPosition );
        }
        return;
      }

      //Group into regions (top, bottom, left, right) Assuem that we have at least 4 selected elements

      //Top region
      var topBar = selectedArray.slice( 0, selectedArray.length / 4 );

      for ( var i = 0; i < topBar.length; i++ ) {
        var newPosition = {
          "x": center.x - radius + ( i * minDistance ),
          "y": center.y - radius
        }
        topBar[ i ].renderedPosition( newPosition );
      }

      //Bottom Region
      var bottomBar = selectedArray.slice( selectedArray.length / 4, 2 * selectedArray.length / 4 );

      for ( var i = 0; i < bottomBar.length; i++ ) {
        var newPosition = {
          "x": center.x - radius + ( i * minDistance ),
          "y": center.y + radius
        }
        bottomBar[ i ].renderedPosition( newPosition );
      }

      //Left Region
      var leftBar = selectedArray.slice( 2 * selectedArray.length / 4, 3 * selectedArray.length / 4 );

      for ( var i = 0; i < leftBar.length; i++ ) {
        var newPosition = {
          "x": center.x - radius,
          "y": center.y - radius + ( i * minDistance )
        }
        leftBar[ i ].renderedPosition( newPosition );
      }

      //Right Region
      var rightBar = selectedArray.slice( 3 * selectedArray.length / 4, 4 * selectedArray.length );

      for ( var i = 0; i < rightBar.length; i++ ) {
        var newPosition = {
          "x": center.x + radius,
          "y": center.y - radius + ( i * minDistance )
        }
        rightBar[ i ].renderedPosition( newPosition );
      }
      fludToolbox.CustomTool.onNodesMoved( collection.nodes() );
    },
    runHorizontalVerticalLayoutOnCollectionOld: function ( cy, collection, layout_name ) {
      var data = fludToolbox.CustomTool.computeCollectionCentroid( collection );
      console.log( layout_name, layout_name === "vertical" ? 1 : 2 );
      var center = {
        x: cy.width() / 2,
        y: cy.height() / 2
      };

      var selectedNodes = collection.nodes();
      var minDistance = data[ layout_name === "vertical" ? 2 : 1 ];

      var radius = ( selectedNodes.length / 4 * minDistance ) / 2;

      for ( var i = 0; i < selectedNodes.length; i++ ) {
        if ( layout_name === "vertical" ) {
          var newPosition = {
            "x": center.x,
            "y": center.y - radius + ( i * minDistance )
          };
        } else {
          var newPosition = {
            "x": center.x - radius + ( i * minDistance ),
            "y": center.y
          };
        }

        selectedNodes[ i ].renderedPosition( newPosition );
      }

      fludToolbox.CustomTool.onNodesMoved( collection.nodes() );
    },
    runHorizontalVerticalLayoutOnCollection: function ( cy, collection, layout_name ) {
      var bb = EnergyUtil.Distances.computeBoundingBox( cy );
      var center = {
        x: ( bb.x1 + bb.x2 ) / 2,
        y: ( bb.y1 + bb.y2 ) / 2
      };
      console.log( layout_name, layout_name === "vertical" ? 1 : 2 );

      var selectedNodes = collection.nodes();

      for ( var i = 0; i < selectedNodes.length; i++ ) {
        if ( layout_name === "vertical" ) {
          var newPosition = {
            "x": center.x,
            "y": bb.y1 + NODE_RADIUS + ( i * bb.h / selectedNodes.length )
          };
        } else {
          var newPosition = {
            "x": bb.x1 + NODE_RADIUS + ( i * bb.w / selectedNodes.length ),
            "y": center.y
          };
        }

        selectedNodes[ i ].position( newPosition );
      }

      fludToolbox.CustomTool.onNodesMoved( collection.nodes() );
    },
    computeCollectionCentroid: function ( collection ) {
      var centroid = {
        x: 0,
        y: 0
      };
      var minWidthDistance = 0;
      var minHeightDistance = 0;

      _.each( collection.nodes(), function ( node ) {
        var position = node.renderedPosition();
        centroid[ "x" ] += position.x;
        centroid[ "y" ] += position.y;
        minWidthDistance = Math.max( node.boundingBox()[ "w" ], minWidthDistance );
        minHeightDistance = Math.max( node.boundingBox()[ "h" ], minHeightDistance );
      } );

      centroid[ "x" ] /= collection.nodes().length;
      centroid[ "y" ] /= collection.nodes().length;

      return [ centroid, minWidthDistance, minHeightDistance ];
    },
    travelDistance: function ( center, nodePosition ) {
      var a = Math.abs( center.x - nodePosition.x );
      var b = Math.abs( center.y - nodePosition.y );

      if ( a == 0 ) {
        a = 1;
      }

      var ratio = b / a;

      var miniH = Math.sqrt( 1 + ratio * ratio );

      var distance = 0.10 * Math.sqrt( a * a + b * b );
      var travelX = distance / miniH;
      var travelY = ratio * travelX;

      return {
        x: travelX,
        y: travelY
      };
    },
  },
  ECTool: {
    init: function () {
      cy.elements( '.hint' ).removeClass( 'hint' );
      fludToolbox.ECTool.recolorGraph();

      cy.on( 'mouseover', '.intersections', function ( evt ) {
        var eles = cy.edges( '#' + evt.target.data( 'edge1' ).replace( /,/g, '\\,' ) + ', #' + evt.target.data( 'edge2' ).replace( /,/g, '\\,' ) );
        eles.addClass( 'hover' );
        eles.connectedNodes().addClass( 'hover' );
      } );

      cy.on( 'mouseout', '.intersections', function ( evt ) {
        var eles = cy.edges( '#' + evt.target.data( 'edge1' ).replace( /,/g, '\\,' ) + ', #' + evt.target.data( 'edge2' ).replace( /,/g, '\\,' ) ).not( '.hint' );
        eles.removeClass( 'hover' );
        eles.connectedNodes().removeClass( 'hover' );
      } );

      cy.nodes( '.intersections' ).ungrabify().unselectify();
    },
    recolorGraph: function () {
      // fludGraph.greyOutGraph();
      $( '#ecHintAlert' ).hide();
      cy.$( ".intersections" ).style( 'visibility', 'visible' );

      cy.nodes().not( '.ignore' ).removeClass( 'grey' );
      cy.edges().not( '.ignore' ).removeClass( 'grey' ).removeClass( 'undirected' ).removeClass( 'upp' ).addClass( 'dpp' );

      if ( callHint ) {
        clearTimeout( callHint );
      }

      callHint = setTimeout( fludToolbox.ECTool.hint, HINT_FADE_OUT_DELAY_IN_MICROSECONDS );
      HINT_FADE_OUT_DELAY_IN_MICROSECONDS = 3000;
    },
    hint: function () {
      /*
      Highlight the edge crossing with minimum average degree for nodes incident on crossing edges.
      In case of tie, show any one of them randomly.
      */
      cy.elements().removeClass( 'hint' ).removeClass( 'hover' );
      var hintCrossing = cy.nodes( '.intersections' ).min( function ( ele ) {
        return ele.data( 'avgCrossingDeg' );
      } );
      if ( hintCrossing ) {
        var edge1 = cy.edges( '#' + hintCrossing.ele.data( 'edge1' ).replace( /,/g, '\\,' ) );
        var edge2 = cy.edges( '#' + hintCrossing.ele.data( 'edge2' ).replace( /,/g, '\\,' ) );
        $( '#ecHintAlert' ).show();
        edge1.addClass( 'hint' );
        edge1.connectedNodes().addClass( 'hint' );
        edge2.addClass( 'hint' );
        edge2.connectedNodes().addClass( 'hint' );
        hintCrossing.ele.addClass( 'hint' );
      }
      // fludToolbox.ECTool.recolorGraph();
    },
    onDrag: function ( evt ) {
      cy.$( ".intersections" ).style( 'visibility', 'hidden' );

      if ( callHint ) {
        clearTimeout( callHint );
      }
    },
    onFree: function ( evt ) {
      if ( fludToolbox.positionChanged ) {
        // if ( !evt.target.hasClass( 'hint' ) ) {
        //   cy.elements( '.hint' ).removeClass( 'hint' );
        // }
        scoresWidget.calculatingScores();
        undoRedoManager.update( fludGraph.getNodePositions() );
        scoresWidget.update( evt.target );
        fludToolbox.ECTool.recolorGraph();
      }
    },
    onSelect: function ( evt ) {
      // nothing
    },
    onGrab: function ( evt ) {
      // nothing
    },
    fixEdgeCrossing: function ( edge1, edge2 ) {
      edge1.data( 'rho', new Vec( 0, 0 ) );
      edge2.data( 'rho', new Vec( 0, 0 ) );

      var src1 = Graph.position( edge1.source() );
      var tgt1 = Graph.position( edge1.target() );
      var src2 = Graph.position( edge2.source() );
      var tgt2 = Graph.position( edge2.target() );

      var rho = tgt1.sub( src1 ).add( tgt2.sub( src2 ) );
      edge1.data( 'rho', edge1.data( 'rho' ).add( rho ) );
      edge2.data( 'rho', edge2.data( 'rho' ).add( rho ) );

      //var m = edge1.data('rho').slope();
      var m = Math.atan2( 1, 0 );
      var m1 = tgt1.sub( src1 ).slope();
      var t1 = tgt1.rotate_origin( m1 - m, src1 );

      //edge1.target().position({
      //    x: t1.x,
      //    y: edge1.target().position('y')
      //});

      edge1.target().animate( {
        position: {
          x: t1.x,
          y: edge1.target().position( 'y' )
        },
        complete: function () {
          fludGraph.colorConnectedEdges( edge1.target() );
        }
      }, {
        duration: 1000
      } );

      edge1.data( 'rho', new Vec( 0, 0 ) );

      //var m = edge2.data('rho').slope();
      var m = Math.atan2( 1, 0 );
      var m2 = tgt2.sub( src2 ).slope();
      var t2 = tgt2.rotate_origin( m2 - m, src2 );

      //edge2.target().position({
      //    x: t2.x,
      //    y: edge2.target().position('y')
      //});

      edge2.target().animate( {
        position: {
          x: t2.x,
          y: edge2.target().position( 'y' )
        },
        complete: function () {
          fludGraph.colorConnectedEdges( edge2.target() );
        }
      }, {
        duration: 1000
      } );

      edge2.data( 'rho', new Vec( 0, 0 ) );
    },
    activefixEdgeCrossing: function ( crossing, startPos, edge1, edge2 ) {
      edge1.data( 'rho', new Vec( 0, 0 ) );
      edge2.data( 'rho', new Vec( 0, 0 ) );

      var src1 = Graph.position( edge1.source() );
      var tgt1 = Graph.position( edge1.target() );
      var src2 = Graph.position( edge2.source() );
      var tgt2 = Graph.position( edge2.target() );

      var rho = tgt1.sub( src1 ).add( tgt2.sub( src2 ) );
      edge1.data( 'rho', edge1.data( 'rho' ).add( rho ) );
      edge2.data( 'rho', edge2.data( 'rho' ).add( rho ) );

      //var m = edge1.data('rho').slope();
      var m = Graph.position( crossing ).sub( startPos ).slope();
      var m1 = tgt1.sub( src1 ).slope();
      //var t1 = tgt1.rotate_origin(m1 - m, src1);
      var t1 = tgt1.rotate_origin( m1 - m, src1 ).scale_origin( Graph.position( crossing ).dist_from( startPos ), src1 );

      edge1.target().position( {
        x: t1.x,
        y: t1.y
      } );

      edge1.data( 'rho', new Vec( 0, 0 ) );

      //var m = edge2.data('rho').slope();
      //var m = Math.atan2(1, 0);
      var m = Graph.position( crossing ).sub( startPos ).slope();
      var m2 = tgt2.sub( src2 ).slope();
      //var t2 = tgt2.rotate_origin(m2 - m, src2);
      var t2 = tgt2.rotate_origin( m2 - m, src2 ).scale_origin( Graph.position( crossing ).dist_from( startPos ), src2 );

      edge2.target().position( {
        x: t2.x,
        y: t2.y
      } );

      edge2.data( 'rho', new Vec( 0, 0 ) );

      //fludGraph.colorConnectedEdges(edge1.target());
      //fludGraph.colorConnectedEdges(edge2.target());
    }
  },
  SATool: {
    hint: function () {
      scoresWidget.calculatingScores();
      setTimeout( function () {
        var selectedNodes = cy.nodes( ':selected' );
        if ( selectedNodes.length > 0 )
          layout.run( selectedNodes );
      }, 100 );

    }
  },
  ELTool: {
    init: function () {
      cy.elements( '.hint' ).removeClass( 'hint' );
      cy.nodes().unselectify();
      fludToolbox.ELTool.recolorGraph();
    },
    recolorGraph: function () {
      fludToolbox.CustomTool.recolorGraph();
      fludToolbox.ELTool.hint();
    },
    onSelect: function ( evt ) {
      cy.nodes().selectify().unselect().unselectify();
      cy.nodes( '#' + evt.target.id().replace( /,/g, '\\,' ) ).closedNeighborhood().selectify()
        .select()
        .unselectify();
    },
    hint: function () {
      /*
      1. Highlight edge with the maximum length.
      In case of tie, show any one of them randomly.
      2. If an edge is of length lesser than 100px, then highlight that first.
      */
      $( '#elTooCloseHintAlert, #elTooFarHintAlert' ).hide();

      cy.nodes().selectify().unselect().unselectify();
      cy.elements( '.hint' ).removeClass( 'hint' );

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

      // fludToolbox.CustomTool.recolorGraph();
    }
  },
  NDTool: {
    init: function () {
      cy.elements( '.hint' ).removeClass( 'hint' );
      cy.nodes().unselectify();
      fludToolbox.NDTool.recolorGraph();
    },
    recolorGraph: function () {
      fludToolbox.CustomTool.recolorGraph();
      fludToolbox.NDTool.hint();
    },
    hint: function () {
      /*
      Highlight node pairs with the min distance.
      In case of tie, show any one of them randomly.
      */
      $( '#ndHintAlert' ).hide();
      cy.nodes().unselect();
      cy.elements( '.hint' ).removeClass( 'hint' );

      var nodes = cy.nodes().not( '.ignore' );
      var minDist = 1000000;
      var minDistPair = [];
      for ( var i = 0, n = nodes.length; i < n; i++ ) {
        for ( var j = i + 1, n = nodes.length; j < n; j++ ) {
          var d = nodes[ i ].data( '_' + nodes[ j ].id() );
          var edgesBetweenNodes = cy.edges( '#' + nodes[ i ].id().replace( /,/g, '\\,' ) + ' <-> ' + '#' + nodes[ j ].id().replace( /,/g, '\\,' ) );
          if ( edgesBetweenNodes.length == 0 && d < minDist ) {
            minDist = d;
            minDistPair = [ nodes[ i ], nodes[ j ] ];
          }
        }
      }
      cy.collection( minDistPair ).addClass( 'hint' );
      $( '#ndHintAlert' ).show();
    }
  },
  NEDTool: {
    init: function () {
      cy.elements( '.hint' ).removeClass( 'hint' );
      cy.nodes().unselectify();
      fludToolbox.NEDTool.recolorGraph();
    },
    recolorGraph: function () {
      fludToolbox.CustomTool.recolorGraph();
      fludToolbox.NEDTool.hint();
    },
    hint: function () {
      /*
      Highlight node edge pairs with the min distance.
      In case of tie, show any one of them randomly.
      */
      $( '#nedHintAlert' ).hide();
      cy.elements( '.hint' ).removeClass( 'hint' );

      var nodes = cy.nodes().not( '.ignore' );
      var edges = cy.edges().not( '.ignore' );
      var minDist = 1000000;
      var minDistPair = [];
      for ( var i = 0, n = nodes.length; i < n; i++ ) {
        edges.each( function ( edge ) {
          var d = nodes[ i ].data( '_' + edge.id() );
          if ( edge.target().id() != nodes[ i ].id() && edge.source().id() != nodes[ i ].id() && d < minDist ) {
            minDist = d;
            minDistPair = [ nodes[ i ], edge ];
          }
        } );
      }
      cy.collection( minDistPair ).addClass( 'hint' );
      $( '#nedHintAlert' ).show();
    }
  }

};

var TaskManager = function ( game_id, num_steps, worker_id, assignment_id, onAddStep ) {
  this.game_id = game_id;
  this.num_steps = num_steps;
  this.steps_json = [];
  this.worker_id = worker_id;
  this.assignment_id = assignment_id;
  this.onAddStep = onAddStep;
  this.actions = [];
}

TaskManager.prototype = {
  constructor: TaskManager,
  addStep: function ( p ) {
    var pos = JSON.parse( JSON.stringify( p ) );
    // var bb = cy.elements().not( '.ignore' ).boundingBox();
    this.steps_json.push( {
      'positions_json': pos,
      'timestamp': Date.now(),
      'scores': EnergyUtil.scores( cy ),
      'totalscore': EnergyUtil.totalscore( cy, weights )
    } )
    this.onAddStep();
  },
  addAction: function ( action ) {
    // console.log( action );
    this.actions.push( Object.assign( {
      'action': action,
      'totalscore': EnergyUtil.totalscore( cy, weights )
    }, EnergyUtil.scores( cy ) ) );
  },
  json: function () {
    var g_json = graph_json;
    // var bonuses = scoresWidget._getBonuses();
    // var totalBonus = bonuses[ 'dpp' ] + bonuses[ 'edgecrossings' ] + bonuses[ 'edgelength' ] + bonuses[ 'nodedistribution' ] + bonuses[ 'nodeedgedistance' ];
    return {
      'game_id': this.game_id,
      'type': graph_json[ 'data' ][ 'FLUD_GAME_TYPE' ] ? graph_json[ 'data' ][ 'FLUD_GAME_TYPE' ] : 'CROWD_ONLY',
      'steps_json': JSON.stringify( this.steps_json ),
      'actions': JSON.stringify( this.actions ),
      'worker_id': this.worker_id,
      'graph_json': JSON.stringify( g_json ),
      'assignment_id': this.assignment_id,
      'score': top_score,
      'mode': mode,
      'bonus': parseFloat( $( '#totalBonus' ).html() )
    }
  },
  save: function ( successCallback, errorCallback ) {
    apis.tasks.add( this.json(), successCallback, errorCallback );
  }
};

var UndoManager = function ( onUndo, onRedo, onUpdate ) {
  this.state = [];
  this.index = -1;

  this.onUndo = onUndo;
  this.onRedo = onRedo;
  this.onUpdate = onUpdate;
};

UndoManager.prototype = {
  constructor: UndoManager,
  undo: function () {
    if ( this.index > 0 ) {
      this.index = this.index - 1;
      this.onUndo( this.state[ this.index ] );
    } else {
      this.onUndo();
    }
  },
  redo: function () {
    if ( this.index + 1 < this.state.length ) {
      this.index = this.index + 1;
      this.onRedo( this.state[ this.index ] );
    } else {
      this.onRedo();
    }
  },
  update: function ( action ) {
    this.index = this.index + 1
    this.state = this.state.slice( 0, this.index );
    this.onUpdate( this.state.push( action ) );
  }
};