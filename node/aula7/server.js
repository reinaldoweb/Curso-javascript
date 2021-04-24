const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.send('Hello Word'); 

});

app.post('/', (req, res) => {
  res.send("Recebi o fomulário")
});

app.get('/', (req, res) => {
  res.send('Obrigado por entrar em contato.');
});

app.listen(port, () => {
  console.log(`Exemplo app listando na parta http://localhost:${port}`);
});