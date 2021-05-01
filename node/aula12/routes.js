const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//Rota da home
route.get('/', homeController.paginaInicial);
route.post('/',homeController.trataPost);
//Rota de contato
route.get('/contato', contatoController.paginaContato);

module.exports = route;