// _elementType é um atributo interno
class Button {
  constructor(option) {
    this.option = option;
  }
  get element() {
    const type = this._elementType || 'button';
    const element = document.createElement(type);
    element.innerText = this.option.text;
    element.style.background = this.option.backgroundColor;
    element.style.color = this.option.color;
    return element;
  }
  set element(type) {
    this._elementType = type;
  }
}

const button = new Button({
  backgroundColor: 'black',
  color: 'white',
  text: 'Clicar'
});

button.element = 'div';
document.body.appendChild( button.element );