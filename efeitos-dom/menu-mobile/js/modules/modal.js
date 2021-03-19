const initModal = () => {
  const modal = document.querySelector('[data-modal="container"]');
  const open = document.querySelector('[data-modal="open"]');
  const close = document.querySelector('[data-modal="close"]');

  if(modal && open && close) {
    function toggleModal(event) {
      event.preventDefault();
      modal.classList.toggle('ativo');
    }
    function closeContainer(event) {
      if(event.target === this) 
        toggleModal(event);
        //closeModal(event);
    }

    /*function openModal(event) {
      event.preventDefault();
      modal.classList.add('ativo');
    }
    function closeModal(event) {
      event.preventDefault();
      modal.classList.remove('ativo');
    }*/

    open.addEventListener('click', toggleModal);
    close.addEventListener('click', toggleModal);
    modal.addEventListener('click', closeContainer);
  }
}
export default initModal;