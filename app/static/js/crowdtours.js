/**
 * Created by adb on 24/03/18.
 */
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

var tours = {};
tours[ 1 ] = new Shepherd.Tour( {
  defaults: {
    classes: 'shepherd-theme-dark',
    // scrollTo: true
  }
} );
// tours[ 1 ].addStep( 'Welcome', {
//   title: 'Welcome to Flud!',
//   text: [ 'This game is designed to help scientists  better understand protein networks.<br/> Through your gameplay, scientists will be able to understand protein relationships in new ways.' ],
//   buttons: [ {
//     text: 'Start',
//     classes: 'btn btn-primary',
//     action: tours[ 1 ].next
//   } ]
// } );

tours[ 1 ].addStep( 'welcome_controls', {
  title: 'Getting started',
  text: 'Let us continue with Part 2 of the tutorial.',
  buttons: [ {
    text: 'Next',
    classes: 'btn btn-primary',
    action: tours[ 1 ].next
  } ]
} );


tours[ 1 ].addStep( 'time_left', {
  title: 'Minutes left',
  text: [ 'Each bonus game expires in an hour. Your aim is to achieve a score as high as possible in the given time.',
    // '<b>Note:</b> You will not receive the bonus token until you use up all the moves.'
  ],
  attachTo: '.flud-time-left left',
  buttons: [ {
    text: 'Previous',
    classes: 'btn btn-primary',
    action: tours[ 1 ].back
  }, {
    text: 'Next',
    action: tours[ 1 ].next
  } ]
} );

tours[ 1 ].addStep( 'high_score', {
  title: 'High score',
  text: 'This is the current high score for this game.',
  attachTo: '.flud-current-score left',
  buttons: [ {
    text: 'Previous',
    classes: 'btn btn-primary',
    action: tours[ 1 ].back
  }, {
    text: 'Next',
    action: tours[ 1 ].next
  } ]
} );

tours[ 1 ].addStep( 'your_score', {
  title: 'Your score',
  text: [ 'This is your current total score on this game.  This will often be non-zero when you start playing because you may be building on another player’s progress.',
    // 'Higher the score, higher the bonus!'
  ],
  attachTo: '.flud-user-score left',
  buttons: [ {
    text: 'Previous',
    classes: 'btn btn-primary',
    action: tours[ 1 ].back
  }, {
    text: 'Next',
    action: tours[ 1 ].next
  } ]
} );


if ( num_goals > 1 ) {
  tours[ 1 ].addStep( 'scoresheet', {
    title: 'Scoresheet',
    text: [
      'Your total score depends on different subgoals and your aim is to achieve a high total score.',
      // 'Each game has different subgoals and your aim is to achieve a high total score.',
      '<b>Note:</b> Sometimes when you are working on one of the sub goals, you may gain/lose points for other subgoals.'
    ],
    attachTo: '.scores-list left',
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: tours[ 1 ].back
    }, {
      text: 'Next',
      action: tours[ 1 ].next
    } ]
  } );

  tours[ 1 ].addStep( 'bonus', {
    title: 'Total bonus earned',
    text: [
      'This is the total bonus you have earned on this game.',
      'In this game you earn bonus for improving the <b>' + main_goal + '</b> score but you need to keep the total score in mind as well.',
      'You earn bonus only if you beat the initial top score. Higher the score, higher the bonus!',
      // '<b>Note:</b> You will not receive the bonus token until you use up all the moves.'
    ],
    attachTo: '.progress left',
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: tours[ 1 ].back
    }, {
      text: 'Next',
      action: tours[ 1 ].next
    } ]
  } );

  // tours[ 1 ].addStep( 'bonus', {
  //   title: 'Total bonus left',
  //   text: [
  //     'This is the total bonus you can earn from this game.'
  //   ],
  //   attachTo: '.bonus-left left',
  //   buttons: [ {
  //     text: 'Previous',
  //     classes: 'btn btn-primary',
  //     action: tours[ 1 ].back
  //   }, {
  //     text: 'Next',
  //     action: tours[ 1 ].next
  //   } ]
  // } );

}


