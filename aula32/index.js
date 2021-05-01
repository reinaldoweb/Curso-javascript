//Atribiioção via desestruturação

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// //const [um, dois, tres, ...resto] = numeros;
// const [um, , tres, cinco, , sete] = numeros;
// console.log(um, tres, cinco);
// //console.log(resto);

//                  1         2          3
//               0   1 2    0  1  2    0  1  2 
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8,9 ]];
const [lista1, lista2, lista3]= numeros;
console.log(lista3[1]);
//console.log(numeros[1][2]);