console.log('hdfdjfkdf d')

const http = require('node:http');

//const hostname = '127.0.0.1';
//const port = 9000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen( () => {
  console.log(`Server running at http://${'127.0.0.1'}:${'9000'}/hello`);
}); 
