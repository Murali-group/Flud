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


if ( weights[ 'dpp' ] >= 1 ) {

  // tours[ 1 ].addStep( 'dpp', {
  //   title: 'Downward pointing paths',
  //   attachTo: ".dpp left",
  //   text: 'Next, we will try to maximize the number of downward pointing paths from triangles to rectangles.',
  //   beforeShowPromise: function () {
  //     tutorial.unhighlight( cy.elements() );
  //     cy.nodes().unselect();
  //     cy.autolock( true );
  //     $( '#cy' ).css( 'z-index', 3 );
  //     return Promise.resolve();
  //   },
  //   buttons: [ {
  //     text: 'Next',
  //     action: function () {
  //       $( '#DPPTools' ).removeClass( 'shepherd-element shepherd-open' );
  //       tours[ 1 ].next();
  //     }
  //   } ]
  // } );

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

  // tours[ 1 ].addStep( 'dpp_mode', {
  //   title: 'Downward Pointing Paths',
  //   text: 'To highlight all edges that are pointed upward, you can click on the `Downward Pointing Paths` link to enter the corresponding mode.',
  //   attachTo: ".dpp left",
  //   advanceOn: {
  //     selector: '.dpp, .dpp *',
  //     event: 'click'
  //   },
  //   buttons: false
  // } );

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
        tours[ 1 ].back();
      }
    }, {
      text: 'Next',
      action: function () {
        $( '#cy' ).css( 'z-index', 3 );
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
      task2Score = EnergyUtil.totalscore( cy, weights ) - task2Score

      if ( ( task1Score > 0 ) && ( task2Score > 0 ) ) {
        $( '#successTutorial, #promptGamePlay' ).show();
      } else {
        $( '#failTutorial' ).show();
      }

      // if ( task1Score > 0 ) {
      //   $( '#successtask1' ).show();
      // } else {
      //   $( '#failtask1' ).show();
      // }
      //
      // if ( task2Score > 0 ) {
      //   $( '#successtask2' ).show();
      // } else {
      //   $( '#failtask2' ).show();
      // }

      $( '#cy' ).css( 'z-index', 3 );
      $( '#bonusModal' ).modal( 'show' );
      tours[ 1 ].complete();
    }
  } ]
} );