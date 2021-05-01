// Try -> Tentar
// Catch -> Pegar
//Throw -> lançar

// function soma(x,y){

//   if(typeof x !== 'number' ||
//   typeof y !== 'number'
//   ){
//     throw new Error('x e y precisarm ser números.');

//   }
//   return x + y;
// }

// try{
//   console.log(soma(1,2));
//   console.log(soma('1',2));

// }catch(error){
//   console.log(error);
//   console.log('Alguma coisa mais amigavel para o usuario');
// }

// try{
//   //console.log(a);
//   console.log('Abri um arquivo');
//   console.log('Manipulei o arquivo e gerou erro');
//   console.log('Fechei o arquivo');

//   /**É executado quando há erros */

//   try{
//     console.log(b);
//   }catch(e){
//     console.log('Deu erro');
//   }finally{
//     console.log('Também sou finally');
//   }

// }catch(e){
//   console.log('Tratando o erro');
// }finally{/**Sempre será executado */
//   console.log('FINALLY: Eu sempre sou executado');

// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');

  }
  if (!data) {
    data = new Date();
    return data.toLocaleTimeSting('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
}

try{

  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora()
  console.log(hora);

}catch(e){
  //tratar erro

  //console.log(e);
}finally{
  console.log('Tenha um bom dia');
}

