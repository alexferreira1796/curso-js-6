// nomeie 3 propriedades ou métodos de strings
// length -> Propriedade
// charAt() -> Metodo
// replace(isso, por isso) -> Metodo
// toLowercase
// toUppercase

// nomeie 5 propriedades ou métodos de elementos do DOM
// addEventListener
// querySelector
// getElementById()
// innerHtml
// appendChild

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
var btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click', function(e) {
  var input = document.querySelector('.input');
  input.select();
  document.execCommand('copy');
})


// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoas = {
  nome: "Alex",
  sobrenome: "Ferreira",
  idade: 24,
}
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoas.frase = function() {
  return `Meu nome é ${dadosPessoas.nome} ${dadosPessoas.sobrenome}, tenho ${dadosPessoas.idade} anos` 
};
console.log(dadosPessoas.frase());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(  carro.preco );

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    return pessoa === 'homem' ? 'Latiu ao ver um homem' : ''
  },
  frase() {
    return `${this.raca} da cor ${this.cor} tem ${this.idade} anos. ${this.latir('homem')}`
  },
}
console.log(cachorro.frase());

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado
  },
  perimetro: function(lado) {
    return this.lados * lado;
  }
}
console.log( quadrado.lados ); // 4
console.log( quadrado.area(5) ); // 25
console.log( quadrado.perimetro(5) ); // 25

// ES6+
var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado
  },
  perimetro(lado) {
    return this.lados * lado
  }
}
console.log( quadrado2.lados ); // 4
console.log( quadrado2.area(8) ); // 25
console.log( quadrado2.perimetro(8) ); // 25

Math.PI; // 3.14
Math.random(); // número aleatorio

var pi = Math.PI;
console.log(pi);

// console => Objeto
// .log() => Método
// .table() => Método

var carro = {
  marca: "Chevrolet"
};
var moto = {};

console.log( typeof carro, typeof moto );

// DOT NOTATION GET
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
menu.color = 'blue';
menu.esconder = function() {
  console.log('hidden');
}
console.log(menu);
var bg = menu.backgroundColor;

// Tenho essa propriedade no metodo -> herdado
console.log( menu.hasOwnProperty('width') );

// Tudo é Objeto
var nome = 'André';

nome.length; // 5
nome.charAt(1); // n
nome.replace('ré', 'rei'); // Andrei
nome;

var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(2); // 2 arrendondar

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})