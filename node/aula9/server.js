const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');


app.use(express.urlencoded({extended:true}));

app.use(routes);




app.listen(port, () => {
  console.log(`Exemplo app listando na parta http://localhost:${port}`);
});