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