// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const windowSelected = document.querySelector('body');
function changeColor() {
  windowSelected.classList.toggle('active');
  /*if( windowSelected.classList.contains('blue')) {
    windowSelected.classList.remove('blue');
    windowSelected.classList.add('red');
  } else {
    windowSelected.classList.remove('red');
    windowSelected.classList.add('blue');
  }*/
}
//setInterval(changeColor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const h1 = document.querySelector('h1');
const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const resetar = document.getElementById('resetar');

let i = 0;
let timer;

function iniciarCronometro() {
  timer = setInterval(() => {
    h1.innerText = i++
  }, 100);
  iniciar.setAttribute('disabled', '');
}
function pausarCronometro() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}
function resetarCronometro() {
  clearInterval(timer);
  i = 0;
  h1.innerText = i;
  iniciar.removeAttribute('disabled');
}

iniciar.addEventListener('click', iniciarCronometro);
pausar.addEventListener('dblclick', pausarCronometro);
resetar.addEventListener('click', resetarCronometro);

/*function iniciarCronometro() {
  const cronometro = setInterval(function() {
    h1.innerHTML = i++; 
  }, 1000);
  restar.addEventListener('click', function() {
    clearInterval(cronometro);
    h1.innerHTML = 0; 
    i = 0;
  });
  pausar.addEventListener('dblclick', function() {
    clearInterval(cronometro);
  })
}
iniciar.addEventListener('click', iniciarCronometro);
*/

const time = 1000;
const handleTimeOut = (param) => {
  console.log(param);
}
setTimeout(handleTimeOut, time, 'Mensagem');

console.log("Primeiro Script");

const meuInterval = setInterval(callback, time);
let y = 0;
function callback() {
  //console.log(i);
  if(y > 20) {
    clearInterval(meuInterval);
  }
  y++;
}