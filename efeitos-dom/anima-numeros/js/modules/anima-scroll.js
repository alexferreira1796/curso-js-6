// Animação no Scroll
export default function initScroll() {
  const sections = document.querySelectorAll('[data-content="scroll"]');
  const windowHalf = window.innerHeight * 0.6; // Pegando a altura e multiplicando pra pegar a metade da janela

  const animaScroll = () => {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isVisibleSection = ( sectionTop - windowHalf ) < 0;
      if(isVisibleSection) 
        item.classList.add('ativo');
      else if( item.classList.contains('ativo') )
        item.classList.remove('ativo');
    });
  }
  
  animaScroll();
  window.addEventListener('scroll', animaScroll);

}