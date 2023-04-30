if (localStorage.modal != 'ok') {

  const subscribeModal = document.getElementById('subscribe-modal');
  const closeModal = document.querySelector('.modal__close');

  subscribeModal.classList.add("modal_active");

  closeModal.addEventListener("click", function() {
   subscribeModal.classList.remove("modal_active");

  localStorage.modal = 'ok';
});

}