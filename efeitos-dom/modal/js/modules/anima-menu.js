// Scroll moderno
export default function initScrollMenu() {
  const links = document.querySelectorAll('[data-content="menu"] a[href^="#"]');

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