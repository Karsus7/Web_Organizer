$(document).ready(function() {

  

    //creating new category
    $(".category-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newCategory = {
        category: $("#category-input").val().trim(),
      };
    
      // Send the POST request.
      $.ajax("/api/users", {
        type: "POST",
        data: newCategory
      }).then(
        function() {
          console.log("congrats! you've added a new category");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    //create new bookmark
    $(".bookmark-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        let newBookmark = {
            category: $('#bookmark-category').val().trim(),
            keyword: $('#bookmark-keyword').val().trim(),
            url: $('#bookmark-url').val().trim()
        }
      
        // Send the POST request.
        $.ajax("/api/users", {
          type: "POST",
          data: newBookmark
        }).then(
          function() {
            console.log("congrats! you've added a new bookmark");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

  
    //create delete function for categories?
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });