
//this actually needs to be our database...
let categories= []; 

$('.create-form').on('submit', function(event) {
    event.preventDefault();

    let newCategory = {
        name: $('#category-input').val().trim()
    }

    $.ajax('/api/category', {
        type: 'POST',
        data: newCategory
    }).then(
        function(){
            console.log('created new category');
            //reload the page to get the updated list 
            location.reload();
        }
    );
});

//MAYBE DONT NEED THIS STUFF

// function displayCategories(){
//     let category = $(this).attr('data-name');

//     $.ajax({
//         url:'/submit',
//         method:'GET'

//     }).then(function(res) {
//         $('.category-view').text(JSON.stringify(res));
//     })
// }

// //rendering category divs
// function renderCategories(){
//     //to make sure there are no repeat categories displayed
//     $('.category-view').empty()

//     //loop through database of categories
//     for (var i=0; i < categories.length; i++){

//         //dynamically create divs for each category
//         let category = $('<div>')
//         //add class of category-div to each categoory
//         category.addClass('category-div');
//         //adding data attribute
//         category.attr('data-name', categories[i]);
//         //providing category text
//         category.text(categories[i]);
//         //adding the div to the category-view div
//         $('.category-view').append(category);
//     }
// }

// //creating on-click function to add category
// $("#add-Category").on("click", function(event){
//     event.preventDevault();

//     let category = $('category-input').val().trim();

//     categories.push(category);
//     console.log(category)

//     renderCategories();
// })

