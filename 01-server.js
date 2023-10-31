const http = require('http');

const server = http.createServer((request, response)=>{
    console.log("We should get this console log every time we make a request to the server");
    response.write('{"name": "Marina"}');
    response.end();
});

server.listen(3000);