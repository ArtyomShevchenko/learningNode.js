const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //   res.end('Hello World');
    res.end(index);
})

server.listen(port, hostname, () => {
    console.log(`----------\nServer running at http://${hostname}:${port}/`);
});
// ------------------------------------------------------