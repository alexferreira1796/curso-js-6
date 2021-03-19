// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nome, idade) {
  this.andar = function() {
    console.log(nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 20);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos,
function DomExercico(seletor) {
  this.array = [];
  this.create = function(param) {
     const ul = document.createElement('ul');
     param.forEach((item) => {
       ul.innerHTML += `<li>${item}</li>`
     });
     this.elements(true).appendChild(ul);
  }
  this.elements = function(param = false) {
    return param ? document.querySelectorAll(seletor)[0] : document.querySelectorAll(seletor);
  }
  this.data = function() {
    this.elements().forEach((item) => {
      this.array.push(item);
    });
  }
  this.addClass = function(classe) {
    this.array.forEach((item) => {
      item.classList.add(classe)
    });
  }
  this.removeClass = function(classe) {
    this.array.forEach((item) => {
      item.classList.remove(classe)
    });
  }
}
const dom = new DomExercico('.item2 li');
dom.data();
dom.addClass('ativo');

const dom2 = new DomExercico('.item3');
dom2.create(['Nova Lista 1', 'Nova Lista 2', 'Nova Lista 3']);
dom2.addClass('ativo');

function Carro(m, p) {
  this.marca = m;
  this.preco = p;
}
const honda = new Carro('Honda', 2000);
const fiat = new Carro('Fiat', 4000);

/*const carro = {
  marca: '',
  preco: 0
}
carro.marca = 'Honda';
carro.preco = 2000;

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;*/

// Criando uma lista dinamicamente
const section = document.querySelector('.item');
const itens = ['Item1','Item2', 'Item3', 'Item4', 'Item5'];
const ul = document.createElement('ul');
itens.forEach((item) => {
  ul.innerHTML += `<li>${item}</li>`;
});
section.appendChild(ul);

window.onload = function() {
  function Dom(seletor) {
    this.elemento = function() {
      return document.querySelector(seletor);
    }
    this.ativo = function(classe) {
       this.elemento().classList.add(classe);
    }
  }
  const li1 = new Dom('.item li:first-child');
  li1.ativo('ativo');
  const li2 = new Dom('.item li:last-child');
  li2.ativo('ativo');
  
  // const li1 = document.querySelector('.item li:first-child');
  // const li2 = document.querySelector('.item li:last-child');
  // li1.classList.add('ativo');
  // li2.classList.add('ativo');
}