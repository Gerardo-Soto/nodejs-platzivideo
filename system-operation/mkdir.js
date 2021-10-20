const fs = require('fs');

fs.mkdir("/test/node/mkdir", {recursive: true}, err => {
    if (err) {
        return console.log(err);
    }
})
