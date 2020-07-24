const fs = require('fs');
const http = require('http');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    
    // Every time the server gets accessed, our response is:

    // 1. We log it to the console, just for feedback's sake (not necessary)
    console.log('Someone accessed the server!');
    
    // 2. As a HEADER to our response, we write '200' for ok, as well as the CONTENT TYPE of what we are about to send back
    res.writeHead(200, {'Content-type':'text/html'});
    
    // 3. The RESPONSE itself
    res.end('This is the response!');
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Server is listening for requests');
});

