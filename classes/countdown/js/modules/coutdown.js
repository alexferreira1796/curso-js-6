class Countdown {
  constructor(futereDate) {
    this.futereDate = futereDate;
  }
  get _dateNow() {
    return new Date(); // Setando a data de hoje
  }
  get _futereDate() {
    return new Date(this.futereDate); // Setando a data do futuro
  }
  get _timeStampDiff() {
    return this._futereDate.getTime() - this._dateNow.getTime(); // Diferença do timestamp entre a data do futuro e a atual
  }
  get _days() {
    return Math.floor( this._timeStampDiff / (24 * 60 * 60 * 1000) ); // Calculo matematico para os dias (24 horas * 60 minutos * 60 secundos * 1000 milesegundos)
  }
  get _hours() {
    return Math.floor( this._timeStampDiff / (60 * 60 * 1000) ); // Calculo matematico para os dias ( 60 minutos * 60 secundos * 1000 milesegundos)
  }
  get _minutes() {
    return Math.floor( this._timeStampDiff / (60 * 1000) ); // Calculo matematico para os dias (60 secundos * 1000 milesegundos)
  }
  get _seconds() {
    return Math.floor( this._timeStampDiff / 1000); // Calculo matematico para os dias (1000 milesegundos)
  }
  
  // Metodo para formatar hora
  format(time) {
    return time < 10 ? `0${time}` : time;
  }

  // Metodo de setInterval para exibir o temporiazador
  timer(target) {
    setInterval(() => {
      const days = this.data().days;
      const hours = this.data().hours;
      const minutes = this.data().minutes;
      const seconds = this.data().seconds;
      target.innerHTML = `<span>${days}<small> dias </small> ${hours}:${minutes}:${seconds}<span>`;
    }, 1000);
  }

  // Retorna um objeto com todas os dados do tempo
  data() {
    const diff = this._timeStampDiff;
    const days = this._days;
    const hours = this.format(this._hours % 24); // Resto da divisao por 24 horas
    const minutes = this.format(this._minutes % 60); // Resto da divisao por 60 minutos
    const seconds = this.format(this._seconds % 60); // Resto da divisao por 60 segundos
    return {
      diff,
      days,
      hours,
      minutes,
      seconds
    }
  }
}
export default Countdown