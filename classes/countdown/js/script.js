import Countdown from './modules/coutdown.js';

const contentNatal = document.querySelector('.natal');
const contentAnoNovo = document.querySelector('.anonovo');

const date = new Date();
const natal = new Countdown(`24 December ${date.getFullYear()} 23:59:59 GMT-0300`);
const anoNovo = new Countdown(`31 December ${date.getFullYear()} 23:59:59 GMT-0300`);

natal.timer(contentNatal);
anoNovo.timer(contentAnoNovo);
