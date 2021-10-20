//
const fs = require('fs');

try {
    const file =  process.argv[2]; // [0] = node [1] = sync-file.js
    const content = fs.readFileSync(file).toString();

    const lines = content.split("\n").length;
    console.log("Lines in file: " +lines);
} catch (error) {
    console.log(error);
}