// if ( num_goals < totalweight ) {
//   tours[ 1 ].addStep( 'score_weights', {
//     title: 'Priority',
//     text: [
//       'Each subgoal has a priority and scoring high on high priority subgoals will give you more points.',
//       'The darker the color of the subgoal, the higher the points you can gain.',
//       '<b>Tip:</b> Downward Pointing Path subscore is marked in darker color than other subscores and hence you can score more points by focusing more on it.'
//     ],
//     attachTo: '.weights-legend left',
//     buttons: [ {
//       text: 'Next',
//       action: tours[ 1 ].next
//     } ]
//   } );
// }

// tours[ 1 ].addStep( 'zoom_buttons', {
//   title: 'Pan and Zoom',
//   text: 'These are the zoom controls.  You can zoom in and out and pan around.',
//   attachTo: '.cy-panzoom-slider right',
//   beforeShowPromise: function () {
//     $( '#cy' ).css( 'z-index', 1000000 );
//     return Promise.resolve();
//   },
//   buttons: [ {
//     text: 'Next',
//     action: tours[ 1 ].next
//   } ]
// } );

if ( weights[ 'dpp' ] >= 1 ) {

  tours[ 1 ].addStep( 'dpp', {
    title: "Downward pointing paths",
    text: [ 'A path (in red) is just a sequence of edges that starts at a triangle and ends at a rectangle.',
      'One of the subgoals of the game is to create as many downward pointing paths as possible, i.e., paths that are made up only of downward edges.',
      '<img src="/static/img/gifs/increase-dpp-7.gif" style="height:250px" alt="Increase downward pointing paths">'
    ],
    attachTo: ".dpp left",
    beforeShowPromise: function () {
      $( '#cy' ).css( 'z-index', 3 );
      fludToolbox.CustomTool.init();
      return Promise.resolve();
    },
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        $( '#cy' ).css( 'z-index', 3 );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        $( '#cy' ).css( 'z-index', 3 );
        tours[ 1 ].next();
      }
    } ]
  } );

}

if ( weights[ 'edgecrossings' ] >= 1 ) {

  tours[ 1 ].addStep( 'edge_crossing', {
    title: "Edge crossing",
    text: [ 'Here is an example of edge crossings (in red). One of the sub goals of the game is to remove these edge crossings and maximize the number of non-crossing edge pairs.', '<img src="/static/img/gifs/remove-edge-crossings-2.gif" style="height:250px" alt="Remove edge crossing">' ],
    attachTo: ".edgecrossings left",
    beforeShowPromise: function () {
      // $( '#ECTools' ).removeClass( 'shepherd-element shepherd-open' );
      $( '#cy' ).css( 'z-index', 3 );
      fludToolbox.CustomTool.init();
      // $( '#cy' ).css( 'z-index', 1000000 );
      // cy.autoungrabify( true );
      // cy.nodes( '.intersections' ).style( 'visibility', 'visible' );
      return Promise.resolve();
    },
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        $( '#cy' ).css( 'z-index', 3 );
        // cy.nodes( '.intersections' ).style( 'visibility', 'hidden' );
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        $( '#cy' ).css( 'z-index', 3 );
        // cy.nodes( '.intersections' ).style( 'visibility', 'hidden' );
        tours[ 1 ].next();
      }
    } ]
  } );

  // tours[ 1 ].addStep( 'highlight_edge_crossing', {
  //   title: 'Non-crossing edge pairs',
  //   text: 'To highlight all edges crossings, you can click on the <b>Non-crossing edge pairs</b> link to enter the corresponding mode.',
  //   attachTo: ".edgecrossings left",
  //   advanceOn: {
  //     selector: '.edgecrossings, .edgecrossings *',
  //     event: 'click'
  //   },
  //   buttons: false
  // } );

  // tours[ 1 ].addStep( 'crossing_clue', {
  //   title: 'Clue',
  //   text: 'Sometimes figuring out which edge crossing (in red) to remove next can be difficult.  Clicking the clue button highlights a potential crossing that can be removed.  Go ahead and click on the clue button now.',
  //   attachTo: ".edgecrossings left",
  //   beforeShowPromise: function () {
  //     $( '#ECTools' ).addClass( 'shepherd-element shepherd-open' );
  //     cy.nodes( '.intersections' ).style( 'visibility', 'visible' );
  //     return Promise.resolve();
  //   },
  //   advanceOn: "#ECHint click",
  //   buttons: false
  // } );

  // tours[ 1 ].addStep( 'remove_crossing', {
  //   title: "Why don't you try!",
  //   text: [ 'See the highlighted crossing edges (in blue) ?.  Figure out how to move the nodes around to uncross the edges. Click the <b>Next</b> button when you are done.', '<img src="/static/img/gifs/remove-edge-crossings.gif" alt="Remove edge crossing">' ],
  //   attachTo: "#cy left",
  //   beforeShowPromise: function () {
  //     cy.autolock( false );
  //     $( '#cy' ).css( 'z-index', 1000000 );
  //     $( '#ECTools' ).removeClass( 'shepherd-element shepherd-open' );
  //     return Promise.resolve();
  //   },
  //   buttons: [ {
  //     text: 'Next',
  //     action: function () {
  //       $( '#cy' ).css( 'z-index', 3 );
  //       tours[ 1 ].next();
  //     }
  //   } ]
  // } );
}

