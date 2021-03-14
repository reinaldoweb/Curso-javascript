function Calculadora() {
  this.display = document.querySelector('display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => {

      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);


    });
  };


  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert('Operação invalida');
        return;
      }
      this.display.value = conta;

    } catch (e) {
      alert('Operação invalida!')
      return;

    }
  };

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => this.display = '';
  this.del = () => this.display.value = this.display.slice(0, -1);

}

const calculadora = new Calculadora();
calculadora.inicia();