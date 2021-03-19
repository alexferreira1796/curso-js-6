// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu > ul > li');
menu.forEach((item) => item.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => index != 0 ? item.classList.remove('ativo') : '');

// Verifique se as imagens possuem o atributo alt
var imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
  const has = item.hasAttribute('alt');
  console.log(item, has);
}) 

// Modifique o href do link externo no menu
var href = document.querySelectorAll('.menu a[href^="http"]');
href[0].setAttribute('href', '#externo');