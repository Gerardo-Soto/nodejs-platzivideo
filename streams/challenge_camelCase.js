const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding, callback){
        camelCase = chunk.toString();
        camelCase = camelCase.split(' ');
        camelCase.forEach(Element => {
            const lower = Element.toLowerCase();
            this.push(Element.charAt(0).toUpperCase() + 
            lower.slice(1));
        })
        //this.push(null);
        
        callback();
    }
});

//      in var duplex on prompt       print out process           
process.stdin.pipe(transformStream).pipe(process.stdout);
