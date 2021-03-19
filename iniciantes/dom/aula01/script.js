// Retorne o url da página atual utilizando o objeto window
console.log( location.href );
// Seleciona o primeiro elemento da página que
// possua a classe ativo
var active = document.querySelector('.ativo');
active.classList.add('color');
console.log(active);

// Retorne a linguagem do navegador
console.log(window.navigator.language);

// Retorne a largura da janela 
console.log( innerWidth );