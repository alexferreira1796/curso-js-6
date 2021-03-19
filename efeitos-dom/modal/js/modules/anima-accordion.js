// Função Accordion List
export default function initAccordionList() {
  const accordionList = document.querySelectorAll('[data-content="accordion"] dt'); // Selecionando todos os dt's
  if(accordionList) {
    // Adicionada no elemento a classe ativo e também no proximo elemento
    const handleAccordion = (event) => {
      const e = event.currentTarget;
      e.classList.toggle('ativo');
      e.nextElementSibling.classList.toggle('ativo');
    }

    // Pra cada um deles adiciono o evento click
    accordionList.forEach((item) => {
      item.addEventListener('click', handleAccordion);
    });
  }
}