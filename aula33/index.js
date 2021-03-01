//Atribuição via desestruturação {objeto}

const pessoa = {
  nome: 'Reinaldo',
  sobrenome: 'Santos',
  idade: 53,
  endereco:{
    rua: 'Rua poriguar',
    numero: 40
  }

};

//Atribuição via desestruturação

const { nome, sobrenome,  ...resto} = pessoa;
console.log(nome, resto);