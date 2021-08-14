/////////////////////////////////////////////////////////////////////
//  view_graph_game_organization.js
//  organizes the game for initial playthrough
//  colors nodes according to their positioning

//additional gamification functions

/*
 Table of Contents:
 Global variables         - Definitions used to restrict regions of movememt of certain nodes
 BoundingBox            - Defines the region of which the nodes can move
 BorderCounts           - Defines the number of triangles and squares line the borders (used for movement)
 Multi-use functions      - used throughout game calculation
 Correct Angle                - Determines if the edge is pointing downwards
 Coloration			       - Changes colors of edges and nodes
 Event-Driven functions   - used when a game event occurs
 Control Node Movement  - used to determine how a triangle and square moves v a circle
 Edge Coloration        - used to change edge color when moving a node
 Node/Edge Highlight    - used to highlight selected endges and nodes when clicked
 Count Paths            - used to count all downward pointing paths from top to bottom
 Save Graph			       - used when the save button is pressed
 Initialization functions - used during initial graph/game rendering
 Build Start/End Nodes  - creates an invisible start and end node for pathfinding
 Initial Coloration     - colors the nodes/edges based off of the flud style set
 Move Squares/Triangles - Moves the nodes to their required starting locations
 Display numbers        - Displays the number of edges coming from each node
 */

////////////////////////////////////////////////////////////////////////////////
// Global Variables

//defines the region of whicn nodes can move
//contains the width and the height of the boundary
// see initialization function for more details
/*
 example:
 BoundingBox = {
 top: triangleNode.position('y'),
 bottom: squareNode.position('y')
 };
 */
var BoundingBox;
//defines the number of triangles and squares that line the border
//see initialization function for more details
/*
 example:
 BorderCounts = {
 triangleCount: triangleNodes.length,
 squareCount: squareNodes.length
 }
 */
var BorderCounts;

////////////////////////////////////////////////////////////////////////////////
// Multi-use functions

//determines edge angle for correct slope
function isCorrectAngle(edge) {

    //check angle between the source and target node

    var source = edge.source();
    var target = edge.target();

    // if this is an undirected edge, the angle is always correct
    if (edge.style()['target-arrow-shape'] != 'triangle') {
        return true;
    }

    //use tan to find directed angle
    // var x = cy.$('#' + source).position('x') - cy.$('#' + target).position('x');
    // var y = cy.$('#' + source).position('y') - cy.$('#' + target).position('y');
    var x = source.position('x') - target.position('x');
    var y = source.position('y') - target.position('y');

    //if the angle is below the x-axis it is considered to have a correct slope
    if (y < 0) {
        return true;
    }

    return false;
}

//returns count of completed directed paths
//(ie paths that go from the current node to the bottom)
function countDownwardPointingPaths(node) {

    nodeData = node.data();
    nodeStyle = node.style();

    //we are at the bottom already! Return 1
    if (nodeStyle.shape == 'rectangle' || nodeStyle.shape == 'square') {
        return 1;
    }

    var connectedEdgesSource = cy.edges("[source='" + nodeData.id + "']");
    var count = 0;

    for (var i = 0; i < connectedEdgesSource.length; i++) {

        if (isCorrectAngle(connectedEdgesSource[i])) {
            var target = connectedEdgesSource[i].target();

            count = count + countDownwardPointingPaths(target);
        }
    }

    return count;

}

////////// Coloration ///////////////////

