const regexp2 = new RegExp('\\w+', 'gi');
const regexp = new RegExp(/\w+/, 'gi');

// Quantos brunos tem na variavel?
const nome = 'Bruno, Bruna Bruninha Bruno Bruno Alex Pedro Luana Bruno Gonçalves';
const regExpBruno = /Bruno/g;
let i = 1;
while( regExpBruno.test(nome) ) {
  console.log(i++, regExpBruno.lastIndex);
}

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

console.log( tags.replace(/(?<=<\/?)\w+/g, 'div') );