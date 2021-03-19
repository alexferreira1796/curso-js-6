export default function initDateObject() {

  const funcionamento = document.querySelector('.funcionamento');
  const dia = funcionamento.dataset.semana.split(',').map(Number);
  const horario = funcionamento.dataset.horario.split(',');
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = dia.indexOf(diaAgora) > -1; /// Se encontrar o dia de hoje
  const horarioAberto = horarioAgora >= horario[0] && horarioAgora < horario[1]; // Verificando o horario
  if(semanaAberto && horarioAberto)
    funcionamento.classList.add('aberto');

}

const agora = new Date();
const futuro = new Date('Dec 24 2021 23:59');
// Semana Mês Dia Ano HH:MM:SS GMT
agora.getDate() // Dia
agora.getDay() // Dia da Semana ex: 5 = Fri
agora.getMonth() // Número dia mês
agora.getFullYear() // Ano
agora.getHours() // Hora
agora.getMinutes() // Minutos
agora.getTime() // ms desde 1970
agora.getUTCHours() - 3 // Brasília

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}
function transformarHoras(tempo) {
  return tempo / (60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime()); // Desde de 1970 quantos dias
const diasFuturo = transformarDias(futuro.getTime());

console.log(diasAgora, diasFuturo);
console.log(Math.floor(diasFuturo - diasAgora));
