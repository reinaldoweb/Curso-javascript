/**
 * Some todos os numeros reduce
 * Retorne um array com os pares (filter)
 * Retorne um array com o dobro dos valores (Map)
 * 
 */

 //const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 11, 15, 22, 27];
 
 //Soma de todos os numeros
 //  const total = numeros.reduce(function(acumulador, valor, indide, array){
   //   acumulador += valor;
   //   return acumulador;
   //  },0);
   
   //  console.log(total);
   
   /**
    * Retorna arry com os pares 
    */
   
   const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 11, 15, 22, 27];
  //  const total = numeros.reduce(function(acumulador, valor){
  //    if(valor % 2 === 0) acumulador.push(valor);
  //    return acumulador;
  //  }, []);

  // const total = numeros.reduce(function(acumulador, valor){
  //   acumulador.push(valor * 2);
  //   return acumulador;
  // }, []);

  //  console.log(total);


//Retorne a pessoa mais velha

   const pessoas = [
    {nome: 'Reinaldo', idade: 53},
    {nome: 'Carla', idade: 42},
    {nome: 'Ester', idade: 22},
    {nome: 'Daniel', idade: 26},
    {nome: 'Raimundo', idade: 85},
    {nome: 'Irene', idade: 78},
  ];

  const maiorIdade = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
  });

  console.log(maiorIdade);