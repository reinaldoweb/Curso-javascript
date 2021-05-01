const pessoas = [
  {nome: 'Reinaldo', idade: 53},
  {nome: 'Carla', idade: 42},
  {nome: 'Ester', idade: 22},
  {nome: 'Daniel', idade: 26},
  {nome: 'Raimundo', idade: 85},
  {nome: 'Irene', idade: 78},
];

//Pessoas com o nome maior que 5 letras

// const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7
// )
// console.log(pessoasComNomeGrande);

//PEssoas com mais de 50 anos
// const pessoasAnos = pessoas.filter(obj => obj.idade > 50 )

// console.log(pessoasAnos);

//Retorne as pessoas cujo nome termina com a letra A

const pessoasTerminaComLetraA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a')

)

console.log(pessoasTerminaComLetraA);