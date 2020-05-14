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
  app.get('/courses', function (req, resp) {
    resp.marko(
      require('../views/course/listing/listing.marko'),
      {
        courses: [
          {
            id: 1,
            title: 'Node.js'
          },
          {
            id: 2,
            title: 'MongoDB'
          }
        ]
      }
    );
  });
};


