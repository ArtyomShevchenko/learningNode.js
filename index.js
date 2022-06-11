const fs = require("fs");
const path = require("path");


// fs.mkdirSync("dir1");

// fs.writeFile(path.resolve(__dirname, "data.txt"), "Hello file system!", () => {
//     console.log("Finish create file !");
// });

// console.log(path.dirname(__dirname, ".."))

// fs.writeFile(path.resolve(path.dirname(__dirname, ".."), "newText.txt"), "content...", (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log("Create new file");
// });

// console.log(fs.mkdir(path.dirname()), () => {})

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
</body>

</html>`;

// fs.writeFile( path.resolve(__dirname, "index.html"), htmlTemplate, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Create new file");
//     }
// } );

// fs.appendFile( path.resolve(__dirname, "script1.js"), "test 1", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     };
// });

