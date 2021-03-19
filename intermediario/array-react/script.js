const aulas = [10, 25, 30, 78, 90, 145, 0];

// Acumula o valor da interação anterior
const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  console.log( acumulador, item, index, array );
  return item + acumulador;
}, 0);

console.log(reduceAulas);

// Saber qual é o maior
const maior = aulas.reduce((anterior, atual) => anterior < atual ? atual : anterior);
// 25 // 30 // 78 // 90 // 145 // 145

console.log(maior);

const frutas = ['Banana', 'Uva', 'Maça', 'Pêra'];
const index = frutas.findIndex(item => item == 'Maça'); // Retorna o primeiro index thruty
const element = frutas.find(item => item === 'Pêra'); // Retorna o primeiro elemento thruty

console.log(index, element);

const frutass = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const thruty = frutass.filter(fruta => fruta); // Retorna todos os verdadeiros
const maiores = aulas.filter(n => n > 40);
console.log(thruty, maiores);

// Exercicios
console.log('EXERCICIOS');

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

// Acessando o document => section.querySelector
const objetosCursos = arrayCursos.map((item) => {
  const curso = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('span.aulas').innerText;
  const horas = item.querySelector('span.horas').innerText;
  return {
    curso,
    descricao,
    aulas,
    horas
  }
})
console.log(objetosCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiores100 = numeros.filter(n => n > 100);
console.log(maiores100.sort());

// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const fazParte = instrumentos.some(item => item === 'Baixo');
console.log(fazParte);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

// Funcao limpa preco
function cleanPrice(price) {
  return +price.toUpperCase().replace('R$ ', '').trim().replace(',', '.');
}
// Estou limpando os numeros, no acumulador estou adicionado o index anterior e somando com o atual
const totalCompras = compras.reduce((acumulador, atual) => {
  price = cleanPrice(atual.preco)
  return acumulador + price;
}, 0);
console.log(totalCompras);