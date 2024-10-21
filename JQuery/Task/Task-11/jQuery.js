$(function () {
  $("#addItemButton").click(function () {
    var newItem = $("#listItemInput").val().trim();
    if (newItem) {
      $("#itemList").append("<li>" + newItem + "</li>");
      $("#listItemInput").val("");
    } else {
      alert("Please enter a list item.");
    }
  });
});
