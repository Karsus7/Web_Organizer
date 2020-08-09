// const { method } = require("lodash");

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
            // UserId: ,
            category: $('#bookmark-category').val().trim(),
            keyword: $('#bookmark-keyword').val().trim(),
            url: $('#bookmark-url').val().trim()
       }
      
        console.log(newBookmark);

        // Send the POST request.
        $.ajax("/api/bookmark", {
          type: "POST",
          data: newBookmark
        }).then(
          function(response) {
            console.log("congrats! you've added a new bookmark");
            console.log("inside ajax:", response)
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
      
      //delete bookmark
   // $('.delete-button').on('click',  () => {
    $(document).on("click",".delete-button", function(){
        // console.log("Inside delete function");
        let id = $(this).attr("data-id")
        console.log(id)
        // Send the DELETE request.
        $.ajax({
            url: "/api/bookmark/:" + id, 
            method: "DELETE"
        }).then(
            function() {
              console.log("deleted bookmark", id);
              // Reload the page to get the updated list
              location.reload();
            }
        );
    });

    // $('.delete-button').on('click', () => {
    //  deleteBookmark()
    // });
});