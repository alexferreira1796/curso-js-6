// Função Navegação por Tab
export default function initTabNav() {
  const tablist = document.querySelectorAll('[data-content="tablist"] li'); // Selecionando todos as <li>
  const tabcontent = document.querySelectorAll('[data-content="tabcontent"] section'); /// Selecionando todas as sections descrição

  if(tablist.length && tabcontent.length) {
    // Recebo o index do elemento, e adiciono a classe ativo ao index referente na section
    const handleTab = (index) => {
      tabcontent.forEach((item) => {
        item.classList.remove('ativo');
      });
      const direction = tabcontent[index].dataset.anime;
      tabcontent[index].classList.add('ativo', direction);
    }

    // Pra cada uma das listas ao clicar passo uma função callback 
    // parametro referente ao indice do elemento
    tablist.forEach((item, index) => {
      item.addEventListener('click', function() {
        handleTab(index)
      });
    });
  }
}