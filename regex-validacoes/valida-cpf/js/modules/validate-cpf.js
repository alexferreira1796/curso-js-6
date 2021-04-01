export default class ValidateCpf {
  constructor(element) {
    this.element = element;
  }
  clean(cpf) {
    return cpf.replace(/\D/g, '');
  }
  constructorCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
  formated(cpf) {
    return this.constructorCpf( this.clean(cpf) );
  }
  validate(value) {
    const match = value.match(/(?:\d{3}[\.\-\s]?){3}[\.\-\s]?\d{2}/g);
    return match && match[0] === value;
  }
  changeValidate(cpfElement) {
    const validate = this.validate( cpfElement.value );
    if(validate) {
      cpfElement.value = this.formated(cpfElement.value);
      cpfElement.classList.add('validate');
      cpfElement.classList.remove('error');
      cpfElement.nextElementSibling.classList.remove('active');
    } else {
      cpfElement.classList.add('error');
      cpfElement.classList.remove('validate');
      cpfElement.nextElementSibling.classList.add('active');
    }
  }
  errorAdd() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'CPF Inválido';
    this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling);
  }
  handleChange() {
    this.element.addEventListener('change', () => {
      this.changeValidate( this.element );
    });
  }
  init() {
    this.handleChange();
    this.errorAdd();
    return this;
  }
}