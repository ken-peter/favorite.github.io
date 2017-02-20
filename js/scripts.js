$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var favs = ["food", "sport", "quote", "pet"];

      favs.forEach(function(fav) {
        var userInput = $("input#" + fav).val();
        console.log(userInput);
        $("#mylist").append("<li>" + userInput + "</li>");
      });

      $(".list").show();

      event.preventDefault();
});
});
