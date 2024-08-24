export default class Funcionamento {
  constructor(data) {
    this.funcionamento = document.querySelector(data);
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dataAtual() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours();
  }

  estaAberto() {
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
       && this.horarioAgora < this.horarioSemana[1]);
    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add('aberto');
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dataAtual();
      this.ativaAberto();
    }
    return this;
  }
}
