//Argumentos que sustenta todos os argumentos enviados

// function funcao() {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);


// function funcao(a, b = 2, c = 4) {
//   console.log(a + b + c);
// }
// funcao(2, undefined, 20);

//Função com desestruturação

// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade);
// }
// funcao({ nome: 'Reinaldo', sobrenome: 'Jesus', idade: '53' });

// const conta = function(operador, acumulador, ...numeros) {
//   for (let numero of numeros) {
//    if(operador === '+') acumulador += numero;
//    if(operador === '-') acumulador -= numero;
//    if(operador === '*') acumulador *= numero;
//    if(operador === '/') acumulador /= numero;
//   }
//   console.log(acumulador);
// };
// conta('+', 10, 20, 30, 40, 50);
// conta('-', 110, 20, 30, 40, 50);
// conta('*', 1, 20, 30, 40, 50);
// conta('/', 1, 20, 30, 40, 50);

// const conta = (operador, acumulador, ...numeros) =>{
//   console.log(operador, acumulador, numeros);
// };
// conta('+',1, 20, 30, 40, 50)

const conta = (...args) =>{
  console.log(args);
};
conta('+',1, 20, 30, 40, 50)