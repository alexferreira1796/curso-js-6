// string
var nome = "Alex";

// typeof - verifica o tipo de dado
var content = typeof nome;

// Symbol
var simbolo = Symbol();

// Null
var bug = null;
console.log(typeof simbolo);

// Template string
var gols = 1000;
var frase1 = `Pelé fez ${gols} gols`;

// Exercicios
// Declare uma variável contendo uma string
var stt = "JavaScript";
// Declare uma variável contendo um número dentro de uma string
var number = "18";
// Declare uma variável com a sua idade
var idade = 24;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = "Alex";
var sobrenome = "Ferreira";
console.log(`${nome} ${sobrenome}`);
// Coloque a seguinte frase em uma variável: It's time
var frase = 'It\'s time';
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);

// Exibindo no DOM
document.getElementsByTagName("body")[0].innerHTML = frase1;