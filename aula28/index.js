//Objeto Date
//const tresHoras = 60 * 60 *3 *1000;
//const umDia = 60 * 60 *24 * 100;
// const data = new Date(0 + tres - umDia); //
//const data =new Date(2019, 3);

// const data = new Date('2019-04-20 20:20:59'); // Função construtora
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());//Começa do zero
// console.log('Ano', data.getYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 - Dominho, 6 Sábado
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`;

}

function formataData(){
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

