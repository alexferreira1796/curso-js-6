// Destruturando um objeto
const nome = {
  nome: 'Alex',
  idade: 25,
  profissao: 'Full Stack',
  email: 'alex.ferreira@gmail.com',
  conhecimentos: {
    linguagem: ['HTML', 'CSS', 'JAVASCRIPT']
  }
}

const { 
  nome: nomeProfissional, 
  idade, 
  profissao, 
  conhecimentos: { linguagem }, 
  email = 'emai@email.om' 
} = nome;

console.log(linguagem);

// Destruturando array
const frutas = ['Banana', 'Maça', 'Morango'];
const [ banana, maca, morango ] = frutas;

console.log(banana, maca, morango);

// Destruturando argumento
function handleKeyUp({key, keyCode}) {
  console.log(key, keyCode);
}
document.addEventListener('keyup', handleKeyUp);

// Setano variaveis
const [ n1, n2, n3 ] = [9, 7, 6];
console.log(n1, n2, n3);

console.log('*** EXERCICIOS ***');

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = window.getComputedStyle(btn);

const {backgroundColor, margin, color} = btnStyles;

console.log(backgroundColor, margin, color);


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[ cursoAtivo, cursoInativo ] = [ cursoInativo, cursoAtivo ];

console.log( cursoAtivo, cursoInativo );

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}
//const {bobCor: cor} = cachorro;
const {cor: bobCor, nome: nomeDog} = cachorro;

console.log( bobCor, nomeDog );
