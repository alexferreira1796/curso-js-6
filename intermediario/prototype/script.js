// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenone, idade) {
  this.nome = nome;
  this.sobrenone = sobrenone;
  this.idaded = idade
}
Pessoa.prototype.completo = function() {
  return `${this.nome} ${this.sobrenone}`;
}

const alex = new Pessoa('Alex', 'Ferreira', 24);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log( Object.getOwnPropertyNames(NodeList.prototype) );
console.log( Object.getOwnPropertyNames(HTMLCollection.prototype) );
console.log( Object.getOwnPropertyNames(Document.prototype) );

// NodeList.prototype
// HTMLCollection.prototype
// Document.prototype

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// li.constructor.name

li; // HTMLLIElement
li.click; // Funcao
li.innerText; // String
li.value; // Number 
li.hidden; // Boolean
li.offsetLeft; /// Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String

// Liste 5 objetos nativos
// Object
// Number
// Function
// Array
// Boolean

// Liste 5 objetos do browser
// NodeList
// window
// history
// length
// HTMLCollection

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

