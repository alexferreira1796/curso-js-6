// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log( img.offsetTop );

// Retorne a soma da largura de todas as imagens
window.onload = () => {
  const imgs = document.querySelectorAll('img');
  let valor = 0;
  imgs.forEach((item) => {
    valor += item.offsetWidth;
  });
  console.log(`Largura total ${valor}`);
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((item) => {
  const linkWidth = item.offsetWidth;
  const linkHeight = item.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(item, 'Possui acessibilidade');
  } else {
    console.log(item, 'Não Possui Boa Acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('nav');
const browser = window.matchMedia('(max-width: 720px)');
browser.matches ? menu.classList.add('menu-mobile') : menu.classList.remove('menu-mobile');