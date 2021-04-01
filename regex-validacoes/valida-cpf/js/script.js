import ValidateCpf from './modules/validate-cpf.js';
import ValidateEmail from './modules/validate-email.js';

// CPF
const cpf = document.querySelector('#cpf');
const validateCpf = new ValidateCpf(cpf).init();
console.log(validateCpf);

// Email
const email = document.querySelector('#email');
const validateEmail = new ValidateEmail(email).init();
console.log(validateEmail);
