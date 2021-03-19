const body = document.getElementsByTagName('body')[0];

console.log(body.clientHeight); // height + padding
console.log(body.offsetHeight); // height + padding + border
console.log(body.scrollHeight); // height total, memso dentro de scroll

const footer = document.getElementsByTagName('footer')[0];
// Distância entre o topo do elemento e o topo da página
console.log( footer.offsetTop );

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
console.log( footer.offsetLeft );

// Metodo que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const rect = footer.getBoundingClientRect();
console.log( rect.height ) // height do elemento
console.log( rect.width ) // width do elemento
console.log( rect.top ) // distância entre o topo do elemento e o scroll

// width //
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}
handleScroll = () => console.log( window.pageYOffset );
document.addEventListener('scroll', handleScroll);

// matchMedia()
// Utilize um media-querie igual como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}