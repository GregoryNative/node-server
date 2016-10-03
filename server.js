var express = require('express');
var app = express();

const PORT = 3000;

// app.get('/', (request, response) => {
//   response.send('Hello Express!');
// });

var middleware = {

  requireAuthentication: (request, response, next) => {
    console.log('private route hit!');
    next();
  },

  logger: (request, response, next) => {
    console.log(`[${new Date().toString()}] Request: ${request.method} ${request.originalUrl}`);
    next();
  },


};

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (request, response) => {
  response.send(
    ' \
    <!DOCTYPE html> \
    <html> \
      <body> \
        <h1 style="color:blue;">About Page</h1> \
      </body> \
    </html> \
    ')
});

// app.use(express.static('./public'));
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`Server -> Started on port: ${PORT}!`)
});