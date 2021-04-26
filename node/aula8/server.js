const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
const port = 3000;

app.get('/', (req, res) => {

    res.send(`
    <form action="/" method="post" name="nome">
    Nome do cliente: <input type="text" name="nome">
    E-mail do cliente: <input type="text" name="email">

    <button>Enviar</button>
    </form>
    `); 
});

app.get('/testes/:idUsuarios?/:parametro?', (req,res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi:${req.body.nome} -  ${req.body.email} `);
});


app.listen(port, () => {
  console.log(`Exemplo app listando na parta http://localhost:${port}`);
});