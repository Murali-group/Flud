/**
 * Created by leelisle on 6/20/17.  Modified from work previously done by David Gwizdala.
 */

///////////////////////////////////////////////////
//  view_graph.js
//  renders the initial graph for viewing.
//

/* Table of Contents
	Cytoscape Graph Setup
	Initialization functions
	Undo/Redo functions
	Event Handler Creation
		Drag node
		Release node
		Button clicks
		    Hint
			Undo
			Redo
			Save
				Save Dialogue Modal (this can appear when finishing or attempting to leave the page.)
				Save Graph Data
	Additional functions
		Get Query variables function
		Add to the undo stack
		update the score
*/

var c2;

$(document).ready(function(){

	////// GLOBAL VARIABLES //////

	//prepare the undo and redo stacks
	var undoStack = [];
	var redoStack = [];

	//store initial score
    var initialScore = 0;
	// store current score
    var currentScore = 0;
    //store if you are winning
    var isLeader = false;

    //boolean to check if the user has gone through the proper prompt to exit the page
	var hasConfirmedExit = false;

  //create the cytoscape object, selected as the 'cy' element
  var cy = window.cy = cytoscape({
         //selects the 'cy' element
         container: document.getElementById('cy'),

         // interaction options:
          selectionType: 'single',
          touchTapThreshold: 8,
          desktopTapThreshold: 4,
          autolock: false,
          autounselectify: true,

         //main layout of the graph
         style: graph_json['style_json']['style'],
         layout:  {
                //name: 'random',
                //name: 'cola',
                //name: 'breadthfirst',
                name: 'preset',
                positions: undefined,
                flow: { axis: 'y', minSeparation: 30 }, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
                avoidOverlap: true, // if true, prevents overlap of node bounding boxes
                padding: 10,
                fit: true,
                animate: false
		    },
         elements: graph_json['graph_json']['elements']

       });


	   /////////////////////////////////////////////////////////////////////////////
	   // Create initial setup
	   //
	   cy.ready(function(){

	       cy.fit();

		   //organize triangles and rectangles
		   //moveSquaresAndTriangles();

		   	   // Code to Move nodes where we need them to be
           //updated to handle new GraphSpace API
            var triangleNodes = [];
            var squareNodes = [];
            var ellipseNodes = [];
            allElements = cy.nodes();
            for(var i = 0; i < allElements.length; i++) {
                if(allElements[i].style()['shape'] == "triangle") {
                    triangleNodes.push(allElements[i]);
                } else if(allElements[i].style()['shape'] == "square" || allElements[i].style()['shape'] == "rectangle") {
                    squareNodes.push(allElements[i]);
                } else if (allElements[i].style()['shape'] == 'ellipse') {
                    ellipseNodes.push(allElements[i]);
                }
            }

          //gather the current canvas size
            var canvas = {
                x: cy.width(),
                y: cy.height()
            };

          //space the size past the initial 0
          var triangleCounterX = (canvas.x/triangleNodes.length)/2;
          var squareCounterX = (canvas.x/squareNodes.length)/2;

          for(var i = 0; i < triangleNodes.length; i++) {
            var triangleNode = triangleNodes[i];

                triangleNode.renderedPosition({
                  x: triangleCounterX,
                  y: 80
                });

                triangleNode.style('shape', 'triangle');

                triangleCounterX = triangleCounterX + canvas.x/triangleNodes.length;

            }

          for(var i = 0; i < squareNodes.length; i++) {
            var squareNode = squareNodes[i];

                squareNode.renderedPosition({
                  x: squareCounterX,
                  y: canvas.y - 30
                });

                squareNode.style('shape', 'square');

                squareCounterX = squareCounterX + canvas.x/squareNodes.length;
            }

          for (var i = 0; i < ellipseNodes.length; i++) {
              var ellipseNode = ellipseNodes[i];

              if(ellipseNode.data('id') == 'C2') c2 = ellipseNode;

              ellipseNode.renderedPosition({
                  x: ellipseNode.position('x') * (canvas.x - 30) / 500,
                  y: ellipseNode.position('y') * (canvas.y - 30) / 500
              });
          }

            //hide unchangeable edges
            for(var i = 0; i < triangleNodes.length; i++) {
              triangleNode = triangleNodes[i];
              //hide edges that cannot be changed
                var hiddenEdges = triangleNode.outgoers("edge");
                for(var pos = 0; pos < hiddenEdges.length; pos++) {
                    var target = hiddenEdges[pos].target();
                    var shape = String(target.style().shape).replace(/\s/g,'');
                    if (shape == 'triangle' || shape == 'rectangle' || shape == 'square') {
                        hiddenEdges[pos].style('visibility', 'hidden');
                    }
                }
            }

            for(var i = 0; i < squareNodes.length; i++) {
              squareNode = squareNodes[i];
                    //hide edges that cannot be changed
                hiddenEdges = squareNode.outgoers("edge");
                for(var pos = 0; pos < hiddenEdges.length; pos++) {
                    var target = hiddenEdges[pos].target();
                    var shape = String(target.style().shape).replace(/\s/g,'');
                    if (shape == 'triangle' || shape == 'rectangle' || shape == 'square') {
                        hiddenEdges[pos].style('visibility', 'hidden');
                    }
                }
            }

             //variables to help split location of items on canvas
          BoundingBox = {
            top: triangleNode.position('y'),
            bottom: squareNode.position('y')
          };

          BorderCounts = {
            triangleCount: triangleNodes.length,
            squareCount: squareNodes.length
          };


		   //provide label information for all nodes
		   displayNumEdgesOnNodes();

		   //initial colorization of nodes
		   initialNodeColoration();

		   //initial colorization of edges
		   initialEdgeColoration();

		   //builds the hidden start and end nodes, for dijstra's calculation
            buildStartAndEndNodes()

		   //initial count (for score). We store this in the current score.
           initialScore = countDownwardPointingPathsFromTriangles();
           currentScore = initialScore;
		   $("#score").text(currentScore);

           //initially disable the undo and redo buttons, since nothing has changed
           $("#undo").addClass('disabled');
           $("#redo").addClass('disabled');

			//add in the panzoom widget for ease of use
			// the default values of each option are outlined below:
			var defaults = {
			  zoomFactor: 0.05, // zoom factor per zoom tick
			  zoomDelay: 45, // how many ms between zoom ticks
			  minZoom: 0.5, // min zoom level
			  maxZoom: 10, // max zoom level
			  fitPadding: 50, // padding when fitting
			  panSpeed: 10, // how many ms in between pan ticks
			  panDistance: 10, // max pan distance per tick
			  panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
			  panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
			  panInactiveArea: 8, // radius of inactive area in pan drag box
			  panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
			  zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
			  fitSelector: undefined, // selector of elements to fit
			  animateOnFit: function(){ // whether to animate on fit
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
           $('.cy-panzoom-slider').attr( {"value": "pan", "data-intro": "Zoom in and out.", "data-step":"5"});
           $('.cy-panzoom-reset').attr( {"value": "pan", "data-intro": "Scale graph to fit page.", "data-step":"6"});
           $('.cy-panzoom-panner-handle').attr( {"value": "pan", "data-intro": "Pan around the screen.", "data-step":"7"});

	   });

	   /////////////////////////////////////////////////////////////////////////////
	   // Create Undo/Redo Functions
	   //
		function addToUndoStack() {
			var step = {};
			window.cy.nodes().positions(function (i, node) {
				step[node._private.data.id] = node.renderedPosition();
			});
			undoStack.push(step);

            //recolor the button to indicate an item
            $("#undo").removeClass('disabled');
		};

        function addToRedoStack() {
			var step = {};
			window.cy.nodes().positions(function (i, node) {
				step[node._private.data.id] = node.renderedPosition();
			});
			redoStack.push(step);

            //recolor the button to indicate an item
            $("#redo").removeClass('disabled');
		};

		//if an undo has occurred and then an action, the redo class must be nullified
        //this function empties the redo stack.
        function clearRedoStack() {
            if(redoStack.length == 0) {
                return;
            } else {

                while(redoStack.length != 0) {
                    redoStack.pop();
                }

                //recolor the button to indicate an item
                $("#redo").addClass('disabled');
            }

		};

	   /////////////////////////////////////////////////////////////////////////////
	   // Create Event Handlers
	   //

       //bind drag node event
       cy.on('drag', 'node', function(evt){
          var node = evt.cyTarget;

          //colors edges directly connected to the selected node
          colorEdgeFromDirection(node);

          //binds triangle and square nodes to the top and bottom,
          //while preventing other nodes from being placed above/below them
          controlNodeMovementByType(node);
        });

		//bind select node event
		cy.on('grab', 'node', function(evt) {
			//capture node
			var node = evt.cyTarget;

			//grey out all edges except those in contact with the selected node
			highlightSelectedNodeAndEdges(node);

			//add initial location to the undo stack
			addToUndoStack();

            //clear the redo stack, since we have now moved forward
            clearRedoStack();
		});

		//bind release node event
		cy.on('free', 'node', function(evt) {
			//capture node
			//var node = evt.cyTarget;

           updateScore();

			 //recolor all of the nodes
			recolorGraph();

		});

		//make the dialogue modal appear when any list element is clicked
		$("#menu-content").on("click", "a", function(event){
			//the info expander doesn't switch the page
			if(this.id != 'userInfoExpander') {
				//show the modal
				$('#finishedDialogueModal').modal("show");
			}

		});

		//set onAppear for save dialogue modal
		$('#finishedDialogueModal').on('show.bs.modal', function (event) {
			//we check to see if the user has created a higher or lower score, and then update the dialogue accordingly.
            //top score
            if(currentScore > initialScore) {
                $('#finishedDescription').html("<p>Well done! You are the current leader.</p><p>Your Score: " + currentScore + "</p><p>Their Score: " + highScore + "</p>");
                isLeader = true;
            }
            //low score
            else if(currentScore < initialScore) {
                $('#finishedDescription').html("<p>Keep going - someone still has a higher score than you!</p><p>Your Score: " + currentScore + "</p><p>Their Score: " + highScore + "</p>");
                isLeader = false;
            }
            //same score
            else {
                $('#finishedDescription').html("<p>Keep going! You currently have the same score as the leader.</p><p>Your Score: " + currentScore + "</p><p>Their Score: " + highScore + "</p>");
                isLeader = false;
            }
        });

		//set onclick for hint Button
		 $("#hint").click(function(e) {

             //find the shortest path from A to B
             var bf;
             bf = cy.elements().bellmanFord(
                 {
                     root: '#start',
                     weight: function () {
                         if(this.hidden()) {
                             //don't traverse
                             return 99999;
                         }
                         if (isCorrectAngle(this)) {
                             return 10;
                         } else {
                             return -1;
                         }
                     },
                     directed: true
                 });


            var pathToEnd;

            if(bf.hasNegativeWeightCycle) {
                console.log("Floyd-Warshall Selected")
                 fw = cy.elements().floydWarshall({
                         weight: function () {
                             if(this.hidden()) {
                                 //don't traverse
                                 return 99999;
                             }
                             if (isCorrectAngle(this)) {
                                 return 10;
                             } else {
                                 return -1;
                             }
                         },
                         directed: true
                     });
                pathToEnd = fw.path('#start', '#end');
            } else {
                pathToEnd = bf.pathTo('#end');
            }

            //grey out the entire graph
	        greyOutGraph();

            //highlight the path
            pathToEnd.style('background-color', '#809fff');

            for(var i = 1; i < pathToEnd.length; i = i+2) {
                var edge = pathToEnd[i];
                controlDirectedEdgeColor(edge);
            }
		 });

	    //Undo's last position change from the user for the current session
		$("#undo").click(function (e) {

            if (undoStack.length == 0) {
				return;
			} else {
                //add the current location to the redo stack
                addToRedoStack();
                var node_positions = undoStack.pop();

                for (var node_id in node_positions) {
                    var oldPosition = {"x": node_positions[node_id]["x"], "y": node_positions[node_id]["y"]};
                    window.cy.getElementById(node_id).renderedPosition(oldPosition);
                }

                //check for button disable
                if(undoStack.length == 0) {
                    //recolor the button to indicate an item
                    $("#undo").addClass('disabled');
                }
            }

            //updates the score accordingly
            updateScore();

		});

		$("#redo").click(function(e) {

			if (redoStack.length == 0) {
				return;
			} else {
                //add the initial location to the stack
                addToUndoStack();
				var node_positions = redoStack.pop();

				for (var node_id in node_positions) {
					var oldPosition = {"x": node_positions[node_id]["x"], "y": node_positions[node_id]["y"]};
					window.cy.getElementById(node_id).renderedPosition(oldPosition);
				}

                //check for button disable
                if(redoStack.length == 0) {
                    //recolor the button to indicate an item
                    $("#redo").addClass('disabled');
                }
			}

			//update the score accordingly
			updateScore();
		});

		//set onclick for save Button
		 $("#save").click(function(e) {
            if (isLeader) {
                tut_done = "true";
                $("#keep_playing").click();
                tour_complete.start();
                return;
            }
            else {
                $("#keep_playing").click();
                tour_error.start();
                return;
            }
		 });

     ///////////////////////////////////////////////////////////////////////////
     // LAYOUT FUNCTIONS

	//Gets query variables from the url
	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (pair[0] == variable) {
				return pair[1];
			}
		}
		return (false);
	}

	//updates the score, plays animations based on the score
	function updateScore() {
		 	 //compare the new score to the current score
            var newScore = countDownwardPointingPathsFromTriangles();

            //place the status div in a random location
            var randomX = Math.floor((Math.random() * 60) + 1);
            var randomY = Math.floor((Math.random() * 60) + 1);

            //set the new location of the status div
            $("#status").css({"top": randomY + "%", "right": randomX + "%"});

            //if it's higher, show the score increase animation
            if(newScore > currentScore) {
                //make the thumbs up image inside the status visible
                $("#thumb_up").css("display", "block");
                //make it grow and then disappear
                $("#thumb_up").animate({
                    opacity: '1',
                    width: '200px',
                }, "slow");
                $("#thumb_up").animate({
                    opacity: '0',
                }, "fast");
                $("#thumb_up").animate({
                    display: 'none'
                });

                $("#score")
                    .css("backgroundColor", "green")
                    .animate({backgroundColor: "transparent"}, "slow", null, function() {
                        jQuery(this).css("backgroundColor", "transparent");
                    });
            }
            //else if it's lower, show the decrease animation
            else if(newScore < currentScore) {
                //make the thumbs down image inside the status visible
                $("#thumb_down").css("display", "block");
                //make it grow and then disappear
                $("#thumb_down").animate({
                    opacity: '1',
                    width: '200px',
                }, "slow");
                $("#thumb_down").animate({
                    opacity: '0',
                }, "fast");
                $("#thumb_down").animate({
                    display: 'none'
                });

                $("#score")
                    .css("backgroundColor", "red")
                    .animate({backgroundColor: "transparent"}, "slow", null, function() {
                        jQuery(this).css("backgroundColor", "transparent");
                    });
            }
            //else it's the same: no animation

            currentScore = newScore;
            $("#score").text(currentScore);

            // Tutorial Checks
            if (tut_done != 'true' && name == 'tutorial_1') {
                // check to see if its greater than the threshhold score
            }
	}

});

