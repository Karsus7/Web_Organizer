const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

//opens modal to show content
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

//closes modal
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

//onclick event to open modal when button is selected
openModalButtons.forEach(button => {
    button.addEventListener('click',  () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

//onclick event to close modal when button is selected
closeModalButtons.forEach(button => {
    button.addEventListener('click',  () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

//shows overlay over main webpage while modal is active
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

