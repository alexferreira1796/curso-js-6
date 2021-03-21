// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const form = document.forms[0];
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function handleClick(event) {
  event.preventDefault();
  const cep = form.elements.cep.value;
  if(cep) {
    const viaCep = fetch(`https://viacep.com.br/ws/${cep}/json/`);
    viaCep.then(response => {
      const cloneResponse = response.clone();
      if(response.status === 200) {
        cloneResponse.text().then(res => result.innerText = res)
        return response.json();
      }
    }).then(res => console.log(res))
  }
}
btn.addEventListener('click', handleClick);


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s // 30000
const buy = document.querySelector('.buy');
function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(res => res.json())
  .then(json => { 
    const brl = json.BRL.buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    buy.innerText = brl;
    console.log(brl);
  });
}
fetchBtc();
//setInterval(fetchBtc, 1000 * 30);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const next = document.querySelector('.next');
const chuck = document.querySelector('.chuck');

function nextJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(res => res.json())
  .then(json => {
    chuck.innerHTML = `<p>${json.value}</p>`;
  })
}
next.addEventListener('click', () => {
  nextJoke();
});