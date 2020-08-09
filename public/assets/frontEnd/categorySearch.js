
//onclick to select category you would like to view
$('.bookmarkCategory').on('click',  () => {
    //when we click the category, we want to view only that category.
    event.preventDefault();

    let category = $('.bookmarkCategory').val();
    
    // Send the POST request.
    $.ajax('/api/bookmark/:category', {
      type: 'GET',
      data: category
    }).then(
      function() {
        console.log('you are viewing', category);
        // Reload the page to get the updated list
        window.location.replace('/members');
      }
    );
})