// tutorial variable
var tut_done = false;

// Shepherd Tutorial vars
var tut_done = 'false';
var tour;
var tour_error;
var tour_complete;

$(document).ready(function() {
    // help button functionality
    $("#help").click(function () {

        var intro = introJs();

        intro.setOptions({
            'scrollToElement': true
        });
        intro.start();
    });

    tour.start();
});

tour = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-dark',
        scrollTo: true
    }
});

tour.addStep('welcome', {
    text: 'As we explained earlier, a node is labeled with the number of edges that it is connected to.  Each downward edge in the graph is worth one point, so highly connected nodes are worth more points.',
    attachTo: "#help left",
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep('highly_connected', {
    text: 'Furthermore, moving highly connected nodes can lead to cascading downward paths that can earn a lot of points with a single move!',
    attachTo: "#help left",
    buttons: [
        {
            text: 'Next',
            action: highlightNode
        }
    ]
});

function highlightNode() {
    c2.style('background-color', 'green');
    tour.next();
}

tour.addStep('you_try', {
    text: 'Try moving this node (in green) so that all of its edges are downward.  Click finish when you are done.',
    attachTo: '#help left',
    buttons: [
        {
            text: 'Ok',
            action: unhighlight
        }
    ]
});

function unhighlight() {
    c2.style('background-color', '#809fff');
    tour.complete();
}

// Tutorial Error/complete
// Shepherd Tutorial Error
tour_error = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-dark',
        scrollTo: true
    }
});

tour_error.addStep('error_step', {
    text: 'Uh oh, it looks like the graph still contains some upward edges.  Please try again.',
    buttons: [
        {
            text: 'Ok',
            action: tour_error.complete
        }
    ]
});

// Shepherd Tutorial Complete
tour_complete = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-dark',
        scrollTo: true
    }
});

tour_complete.addStep('complete_step', {
    text: 'Good job!  See how you earned 16 points from moving a single node?  There are many different ways to layout a single graph, and even small changes can dramatically increase your score.',
    attachTo: "#score left",
    buttons: [
        {
            text: 'Continue',
            action: tutorial_done
        }
    ]
});

function tutorial_done(){
    console.log(tut_done);
    if (tut_done == 'true') window.location.href = "/tutorial/3";
}