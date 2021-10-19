const fs = requireO('fs');
const server = require('http').createServer;
const port = 3000;

    // res (response Object) > type: stream
server.on('request', (req, res) => {
    //fs.readFile("../big", (err, data) => {
    const src = fs.createReadStream("../big");
    src.pipe(res);
})

server.listen(port);
console.log('Server listen at 127.0.0.1:'+ port);

