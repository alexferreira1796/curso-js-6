// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let totalTaxa = 0,
    totalRecebimento = 0;
transacoes.forEach((item) => {
  const numeroLimpo = parseInt( item.valor.replace('R$ ', '') );
  if( item.descricao.includes('Taxa') ) // indexOf - includes - slice(0,4)
    totalTaxa += numeroLimpo;
  else
    totalRecebimento += numeroLimpo;
});
console.log(`Taxa: R$ ${totalTaxa} - Recebimento R$ ${totalRecebimento}`);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const spanReplace = html.split('span');
const newHtml = spanReplace.join('a');
console.log(newHtml);

// Retorne o último caracter da frase
const frase3 = 'Melhor do ano!';
console.log( frase3.slice(-1) );
console.log( frase3.charAt( frase3.length - 1 ) );

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((item) => {
  if( item.trim().toLowerCase().indexOf('taxa') > -1 )
    totalTaxas++;
});
console.log(totalTaxas);