if ( weights[ 'edgelength' ] >= 1 ) {

  tours[ 1 ].addStep( 'cluster', {
    title: 'Edge length',
    text: [
      'Here are some examples of connected pair of nodes. One of the subgoals of the game is to bring connected nodes closer to each other.',
      '<b>Tip:</b> If you bring connected nodes too close, you may loose points. ',
      '<img src="/static/img/tutorial/edge-length.png" style="height:250px" alt="bring connected nodes closer to each other">'
      // '<img src="/static/img/gifs/increase-edge-length.gif" style="height:250px;display:inline-block" alt="bring connected nodes closer to each other"><img src="/static/img/gifs/decrease-edge-length.gif" style="height:250px;display:inline-block;" alt="bring connected nodes closer to each other">',
    ],
    attachTo: ".edgelength left",
    advanceOn: {
      selector: '.edgelength, .edgelength *',
      event: 'click'
    },
    beforeShowPromise: function () {
      $( '#ECTools' ).removeClass( 'shepherd-element shepherd-open' );
      $( '#cy' ).css( 'z-index', 3 );
      return Promise.resolve();
    },
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        tours[ 1 ].next();
      }
    } ]
  } );

  // tours[ 1 ].addStep( 'cluster_select_node', {
  //   title: 'Select neighbors',
  //   text: 'In <b>Edge length</b> mode, when you click on a node it will select all of its neighbors along with the clicked node. Go ahead and click the green node.',
  //   attachTo: "#cy left",
  //   beforeShowPromise: function () {
  //     cy.autolock( true );
  //     $( '#cy' ).css( 'z-index', 1000000 );
  //     setTimeout( function () {
  //       tutorial.highlight( cy.nodes( '#1848' ) );
  //     }, 1500 );
  //     cy.nodes( '#1848' ).one( 'tap', function () {
  //       tutorial.unhighlight( cy.nodes( '#1848' ) );
  //       $( '#cy' ).css( 'z-index', 3 );
  //       tours[ 1 ].next();
  //     } );
  //     return Promise.resolve();
  //   },
  //   buttons: [ {
  //     text: 'Skip',
  //     classes: 'btn btn-primary',
  //     action: tours[ 1 ].next
  //   } ]
  // } );

  // tours[ 1 ].addStep( 'squeeze_tool', {
  //   title: 'Squeeze tool',
  //   text: 'You can bring the connected nodes closer to each other using the squeeze tool. Go ahead and bring the connected nodes closer to each other.',
  //   beforeShowPromise: function () {
  //     cy.autolock( false );
  //     $( '#squeezeTool' ).css( 'z-index', 1000000 );
  //     return Promise.resolve();
  //   },
  //   attachTo: "#squeezeTool left",
  //   advanceOn: "#squeezeTool click",
  //   buttons: [ {
  //     text: 'Skip',
  //     classes: 'btn btn-primary',
  //     action: tours[ 1 ].next
  //   } ]
  // } );

  // tours[ 1 ].addStep( 'cluster_clue', {
  //   title: 'Clue',
  //   text: 'Sometimes figuring out an edge which needs to fixed next can be difficult.  Clicking the clue button highlights a potential edge that is either too long or too short!  Go ahead and click on the clue button now.',
  //   attachTo: ".edgelength left",
  //   beforeShowPromise: function () {
  //     $( '#squeezeTool' ).css( 'z-index', 3 );
  //     $( '#ELTools' ).addClass( 'shepherd-element shepherd-open' );
  //     return Promise.resolve();
  //   },
  //   advanceOn: "#ELHint click",
  //   buttons: false
  // } );

  // tours[ 1 ].addStep( 'try_cluster', {
  //   title: "Why don't you try!",
  //   text: [
  //     'See the highlighted edge (in red) ?  Figure out how to move the nodes around to either bring them closer if the edge is too long or move them far apart if the edge is too short. Click the <b>Next</b> button when you are done.',
  //     '<img src="/static/img/gifs/reduce-edge-length.gif" style="height:200px" alt="Reduce edge length">'
  //   ],
  //   attachTo: "#cy left",
  //   beforeShowPromise: function () {
  //     cy.autolock( false );
  //     $( '#cy' ).css( 'z-index', 1000000 );
  //     $( '#ELTools' ).removeClass( 'shepherd-element shepherd-open' );
  //     return Promise.resolve();
  //   },
  //   buttons: [ {
  //     text: 'Next',
  //     action: function () {
  //       $( '#cy' ).css( 'z-index', 3 );
  //       tours[ 1 ].next();
  //     }
  //   } ]
  // } );


  // tours[ 1 ].addStep( 'cluster_good_job', {
  //   title: 'Node distribution',
  //   text: 'Good job! Now you know how to minimize edge length. Next, we will try to move the nodes away from the closest disconnected node.',
  //   attachTo: ".nodedistribution left",
  //   beforeShowPromise: function () {
  //     return Promise.resolve();
  //   },
  // } );
}