//controls coloration of directed edges
function controlDirectedEdgeColor(edge) {

    var source_shape = String(edge.source().style().shape).replace(/\s/g, '');
    var target_shape = String(edge.target().style().shape).replace(/\s/g, '');
    //if the angle is below horizontal it is considered an downward slope
    //update, only make the arrow red if it can be changed to be blue
    //square->node and node->triangle edges are upward pointing and cannot be changed to be blue
    if (isCorrectAngle(edge) || source_shape == 'rectangle' || source_shape == 'square' || target_shape == 'triangle') {
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

function greyOutGraph() {

    cy.edges().style('line-color', '#dadee5');
    cy.edges().style('target-arrow-color', '#dadee5');
    cy.edges().style('width', '1');
    cy.nodes().style('background-color', '#dadee5');
    cy.nodes().style('text-opacity', '0');
}

///////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Event-Driven Functions

//controls movement abilities of each selected node.
//Squares and triangles may only be moved side to side
//while a normal node can only move between the triangle and square nodes.
function controlNodeMovementByType(node) {
    //first, gather information on what type of node we are dealing with
    style = node.style();

    //if we are a triangle or square, restrict item to switch with its adjacent nodes on the current canvas
    //triangles stay on top
    //squares stay on bottom
    if (style.shape == "triangle") {
        node.position('y', BoundingBox.top);

    } else if (style.shape == "square") {
        node.position('y', BoundingBox.bottom);
    }
    //a 'normal' node then has the freedom to stay in between the y boundary defined by these two. It is free to move
    //anywhere on the x axis.
    else {

        //if we have exceeded the y boundary, put it on the border
        if (node.position('y') > BoundingBox.bottom) {

            node.position('y', BoundingBox.bottom);

        } else if (node.position('y') < BoundingBox.top) {

            node.position('y', BoundingBox.top);

        }

    }


}

//checks edges and determines color from said edges
function colorEdgeFromDirection(node) {

    var connectedEdgesSource = node.outgoers("edge");
    var connectedEdgesTarget = node.incomers("edge");

    for (var i = 0; i < connectedEdgesSource.length; i++) {

        //grab the edge, and subsequently its data
        var edge = connectedEdgesSource[i];
        edgeData = edge.data();

        //is this a directed graph?
        if (edgeData.directed == 'true') {
            controlDirectedEdgeColor(edge);
        }
        else {
            edge.style('line-color', '#809fff');
        }

    }

    for (var i = 0; i < connectedEdgesTarget.length; i++) {

        //grab the edge, and subsequently its data
        var edge = connectedEdgesTarget[i];
        edgeData = edge.data();

        //is this a directed graph?
        if (edgeData.directed == 'true') {
            controlDirectedEdgeColor(edge);
        }
        else {
            edge.style('line-color', '#809fff');
        }

    }
}

//highlights the selected node and the edges connected to it by greying out the rest of the graph
function highlightSelectedNodeAndEdges(node) {

    //grey out the entire graph
    greyOutGraph();

    //recolor the specific node
    node.style('background-color', '#809fff');

    //set this node on top of all nodes
    node.style('z-index', '10');

    //color the edges from the selected node
    colorEdgeFromDirection(node);
}

//recolors the graph after the selected node has been deselected
function recolorGraph() {
    initialNodeColoration();
    initialEdgeColoration();

    //let the numbers reappear
    cy.nodes().style('text-opacity', '1');
}

//counts the number of completed downward pointing paths from top to bottom
function countDownwardPointingPathsFromTriangles() {
    //gather all of the triangle nodes
    // var triangleNodes = cy.elements('node[shape = "triangle"]');

    //updated to handle new GraphSpace API
    var triangleNodes = [];
    allElements = cy.nodes();
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].style()['shape'] == "triangle") {
            triangleNodes.push(allElements[i]);
        }
    }


    var count = 0;

    //run through all triangle nodes
    for (var i = 0; i < triangleNodes.length; i++) {
        var triangleNode = triangleNodes[i];

        count = count + countDownwardPointingPaths(triangleNode);
    }

    return count;
}

