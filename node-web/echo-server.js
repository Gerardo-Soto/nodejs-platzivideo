const http  = require('http');
const server = http.createServer();
const port = 3000;

server.on("request", (req, res) => {

    if (req.method === 'POST' && req.url == "/echo") {
        let body = [];

        req.on("data", chunk => {
            // receive data and add to body:
            body.push(chunk);
        })
        .on("end", () => {
            res.writeHead(200, { "Content-Type": "text/plain"});
            body = Buffer.concat(body).toString();
            res.end(body);
        });
        
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port);
console.log("Server at http://localhost:"+ port);

