/**
 * Created by dgwiz on 2/3/2017.
 */

function jsonRequest(method, url, data, successCallback, errorCallback) {
    $.ajax({
        headers: {
            'Accept': 'application/json'
        },
        method: method,
        data: method == 'GET' ? data : JSON.stringify(data),
        url: url,
        success: successCallback,
        error: errorCallback
    });
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$(document).ready(function () {

    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
            }
        }
    });

    $.notifyDefaults({
        placement: {
            from: "top",
            align: "center"
        },
        delay: 15000,
        offset: 70,
        z_index: 100000,
        type: 'success'
    });
});