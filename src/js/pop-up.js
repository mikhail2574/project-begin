const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-thanks-modal]');
const formEl = document.querySelector('[data-rent-form]');

formEl.addEventListener('submit', onFormSubmit);
closeModalBtn.addEventListener('click', toggleModal);

function onFormSubmit(event) {
  event.preventDefault();
  const inputs = [...this.querySelectorAll('input')];
  const isValid = inputs.map(input => input.value).includes('');

  if (isValid) {
    return;
  }

  toggleModal();
}

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
