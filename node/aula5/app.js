
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

async function lerArquivo(caminho){
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados){
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val.nome));
}
lerArquivo(caminhoArquivo);
// const pessoas = [
//   { nome: 'Reinaldo' },
//   { nome: 'Daniel' },
//   { nome: 'Carla' },
//   { nome: 'Ester' },
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);