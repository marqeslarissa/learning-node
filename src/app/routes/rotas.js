module.exports = (app) => {
  app.get('/', function (req, resp) {
    resp.send(`
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>Servidor executando</h1>
        </body>
      </html>
    `);
  });
  app.get('/contato', function (req, resp) {
    resp.send(`
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>Contato</h1>
        </body>
      </html>
    `);
  });
};


