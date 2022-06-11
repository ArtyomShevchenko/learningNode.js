// const fs = require("fs");
// const path = require("path");

// const value = async function showDataInFile() {
//     fs.readFile(path.resolve(__dirname, "Lorem.txt"), { encoding: "utf-8" }, (err, data) => {
//         if (err) {
//             // console.log(err);
//             return err;
//         } else {
//             // console.log("Reading complite!");
//             return data;
//         }
//     })
// };

// console.log(value())



// reading file, work!
// async function example() {
//     try {
//         const data = await fs.readFile(path.resolve(__dirname, "Lorem.txt"), { encoding: 'utf8' }, (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//                 console.log(`\nLength is ${data.length}\n`);
//             }
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

// example()