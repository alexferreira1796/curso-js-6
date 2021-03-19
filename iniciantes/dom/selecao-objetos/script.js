// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
imgs.forEach(function(item) {
  console.log(item.src)
});
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]'); 
for(let i = 0; i < imagem.length; i++) {
  console.log(imagem[i].src);
}
// Selecione todos os links internos (onde o href começa com #)
const link = document.querySelectorAll('[href^="#"]');
console.log(link);

// Selecione o primeiro h2 dentro de .animais-descricao
let h2 = document.querySelector('.animais-descricao h2');
console.log(h2.innerText);

// Selecione o último p do site
var endP = document.querySelectorAll('p');
console.log(endP[--endP.length].innerText);