exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="post" name="nome">
  Nome do cliente: <input type="text" name="nome">
  E-mail do cliente: <input type="text" name="email">

  <button>Enviar</button>
  </form>
  `); 
};

exports.trataPost = (req, res) =>{
  res.send('Sou sua nova rota de post');
};