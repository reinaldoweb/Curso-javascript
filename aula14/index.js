let num1 =0.7;
let num2 = 0.1;

//console.log(num1.toString() + num2);
//console.log(typeof num1);

//console.log(num1.toString(2));//Representação binaria
//console.log(num1.toFixed(2));//Representação de casas decimais
//console.log(Number.isInteger(num1));//Verifica se o numero é inteiro
// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp));  // Verifica se é um numero

num1 =((num1* 100) + (num2 * 100))/ 100;

console.log(num1);
console.log(Number.isInteger(num1));