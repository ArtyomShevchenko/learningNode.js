const fs = require("fs");

const file = fs.readFileSync("index.html", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    };

    return data;
})

console.log(file)