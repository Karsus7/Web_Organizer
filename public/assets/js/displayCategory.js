let category = [];

function renderCategories(){
}

submitButton.addEventListener('click', (data) =>{
    const category = $('#newCategory').val().trim();

    categories.push(category);
    console.log(categories);
})