const cpfs = document.querySelectorAll('.cpf-original li');

// Retornando um array com os TEXT da Li
// @ destruction Node CPF
const elementCpf = ([...cpfs]) => {
  return cpfs.map(item => item.innerText);
}
// Retornando Constructor do CPF válido
const constructorCpf = (cpf) => {
  // Seleciono os Grupos de 3 digitos e 2 digitos e substituindo pelo mesmo grupo
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}
// Retornando Limpando o cpf
const cleanCpf = (cpf) => {
  return cpf.replace(/\D/g, '');
}
// Retornando o CPF formatado
const formatCpf = (cpf) => {
  return cpf.map(cleanCpf).map(constructorCpf);
  //return cpf.map(element => cleanCpf(element)).map(element => constructorCpf(element));
}

// Funcao para exbir array formatado no HTML
// @arr => Array
// @target => Alvo
// @insert => Dentro do que
const insertHtml = (arr, target, insert) => {
  const html = document.querySelector(target);
  arr.forEach(item => {
    const element = document.createElement(insert);
    element.innerText = item;
    html.appendChild( element );
  });
}

const result = elementCpf(cpfs);
const formated = formatCpf(result);

insertHtml(formated, '.cpf-formated', 'li');

//////
// Funcão que cria html com o JSON
const viewJson = (json) => {
  const arr = Object.keys(json).map(item => json[item]);
  const original = document.querySelector('.json-original');
  arr.forEach(item => {
   const element = document.createElement('li');
    element.innerText = item;
    original.appendChild(element);
  });
  insertHtml(formatCpf(arr), '.json-formated', 'li');
}

async function fetchJson(url) {
  try {
    const promise = await fetch(url);
    const json = await promise.json();
    viewJson(json);
  } catch(e) {
    console.log(Error(e));
  }
}
fetchJson('./data.json');

/*const promise = fetch('./data.json');
promise.
then(result => result.json())
.then(json => {
  viewJson(json);
});*/