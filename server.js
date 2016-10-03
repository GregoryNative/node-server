var express = require('express');
var middleware = require('./middleware');
var app = express();

const PORT = process.env.PORT || 3000;

// app.get('/', (request, response) => {
//   response.send('Hello Express!');
// });

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (request, response) => {
  response.send(
    ' \
    <!DOCTYPE html> \
    <html> \
      <body> \
        <h1 style="color:blue;">About Us!</h1> \
      </body> \
    </html> \
    ')
});

// app.use(express.static('./public'));
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`Server -> Started on port: ${PORT}!`)
});