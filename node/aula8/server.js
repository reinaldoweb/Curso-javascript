const express = require('express');

const app = express();

app.use(
  express.urlencoded(
    {
      extended: true
    }
  )
);
const port = 3000;

app.get('/', (req, res) => {

    res.send(`
    <form action="/" method="POST">
    Nomes: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `); 

});

app.get('/testes/:idUsuario?', (req, res) => {
  console.log(req.params);
  res.send('olá');
})

app.post('/', (req, res) => {
  res.send("Recebi o fomulário")
});

app.get('/', (req, res) => {
  res.send('Obrigado por entrar em contato.');
});

app.listen(port, () => {
  console.log(`Exemplo app listando na parta http://localhost:${port}`);
});