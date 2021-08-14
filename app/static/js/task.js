/**
 * Created by adb on 02/04/18.
 */
/*
 * 0 --> STOP
 * 1 --> RUNNING
 */
var LAYOUT_RUNNING = false;
var layout;
var ANIMATION_DURATION = 1000;

DPP_COLOR = '#004577';
UPP_COLOR = '#ffc4c4';

var task = {
  init: function () {
    $( '#numMoves' ).html( steps_json.length );
    var maxStepScore = steps_json[ 0 ].totalscore;
    $( '#DPScore' ).html( steps_json[ 0 ].scores.dpp / 400 );
    $( '#ECScore' ).html( steps_json[ 0 ].scores.edgecrossings / 3 );
    $( '#ELScore' ).html( steps_json[ 0 ].scores.edgelength );
    $( '#NDScore' ).html( steps_json[ 0 ].scores.nodedistribution );
    $( '#NEDScore' ).html( steps_json[ 0 ].scores.nodeedgedistance );
    $( '#TotalScore' ).html( steps_json[ 0 ].totalscore );

    steps_json.forEach( function ( step, index ) {
      $( '#stepsList' ).append(
        $( '<tr>' )
        .addClass( 'step-' + index )
        .append( $( '<td class="stepnum">' ).data( 'step', index ).append( index ) )
        .append( $( '<td>' ).append( step.totalscore ) )
        .append( $( '<td>' ).append( step.scores.dpp ) )
        .append( $( '<td>' ).append( step.scores.edgecrossings ) )
        .append( $( '<td>' ).append( step.scores.edgelength ) )
        .append( $( '<td>' ).append( step.scores.nodedistribution ) )
        .append( $( '<td>' ).append( step.scores.nodeedgedistance ) )
        .append( $( '<td>' ).append( maxStepScore ) )
        .append( $( '<td>' ).append( step.totalscore - maxStepScore ) )
      );
      maxStepScore = step.totalscore > maxStepScore ? step.totalscore : maxStepScore
    } );
    actions.forEach( function ( action ) {
      $( '#actionList' ).append(
        $( '<tr>' )
        .append( $( '<td>' ).append( action.action.split( '(' )[ 0 ] ) )
        .append( $( '<td>' ).append( action.totalscore ) )
        .append( $( '<td>' ).append( action.dpp ) )
        .append( $( '<td>' ).append( action.edgecrossings ) )
        .append( $( '<td>' ).append( action.edgelength ) )
        .append( $( '<td>' ).append( action.nodedistribution ) )
        .append( $( '<td>' ).append( action.nodeedgedistance ) )
      );
    } );

    style_json[ 'style' ].push( {
      selector: '.intersections',
      style: {
        'width': 5,
        'height': 5,
        'background-color': 'red',
      }
    } );
    style_json[ 'style' ].push( {
      'selector': 'node:selected',
      'style': {
        'overlay-color': 'red',
        'overlay-padding': 10,
        'overlay-opacity': 0.3
      }
    } );
    style_json[ 'style' ].push( {
      'selector': 'edge',
      'style': {
        "curve-style": "bezier",
        'line-style': 'solid',
        'width': EDGE_WIDTH,
        'line-color': '#004577',
        'target-arrow-color': '#004577'
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.dpp',
      'style': {
        'line-color': DPP_COLOR,
        'target-arrow-color': DPP_COLOR,
        'width': EDGE_WIDTH / 2,
        'z-index': 2,
        'opacity': 0.4,
        'target-arrow-shape': 'triangle'
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'edge.upp',
      'style': {
        'line-color': UPP_COLOR,
        'target-arrow-color': UPP_COLOR,
        'width': EDGE_WIDTH / 2,
        'opacity': 0.6,
        'z-index': 2,
        'target-arrow-shape': 'triangle'
      }
    } );

    style_json[ 'style' ].push( {
      'selector': 'node',
      'style': {
        'font-size': '100px',
        'background-color': '#f8f8f8',
        'width': 2 * NODE_RADIUS / 4,
        'height': 2 * NODE_RADIUS / 4,
        'border-color': 'black',
        'border-width': '5px',
        'text-opacity': 0,
        'z-index': 50
      }
    } );

    // style_json[ 'style' ].push( {
    //   'selector': '.ignore',
    //   'style': {
    //     'opacity': 0
    //   }
    // } );



    var cy = window.cy = cytoscape( {
      container: document.getElementById( 'cy' ),
      touchTapThreshold: 8,
      desktopTapThreshold: 4,
      wheelSensitivity: 0.2,
      minZoom: 0.1,
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
        fit: true
      }
    } );

    cy.ready( function () {

      var initialLayout = cy.layout( {
        name: 'preset',
        positions: steps_json[ 0 ][ 'positions_json' ],
        padding: 0,
        fit: true,
        stop: function () {

          fludGraph.initShapesAsDataVariables();
          fludGraph.initSquaresAndTriangles();
          fludGraph.removeDirectEdgesAmongSquaresAndTriangles();
          fludGraph.removeIsolatedNodes();
          fludGraph.initSquaresAndTriangles(); // some triangles or squares may have been deleted}
          cy.nodes( '[shape = "triangle"]' ).css( 'background-color', '#bfffa7' );
          cy.nodes( 'node[shape = "rectangle"], node[shape = "square"]' ).css( 'background-color', 'yellow' );
          // cy.nodes( 'node[shape = "ellipse"]' ).css( 'background-color', '#809fff' );
          // cy.edges().css( 'line-color', '#9999cc' );

          fludGraph.displayNumEdgesOnNodes(); //provide label information for all nodes
          fludToolbox.recolorGraph();
          cy.add( [ {
              group: "nodes",
              data: {
                id: "start",
                shape: 'ellipse'
              },
              position: {
                x: 0,
                y: 0
              },
              classes: 'ignore'
            },
            {
              group: "nodes",
              data: {
                id: "end",
                shape: 'ellipse'
              },
              position: {
                x: 0,
                y: 0
              },
              classes: 'ignore'
            }
          ] );

          cy.nodes( '[shape = "triangle"]' ).each( function ( node, i ) {
            cy.add( {
              group: "edges",
              data: {
                id: "startEdge" + i,
                source: "start",
                target: node.id()
              },
              classes: 'ignore'
            } );
          } );

          cy.nodes( 'node[shape = "rectangle"], node[shape = "square"]' ).nodes().each( function ( node, i ) {
            cy.add( {
              group: "edges",
              data: {
                id: "endEdge" + i,
                source: node.id(),
                target: "end"
              },
              classes: 'ignore'
            } );
          } );

          // //hide the nodes
          cy.$( "#start" ).style( 'visibility', 'hidden' );
          cy.$( "#end" ).style( 'visibility', 'hidden' );
          cy.$( "#start" ).connectedEdges().style( 'visibility', 'hidden' );
          cy.$( "#end" ).connectedEdges().style( 'visibility', 'hidden' );
          recolor( cy );
        }
      } ).run();

      cy.elements().on( 'click', function ( evt ) {
        // recolor( cy );
        console.log( evt.target.id() );
      } );

    } );

    $( '#playBtn' ).click( function ( evt ) {
      LAYOUT_RUNNING = true;
      layoutStep( 0 );
    } );

    $( '#stopBtn' ).click( function ( evt ) {
      LAYOUT_RUNNING = false;
    } );

    $( '.stepnum' ).click( function ( evt ) {
      var step = $( evt.target ).data( 'step' );

      $( '#DPScore' ).html( steps_json[ step ].scores.dpp / 400 );
      $( '#ECScore' ).html( steps_json[ step ].scores.edgecrossings / 3 );
      $( '#ELScore' ).html( steps_json[ step ].scores.edgelength );
      $( '#NDScore' ).html( steps_json[ step ].scores.nodedistribution );
      $( '#NEDScore' ).html( steps_json[ step ].scores.nodeedgedistance );
      $( '#TotalScore' ).html( steps_json[ step ].totalscore );

      cy.layout( {
        name: 'preset',
        positions: steps_json[ step - 1 ][ 'positions_json' ],
        padding: 0,
        fit: true,
        stop: function () {
          recolor( cy );
          cy.layout( {
            name: 'preset',
            positions: steps_json[ step ][ 'positions_json' ],
            padding: 0,
            fit: true,
            animate: true,
            animationDuration: ANIMATION_DURATION,
            stop: function () {
              recolor( cy );
            }
          } ).run();
        }
      } ).run();
    } );

  }
}

function highlight_paths( nodeId, rootId ) {
  var bfs = cy.elements().bfs( {
    roots: '#' + rootId,
    visit: function ( v, e, u, i, depth ) {
      if ( v.id() === nodeId ) {
        return true;
      }
    },
    directed: true
  } );

  var path = bfs.path;
  return bfs;
}

function recolor( cy ) {
  cy.edges().each( function ( edge ) {
    if ( Graph.isCorrectAngle( edge ) ) {
      // edge.addClass( 'dpp' );
      edge.removeClass( 'upp' ).addClass( 'dpp' );
    } else {
      // edge.addClass( 'dpp' );
      edge.removeClass( 'dpp' ).addClass( 'upp' );
      // edge.css( 'line-color', UPP_COLOR );
    }
  } )
}

function layoutStep( step ) {
  if ( step < steps_json.length && LAYOUT_RUNNING ) {
    // $( 'tr.stop' ).removeClass( 'stop' );
    $( 'tr.step-' + step ).removeClass( 'stop' );
    $( 'tr.step-' + step ).addClass( 'play' );

    $( '#DPScore' ).html( steps_json[ step ].scores.dpp / 400 );
    $( '#ECScore' ).html( steps_json[ step ].scores.edgecrossings / 3 );
    $( '#ELScore' ).html( steps_json[ step ].scores.edgelength );
    $( '#NDScore' ).html( steps_json[ step ].scores.nodedistribution );
    $( '#NEDScore' ).html( steps_json[ step ].scores.nodeedgedistance );
    $( '#TotalScore' ).html( steps_json[ step ].totalscore );
    // cy.nodes().unselect();
    recolor( cy );

    layout = cy.layout( {
      name: 'preset',
      positions: steps_json[ step ][ 'positions_json' ],
      padding: 0,
      fit: true,
      animate: true,
      animationDuration: ANIMATION_DURATION,
      stop: function () {
        $( 'tr.step-' + step ).removeClass( 'play' );
        layoutStep( step + 1 );
      }
    } ).run();
  } else {
    $( 'tr.step-' + step ).addClass( 'stop' );
  }
}