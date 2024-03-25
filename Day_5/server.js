// const http = require('http')

// const server = http.createServer((req,res)=>{
   
//     if(req.url=='/hello'){
//         res.send('hello world this is my first server')
//     }
//     else{
//         res.send('you hit the wrong url')
//     }
// })

// server.listen(8000,()=>{
//     console.log('server is started')
// })


const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/hello') {
    console.log('hello world this is my first server');
  //  res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } else {
    console.log('you hit the wrong url');
   // res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Wrong URL!');
  }
});

server.listen(8000, () => {
  console.log('Server is started');
});