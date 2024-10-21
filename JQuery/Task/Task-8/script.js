$(document).ready(function() {
    var content = $("#content").html();
    var wordsToBold = ["example", "bold"]; // Words you want to bold

    wordsToBold.forEach(function(word) {
        var regex = new RegExp(`(${word})`, 'gi'); // Create a regex to match the word
        content = content.replace(regex, '<strong>$1</strong>'); // Replace the word with a bold version
    });

    $("#content").html(content); // Update the HTML of the content
});