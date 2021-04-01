// Rest - Argumentos em uma funcao
function ganhadores(premio, ...nomes) {
  console.log(arguments);
  nomes.forEach(nome => {
    console.log( `${nome} ganhou um ${premio}`);
  })
}

ganhadores("Carro", 'Alex', 'Ana', 'Tauane', 'Marcos');

// Spreed - Distribui um item iterável, um por um
const nomes = ['Matheus', 'Renata', 'Jorge'];
const idades = [45, 50, 21];

console.log( ...nomes, '-' ,...idades  );

// Spreed em funcao real
const numeros = [78, 45, 90, 45, 50, 128, 47];
const maior = Math.max(...numeros);
console.log(maior);

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];
console.log(fraseArray);

// Transformando em um array
//const nome = prompt('Qual seu nome?')
//const spreed = [...nome];
//console.log(spreed);

console.log('*** EXERCÍCIOS ***');

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background, color) {
  background = background || 'blue';
  if(color === undefined) {
    color = 'red';
  }
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
} 
const redButton = createButton();
console.log( redButton );

// EcmaScript6
function createButtonES6(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.backgroundColor = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButtonES6 = createButtonES6();
console.log( redButtonES6 );

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas);

console.log(comidas);

// Push generico
function pushh(arr, ...data) {
  let i = arr.length;
  data.forEach(item => {
    arr[i] = item;
    i++;
  });
  return arr;
}

const push = pushh(comidas, ...comidas);
console.log(push);

