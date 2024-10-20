$('#myCheckbox').click(function() {
    if ($(this).is(':checked')) {
        $('#submitButton').prop('disabled', false);
    } else {
        $('#submitButton').prop('disabled', true);
    }
});