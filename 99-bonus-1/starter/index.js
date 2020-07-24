const fs = require('fs');
const http = require('http');
const url =  require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    
    const pathName = url.parse(req.url, true).pathname;
    
    if (pathName === '/products' || pathName === '/') {
        // As a HEADER to our response, we write '200' for ok, as well as the CONTENT TYPE of what we are about to send back
        res.writeHead(200, {'Content-type':'text/html'});
        
        // The RESPONSE itself
        res.end('This is the PRODUCTS page!');

    } else if (pathName === '/laptop') {
        res.writeHead(200, {'Content-type':'text/html'});
        res.end('This is the LAPTOP page!');
    } else {
        res.writeHead(404, {'Content-type':'text/html'});
        res.end('URL was not found on the server');
    }

});

server.listen(1337, '127.0.0.1', () => {
    console.log('Server is listening for requests');
});

