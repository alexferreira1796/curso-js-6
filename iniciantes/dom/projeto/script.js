'use strict'

const classActive = 'ativo';

// Função Navegação por Tab
function initTabNav() {
  const tablist = document.querySelectorAll('.js-tablist li'); // Selecionando todos as <li>
  const tabcontent = document.querySelectorAll('.js-tabcontent section'); /// Selecionando todas as sections descrição

  if(tablist.length && tabcontent.length) {
    // Recebo o index do elemento, e adiciono a classe ativo ao index referente na section
    const handleTab = (index) => {
      tabcontent.forEach((item) => {
        item.classList.remove(classActive);
      });
      tabcontent[index].classList.add(classActive);
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
initTabNav();

// Função Accordion List
function initAccordionList() {
  const accordionList = document.querySelectorAll('.js-accordion dt'); // Selecionando todos os dt's
  if(accordionList) {
    // Adicionada no elemento a classe ativo e também no proximo elemento
    const handleAccordion = (event) => {
      const e = event.currentTarget;
      e.classList.toggle(classActive);
      e.nextElementSibling.classList.toggle(classActive);
    }

    // Pra cada um deles adiciono o evento click
    accordionList.forEach((item) => {
      item.addEventListener('click', handleAccordion);
    });
  }
}
initAccordionList();

// Scroll moderno
function initScrollMenu() {
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href'); // Pegar o href do elemento
    const section = document.querySelector(href);

    // Verão nova, direto no elemento traz pra view
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Forma alternativa mais nova
    /*const top = section.offsetTop;
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });*/

  }

  links.forEach((item) => {
    item.addEventListener('click', handleScroll);
  });
}
initScrollMenu();

// Animação no Scroll
function initScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowHalf = window.innerHeight * 0.6; // Pegando a altura e multiplicando pra pegar a metade da janela

  const animaScroll = () => {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isVisibleSection = ( sectionTop - windowHalf ) < 0;
      if(isVisibleSection) 
        item.classList.add(classActive);
      else
        item.classList.remove(classActive);
    });
  }
  
  animaScroll();
  window.addEventListener('scroll', animaScroll);

}
initScroll();