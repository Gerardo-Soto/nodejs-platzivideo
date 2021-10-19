const { Readable } = require('stream');
const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(10).concat("Batman!"));
readableStream.push(null);// end send data.

readableStream.pipe(process.stdout);// == console.log in prompt
