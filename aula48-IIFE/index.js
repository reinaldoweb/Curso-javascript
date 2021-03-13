(function(idade, peso, altura){

  const sobreNome = 'Santos';
  function criaNome(nome){
    return nome + '' + sobreNome;
  }
  function falaNome(){
      console.log(criaNome('Reinaldo'));
  }
  falaNome();
  console.log(idade, peso, altura)
})(53, 95, 1.80);