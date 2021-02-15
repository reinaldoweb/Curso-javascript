//Operador ternario
//(condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
 const pontuacaoUsuario = 9000;
 const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal';

 const corUsuario = null;
 const corPadrao = corUsuario || 'preta';

 console.log(nivelUsuario, corPadrao);













// if (pontuacaoUsuario >= 1000) {
//   console.log('Usuario Vip');
// }else{
//   console.log('Usuario normal');
// }