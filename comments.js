// Create web server 
 // Create a web server that listens on port 8080. 
// When you visit http://localhost:8080/ in your browser, it should display "Hello, World!".

// Create a web server that listens on port 8080. 
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end();
});

server.listen(8080);