const content = document.querySelector('.content');

// Injetando Texto
const file = fetch('./doc.txt');
file.
then(result => result.text())
.then(body => {
  content.innerText = body;
  console.log(body);
});

// Injetando CSS
const styleElement = document.createElement('style');
const body = document.body;
const css = fetch('./style.css');
css.then(response => response.text())
.then(style => {
  styleElement.innerHTML = style;
  body.appendChild(styleElement);
  console.log(style);
})

// Injetando HTML
const div = document.createElement('div');
const sobre = fetch('./sobre.html');
sobre.then(response => response.text())
.then(content => {
  div.innerHTML = content;
  const h1 = div.querySelector('h1');
  document.querySelector('h2').innerText = h1.innerText;
  body.appendChild(div);
  console.log(content);
})

// Blob => é um tipo de objeto utilizado para representação de dados de um arquivo.
const imagem = fetch('./imagem.png');
const img = document.querySelector('img');
imagem.then(response => response.blob())
.then(body => {
  const imagemBlob = URL.createObjectURL(body);
  img.src = imagemBlob;
})

// Clonaaando o corpoo da requisição
const cep = fetch('https://viacep.com.br/ws/01001000/json/');
cep.then(response => {
  const reponseClone = response.clone();
  response.text().then(text => {
    console.log(text);
  });
  reponseClone.json().then(json => {
    console.log(json);
  });
})

// Headers
cep.then(response => {
  console.log(response.url, response.type);
  response.headers.forEach(item => {
    console.log(item)
  })
})