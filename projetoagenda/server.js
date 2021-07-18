require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const session = require('express-session');


mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false})
.then(() => {
  app.emit('pronto');
})
.catch(e => console.log(e));

const MongoStore = require('connect-mongo');

const routes = require('./routes');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const { addAbortSignal } = require('stream');
const csrf = require('csurf');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));


const sessionOptions = session({
  secret: 'laskdjfalskdjfaçlskdjfçalskdjflsdkalskdfja we eq weqwe',
  
  store: MongoStore.create({ mongoUrl:process.env.CONNECTIONSTRING}),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());
//app.use(helmet());
app.use(csrf());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});