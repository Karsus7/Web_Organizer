// const categoryDropdown = document.getElementById('categoryDropdown');
// const dropdown = document.getElementById('dropdown');

// $(categoryDropdown).on('click', openMenu())

// function openMenu() {
//     dropdown.classList.toggle('active')
// }

console.log('this is working')


document.getElementById("categoryDropdown").addEventListener("click", openMenu)

function openMenu() {
    document.getElementById("dropdown").classList.toggle('active')
}