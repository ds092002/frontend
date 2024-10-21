$(document).ready(function() {
    $('#username').keyup(function() {
        $('#usernameError').toggle($(this).val().length > 15);
    });
});
