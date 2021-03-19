console.log(Number.isNaN(NaN)) //true
console.log(Number.isInteger(20)) //true
console.log(Number.isInteger(20.6)) //false
const array = new Array(10); // [,,,,,,,,,,]

// to.Fixed
// Arredonda o número com base no total de casas decimais do argumento
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499

// n.toLocaleString(lang, options);
// en-US - pt-BR {style: 'currency', currency: 'BRL'} // EUR USD BRL
// currency - moeda
const price = 1289.49;
console.log( price.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
console.log( price.toLocaleString( 'pt-BR', {style: 'currency', currency: 'BRL'} ) );

// Objeto MATH
console.log(Math.PI) // 3.14159
console.log(Math.E) // 2.718
console.log(Math.LN10) // 2.303

// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. 
// ceil() arredonda para cima, retornando sempre uma integral
// floor() para baixo. 
// round() arredonda para o número integral mais próximo.
console.log( Math.abs(-5.5) ); // 5.5
console.log( Math.ceil(4.8334) ); // 5
console.log( Math.ceil(4.3) ); // 5
console.log( Math.floor(4.8334) ); // 4
console.log( Math.floor(4.3) ); // 4
console.log( Math.round(4.8334) ); // 5
console.log( Math.round(14.3) ); // 4

// max() retorna o maior número de uma lista de argumentos, 
// min() o menor número 
// random() um número aleatório entre 0 e 1.

console.log( Math.max(5,3,10,42,2) ); // 42
console.log( Math.min(5,3,10,42,2) ); // 2

console.log( Math.random() ); // 0.XXX
console.log( Math.floor(Math.random() * 100) ); // entre 0 e 100
console.log( Math.floor(Math.random() * 500) );  // entre 0 e 500

// Número random entre 72 e 32
const max = 40;
const min = 20;
console.log( Math.floor(Math.random() * (72 - 32 + 1)) + 32 ); 
console.log( Math.floor(Math.random() * (max - min + 1)) + min );

// Retorne um número aleatório
// entre 1050 e 2000
const min1 = 1050;
const max1 = 2000;
console.log( Math.floor( Math.random() * (max1 - min1 + 1) + min1 ));

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arr = numeros.split(', ');
console.log(Math.max(...arr));
//console.log(Math.max(arr[0], arr[1], arr[2], arr[3], arr[4])); // 20

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

const cleanString = string => {
  string= +string.toUpperCase().replace('R$', '').trim().replace(',', '.');
  return +string.toFixed(2);
}
let total = 0;
listaPrecos.forEach(item => {
  total += cleanString(item);
});
console.log(total.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'}));