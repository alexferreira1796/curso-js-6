// Calculo o IMC
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}
console.log(imc(87, 1.72));

// Callback, geralmente são funções que ocorrem após algum evento
var btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function() {
  console.log("Cliquei");
});

// Crie uma função para verificar se um valor é Truthy
function truthy(dado) {
  return !!dado;
}
console.log( truthy("Verdadeiro") );
console.log( truthy(44) );
console.log( truthy(0) );

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`; 
}
console.log(nomeCompleto("Alex", "Ferreira"));

// Crie uma função que verifica se um número é par
function par(numero) {
  return numero % 2 == 0 ? "Par" : "Impar";
}
console.log(par(2));
console.log(par(151));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado("JavaScript"));
console.log(tipoDeDado(12));
console.log(tipoDeDado(null));
console.log(tipoDeDado(0));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log("Scroll efetuado");
});

// Corrija o erro abaixo
const totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log( precisoVisitar(20) );
console.log( jaVisitei(20) );