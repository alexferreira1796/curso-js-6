// const comida = 'Pizza';
// const agua = new String('Agua  ');

// console.log(agua.length);

// const frase = 'A melhor comida';

// STR.CHARAT(N)
// Retorna o caracter de acordo com o index de (n).

// console.log(frase[frase.length])
// console.log(frase.charAt(frase.length))

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

// STR.SLICE(START, END)
// Corta a string de acordo com os valores de start e end.
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

// STR.CONCAT(STR2, STR3, ...)
// Concatena as strings e retorna o resultado.
const fraseFinal = frase.concat(linguagem, '!!', 'Oi sdhdisuhds');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

// STR.INCLUDES(SEARCH, POSITION)
// Procura pela string exata dentro de outra string. A procura é case sensitive.
console.log(listaFrutas.includes(fruta, 14));

// STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
// Procura pela string exata dentro de outra string. A procura é case sensitive.
console.log(fruta.endsWith('na'));
console.log(fruta)
fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false

// STR.SLICE(START, END)
console.log(transacao1.slice(-5));

// STR.SUBSTRING(START, END)
// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.
const linguagem2 = 'JavaScript';
linguagem2.substring(3,5); // aS
linguagem2.substring(0,4); // Java
linguagem2.substring(4); // Script
linguagem2.substring(-3); // JavaScript


// STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

// STR.PADSTART(N, STR) E STR.PADEND(N, STR)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const preco = 'R$ 99,00';

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, '-'));
})

// STR.REPEAT(N)
// Repete a string (n) vezes.
const frase2 = 'Ta';
frase2.repeat(5); // TaTaTaTaTa


// STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');

console.log(listaItens);

// STR.SPLIT(PADRAO)
// Divide a string de acordo com o padrão passado e retorna uma array.
const arrayLista = listaItens.split(', ');

console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

// STR.TOLOWERCASE() E STR.TOUPPERCASE()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toUpperCase() === 'FEMININO');
// STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
// Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'