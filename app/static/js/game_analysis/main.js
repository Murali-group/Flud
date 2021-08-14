var steps;
var actions;
var analysisPage = {
  init: function ( game_id ) {
    apis.tasks.get_game_tasks( game_id,
      successCallback = function ( response ) {
        var worker_idx = 0;
        var step_idx = 0;
        steps = _.flatMap( _.map( response.tasks, function ( task ) {
          var step_id = 0;
          worker_idx += 1;
          var steps_json = JSON.parse( JSON.parse( task.steps_json ) );
          return _.map( steps_json, function ( step ) {
            step_idx += 1;
            step_id += 1;
            step = _.extend( step, step.scores )
            step = _.extend( step, {
              'step_id': step_id,
              'step_idx': step_idx,
              'worker_idx': worker_idx,
              'task_id': task.id,
              'game_id': task.game_id
            } )
            delete step.scores
            delete step.positions_json
            return step
          } );
        } ) );

        // var worker_idx = 0;
        // var action_idx = 0;
        // var actions = _.flatMap( _.map( response.tasks, function ( task ) {
        //   var action_id = 0;
        //   worker_idx += 1;
        //   var action_list = JSON.parse( JSON.parse( task.actions ) );
        //   return _.map( action_list, function ( action ) {
        //     action_idx += 1;
        //     action_id += 1;
        //     action = _.extend( action, {
        //       'action_id': action_id,
        //       'action_idx': action_idx,
        //       'worker_idx': worker_idx,
        //       'task_id': task.id,
        //       'game_id': task.game_id
        //     } )
        //     return action
        //   } );
        // } ) );
        console.log( response.tasks );
        console.log( steps );
        // console.log( actions );
        plot.init( '#chartTotalScore', 'totalscore', steps );
        plot.init( '#chartDPP', 'dpp', steps );
        plot.init( '#chartEC', 'edgecrossings', steps );
        plot.init( '#chartEL', 'edgelength', steps );
        plot.init( '#chartND', 'nodedistribution', steps );
        plot.init( '#chartNED', 'nodeedgedistance', steps );
        // plot.dppInit( steps );
      },
      errorCallback = function ( xhr, status, errorThrown ) {
        console.log( status );
        console.log( errorThrown );
      } );
  }
}

var plot = {
  initMultiPlot: function ( data ) {
    var w = 1100,
      h = 450;

  },
  initSinglePlot: function ( options ) {
    this.xScale = d3.scale.linear().range( [ 0, this.width - margin * 2 ] ).domain( [ 1, this.maxX ] );
    this.yScale = d3.scale.linear().range( [ this.height - margin * 2, 0 ] ).domain( [ this.minY, this.maxY ] );

    var x = this.xScale;
    var y = this.yScale;

    // var xAxis = d3.svg.axis().scale( x ).tickSize( this.height - margin * 2 ).tickPadding( 10 ).ticks( 7 );
    // var yAxis = d3.svg.axis().scale( y ).orient( 'left' ).tickSize( -this.width + margin * 2 ).tickPadding( 10 );

    this.area = d3.svg.area()
      .interpolate( "linear" )
      .x( function ( d ) {
        return x( d.step_idx );
      } )
      .y0( this.height - margin * 2 )
      .y1( function ( d ) {
        return y( d.totalscore );
      } );
  },
  init: function ( domID, yAttr, data ) {
    var w = 1500,
      h = 300;

    var maxDataPointsForDots = 10,
      transitionDuration = 1000;

    var svg = null,
      yAxisGroup = null,
      xAxisGroup = null,
      dataCirclesGroup = null,
      dataLinesGroup = null;


    var margin = 80;
    var maxY = d3.max( data, function ( d ) {
      return d[ yAttr ]
    } );
    var minY = d3.min( data, function ( d ) {
      return d[ yAttr ]
    } );
    var maxX = d3.max( data, function ( d ) {
      return d.step_idx
    } );

    var min = 0;
    var pointRadius = 5;
    var x = d3.scale.linear().range( [ 0, w - margin * 2 ] ).domain( [ 1, maxX ] );
    var y = d3.scale.linear().range( [ h - margin * 2, 0 ] ).domain( [ minY, maxY ] );

    var xAxis = d3.svg.axis().scale( x ).tickSize( h - margin * 2 ).tickPadding( 10 ).ticks( 7 );
    var yAxis = d3.svg.axis().scale( y ).orient( 'left' ).tickSize( -w + margin * 2 ).tickPadding( 10 );
    var t = null;

    svg = d3.select( domID ).select( 'svg' ).select( 'g' );
    if ( svg.empty() ) {
      svg = d3.select( domID )
        .append( 'svg:svg' )
        .attr( 'width', w )
        .attr( 'height', h - margin )
        .attr( 'class', 'viz' )
        .append( 'svg:g' )
        .attr( 'transform', 'translate(' + margin + ',' + 10 + ')' );
    }

    // y ticks and labels
    if ( !yAxisGroup ) {
      yAxisGroup = svg.append( 'svg:g' )
        .attr( 'class', 'yTick' )
        .call( yAxis );
    } else {
      t.select( '.yTick' ).call( yAxis );
    }

    // x ticks and labels
    if ( !xAxisGroup ) {
      xAxisGroup = svg.append( 'svg:g' )
        .attr( 'class', 'xTick' )
        .call( xAxis );
    } else {
      t.select( '.xTick' ).call( xAxis );
    }

    // Draw the lines
    if ( !dataLinesGroup ) {
      dataLinesGroup = svg.append( 'svg:g' );
    }

    var dataLines = dataLinesGroup.selectAll( '.data-line' )
      .data( [ data ] );

    var line = d3.svg.line()
      .x( function ( d, i ) {
        return x( d.step_idx );
      } )
      .y( function ( d ) {
        return y( d[ yAttr ] );
      } )
      .interpolate( "linear" );

    var garea = d3.svg.area()
      .interpolate( "linear" )
      .x( function ( d ) {
        return x( d.step_idx );
      } )
      .y0( h - margin * 2 )
      .y1( function ( d ) {
        return y( d[ yAttr ] );
      } );

    dataLines
      .enter()
      .append( 'svg:path' )
      .attr( "class", "area" )
      .attr( "d", garea( data ) );

    // dataLines.enter().append( 'path' )
    //   .attr( 'class', 'data-line' )
    //   .style( 'opacity', 0.3 )
    //   .attr( "d", line( data ) );

    // Draw the points
    if ( !dataCirclesGroup ) {
      dataCirclesGroup = svg.append( 'svg:g' );
    }

    var circles = dataCirclesGroup.selectAll( '.data-point' )
      .data( _.filter( data, {
        'step_id': 1
      } ) );

    circles
      .enter()
      .append( 'svg:circle' )
      .attr( 'class', 'data-point' )
      .attr( 'r', function () {
        return ( data.length <= 100000 ) ? pointRadius : 0
      } )
      .style( 'opacity', 1 )
      .attr( 'cx', function ( d ) {
        return x( d.step_idx )
      } )
      .attr( 'cy', function ( d ) {
        return y( d[ yAttr ] )
      } );


    $( 'svg circle' ).tipsy( {
      gravity: 's',
      html: true,
      title: function () {
        var d = this.__data__;
        return 'Score: ' + d[ yAttr ] + "<br>" + 'Worker: ' + d.worker_idx;
      }
    } );
  },

}