const { Transform } = require('stream');

const transformStream = new Transform({
    // transform constructor
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();    
    }
});

//      in var duplex on prompt       print out process           
process.stdin.pipe(transformStream).pipe(process.stdout);

