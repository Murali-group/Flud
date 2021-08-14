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

$(document).ready(function () {

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

    // check to see if the username has been defined
    if (username == "None") username = "Anonymous";

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
        style: style_json['style'],
        layout: {
            name: 'preset',
            positions: positions_json,
            padding: 10,
            fit: true,
            animate: false
        },
        elements: graph_json['elements']
    });

    /////////////////////////////////////////////////////////////////////////////
    // Create initial setup
    //
    cy.ready(function () {

        cy.fit();

        //organize triangles and rectangles
        moveSquaresAndTriangles();

        //provide label information for all nodes
        displayNumEdgesOnNodes();

        //initial colorization of nodes
        initialNodeColoration();

        //initial colorization of edges
        initialEdgeColoration();

        //builds the hidden start and end nodes, for dijstra's calculation
        buildStartAndEndNodes();
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

        cy.panzoom(defaults);
        //add in the tutorial information to panzoom
        $('.cy-panzoom-slider').attr({"value": "pan", "data-intro": "Zoom in and out.", "data-step": "5"});
        $('.cy-panzoom-reset').attr({"value": "pan", "data-intro": "Scale graph to fit page.", "data-step": "6"});
        $('.cy-panzoom-panner-handle').attr({"value": "pan", "data-intro": "Pan around the screen.", "data-step": "7"});

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
        if (redoStack.length == 0) {
            return;
        } else {

            while (redoStack.length != 0) {
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
    cy.on('drag', 'node', function (evt) {
        var node = evt.cyTarget;

        //colors edges directly connected to the selected node
        colorEdgeFromDirection(node);

        //binds triangle and square nodes to the top and bottom,
        //while preventing other nodes from being placed above/below them
        controlNodeMovementByType(node);
    });

    //bind select node event
    cy.on('grab', 'node', function (evt) {
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
    cy.on('free', 'node', function (evt) {
        // update the user's score
        updateScore();

        //recolor all of the nodes
        recolorGraph();

        // var for determining if save is needed
        var isLeader = false;

        // Check if there's a new high score on the server
        apis.score.get(graph_id,
            successCallback = function (response) {
                var scoreHasUpdated = false;
                if (response.score != initialScore) {
                    $('#currentTopScore').text(response.score + " by " + response.top_scorer);
                    scoreHasUpdated = true;
                }

                if (currentScore > response.score) isLeader = 'true';

                if (isLeader) {
                    // If user is Anonymous, prompt user to log in
                    if (username == "Anonymous") {
                        $('#anon_login_modal').modal();
                        console.log("Anon modal show");
                    }

                    saveGraph(graph_id, username, currentScore);
                    $('#currentTopScore').text(currentScore);
                    $("#top_score_header").html("You have the high score:");
                }

                // update initial score
                initialScore = response.score;
            },
            errorCallback = function (xhr, status, errorThrown) {
                // This method is called when  error occurs while getting
                console.log(status);
                console.log(errorThrown);
                alert("I'm sorry, an error occurred. Please try again.");
            });
    });

    //make the dialogue modal appear when any list element is clicked
    $("#menu-content").on("click", "a", function (event) {
        //the info expander doesn't switch the page
        if (this.id != 'userInfoExpander') {
            //show the modal
            $('#finishedDialogueModal').modal("show");
        }

    });

    //make an alert appear if the user attempts to leave the page
    //due to browser security this must be a default alert instead of the dialogue modal
    window.onbeforeunload = function () {
        if (!hasConfirmedExit) {
            return 'You have unsaved changes!';
        }
    }

    //set onAppear for save dialogue modal
    $('#finishedDialogueModal').on('show.bs.modal', function (event) {
        //we check to see if the user has created a higher or lower score, and then update the dialogue accordingly.
        apis.score.get(graph_id,
            successCallback = function (response) {
                //boolean to check if the score has updated at all since we last looked at it
                var scoreHasUpdated = false;
                if (response.score != initialScore) {
                    $('#currentTopScore').text(response.score + " by " + response.top_scorer);
                    scoreHasUpdated = true;
                }

                //top score
                if (currentScore > response.score) {
                    $('#finishedDescription').html("<p>Well done! You are the current leader.</p><p>Your Score: " + currentScore + "</p><p>Their Score: " + response.score + "</p>");
                    isLeader = true;
                }
                //top score until check
                else if (currentScore > initialScore && currentScore <= response.score) {
                    $('#finishedDescription').html("<p>Oh No! While you were playing, someone else got a higher score!</p><p>Your Score: " + currentScore + "</p><p>Their Score: " + response.score + "</p>");
                    isLeader = false;
                }
                //low score
                else if (currentScore < initialScore) {
                    $('#finishedDescription').html("<p>Keep going - someone still has a higher score than you!</p><p>Your Score: " + currentScore + "</p><p>Their Score: " + response.score + "</p>");
                    isLeader = false;
                }
                //same score
                else {
                    $('#finishedDescription').html("<p>Keep going! You currently have the same score as the leader.</p><p>Your Score: " + currentScore + "</p><p>Their Score: " + response.score + "</p>");
                    isLeader = false;
                }

                //we now update the initial score
                initialScore = response.score;
            },
            errorCallback = function (xhr, status, errorThrown) {
                // This method is called when  error occurs while getting
                console.log(status);
                console.log(errorThrown);
                alert("I'm sorry, an error occurred. Please try again.");
            });

    });

    // Make sure that the anon-modal can actually access the login
    $("#anon_login").click(function (e) {
        $('#loginModal').modal();
    });

    //set onclick for hint Button
    $("#hint").click(function (e) {
        //grab all directed edges
        var allEdges = cy.edges();
        for (var i = 0; i < allEdges.length; i++) {
            //If the edge is red edges under flud operation
            if (!allEdges[i].hidden() && !isCorrectAngle(allEdges[i])) {
                //We do not want to consider edges that point upward and end in
                //  a triangle or start at a square, since they cannot be moved
                //Therefore, we ignore those edges

                //When the node is from the source
                if (allEdges[i].target().style()['shape'] == "triangle") {
                    continue;
                }
                //When the node is targeting sink
                else if (allEdges[i].source().style()['shape'] == "square"
                    || allEdges[i].source().style()['shape'] == "rectangle") {
                    continue;
                }
                //When the source and target of the node are both circles
                //This edge may be suitable candidate for a hint
                //Note that commit e69c3da ensures that we cannot have an upward edge from a triangle
                // to a circle or from a circle to a square/rectangle
                else {
                    //Check removing allEdges[i] will increase the number of downward paths or not
                    if (isGoodHint(allEdges[i])) {
                        break;
                    }
                }
            }
            //When there is no isGoodHint(allEdges[i])
            if (i == allEdges.length - 1) {
                //We assume that if there are no good hints, then there is no way to increase the
                // number of downward paths
                console.log("I cannot compute any more clues");
                return;
            }
        }

        //grey out the entire graph
        greyOutGraph();

        //Color the targeted red edge
        allEdges[i].style('line-color', 'red');
        allEdges[i].style('target-arrow-color', 'red');
        allEdges[i].style('width', '5');

        //Set the Dijkstra's algorithm for super source as a root
        var shortestPathTreeFromSuperSource = cy.elements().dijkstra(
            {
                //Super source
                root: '#start',

                //Add the weight to the edges to prevent the path with multiple sources
                // and sinks
                //
                //Make the weight of an edge from a square/rectangle or to a triangle
                // very large in order to ensure that the compute path does not contain
                // a triangle/square/rectangle as an internal node
                weight: function () {
                    //When the edge is from sink
                    if (this.source().style()['shape'] == "square"
                        || this.source().style()['shape'] == "rectangle") {
                        return Number.MAX_SAFE_INTEGER;
                    }
                    //When the edge is targeting source
                    else if (this.target().style()['shape'] == "triangle") {
                        return Number.MAX_SAFE_INTEGER;
                    }
                    else {
                        return 1;
                    }
                },
                directed: true
            });

        //Find the path from super source '#start' to source of the edge
        var pathToEndFirst = shortestPathTreeFromSuperSource.pathTo(allEdges[i].source());

        //Set Dijkstra's algorithm for the allEdges[i].target()
        var shortestPathTreeFromEdgeTarget = cy.elements().dijkstra(
            {
                root: allEdges[i].target(),
                weight: function () {
                    if (this.source().style()['shape'] == "square"
                        || this.source().style()['shape'] == "rectangle") {
                        return Number.MAX_SAFE_INTEGER;
                    }
                    else if (this.target().style()['shape'] == "triangle") {
                        return Number.MAX_SAFE_INTEGER;
                    }
                    else {
                        return 1;
                    }
                },
                directed: true
            });

        //Find the path from the target red edge allEdges[i]'s target
        // to the super source of the graph ('#end')
        var pathToEndSecond = shortestPathTreeFromEdgeTarget.pathTo('#end');


        //highlight the nodes in path
        pathToEndFirst.style('background-color', '#809fff');
        pathToEndSecond.style('background-color', '#809fff');

        //highlight the edges in first part of the path
        for (var i = 1; i < pathToEndFirst.length; i = i + 2) {
            var edge = pathToEndFirst[i];

            //Blue edges as blue and red edges as red
            controlDirectedEdgeColor(edge);
        }

        //highlight the edges i second part of the path
        for (var i = 1; i < pathToEndSecond.length; i = i + 2) {
            var edge = pathToEndSecond[i];
            //Blue edges as blue and red edges as red
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
            if (undoStack.length == 0) {
                //recolor the button to indicate an item
                $("#undo").addClass('disabled');
            }
        }

        //updates the score accordingly
        updateScore();

    });

    $("#redo").click(function (e) {

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
            if (redoStack.length == 0) {
                //recolor the button to indicate an item
                $("#redo").addClass('disabled');
            }
        }

        //update the score accordingly
        updateScore();
    });

    //set onclick for save Button
    $("#save").click(function (e) {
        hasConfirmedExit = true;

        if (isLeader) {

            saveGraph(graph_id, username, currentScore);

        } else {

            //go to the graph listing page
            window.location.href = "/games/";
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
        if (newScore > currentScore) {
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
                .animate({backgroundColor: "transparent"}, "slow", null, function () {
                    jQuery(this).css("backgroundColor", "transparent");
                });
        }
        //else if it's lower, show the decrease animation
        else if (newScore < currentScore) {
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
                .animate({backgroundColor: "transparent"}, "slow", null, function () {
                    jQuery(this).css("backgroundColor", "transparent");
                });
        }
        //else it's the same: no animation

        currentScore = newScore;
        $("#score").text(currentScore);

    }

    //Compare function
    //Return true if changing the position of target edge can increase the score
    //edge is not correctAngle()
    function isGoodHint(edge) {
        //currentScore variable
        var origScore = currentScore;
        var source = edge.source();
        var target = edge.target();

        //Initially targetY > sourceY
        var sourceY = source.position('y');
        var targetY = target.position('y');

        var sourceX = source.position('x');
        var targetX = target.position('x');

        // try moving the source node to barely above the target node
        // and then compute the score
        var possiblePositionSource = {"x": sourceX, "y": targetY - 1};
        source.position(possiblePositionSource, true);

        //New score when changing source node
        var sourceScore = countDownwardPointingPathsFromTriangles();

        //Render source node back to original position
        var possiblePositionSource = {"x": sourceX, "y": sourceY};
        source.position(possiblePositionSource, true);

        // try moving the target node to barely below the source node
        // and then compute the score
        var possiblePositionTarget = {"x": targetX, "y": sourceY + 1};
        target.position(possiblePositionTarget, true);

        //New score when changing target node
        var targetScore = countDownwardPointingPathsFromTriangles();

        //Render target node back to original position
        var newPossiblePositionTarget = {"x": targetX, "y": targetY};
        target.position(newPossiblePositionTarget, true);

        if (sourceScore > targetScore) {
            // will return true if sourceScore > origScore, otherwise false
            if (sourceScore > origScore) {
                return true;
            }
        }
        if (targetScore > origScore) {
            return true;
        }
        return false;
    }

});
