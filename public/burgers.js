$(function() {
    $(".change-condition").on("click", function(event) {
      var id = $(this).data("id");
      var newCon = $(this).data("newcondition");

      event.preventDefault();
  
      var newCondition = {
        devoured: newCon
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newCondition
      }).then(
        function() {
          console.log("changed condition to", newCon);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  