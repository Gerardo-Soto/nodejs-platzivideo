const fs = require('fs');
const file = fs.createWriteStream("./big");

for (let i = 0; i < 1e6; i++) {
    file.write(
        "We continuously map the web and other sources to connect you to the most relevant, helpful information."
    );
}

file.end();