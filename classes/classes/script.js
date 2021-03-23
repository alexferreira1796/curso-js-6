// Constructor Function
function Button(text, background) {
  this.text = text;
  this.background = background;
  this.color = '#fff';
}

Button.prototype.create = function() {
  const element = document.createElement('button');
  element.innerText = this.text;
  element.style.background = this.background;
  element.style.color = this.color;
  return element;
}

Button.prototype.appendTo = function(target) {
  const targetElement = document.querySelector(target);
  targetElement.appendChild( this.create() );
}

const button = new Button('Clicar', 'blue');
button.appendTo('body');

// Isso que está no construct function acontece por baixo dos panos da Classe Abaixo

// Classe
class Button2 {
  constructor(text, background) {
    this.text = text;
    this.background = background;
    this.color = '#fff';
  }
  create() {
    const element = document.createElement('button');
    element.innerText = this.text;
    element.style.background = this.background;
    element.style.color = this.color;
    return element;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild( this.create() );
  }

}
const button2 = new Button2('Enviar', 'red');
button2.appendTo('body');


// Classe 3
class Button3 {
  constructor(options) {
    this.options = options;
  }
  create() {
    const element = document.createElement('button');
    element.innerText = this.options.text;
    element.style.background = this.options.backgroundColor;
    element.style.color = this.options.color;
    element.style.borderRadius = this.options.borderRadius;
    return element;
  };
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild( this.create() );
  }
  // Você pode utilizar um método static para retornar a própria classe com propriedades já pré definidas.
  static buttonRed(text) {
    const btn = new Button3({
      backgroundColor: 'red',
      text: text,
      color: 'white'
    });
    btn.appendTo('body');
  }
}

const buttonOptions = {
  backgroundColor: 'black',
  color: 'white',
  text: 'Clique Aqui',
  borderRadius: '4px'
}

const button3 = new Button3(buttonOptions);
button3.appendTo('body');

Button3.buttonRed('Botao Padrão');

// Muda COR
class MudaCor {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }
  element() {
    const h1 = document.createElement('h1');
    h1.innerText = this.text;
    h1.style.color = this.color;
    return h1;
  }
  appendTo(target) {
    const body = document.querySelector(target);
    body.appendChild( this.element() );
  }
}

const mudaCor = new MudaCor('red', 'Olá mundo!');
mudaCor.appendTo('body');