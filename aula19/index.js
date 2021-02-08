/*
Dados Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor copiados
*/

// let nome = 'Reinaldo';
// nome[0] = 'R';
// console.log(nome[0], nome);

// let a = 'A';
// let b = a; //Copia de let a.
// console.log(a,b);

// a = 'Outar coisa';
// console.log(a,b);

//Valores passados por referência(mutavel) - arrays, object, function - passados por referencia
// let a = [1,2,3];
// //let b = a;
// let b = [...a];
// let c = b;

// a.push(4);
// console.log(a,b);

// b.pop();
// console.log(a,b);

// a.push('Reinaldo');
// console.log(c);


//Criando objeto

const a = {
  nome: 'Reinaldo',
  sobrenome: 'Santos'
};


const b = {...a};
a.nome = 'Daniel';
console.log(a);
console.log(b);