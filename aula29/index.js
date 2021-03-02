function getDiaSemanaTexto(diaSemana){
  let diaSemanaTexto;


  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda-feira';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça-feira';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta-feira';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta-feira';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta-feira';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = 'Não é um dia da semana.';
  
  }

}
const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);