const express = require('express');

const server = express();

server.get("/", (request, response)=>{
    response.send('<h1>THE HOMEPAGE</h1>') // i can also send a JSON FILE
    // With express I dont need to tell the response to end
})
server.get("/about", (request, response)=>{
    response.send('<h1>THE ABOUT PAGE</h1>') // i can also send a JSON FILE
    // With express I dont need to tell the response to end
})

server.listen(3000, ()=>{
    console.log("The server is running on port 3000");
})