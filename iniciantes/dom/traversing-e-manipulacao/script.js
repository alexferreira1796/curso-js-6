// Transversing => Navegar pelo DOM, utilizando as propriedas e metodos
// element.parentElement

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq-lista');
const dl = faq.children[0];
console.log(dl);

// Selecione o DD referente ao primeiro DT
const dd = dl.nextElementSibling;
console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.getElementById('animais');
const faqHtml = document.getElementById('faq');
faqHtml.innerHTML = animais.innerHTML;