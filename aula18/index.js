const pessoa1 = { //objeto
  nome: 'Reinaldo',
  sobrenome: 'Santos',
  idade: 53,
fala (){
  console.log(`A minha idade atual é ${this.idade}.`);

},
incrementaIdade(){
  this.idade++;
}

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// console.log(pessoa1.nome);

// function criaPessoa(nome,sobrenome,idade){
//   return {
//     nome,
//     sobrenome,
//     idade
//   };
// }
  
//   const pessoa1 = criaPessoa('Reinaldo','Santos',53);
//   const pessoa2 = criaPessoa('Carla','Reis',41);
//   const pessoa3 = criaPessoa('Daniel','Santos',26);
//   const pessoa4 = criaPessoa('Ester','Moraes',21);
//   console.log(pessoa1.nome, pessoa2.nome)