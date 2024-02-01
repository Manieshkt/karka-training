const http = require('http');

const server= http.createServer=((req, res)=>{
  console.log('Received a request');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

console.log('Server listening on port 8080');