if ( weights[ 'nodedistribution' ] >= 1 ) {
  tours[ 1 ].addStep( 'node_distribution', {
    title: 'Node distribution',
    text: [ 'Here is a node and its closest disconnected node (in red).',
      ' Another subgoal is to increase the distance between them while keeping them within the bounding box.',
      '<img src="/static/img/tutorial/nodedistribution.png" style="height:250px" alt="increase the distance between node and its closest disconnected pair of nodes">'
    ],
    attachTo: ".nodedistribution left",
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        tours[ 1 ].next();
      }
    } ]
  } );

  // tours[ 1 ].addStep( 'node_distribution', {
  //   title: 'Example disconnected pair of nodes',
  //   text: [ 'Here is a node and its closest disconnected pair of nodes (in red).',
  //     ' Another subgoal is to increase the distance between them while keeping them within the bounding box.'
  //   ],
  //   attachTo: "#cy left",
  //   beforeShowPromise: function () {
  //     cy.autolock( true );
  //     $( '.nodedistribution' ).trigger( 'click' );
  //     $( '#squeezeTool' ).css( 'z-index', 3 );
  //     cy.nodes().unselect();
  //     $( '#cy' ).css( 'z-index', 1000000 );
  //     setTimeout( function () {
  //       // tutorial.highlight( cy.nodes( '#C3, #T2' ) );
  //       fludToolbox.NDTool.hint();
  //     }, 500 );
  //     return Promise.resolve();
  //   },
  //   buttons: [ {
  //     text: 'Next',
  //     action: function () {
  //       tours[ 1 ].next();
  //     }
  //   } ]
  // } );

  // tours[ 1 ].addStep( 'expand_tool', {
  //   title: 'Expand tool',
  //   text: [ 'One way to increase the distance among the set of selected nodes is to use the expand tool.',
  //     'Go ahead, select the red nodes and increase the distance between them using the expand tool.',
  //     '<b>Tip:</b> You can select multiple nodes one by one via <code>modifier key(Shift, Command, Control) + Click</code>or by drawing a selection box via <code>modifier key + mousedrag</code>'
  //   ],
  //   attachTo: "#expandTool left",
  //   advanceOn: "#expandTool click",
  //   buttons: [ {
  //     text: 'Skip',
  //     classes: 'btn btn-primary',
  //     action: tours[ 1 ].next
  //   } ],
  //   beforeShowPromise: function () {
  //     cy.autolock( false );
  //     $( '#expandTool' ).css( 'z-index', 1000000 );
  //     return Promise.resolve();
  //   },
  // } );
  //
  //
  // tours[ 1 ].addStep( 'node_dist_clue', {
  //   title: 'Clue',
  //   text: 'Sometimes figuring out which node pair needs to moved away from each other can be difficult.  Clicking the clue button highlights a potential node pair that is too close!  Go ahead and click on the clue button now.',
  //   attachTo: ".nodedistribution left",
  //   beforeShowPromise: function () {
  //     $( '#expandTool' ).css( 'z-index', 3 );
  //     $( '#NDTools' ).addClass( 'shepherd-element shepherd-open' );
  //     return Promise.resolve();
  //   },
  //   advanceOn: "#NDHint click",
  //   buttons: false
  // } );
  //
  // tours[ 1 ].addStep( 'try_node_dist', {
  //   title: "Why don't you try!",
  //   text: [ 'See the highlighted node pair (in red) ?  Figure out how to move the nodes away from each other such that your total scores increases. Click the <b>Next</b> button when you are done.',
  //     '<img src="/static/img/gifs/increase-node-distance.gif" style="height:200px" alt="Increase node distance">'
  //   ],
  //   attachTo: "#cy left",
  //   beforeShowPromise: function () {
  //     $( '#cy' ).css( 'z-index', 1000000 );
  //     $( '#NDTools' ).removeClass( 'shepherd-element shepherd-open' );
  //     return Promise.resolve();
  //   },
  //   buttons: [ {
  //     text: 'Next',
  //     action: function () {
  //       $( '#cy' ).css( 'z-index', 3 );
  //       tours[ 1 ].next();
  //     }
  //   } ]
  // } );
}

