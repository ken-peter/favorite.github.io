$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var favs = ["food", "sport", "quote", "pet"];

    favs.forEach(function(fav) {
      var userInput = $("input#" + fav).val();
      $("#mylist").append("<li>" + userInput + "</li>");
    });

    $(".list").show();
    var blanks = $("#blanks form")
    blanks.hide();
    event.preventDefault();
  });
});
