/**
 * Created by adb on 09/01/17.
 */

function isValidEmail(email) {
    var x = email;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }

    return true
}

var header = {
    init: function () {
        /**
         * Upon clicking, the user makes a
         * POST request to sign-in to GS.
         */
        $("#signinBtn").click(function (e) {
            header.onSignIn(e);
        });

        $("#registerBtn").click(function (e) {
            header.onRegister(e);
        });
    },
    onSignIn: function (e) {
        e.preventDefault();
        var email = $("#email").val();
        var pw = $("#pw").val();

        if (!$("#email") || email.length == 0 || !isValidEmail(email)) {
            $.notify({
                message: 'Please enter valid email!'
            }, {
                type: 'warning'
            });
            return;
        }

        if (!$("#pw") || pw.length == 0) {
            $.notify({
                message: 'Please enter password!'
            }, {
                type: 'warning'
            });
            return;
        }

        //POST Request to log in user
        jsonRequest('POST', "/login/", {
                "user_id": email,
                "pw": pw
            },
            successCallback = function (response) {
                // Note - changed from reloading page to just changing elements within page

                // minimize modal
                $('#loginModal').modal('hide');

                $('#account_dropdown').text(response['uid']);

                // change button visibility accordingly
                $('#after_login').removeClass('hidden');
                $('#login_but').hide();
                $('#signup_but').hide();
            },
            errorCallback = function (response) {
                $.notify({
                    message: response.responseJSON.error_message
                }, {
                    type: 'danger'
                });
            });
    },
    onRegister: function (e) {
        e.preventDefault();
        e.preventDefault();
        var user_id = $("#user_id").val();
        var password = $("#password").val();
        var verify_password = $("#verify_password").val();

        if (!$("#user_id") || user_id.length == 0 || !isValidEmail(user_id)) {
            $.notify({
                message: 'Please enter a valid email!'
            }, {
                type: 'warning'
            });
            return;
        }

        if (!$("#password") || password.length == 0) {
            $.notify({
                message: 'Please enter a password for the account!'
            }, {
                type: 'warning'
            });
            return;
        }

        if (!$("#verify_password") || verify_password.length == 0) {
            $.notify({
                message: 'Please re-enter your password!'
            }, {
                type: 'warning'
            });
            return;
        }

        if (password !== verify_password) {
            $.notify({
                message: "Passwords do not match!"
            }, {
                type: 'warning'
            });
            return;
        }


        //POST Request to log in user
        jsonRequest('POST', "/register/", {
                "user_id": user_id,
                "password": password
            },
            successCallback = function (response) {
            // TODO: Testing of this functionality
                // Note - changed from reloading page to just changing elements within page
                // minimize modal
                $('#signupModal').modal('hide');
                $('#account_dropdown').text(response['uid']);

                // change button visibility accordingly
                $('#after_login').removeClass('hidden');
                $('#login_but').hide();
                $('#signup_but').hide();            },
            errorCallback = function (response) {
                $.notify({
                    message: response.responseJSON.error_message
                }, {
                    type: 'danger'
                });
            });
    }
};

$(document).ready(function() {
    //if (username == "None" || username == "Anonymous") {
    //    $('#after_login').hide();
    //}
    //else {
    //    $('#login_but').hide();
    //    $('#signup_but').hide();
    //}
});
