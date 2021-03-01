//Estrutrua de repetição - classico
// i - index

// for(let i= 0; i <= 5; i++){

//   console.log(`Linha ${i}`);
  
// }


// for(let i= 0; i <= 500; i +=5){

//   console.log(`Linha ${i}`);
  
// }


// for(let i= -100; i <= 500; i +=10){ // Valores negtivos

//   console.log(`Linha ${i}`);
  
// }

// for(let i= 500 ; i >= 400; i -=10){ // Valores invertidos

//   console.log(`Linha ${i}`);
  
// }


// for(let i= 0 ; i <=10; i++){ // Valores invertidos
//   const par = i % 2 === 0 ? 'par' : "impar";
//   console.log(`O numero: ${i} é ${par}`);
  
// }

const frutas = ['Maçã','Pêra', 'Uva','banana', 'laranja'];

for(let i = 0; i < frutas.length; i++){
  console.log(`Índice ${ i }`, frutas[i]);
}

