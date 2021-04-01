function rand(min, max)
{
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg,tempo){
return new Promise((resolve, reject) =>{
  if (typeof msg !== 'string') reject('BAD VALUE');
  
setTimeout(()=> {
  resolve(msg);
}, tempo);
});
}

esperaAi('Conexao com o BD', rand(1, 3))
.then(resposta =>{
  console.log(resposta);
  return esperaAi('Busca dados na BASE', rand(1, 3));
})
.then(resposta =>
  {
    console.log(resposta);
    return esperaAi('Tratando os dados da BASE', rand(1, 3));
  })
  .then(resposta =>{
    console.log(resposta);
    return esperaAi(2222, rand(1 ,3 ));
  }).then(() =>{
    console.log('Exibe dados na tela');
  })
  .catch(e => {
    console.log('ERROR:', e);
  });
  console.log('Isso aqui aparece antes de qualquer promise.')