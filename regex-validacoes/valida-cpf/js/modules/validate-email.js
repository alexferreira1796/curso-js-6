export default class ValidateEmail {
  constructor(element) {
    this.element = element;
  }
  spanError() {
    const span = document.createElement('span');
    span.classList.add('erro-text');
    span.innerText = 'E-mail inválido';
    this.element.parentElement.insertBefore(span, this.element.nextElementSibling);
  }
  validate(email) {
    const match = email.match(/[\w\-\.]+@[\w\-]+\.[\w\-\.]+/g);
    return match !== null && match[0] === email;
  }
  handleChange() {
    this.element.addEventListener('change', () => {
      if( !this.validate(this.element.value) ) {
        this.element.classList.remove('validate');
        this.element.classList.add('error');
        this.element.nextElementSibling.classList.add('active');
      } else {
        this.element.classList.add('validate');
        this.element.classList.remove('error');
        this.element.nextElementSibling.classList.remove('active');
      }
    });
  }
  //
  init() {
    this.handleChange();
    this.spanError();
    return this;
  }
}