// const nome = 'Reinaldo'

// let i = 0;

// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;

// }


function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r); //Retorna um numero inteiro
}

const min = 1;
const max = 50;
let rand = 10;
//let rand = random(min, max);

while (rand !== 10) {//Checa a condição e depois executa o laço
  rand = random(min, max);
  console.log(rand);
}

console.log('*********************************')

do {
  rand = random(min, max);
  console.log(rand);

} while (rand !== 10);