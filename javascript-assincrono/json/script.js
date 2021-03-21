// JSON Stringfy => Recebe um objeto e transforma em uma string json
// JSON Parse => Recebe uma string json e transforma em JSON
const config = {
  player: 'Youtube',
  tempo: '25min',
  ativo: true
}
localStorage.config = JSON.stringify(config);
const json = JSON.parse(localStorage.config);
Object.keys(json).forEach(item => {
  console.log(item);
})
for(let i in json) {
  console.log(i);
}

fetch('./dados.json').then(res => res.json()).then(json => console.log(json));