// O método Object.entries() retorna uma array dos próprios pares [key, value] enumeráveis de um dado objeto

const objeto = {
  nome: 'Alex',
  idade: 24,
  profissao: 'Full Stack'
}

console.log( Object.entries(objeto) );

for(let [ nome, idade ] of Object.entries(objeto)) {
  console.log( nome, idade );
}