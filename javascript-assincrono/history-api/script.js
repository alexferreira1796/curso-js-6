//window.history;
//window.history.back(); // vai para a anterior
//window.history.forward(); // vai para a próxima

/*const back_redirect = 'https://www.google.com.br';
const local = window.location.href;
window.history.pushState(null, null, local); // Mudando o Estado do Window Browser
window.addEventListener('popstate', () => { // Adicionado um novo estado ao voltar
  window.location.href = back_redirect; // Adicionado ao localiton
});*/

const links = document.querySelectorAll('a');
const contentMain = document.querySelector('.content');
const element = document.createElement('div');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.addEventListener('popstate', function() {
    fetchPage(window.location.href);
  });
}

async function fetchPage(url) {
  contentMain.innerHTML = '<h1>Carregando</h1>';
  const responsePage = await fetch(url);
  const textPage = await responsePage.text();
  window.history.pushState(null, null, url);
  newPage(textPage);
}

/*function fetchPage(url) {
  fetch(url)
  .then(res => res.text())
  .then(text => {
    window.history.pushState(null, null, url);
    newPage(text);
  })
}*/

function newPage(text) {
  element.innerHTML = text;
  const newContent = element.querySelector('.content');
  contentMain.innerHTML = newContent.innerHTML;
}

links.forEach(item => {
  item.addEventListener('click', handleClick);
});;
