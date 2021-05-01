require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const ConnectionString = 'mongodb+srv://reiuser:7W5q5Pg9Hwf8bHt@cursojs.csg5f.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority';
  mongoose.connect(ConnectionString, { useNewUrlParser: true } )
  .then(() => console.log('Conectado a base de dados!!'));


const routes = require('./routes');
const path = require('path');
const port = 3000;
const {middlewareGlobal} = require('./src/middleware/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));


app.set('views', path.resolve( __dirname, 'src', 'views'));
app.set('view engine', 'ejs');
//Nossos próprios middleware
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () =>{

  app.listen(port, () => {
    console.log(`Servidor executando na porta http://localhost:${port}`);
});
  
});