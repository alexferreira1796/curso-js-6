const carros2 = ['Kia', 'Ferrari', 'Parati', 'Gol'];

const $ = document.querySelectorAll.bind(document); // Fazendo referencia ao proprio this
console.log($('ul'));

// splice => A partir da segunda posicao, remove nenhum, adiciona esse elemento
carros2.splice(2, 0, 'Fusca');

console.log( carros2 );

const linguagens = ['html', 'css', 'js', 'php', 'python'];

console.log( linguagens.includes('css') ); // true
console.log( linguagens.includes('ruby') ); // false
console.log( linguagens.indexOf('php') ); // 3
console.log( linguagens.indexOf('js') ); // 2
console.log( linguagens.indexOf('c#') ); // -1
console.log( linguagens.lastIndexOf('js') ); // 5

console.log( linguagens.slice(',') );
console.log( linguagens.join(' - ') );

let html2 = '<h2>Texto titulo</h2>';
html2 = html2.split('h2');
console.log( html2.join('span') );

// corta o index e retorna o resto
// corta o index 1 e o 4
console.log( linguagens.slice(3) ); // ['php', 'python]
console.log( linguagens.slice(1, 4) ); // [ 'css', 'js', 'php']

// Clonando array
// const novaLinguagem = linguagens; // Errado nao to clocando so estou fazendo referencia
const novaLinguagem = linguagens.slice();

console.log(linguagens.pop()); // Removendo o ultimo elemento
console.log(linguagens); // Array removido
console.log(novaLinguagem); // Clone do array

/// EXERCICIOS
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const first = comidas.shift();
const end = comidas.pop();
comidas.unshift('Peixe', 'Batata');
comidas.push('Arroz');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
estudantes.reverse();
console.log( estudantes.includes('Joana') );
console.log( estudantes.includes('Juliana') );

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros = carros.slice();
carros.pop();
console.log(carros);
console.log(cloneCarros);