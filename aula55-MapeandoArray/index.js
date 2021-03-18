// Dobre os números
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 11, 22, 27];
// const dobro = numeros.map(valor  => valor * 2)

// console.log(dobro);


//Para cada elemento 
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
  {nome: 'Reinaldo', idade: 53},
  {nome: 'Carla', idade: 42},
  {nome: 'Ester', idade: 22},
  {nome: 'Daniel', idade: 26},
  {nome: 'Raimundo', idade: 85},
  {nome: 'Irene', idade: 78},
];

// const nomeString = pessoas.map(obj => obj.nome)
// console.log(nomeString);


// const idades = pessoas.map(obj => ({idade: obj.idade}))
// console.log(idades);

const ids = pessoas.map(function (obj, indice) {
const newObj = { ...obj};
newObj.id = indice;
return newObj
});
console.log(ids);

