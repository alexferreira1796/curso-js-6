// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
for(let i = 1; i <= 4; i++) {
  let element = document.createElement('li');
  element.innerText = `Item ${i}`;
  document.body.appendChild(element);
}

function addClass() {
  const li = document.querySelectorAll('li');
  for(const i of li) {
    i.classList.add('ativo');
  }
}
addClass();

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for(const obj in window) {
  console.log( `${obj}: ${window[obj]}` );
}