if ( weights[ 'nodeedgedistance' ] >= 1 ) {

  tours[ 1 ].addStep( 'node_edge_separation', {
    title: 'Node edge separation',
    text: [ 'Here is a node and its closest edge (in red).',
      ' Another subgoal is to increase the separation between nodes and their closest edges.',
      '<img src="/static/img/tutorial/nodeedgedistance.png" style="height:250px" alt="increase the distance between node and its closest disconnected pair of nodes">'
    ],
    attachTo: ".nodeedgedistance left",
    // beforeShowPromise: function () {
    //   cy.nodes().unselect();
    //   $( '.nodeedgedistance' ).trigger( 'click' );
    //   $( '#NEDTools' ).addClass( 'shepherd-element shepherd-open' );
    //   $( '#cy' ).css( 'z-index', 3 );
    //   return Promise.resolve();
    // },
    buttons: [ {
      text: 'Previous',
      classes: 'btn btn-primary',
      action: function () {
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        // $( '#NEDTools' ).removeClass( 'shepherd-element shepherd-open' );
        tours[ 1 ].next();
      }
    } ]
  } );

  // tours[ 1 ].addStep( 'node_edge_separation_clue', {
  //   title: 'Clue',
  //   text: 'Sometimes figuring out which node edge pair needs to fixed can be difficult.  Clicking the clue button highlights a potential node edge pair that is too close!  Go ahead and click on the clue button now.',
  //   attachTo: ".nodeedgedistance left",
  //   beforeShowPromise: function () {
  //     $( '#expandTool' ).css( 'z-index', 3 );
  //     $( '#NEDTools' ).addClass( 'shepherd-element shepherd-open' );
  //     return Promise.resolve();
  //   },
  //   advanceOn: "#NEDHint click",
  //   buttons: false
  // } );
  //
  // tours[ 1 ].addStep( 'node_edge_pair', {
  //   title: 'Example node edge pair',
  //   text: [ 'Here is a pair of node and edge (in red). Your goal is to maximize the distance between the highlighted node and its closest edge (in red).' ],
  //   attachTo: "#cy left",
  //   classes: "shepherd-theme-dark shepherd-theme-small-width ",
  //   beforeShowPromise: function () {
  //     cy.autolock( true );
  //     $( '#cy' ).css( 'z-index', 1000000 );
  //     return Promise.resolve();
  //   },
  // } );
  //
  // tours[ 1 ].addStep( 'increase_node_edge_separartion', {
  //   title: 'Drag node away from edge',
  //   text: [ 'You can increase the distance between them by dragging the node far from the edge. Go ahead and drag the node away from the edge. Click the <b>Next</b> button when you are done.',
  //     '<img src="/static/img/gifs/increase-node-edge-distance.gif" style="height:200px" alt="Increase node edge distance">'
  //   ],
  //   attachTo: "#cy left",
  //   classes: "shepherd-theme-dark shepherd-theme-small-width ",
  //   beforeShowPromise: function () {
  //     cy.autolock( false );
  //     return Promise.resolve();
  //   },
  //   buttons: [ {
  //     text: 'Next',
  //     classes: 'btn btn-primary',
  //     action: tours[ 1 ].next
  //   } ]
  // } );
}

