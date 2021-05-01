const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.send(`
    <form action="/" method="post" name="nome">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `); 

});

app.post('/', (req, res) => {
  res.send("Recebi o fomulário")
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato.');
});

app.listen(port, () => {
  console.log(`Exemplo app listando na parta http://localhost:${port}`);
});