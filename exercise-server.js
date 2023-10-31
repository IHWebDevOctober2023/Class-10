// Exercise SERVER

const express = require("express");
const data = require("./data.json")

const server = express();

// WHAT IS CORS??? Security layer, to prevent malicious requests
// When the browser makes a request to the server, the server sends back a header that says:
// "I am allowing this domain to make requests to me"
// If the domain is not allowed, the browser will block the request
// CORS is a middleware that adds the header to the response
// CORS is a package that we need to install

const cors = require("cors");

// server.use(cors());

server.get("/", cors(), (req, res) => { // middleware is a function that runs before the callback
    res.send(data)
});


server.listen(3000, () => {
    console.log("Server is running on port 3000");
});