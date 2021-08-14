/**
* Created by leelisle on 10/25/17.
*/
var lay = layout['positions_json'];

$(document).ready(function(){
    console.log("Starting graphpage");
    graphPage.init();
    var cy = graphPage.cyGraph;
    // storage variables for score
    var initialScore = 0;
    var currentScore = 0;
    var isLeader = false;

    // check to see if the username has been defined
    if (username == "None") username = "Anonymous";

    graphPage.cyGraph.ready(function(){
        graphPage.applyLayout({
           name:'preset',
           positions: lay
        });

        // Re-sending undo/redo initialization to avoid the system from remembering setting the layout as a change
        graphPage.layoutEditor.init();

        // Commented out due to odd behavior of spacing graph out too much.  Moved to be its own button so users have more control
        //moveSquaresAndTriangles();
        setEdgeColoration();
        buildStartAndEndNodes();
        updateScore();

        // This listener handles clicking on a node
        cy.on('grab', 'node', function(evt) {
			//capture node
			var node = evt.cyTarget;

			cy.nodes().style('text-opacity', '0');

			//grey out all edges except those in contact with the selected node
			highlightSelectedNodeAndEdges(node);
		});

        //This listener handles releasing a node
        cy.on('free', 'node', function(evt) {
            // update the user's score
            updateScore();

            //recolor all of the nodes
            setEdgeColoration();
            cy.nodes().style('text-opacity', '1');

        });
    });

    $('#undoBtnClone').click(function(){
        $('#undoBtn').click();
    });

    $('#redoBtnClone').click(function(){
        $('#redoBtn').click();
    });

    $('#downwardPathsBtn').click(function() {
        console.log('hiding undirected paths');
        hideUndirectedEdges();
    });

    $('#exitLayoutBtnFlud').click(function() {
        showUndirectedEdges();
    });

    $('#setSuperNodes').click(function() {
        moveSquaresAndTriangles();
    });

     $("#hint").click(function(e) {
//grab all directed edges
            var allEdges = cy.edges();
            var originalScore = countDownwardPointingPaths();
            for (var i = 0; i < allEdges.length; i++)
            {
                //If the edge is red edges under flud operation
                if (!allEdges[i].hidden() && !isCorrectAngle(allEdges[i]))
                {
                    //We do not want to consider edges that point upward and end in
                    //  a triangle or start at a square, since they cannot be moved
                    //Therefore, we ignore those edges

                    //When the node is from the source
                    if (allEdges[i].target().style()['shape'] == "triangle")
                    {
                        continue;
                    }
                    //When the node is targeting sink
                    else if (allEdges[i].source().style()['shape'] == "square"
                        || allEdges[i].source().style()['shape'] == "rectangle")
                    {
                        continue;
                    }
                    //When the source and target of the node are both circles
                    //This edge may be suitable candidate for a hint
                    //Note that commit e69c3da ensures that we cannot have an upward edge from a triangle
                    // to a circle or from a circle to a square/rectangle
                    else
                    {
                        //Check removing allEdges[i] will increase the number of downward paths or not
                        if (isGoodHint(allEdges[i], originalScore))
                        {
                            break;
                        }
                    }
                }
                //When there is no isGoodHint(allEdges[i])
                if (i == allEdges.length - 1)
                {
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
                     weight: function()
                     {
                        //When the edge is from sink
                        if(this.source().style()['shape'] == "square"
                            || this.source().style()['shape'] == "rectangle")
                        {
                            return Number.MAX_SAFE_INTEGER;
                        }
                        //When the edge is targeting source
                        else if (this.target().style()['shape'] == "triangle")
                        {
                            return Number.MAX_SAFE_INTEGER;
                        }
                        else
                        {
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
                    weight: function()
                     {
                        if(this.source().style()['shape'] == "square"
                            || this.source().style()['shape'] == "rectangle")
                        {
                            return Number.MAX_SAFE_INTEGER;
                        }
                        else if (this.target().style()['shape'] == "triangle")
                        {
                            return Number.MAX_SAFE_INTEGER;
                        }
                        else
                        {
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
            for(var i = 1; i < pathToEndFirst.length; i = i + 2) {
                var edge = pathToEndFirst[i];
                //Blue edges as blue and red edges as red
                controlDirectedEdgeColor(edge);
            }

            //highlight the edges i second part of the path
            for(var i = 1; i < pathToEndSecond.length; i = i + 2) {
                var edge = pathToEndSecond[i];
                //Blue edges as blue and red edges as red
                controlDirectedEdgeColor(edge);
            }

     });

     function moveSquaresAndTriangles() {
        //updated to handle new GraphSpace API
        var triangleNodes = [];
        var squareNodes = [];
        allElements = cy.nodes();
        for(var i = 0; i < allElements.length; i++) {
            if(allElements[i].style()['shape'] == "triangle") {
                triangleNodes.push(allElements[i]);
            } else if(allElements[i].style()['shape'] == "square" || allElements[i].style()['shape'] == "rectangle") {
                squareNodes.push(allElements[i]);
            }
        }

        var edgesToHide = [];
        //hide unchangeable edges
        for(var i = 0; i < triangleNodes.length; i++) {
          triangleNode = triangleNodes[i];
          //hide edges that cannot be changed
            var hiddenEdges = triangleNode.outgoers("edge");
            for(var pos = 0; pos < hiddenEdges.length; pos++) {
                var target = hiddenEdges[pos].target();
                var shape = String(target.style().shape).replace(/\s/g,'');
                if (shape == 'triangle' || shape == 'rectangle' || shape == 'square') {
                    //hiddenEdges[pos].style('visibility', 'hidden');
                    edgesToHide.push(hiddenEdges[pos]);
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
                    //hiddenEdges[pos].style('visibility', 'hidden');
                    edgesToHide.push(hiddenEdges[pos]);
                }
            }
        }
        // Instead of hiding the unchangeable edges, remove them so the degree of each node is correct
        for(var i = 0; i < edgesToHide.length; i++) {
            cy.remove(edgesToHide[i]);
        }


        // if there are any nodes that now have no edges, remove those nodes
        var nodesToRemove = [];
        var nodes = cy.nodes();
        for(var i = 0; i < nodes.length; i++) {
            if(nodes[i].totalDegree(true) == 0) {
                nodesToRemove.push(nodes[i]);
            }
        }
        // now remove those nodes
        for(var i = 0; i < nodesToRemove.length; i++) {
            cy.remove(nodesToRemove[i]);
        }

        //reinitialize the array of triangles and squares
        var triangleNodes = [];
        var squareNodes = [];
        allElements = cy.nodes();
        for(var i = 0; i < allElements.length; i++) {
            if(allElements[i].style()['shape'] == "triangle") {
                triangleNodes.push(allElements[i]);
            } else if(allElements[i].style()['shape'] == "square" || allElements[i].style()['shape'] == "rectangle") {
                squareNodes.push(allElements[i]);
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

         //variables to help split location of items on canvas
      BoundingBox = {
        top: triangleNode.position('y'),
        bottom: squareNode.position('y')
      };

      BorderCounts = {
        triangleCount: triangleNodes.length,
        squareCount: squareNodes.length
      };

      // ensures that each circle is below the triangles and above the squares by
      // assigning a new random y value if it was not originally
      for(var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var style = node.style();
        if (style.shape == 'triangle' || style.shape == 'rectangle' || style.shape == 'square') {
            continue;
        }

        // if this node is above the triangles or below the squares, then move it to another random spot
        // for now, use a extra padding of 80 to make sure the circle is not
        // on top of or right next to the triangles or squares
        if(node.position('y') < BoundingBox.top + 80 || node.position('y') > BoundingBox.bottom - 80) {
            var randomY = getRandomInt(BoundingBox.top + 80, BoundingBox.bottom - 80);
            node.position('y', randomY);
        }
      }
    }

    // simple function to get a random integer between two given random numbers
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    function setEdgeColoration() {
         console.log("Coloring edges...");
          //grab all directed edges
          var edges = cy.edges("[directed='true']");

          //step through all edges
          for(var i = 0; i < edges.length; i++) {
                //grab the edge, and subsequently its data
                var edge = edges[i];
                controlDirectedEdgeColor(edge);
          }
    }

    ////////// Coloration ///////////////////

    //controls coloration of directed edges
    function controlDirectedEdgeColor(edge) {

          var source_shape = String(edge.source().style().shape).replace(/\s/g,'');
          var target_shape = String(edge.target().style().shape).replace(/\s/g,'');
          //if the angle is below horizontal it is considered an downward slope
          //update, only make the arrow red if it can be changed to be blue
          //square->node and node->triangle edges are upward pointing and cannot be changed to be blue
          if(isCorrectAngle(edge) || source_shape == 'rectangle' || source_shape == 'square' || target_shape == 'triangle') {
            edge.style('line-color', 'blue');
            edge.style('target-arrow-color', 'blue');
              edge.style('width', '1');
          } else {
            edge.style('line-color', 'red');
            edge.style('target-arrow-color', 'red');
              edge.style('width', '5');
          }

          //render arrow
          edge.style('target-arrow-shape', 'triangle');

    }

    function isCorrectAngle(edge) {

          //check angle between the source and target node

            var source = edge.source();
            var target = edge.target();

            // if this is an undirected edge, the angle is always correct
            if (edge.style()['target-arrow-shape'] != 'triangle'){
                return true;
            }

            var y = source.position('y') - target.position('y');

            //if the angle is below the x-axis it is considered to have a correct slope
            if(y < 0) {
                return true;
            }

            return false;
    }

    function hideUndirectedEdges() {
         var edge_container = cy.edges();

         // Goes through edges and sets the visibility to hidden if it's an undirected edge
         for (var i = 0; i < edge_container.size(); i++) {
             var temp = edge_container[i]['_private'];
             if (temp['data']['directed'] == 'false') {
                edge_container[i].style('visibility', 'hidden');
             }
        }
    }

    // refactor comment - could combine with the above method
    function showUndirectedEdges() {
         var edge_container = cy.edges();

         // Goes through edges and sets the visibility to shown if it's an undirected edge
         for (var i = 0; i < edge_container.size(); i++) {
             var temp = edge_container[i]['_private'];
             if (temp['data']['directed'] == 'false') {
                edge_container[i].style('visibility', 'visible');
             }
         }
     }

    function buildStartAndEndNodes() {
         //create a node that connects to all triangles
         //create a node that connects to all rectangles
         cy.add([
          { group: "nodes", data: { id: "start" }, position: { x: 0, y: 0 } },
          { group: "nodes", data: { id: "end" }, position: { x: 0, y: 0 } }
         ]);

         //hide the nodes
        cy.$("#start").style('visibility', 'hidden');
        cy.$("#end").style('visibility', 'hidden');

        //add edges to the start and end nodes
        //updated to handle new GraphSpace API
        var triangleNodes = [];
        var squareNodes = [];
        var allElements = cy.nodes();
        for(var i = 0; i < allElements.length; i++) {
            if(allElements[i].style()['shape'] == "triangle") {
                triangleNodes.push(allElements[i]);
            } else if(allElements[i].style()['shape'] == "square" || allElements[i].style()['shape'] == "rectangle") {
                squareNodes.push(allElements[i]);
            }
        }

        var count = 0;

        //run through all triangle nodes
        for(var i = 0; i < triangleNodes.length; i++) {
            var triangleNode = triangleNodes[i];

            cy.add(
                { group: "edges", data: { id: "startEdge" + count, source: "start", target: triangleNode.id() } }
            );

            count = count + 1;
        }

        count = 0;

        //run through all rectangle nodes
        for(var i = 0; i < squareNodes.length; i++) {
            var squareNode = squareNodes[i];

            cy.add(
                { group: "edges", data: { id: "endEdge" + count, source: squareNode.id(), target: "end" } }
            );

            count = count + 1;
        }
    }

    //highlights the selected node and the edges connected to it
    function highlightSelectedNodeAndEdges(node) {
        //set this node on top of all nodes
        node.style('z-index', '10');

        //color the edges from the selected node
        colorEdgeFromDirection(node);
    }

    // greys out graph for various reasons
    // Currently not used, due to the necessity of remembering edge/node color.
    // Could be updated to store this data temporarily and restore color correctly.
    function greyOutGraph() {
        cy.edges().style('line-color', '#dadee5');
        cy.edges().style('target-arrow-color', '#dadee5');
        cy.edges().style('width', '1');
        cy.nodes().style('background-color', '#dadee5');
        cy.nodes().style('text-opacity', '0');
    }

    //checks edges and determines color from said edges
    function colorEdgeFromDirection(node) {
        var connectedEdgesSource = node.outgoers("edge");
        var connectedEdgesTarget = node.incomers("edge");

        for(var i = 0; i < connectedEdgesSource.length; i++) {
            //grab the edge, and subsequently its data
            var edge = connectedEdgesSource[i];
            edgeData = edge.data();

            //is this a directed graph?
            if(edgeData.directed == 'true') {
                controlDirectedEdgeColor(edge);
            }
            else {
                edge.style('line-color', '#809fff');
            }
        }

        for(var i = 0; i < connectedEdgesTarget.length; i++) {
            //grab the edge, and subsequently its data
            var edge = connectedEdgesTarget[i];
            edgeData = edge.data();

            //is this a directed graph?
            if(edgeData.directed == 'true') {
                controlDirectedEdgeColor(edge);
            }
            else {
                edge.style('line-color', '#809fff');
            }
        }
    }

    //updates the score
    // updated (pun intended) to not include thumbs up/down animation
    // red/green score highlight still included
    function updateScore() {
        //compare the new score to the current score
        var newScore = countDownwardPointingPaths();

        //place the status div in a random location
        var randomX = Math.floor((Math.random() * 60) + 1);
        var randomY = Math.floor((Math.random() * 60) + 1);

        //set the new location of the status div
        $("#status").css({"top": randomY + "%", "right": randomX + "%"});

        //if it's higher, show the score increase animation
        if(newScore > currentScore) {
            $("#score")
            .css("backgroundColor", "green")
            .animate({backgroundColor: "transparent"}, "slow", null, function() {
                jQuery(this).css("backgroundColor", "transparent");
            });
        }
        //else if it's lower, show the decrease animation
        else if(newScore < currentScore) {
            $("#score")
            .css("backgroundColor", "red")
            .animate({backgroundColor: "transparent"}, "slow", null, function() {
                jQuery(this).css("backgroundColor", "transparent");
                });
        }

        currentScore = newScore;
        $("#score").text('Score: ' + currentScore);
    }

    //counts the number of completed downward pointing paths from top to bottom
    function countDownwardPointingPathsFromTriangles() {
        //updated to handle new GraphSpace API
        var triangleNodes = [];
        var allElements = cy.nodes();
        for(var i = 0; i < allElements.length; i++) {
            if(allElements[i].style()['shape'] == "triangle") {
                triangleNodes.push(allElements[i]);
            }
        }

        var count = 0;

        //run through all triangle nodes
        for(var i = 0; i < triangleNodes.length; i++) {
            var triangleNode = triangleNodes[i];
            count = count + countDownwardPointingPaths(triangleNode);
        }

        return count;
    }

    //returns count of completed directed paths
    //(ie paths that go from the current node to the bottom)
    function countDownwardPointingPaths(node) {
        nodeData = node.data();
        nodeStyle = node.style();

        //we are at the bottom already! Return 1
        if(nodeStyle.shape== 'rectangle' || nodeStyle.shape == 'square') {
            return 1;
        }

        var connectedEdgesSource = cy.edges("[source='" + nodeData.id+ "']");
        var count = 0;
        for(var i = 0; i < connectedEdgesSource.length; i++) {

            if(isCorrectAngle(connectedEdgesSource[i])) {
                var target = connectedEdgesSource[i].target();
                count = count + countDownwardPointingPaths(target);
            }
        }

        return count;
    }

    $('#fludSaveOnExitLayoutBtn').click(function () {
        graphPage.cyGraph.contextMenus('get').destroy(); // Destroys the cytocscape context menu extension instance.

        cytoscapeGraph.showGraphInformation(graphPage.cyGraph);
        // display node data as a popup - Don't on Flud
        // graphPage.cyGraph.unbind('tap').on('tap', graphPage.onTapGraphElement);

        saveGraph();

        $('#saveOnExitLayoutModal').modal('toggle');
    });

    $('#fludSaveLayoutBtn').click(function () {

        cytoscapeGraph.showGraphInformation(graphPage.cyGraph);

        saveGraph();

        $('#saveLayoutModal').modal('toggle');
    });

    $('#fludDefaultSaveBtn').click(function () {

        cytoscapeGraph.showGraphInformation(graphPage.cyGraph);

        saveGraph();
    });

    ///////////////// Save Graph //////////////////////////////////////////////////
    // outputs the json of the graph layout when the save button is pressed
    function saveGraph() {
        //Json Objects and elements in this object
        var jsonObject = [];
        var element;

        //delete the start and end node
        var start = cy.$("#start");
        var end = cy.$("#end");
        cy.remove(start);
        cy.remove(end);

        //gather all node data
        nodes = cy.nodes();

        //gather id, x and y
        for(var i = 0; i < nodes.length; i++) {
            element = {
                'id' : nodes[i].id(),
                'x'  : nodes[i].position('x'),
                'y'  : nodes[i].position('y'),
            };

            jsonObject.push(element);
        }

        //save image data
        var png64 = cy.png();

        var data =  {
            'top_scorer': username,
            'score': currentScore,
            'json': jsonObject,
            'image': png64
        }

        //get the csrftoken
        var csrftoken = getCookie('csrftoken');



        apis.fludUpdate.update(graph_id, data,
            successCallback = function (response) {
                hasConfirmedExit = true;

                //go to the graph listing page
                //window.location.href = "/game/selection/";
            },
            errorCallback = function (xhr, status, errorThrown) {
                //alert("I'm sorry, an error occurred. Please try again.");
                console.log("xhr:");
                console.log(xhr);
                console.log("status:");
                console.log(status);
                console.log("error thrown:");
                console.log(errorThrown);
        });
    }

    //CountDownwardPointingPaths---------------------------------------------------------------------

    // Originally added to Flud by Jeff Law
    //Memoization hashmap storage
    //Global variable for memoization countDownwardPointPaths
    //Keep track of number of paths when the node is already visited
    // to make linear time algorithm
    //
    //memo = {} will store node id as the key, and the number of downward path starting at the node as
    // the value
    //For example, for graph where a is a source and e is a sink:
    //          a
    //        /   \
    //      b     c
    //      |    /
    //        d
    //        |
    //        e
    // memo = {
    //          a:2,
    //          b:1,
    //          c:1,
    //          d:1,
    //          e:1
    //        }
    var memo = {};


    //New method of counting number of downward path using memoization
    //Calling the recursive function only if the edge is correct angle
    function countDownwardPointingPaths() {
            //Reset the memoization
            //When position of node changed, the memoization changes accordingly
            memo = {};
            //Start from super source
            var start = cy.$('#start');
            var numberOfDownwardPath = countDownwardPointingPathWithMemoization(start);
            //When it reaches to the super sink
            //Return 1
            return numberOfDownwardPath;

    }

    //Recursive helper function for countDownwardPointingpaths()
    //Used memoization hashmap memo to make linear time algorithm
    //Check if the node is already in memo and if the node already called recursive before, it returns the value,
    // check whether the source node is sink or source and return 1 if the condition is true,
    // and if the node is neither visited nor source/target, it recursively calls the outgoing neighbors.
    //After calling the neighbors recursively, store the number of downward path from the node into memo
    function countDownwardPointingPathWithMemoization(node)
    {
        var id = node.data().id;

        //Check if the node is already visited
        //If the node is already visited, return the number of path in memoization hashmap
        if (memo[id] != null)
        {
            return memo[id];
        }

        //When the node reaches to the sink node/end at the bottom of the graph
        if (node.style()['shape'] == "square" || node.style()['shape'] == "rectangle")
        {
            //Store the path in memoization hashmap
            memo[id] = 1;
            //Return the count
            return 1;
        }

        //Collect all the nodes and edges adjacent to the node
        var targets = node.outgoers();
        var count = 0;
        //Only Checking nodes
        //targets: (edge), (node), (edge), (node)...
        for (var i = 1; i < targets.length; i = i + 2)
        {
            //if edge connecting two node is correct angle
            if (id == "start" || node.position('y') < targets[i].position('y'))
            {
                //Recursively call the number of path
                count = count + countDownwardPointingPathWithMemoization(targets[i]);
            }
        }
        //Store in memoization hashmap
        memo[id] = count;
        return count;
    }

    	//Compare function
	//Return true if changing the position of target edge can increase the score
	//edge is not correctAngle()
	function isGoodHint(edge, origScore) {

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
       var sourceScore = countDownwardPointingPaths();
       console.log("sourceScore is " + sourceScore);

       //Render source node back to original position
       var possiblePositionSource = {"x": sourceX, "y": sourceY};
       source.position(possiblePositionSource, true);

       // try moving the target node to barely below the source node
       // and then compute the score
       var possiblePositionTarget = {"x": targetX, "y": sourceY + 1};
       target.position(possiblePositionTarget, true);

       //New score when changing target node
       var targetScore = countDownwardPointingPaths();
       console.log("targetScoe is " + targetScore);

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