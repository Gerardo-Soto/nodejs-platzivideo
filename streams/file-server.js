const fs = requireO('fs');
const server = require('http').createServer;
const port = 3000;

server.on('request', (req, res) => {
    fs.readFile("../big", (err, data) => {
        if (err) {
            console.log('error', err);
        } 

        res.end(data);
    });
})

server.listen(port);
console.log('Server listen at 127.0.0.1:'+ port);

