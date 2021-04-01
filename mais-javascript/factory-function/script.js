function Pessoa(nome) {
  if(!(this instanceof Pessoa)) {
    return new Pessoa(nome)
  }
  this.nome = nome;
}

const dev = Pessoa('Alex');

// Replicando o JQUERY
function $(elementParam) {
  let element = elementParam;
  if(typeof element != 'object') {
    element = document.querySelectorAll(elementParam);
  } else {
    element = document.querySelectorAll(elementParam.type);
  }

  function show() {
    element.forEach(item => {
      item.style.display = 'initial';
    });
    return this;
  }

  function fade() {
    element.forEach(item => {
      item.style.display = 'none';
    });
    return this;
  }

  function on(event, callback) {
    element.forEach(item => {
      item.addEventListener(event, callback);
    });
    return this;
  }

  function addClass(className) {
    element.forEach(item => {
      item.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    element.forEach(item => {
      item.classList.remove(className);
    });
    return this;
  }

  return Object.freeze({
    element,
    show,
    fade,
    on,
    addClass,
    removeClass
  })
}

$('button').on('click', function() {
  $(this).addClass('active');
});