// if ( weights[ 'dpp' ] >= 1 ) {
//
//   tours[ 1 ].addStep( 'dpp', {
//     title: 'Downward pointing paths',
//     text: 'Next, we will try to maximize the number of downward pointing paths from triangles to rectangles.',
//     attachTo: ".dpp left",
//     beforeShowPromise: function () {
//       tutorial.unhighlight( cy.elements() );
//       cy.nodes().unselect();
//       cy.autolock( true );
//       $( '#cy' ).css( 'z-index', 3 );
//       return Promise.resolve();
//     },
//     buttons: [ {
//       text: 'Next',
//       action: function () {
//         $( '#NEDTools' ).removeClass( 'shepherd-element shepherd-open' );
//         tours[ 1 ].next();
//       }
//     } ]
//   } );
//
//   tours[ 1 ].addStep( 'path', {
//     title: 'Example path',
//     text: [ 'This is a path (in green). A path is just a sequence of edges that starts at a triangle and ends at a rectangle.',
//       'Paths are very important because one of the subgoals of the game is to create as many downward pointing paths as possible, i.e., paths that are made up only of downward edges.'
//     ],
//     attachTo: "#cy left",
//     beforeShowPromise: function () {
//       $( '#cy' ).css( 'z-index', 1000000 );
//       tutorial.highlight( cy.elements( '#T2, #C1, #C8, #C6, #R2, #T2_C1, #C8_R2, #C6_C8, #C1_C6' ) );
//       return Promise.resolve();
//     },
//     buttons: [ {
//       text: 'Next',
//       action: function () {
//         tutorial.unhighlight( cy.elements( '#T2, #C1, #C8, #C6, #R2, #T2_C1, #C8_R2, #C6_C8, #C1_C6' ) );
//         $( '#cy' ).css( 'z-index', 3 );
//         tours[ 1 ].next();
//       }
//     } ]
//   } );
//   tours[ 1 ].addStep( 'dpp_mode', {
//     title: 'Downward Pointing Paths',
//     text: 'To highlight all edges that are pointed upward, you can click on the `Downward Pointing Paths` link to enter the corresponding mode.',
//     attachTo: ".dpp left",
//     advanceOn: {
//       selector: '.dpp, .dpp *',
//       event: 'click'
//     },
//     buttons: false
//   } );
//   tours[ 1 ].addStep( 'dpp_mode_description', {
//     title: 'Upward edges',
//     text: [
//       'In <b>Downward Pointing Paths</b> mode, edges that are pointed upward are red.  This is to bring them to your attention so that you can move the nodes to make a downward path.',
//       '<b>Tip:</b> Moving highly connected nodes can lead to cascading downward paths that can earn a lot of points with a single move!'
//     ],
//     beforeShowPromise: function () {
//       fludToolbox.setMode( DPP_MODE );
//       $( '#cy' ).css( 'z-index', 1000000 );
//       return Promise.resolve();
//     },
//     attachTo: "#cy left",
//     buttons: [ {
//       text: 'Next',
//       action: function () {
//         $( '#cy' ).css( 'z-index', 3 );
//         // $( '#DPPTools' ).removeClass( 'shepherd-element shepherd-open' );
//         cy.autolock( false );
//         tours[ 1 ].next();
//       }
//     } ]
//   } );
//
//   tours[ 1 ].addStep( 'clue', {
//     title: 'Clue',
//     text: 'Sometimes figuring out which node to move next can be difficult.  Clicking the clue button highlights a potential path that has an upward edge in it.  This can help you see the paths that still require movement.  Go ahead and click on the clue button now.',
//     attachTo: "#DPPTools left",
//     advanceOn: "#hint click",
//     buttons: [ {
//       text: 'Skip',
//       classes: 'btn btn-primary',
//       action: tours[ 1 ].next
//     } ]
//   } );
//
//   tours[ 1 ].addStep( 'you_try', {
//     title: "Why don't you try!",
//     attachTo: "#cy left",
//     text: [
//       'See the highlighted path? Figure out how to move the nodes around to get all of its edges pointing downward.  Click the <b>Next</b> button when you are done.',
//       '<img src="/static/img/gifs/increase-dpp.gif" style="height:200px" alt="Increase downward pointing paths">'
//     ],
//     beforeShowPromise: function () {
//       $( '#cy' ).css( 'z-index', 1000000 );
//       return Promise.resolve();
//     },
//     buttons: [ {
//       text: 'Next',
//       action: function () {
//         $( '#cy' ).css( 'z-index', 3 );
//         tours[ 1 ].next();
//       }
//     } ]
//   } );
//
// }

