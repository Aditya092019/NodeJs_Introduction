const fs = require("fs");

// sync
// fs.writeFileSync("./test.txt", "Hello World");

// Async
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// })

fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./text.txt"));

fs.mkdirSync("my-docss/a/b", {recursive: true});