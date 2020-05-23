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
    db.all('SELECT * FROM courses', function(error, results) {
    resp.marko(
      require('../views/course/listing/listing.marko'),
      {
        courses: results
      }
    );
  });
};
