const fs = require('fs');

fs.copyFile("text.txt", "copy-text.txt", err => {
    if (err) {
        console.log(err);
    }
    console.log("text.txt was copied like copy-text.txt");
})