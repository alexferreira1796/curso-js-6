var div = document.querySelector('.app');
callback = (e) => {
  console.log(this); // Onde foi o click no proprio elemento -> igual o currentTarget
  console.log(e.currentTarget); // Onde foi o click no proprio elemento
  console.log(e.target); // O alvo principal do click
  console.log(e.type); // O tipo do click
  console.log(e.path); // o caminho do click
  console.log(e);
}
div.addEventListener('click', callback);

const body = document.body;
handleKeyboard = (e) => {
  e.preventDefault();
  //e.key === "f" ? body.classList.toggle('active') : '';
  if(e.key === "f") {
    body.classList.contains('active') ? body.classList.remove('active') : body.classList.add('active');
  }
}
window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');
handleImage = (e) => {
  console.log( e.target.getAttribute('src') );
}
imgs.forEach((item) => {
  item.addEventListener('click', handleImage);
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="http"]');
handleLinks = (e) => {
  e.preventDefault();
  links.forEach((item) => {
    item.classList.remove('ativo');
  });
  e.currentTarget.classList.add('ativo');
}
links.forEach((item) => {
  item.addEventListener('click', handleLinks);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const all = document.querySelectorAll('body *');
handleAll = (e) => {
  e.preventDefault();
  console.log( e.currentTarget );
}
all.forEach((item) => {
  item.addEventListener('click', handleAll);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
handleRemoveAll = (e) => {
  e.preventDefault();
  e.target.remove();
}
all.forEach((item) => {
  item.addEventListener('click', handleRemoveAll);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

// Acessibilidade
handleZoom = (e) => {
  if(e.key === "t") {
    document.documentElement.classList.toggle('zoom');
  }
}
// documentElement => Elemento Documento é o HTML
window.addEventListener('keydown', handleZoom);


/*const font = '30px';
handleZoom = (e) => {
  if(e.key === "t") {
    all.forEach((item) => {
      item.style = `font-size: ${font}`;
    });
  }
}
window.addEventListener('keydown', handleZoom);*/