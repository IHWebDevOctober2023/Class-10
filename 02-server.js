const http = require('http');

const server = http.createServer((request, response)=>{
    console.log(request.url);
    if(request.url === "/"){
        response.write('This is going to be the general information');
    }else if(request.url === "/marcel"){
        response.write('{"name": "MARCEL", "role": "The best Teacher"}');
    }
    response.end();
});

server.listen(3000);