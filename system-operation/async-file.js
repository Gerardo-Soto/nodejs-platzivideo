const fs = require('fs');

//try {
const file =  process.argv[2]; // [0] = node [1] = sync-file.js
    //const content = fs.readFileSync(file).toString();
const content = fs.readFile(file, function(err, content) {// err = try/catch
    if (err) {
        return console.log(err);
    }
    console.log(content);
    const lines = content.toString().split("\n").length;
    console.log("Lines in file: " +lines);
});// readFile = Async

/*} catch (error) {
    console.log(error);
}*/

