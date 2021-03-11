//Esopo léxico

const nome = 'Reinaldo';
function falaNome(){
  console.log(nome);
}
function usaFalaNome(){
  const nome = 'Jesus';
  
  falaNome();
}

usaFalaNome();