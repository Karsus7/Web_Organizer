const categoryDropdown = document.getElementById('.categoryDropdown');
const dropdown = document.getElementById('.dropdown');

categoryDropdown.addEventListener('click', openMenu());

function openMenu() {
    dropdown.classList.toggle('active')
}