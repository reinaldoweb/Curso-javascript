//For in ler indices ou chaves do objeto

//const frutas = ['Pera', 'Uva', 'Maçã'];

const pessoa = {
  nome: 'Reinaldo',
  sobrenome: 'Santos',
  idade: 53
};

for(let index in pessoa){
  console.log(index, pessoa[index]);
}




//Utilizando com array
// for (let index in frutas){
//   console.log(frutas[index]);
// }