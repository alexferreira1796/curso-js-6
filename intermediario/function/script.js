// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const somaTotal = Array.prototype.reduce.call(paragrafos, (acumulador, atual) => {
  const html = atual.innerText.length;
  return acumulador + html;
}, 0);

console.log(somaTotal);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function elementCreate(tag, css, content) {
  const element = document.createElement(tag);
  css ? element.classList.add(css) : null;
  content ? element.innerHTML = content : null;
  return element;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = elementCreate.bind(null, 'h1', 'titulo');
const h1Curso = elementCreate.bind(null, 'h1', 'ativo');

console.log(h1Titulo('H1 Tarefa'), h1Curso('Curso de JavaScipt'));