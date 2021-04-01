// function declaration
function somar(a, b) {
  return a + b;
}
somar(1,2); // 3

// function expression
const somar2 = function(a,b) {
  return a + b;
}
somar(4,2); // 6

// Arrow function
const quadrado = (a, b) => a * 2;
console.log(quadrado(4)); // 6

// Isolamento de Escopo
(function(){
  let escopo = true;
  console.log(escopo);
})();

// Remova o erro
/*function priceNumber(n) {
  return +n.replace('R$', '').replace(',', '.');
}*/
const priceNumber = n => +n.replace('R$', '').replace(',', '.'); // Trouxe a contante para o inicio, já que ela nao foi para o hoisting já que ela so foi declarada mais nao atribuida no inicio
console.log( priceNumber('R$ 99,99'));
//const priceNumber = n => +n.replace('R$', '').replace(',', '.');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
const elemento = document.createElement('p');

(function() {
  const elemento = document.createElement('div');
  elemento.innerText = 'Isolado';
  console.log(elemento);
})();

elemento.innerText = 'Escopo global';
console.log(elemento);

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function() {
  console.log("Callback é uma funcao");
});