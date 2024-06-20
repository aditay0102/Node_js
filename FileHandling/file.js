const fs = require("fs");

// syncronous call 
// fs.writeFileSync('./test.txt','Hey There');// created a file in current directory;

fs.appendFileSync("./test.txt","Hey there \n yo yo boi");

// for copy 
fs.cpSync("./test.txt","./copyt.txt");


// for deleting 
fs.unlinkSync("./copyt.txt");

// for creating folder
//fs.mkdirSync("my-docs");
fs.mkdirSync("my-docss/a/b",{recursive: true});


// blocking and non blockig 

// Async
//fs.writeFile("./test.txt","hello world Async",(err) => {});