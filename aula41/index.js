//Escreva uma função que receba 2 números e retorne o maior deles

// function max(x, y){

//   return x > y ? x : y;
// }


// const max2 = (x,y) =>  x > y ?  x : y;
// console.log(max2(100, 2));

//Escreva uma função chamda ePaisagem que 
//receba dois argumentos, lagura e altura
//de uma imagem (number).
//Retorne true se a imagem estiver no modo
//paisagem


// function ePaisagem(largura , altura ){
//  return largura > altura;

// }
// console.log(ePaisagem(1080, 1920));

// const ePaisagem = (largura, altura) => largura > largura;
// console.log(ePaisagem(1920, 1080));

/** Escreva uma função que receba um número e
 * retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número divisíve por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número Não é divisível por 3 e 5 = Retorna o próprio numerio
 * chegar se p número é ralmente um numero = Retorna o próprio númerp
 * Use a função com numeros de 0 a 100
 * 
 */

function fizzBuzz(numero) {
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuz';
  if (numero % 3 == 0) return 'Fizz';
  if (numero % 5 == 0) return 'Buzz';
  return numero;

}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzbuzz(i))
}