///////////////// Save Graph //////////////////////////////////////////////////
// outputs the json of the graph layout when the save button is pressed
function saveGraph(graph_id, username, currentScore) {

    //Json Objects and elements in this object
    var jsonObject = {};

    //delete the start and end node
    var start = cy.$("#start");
    var end = cy.$("#end");
    cy.remove(start);
    cy.remove(end);

    //gather all node data
    nodes = cy.nodes();

    //gather id, x and y
    for (var i = 0; i < nodes.length; i++) {
        jsonObject[nodes[i].id()] = nodes[i].position();
    }

    //save image data
    var png64 = cy.png();

    var data = {
        'top_scorer': username,
        'score': currentScore,
        'json': jsonObject,
        'image': png64
    }

    //get the csrftoken
    var csrftoken = getCookie('csrftoken');

    apis.graphs.update(graph_id, data,
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

////////////////////////////////////////////////////////////////////////////////
// Initialization Functions

//builds the hidden start and end nodes, for dijstra's calculation
function buildStartAndEndNodes() {
    //create a node that connects to all triangles
    //create a node that connects to all rectangles
    cy.add([
        {group: "nodes", data: {id: "start"}, position: {x: 0, y: 0}},
        {group: "nodes", data: {id: "end"}, position: {x: 0, y: 0}}
    ]);

    //hide the nodes
    cy.$("#start").style('visibility', 'hidden');
    cy.$("#end").style('visibility', 'hidden');

    //add edges to the start and end nodes
    // var triangleNodes = cy.elements('node[shape = "triangle"]');
    // var rectangleNodes = cy.elements('node[shape = "rectangle"]');

    //updated to handle new GraphSpace API
    var triangleNodes = [];
    var squareNodes = [];
    var allElements = cy.nodes();
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].style()['shape'] == "triangle") {
            triangleNodes.push(allElements[i]);
        } else if (allElements[i].style()['shape'] == "square" || allElements[i].style()['shape'] == "rectangle") {
            squareNodes.push(allElements[i]);
        }
    }

    var count = 0;

    //run through all triangle nodes
    for (var i = 0; i < triangleNodes.length; i++) {
        var triangleNode = triangleNodes[i];

        cy.add(
            {group: "edges", data: {id: "startEdge" + count, source: "start", target: triangleNode.id()}}
        );

        count = count + 1;
    }

    count = 0;

    //run through all rectangle nodes
    for (var i = 0; i < squareNodes.length; i++) {
        var squareNode = squareNodes[i];

        cy.add(
            {group: "edges", data: {id: "endEdge" + count, source: squareNode.id(), target: "end"}}
        );

        count = count + 1;
    }
}

//color initial edges and nodes
//also sets initial z index
function initialNodeColoration() {

    cy.edges().style('line-color', '#809fff');
    cy.edges().style('line-style', 'solid');
    cy.nodes().style('background-color', '#809fff');
    cy.nodes().style('width', '50px');
    cy.nodes().style('height', '50px');
    cy.nodes().style('z-index', '1');
}

//color initial directed edges
function initialEdgeColoration() {
    //grab all directed edges
    var edges = cy.edges("[directed='true']");

    //step through all edges
    for (var i = 0; i < edges.length; i++) {
        //grab the edge, and subsequently its data
        var edge = edges[i];

        controlDirectedEdgeColor(edge);

    }
}

