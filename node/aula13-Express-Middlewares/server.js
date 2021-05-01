const express = require('express');
const app = express();
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


app.listen(port, () => {
  console.log(`Servidor executando na porta http://localhost:${port}`);
});