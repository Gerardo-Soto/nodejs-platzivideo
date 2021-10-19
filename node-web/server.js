const http  = require('http');
const server = http.createServer();
const port = 3000;

server.on("request", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.end("Hello, World!\n");
});

server.listen(port);
console.log("Server at http://localhost:"+ port);