//moves triangles to top and squares to bottom
function moveSquaresAndTriangles() {

    //get all triangles
    // var triangleNodes = cy.nodes("[shape='triangle']");
    //
    // //get all squares
    // var squareNodes = cy.nodes("[shape='rectangle'], [shape='square']");

    //updated to handle new GraphSpace API
    var triangleNodes = [];
    var squareNodes = [];
    allElements = cy.nodes();
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].style()['shape'] == "triangle") {
            triangleNodes.push(allElements[i]);
        } else if (allElements[i].style()['shape'] == "square" || allElements[i].style()['shape'] == "rectangle") {
            squareNodes.push(allElements[i]);
        }
    }

    var edgesToHide = [];
    //hide unchangeable edges
    for (var i = 0; i < triangleNodes.length; i++) {
        triangleNode = triangleNodes[i];
        //hide edges that cannot be changed
        var hiddenEdges = triangleNode.outgoers("edge");
        for (var pos = 0; pos < hiddenEdges.length; pos++) {
            var target = hiddenEdges[pos].target();
            var shape = String(target.style().shape).replace(/\s/g, '');
            if (shape == 'triangle' || shape == 'rectangle' || shape == 'square') {
                //hiddenEdges[pos].style('visibility', 'hidden');
                edgesToHide.push(hiddenEdges[pos]);
            }
        }
    }

    for (var i = 0; i < squareNodes.length; i++) {
        squareNode = squareNodes[i];
        //hide edges that cannot be changed
        hiddenEdges = squareNode.outgoers("edge");
        for (var pos = 0; pos < hiddenEdges.length; pos++) {
            var target = hiddenEdges[pos].target();
            var shape = String(target.style().shape).replace(/\s/g, '');
            if (shape == 'triangle' || shape == 'rectangle' || shape == 'square') {
                //hiddenEdges[pos].style('visibility', 'hidden');
                edgesToHide.push(hiddenEdges[pos]);
            }
        }
    }

    console.log(cy.edges().length);
    // Instead of hiding the unchangeable edges, remove them so the degree of each node is correct
    for (var i = 0; i < edgesToHide.length; i++) {
        cy.remove(edgesToHide[i]);
    }



    // if there are any nodes that now have no edges, remove those nodes
    var nodesToRemove = [];
    var nodes = cy.nodes();
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].totalDegree(true) == 0) {
            nodesToRemove.push(nodes[i]);
        }
    }
    // now remove those nodes
    for (var i = 0; i < nodesToRemove.length; i++) {
        cy.remove(nodesToRemove[i]);
    }

    //reinitialize the array of triangles and squares
    var triangleNodes = [];
    var squareNodes = [];
    allElements = cy.nodes();
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].style()['shape'] == "triangle") {
            triangleNodes.push(allElements[i]);
        } else if (allElements[i].style()['shape'] == "square" || allElements[i].style()['shape'] == "rectangle") {
            squareNodes.push(allElements[i]);
        }
    }

    //gather the current canvas size
    var canvas = {
        x: cy.width(),
        y: cy.height()
    };

    //space the size past the initial 0
    var triangleCounterX = (canvas.x / triangleNodes.length) / 2;
    var squareCounterX = (canvas.x / squareNodes.length) / 2;

    for (var i = 0; i < triangleNodes.length; i++) {
        var triangleNode = triangleNodes[i];

        triangleNode.renderedPosition({
            x: triangleCounterX,
            y: 80
        });

        triangleNode.style('shape', 'triangle');

        triangleCounterX = triangleCounterX + canvas.x / triangleNodes.length;

    }

    for (var i = 0; i < squareNodes.length; i++) {
        var squareNode = squareNodes[i];

        squareNode.renderedPosition({
            x: squareCounterX,
            y: canvas.y - 30
        });

        squareNode.style('shape', 'square');

        squareCounterX = squareCounterX + canvas.x / squareNodes.length;
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
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var style = node.style();
        if (style.shape == 'triangle' || style.shape == 'rectangle' || style.shape == 'square') {
            continue;
        }

        // if this node is above the triangles or below the squares, then move it to another random spot
        // for now, use a extra padding of 80 to make sure the circle is not
        // on top of or right next to the triangles or squares
        if (node.position('y') < BoundingBox.top + 80 || node.position('y') > BoundingBox.bottom - 80) {
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

//calculates the number of edges for each node and displays on said node
function displayNumEdgesOnNodes() {

    //gather nodes
    var nodes = cy.nodes();

    for (var i = 0; i < nodes.length; i++) {

        var node = nodes[i];

        node.style('label', node.totalDegree(true));
        node.style('text-valign', 'center');
        node.style('text-outline-width', '0');

    }

}
