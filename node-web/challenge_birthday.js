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

            const myBirthDay = new Date(body);
            const myDay = myBirthDay.toDateString();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayName = days[myBirthDay.getDay()];
            //res.end('You born on ' + myDay.substring(0,3));
            res.end('You born on ' + dayName);
        });
        
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port);
console.log("Server at http://localhost:"+ port);
