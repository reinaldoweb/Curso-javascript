//FActory function (Função fabrica)

//Constructor fuction (Função construtora)

function criaPessoa(nome, sobrenome, a, p){
return {
  nome,
  sobrenome,

  //Getter
  get nomeCompleto(){
    return ` ${this.nome} ${this.sobrenome}`;
  },

  //Setter
  set nomeCompleto(valor){
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  },
  fala(assunto = 'Falando sobre nada'){
    return `$(this.nome) está $(this.assunto)`;
  },

  altura: a,
  peso: p,

  //Getter
  get imc() {
    const indice = this.peso / (this.altura ** 2);
    return indice.toFixed(2);
  }

};

}

const p1 = criaPessoa('Reinaldo', 'Santos', 1.8, 95);
const p2 = criaPessoa('Carla', 'Moraes', 1.70, 85);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
