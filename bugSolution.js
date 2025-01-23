const http = require('http');
const stream = require('stream');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = new stream.PassThrough();
    req.pipe(data);
    data.on('data', chunk => {
      // Process chunks of data here
      console.log('Received chunk:', chunk.length);
    });
    data.on('end', () => {
      res.writeHead(200);
      res.end('OK');
    });
    data.on('error', (err) => {
      console.error('Error processing request:', err);
      res.writeHead(500);
      res.end('Error');
    });
  } else {
    res.writeHead(405);
    res.end('Method Not Allowed');
  }
}).listen(3000); 
console.log('Server is listening on port 3000');