tours[ 1 ].addStep( 'expand_squeeze_tool', {
  title: 'Expand/Squeeze tool',
  text: [ 'One way to increase/decrease the distance among the set of selected nodes is to use the expand/squeeze tool.',
    '<b>Tip:</b> You can select multiple nodes one by one via <code>Shift + Click</code>or by drawing a selection box via <code>Shift + mousedrag</code>'
  ],
  attachTo: "#expandSqueezeTool left",
  buttons: [ {
    text: 'Previous',
    classes: 'btn btn-primary',
    action: function () {
      tours[ 1 ].back();
    }
  }, {
    text: 'Next',
    classes: 'btn btn-primary',
    action: tours[ 1 ].next
  } ],
} );


tours[ 1 ].addStep( 'go_back_top_score', {
  title: 'Go back to the top score',
  text: 'Use the <b>Go back to the top score</b> button to move the nodes back to the positions with the top score at any point in the game.',
  attachTo: '#bestLayoutBtn left',
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

tours[ 1 ].addStep( 'undo_redo', {
  title: 'Undo/Redo',
  text: 'These are the undo and redo buttons for you to easily revert your moves.',
  attachTo: '#UndoRedoBtnGroup left',
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

tours[ 1 ].addStep( 'finished', {
  title: 'Finish game',
  text: 'Each bonus game automatically expires in an hour. However, you can end the game at point of time by clicking the `Finished` button.',
  attachTo: '#finishBtn left',
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

if ( mode == 'dpp' ) {
  tours[ 1 ].addStep( 'exampleLayout', {
    title: 'A good solution',
    text: [ ' Here is an example of a good solution generated in a different game. You can zoom and look at this example at any point of time by clicking on this thumbnail.', '<img src="/static/img/game/layout-example-dpp.png"  class="rounded" style="border: 1px solid black; height:250px" alt="Increase downward pointing paths">' ],
    attachTo: '#exampleLayoutTip left',
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
} else {
  tours[ 1 ].addStep( 'exampleLayout', {
    title: 'A good solution',
    text: [ ' Here is an example of a good solution generated in a different game. You can zoom and look at this example at any point of time by clicking on this thumbnail.', '<img src="/static/img/game/layout-example.png"  class="rounded" style="border: 1px solid black; height:250px" alt="Increase downward pointing paths">' ],
    attachTo: '#exampleLayoutTip left',
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
}




tours[ 1 ].addStep( 'complete_tutorial', {
  title: 'Tutorial completed!',
  text: [ 'Congratulations!  You have successfully completed the Part 2 of the tutorial. Now try to beat the top score by a big margin!',
    'We hope you have fun while helping the scientific community.',
    '<b>Note:</b> Higher the margin, higher the bonus!'
  ],
  beforeShowPromise: function () {
    $( '#cy' ).css( 'z-index', 3 );
    return Promise.resolve();
  },
  buttons: [ {
    text: 'Previous',
    classes: 'btn btn-primary',
    action: function () {
      tours[ 1 ].back();
    }
  }, {
    text: "Let's play",
    action: function () {
      window.location.href = redirect_url;
      tours[ 1 ].complete();
    }
  } ]
} );