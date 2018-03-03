let modal = document.querySelector('#simpleModal');
let modalBtn = document.querySelector('#modalBtn');
let closeBtn = document.querySelector('.closeBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal() {
  modal.style.display = 'block';
}

function closeModal(e){
  modal.style.display = 'none';
}

function clickOutside(e){
  if (modal.style.display !== 'block') return
  if (e.target === modal) closeModal()
}
