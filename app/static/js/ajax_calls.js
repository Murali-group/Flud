/**
 * Created by dgwiz on 2/21/2017.
 *  Ajax calls used to save and return information
 */
///////////////////////////////////////////////////////////////////////
// AJAX CALLS
var apis = {
  games: {
    ENDPOINT: _.template( '/ajax/games/<%= game_id %>/save/' ),
    update: function ( game_id, data, successCallback, errorCallback ) {
      apis.jsonRequest( 'PUT', apis.games.ENDPOINT( {
        'game_id': game_id
      } ), data, successCallback, errorCallback )
    }
  },
  score: {
    ENDPOINT: _.template( '/ajax/games/<%= game_id %>/score/' ),
    get: function ( game_id, successCallback, errorCallback ) {
      apis.jsonRequest( 'GET', apis.score.ENDPOINT( {
        'game_id': game_id
      } ), null, successCallback, errorCallback )
    }
  },
  finish: {
    ENDPOINT: _.template( '/ajax/games/<%= game_id %>/finish/' ),
    post: function ( game_id, data, successCallback, errorCallback ) {
      apis.jsonRequest( 'POST', apis.finish.ENDPOINT( {
        'game_id': game_id
      } ), data, successCallback, errorCallback )
    }
  },
  tasks: {
    ENDPOINT: '/ajax/tasks/',
    RESTAPI_ENDPOINT: _.template( '/api/v1/tasks/?game_id=<%= game_id %>' ),
    add: function ( data, successCallback, errorCallback ) {
      apis.jsonRequest( 'POST', apis.tasks.ENDPOINT, data, successCallback, errorCallback )
    },
    get_game_tasks: function ( game_id, successCallback, errorCallback ) {
      apis.jsonRequest( 'GET', apis.tasks.RESTAPI_ENDPOINT( {
        'game_id': game_id
      } ), null, successCallback, errorCallback )
    },
  },
  tutorials: {
    ENDPOINT: '/ajax/tutorials/',
    add: function ( data, successCallback, errorCallback ) {
      apis.jsonRequest( 'POST', apis.tutorials.ENDPOINT, data, successCallback, errorCallback )
    },
  },
  jsonRequest: function ( method, url, data, successCallback, errorCallback ) {
    $.ajax( {
      headers: {
        'Accept': 'application/json',
        'X-CSRFToken': getCookie( 'csrftoken' )
      },
      method: method,
      data: method == 'GET' ? data : JSON.stringify( data ),
      contentType: 'application/json',
      url: url,
      success: successCallback,
      error: errorCallback
    } );
  }
};

// get cookies, made to get the csrftoken.
function getCookie( name ) {
  var cookieValue = null;
  if ( document.cookie && document.cookie !== '' ) {
    var cookies = document.cookie.split( ';' );
    for ( var i = 0; i < cookies.length; i++ ) {
      var cookie = jQuery.trim( cookies[ i ] );
      // Does this cookie string begin with the name we want?
      if ( cookie.substring( 0, name.length + 1 ) === ( name + '=' ) ) {
        cookieValue = decodeURIComponent( cookie.substring( name.length + 1 ) );
        break;
      }
    }
  }
  return cookieValue;
}

//protect the call
function csrfSafeMethod( method ) {
  // these HTTP methods do not require CSRF protection
  return ( /^(GET|HEAD|OPTIONS|TRACE)$/.test( method ) );
}