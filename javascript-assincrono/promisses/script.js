let obj = {
  nome: 'Alex'
}
const promessa = new Promise(function(resolve, reject) {
  let condicao = true;
  if(condicao) {
    obj.idade = 24
    resolve(obj);
  } else {
    reject(Error('Erro na promessa'));
  }
});

promessa.then(result => {
  result.profissao = 'Fullstack';
  return result;
}).then(result => {
  console.log(result);
}).catch(reject => {
  console.log(reject);
}).finally(() => {
  console.log('Acabou');
});

// Login e Carregamento de Dados
const login = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('Login efetuado');
  }, 1000);
});

const dados = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

const primerio = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Primeiro Resolvido');
  }, 500);
});

const concluido = Promise.all([login, dados, primerio]); // Carregar um depois o outro
const corrida = Promise.race([login, dados, primerio]); // Corrida de promessas

concluido.then(result => {
  console.log(result);
});

corrida.then(result => {
  console.log(result);
});