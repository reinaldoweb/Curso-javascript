// Try -> Tentar
// Catch -> Pegar
//Throw -> lançar

function soma(x,y){

  if(typeof x !== 'number' ||
  typeof y !== 'number'
  ){
    throw new Error('x e y precisarm ser números.');

  }
  return x + y;
}

try{
  console.log(soma(1,2));
  console.log(soma('1',2));

}catch(error){
  console.log(error);
  console.log('Alguma coisa mais amigavel para o usuario');
}