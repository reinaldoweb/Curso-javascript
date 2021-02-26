//Mais diferenças entre VAR e LET/CONST

// let tem escopo de bloco
//var escopo de função

 const verdadeira = true;

// let nome = 'Reinaldo';
// var nome2 = 'Reinaldo';

// var nome2 = 'Santos';//Varivel redeclarada
// console.log(nome, nome2);

// if (verdadeira) {
//   let nome = 'Daniel';
//   // console.log(nome, nome2);

//   if (verdadeira) {
//     let nome = 'outro nome';
//     console.log(nome, nome2);

//   }

// }

function falaOi(){
  var sobrenome = 'Santos';

  if (verdadeira) {
    console.log(sobrenome);
  }
}

falaOi();