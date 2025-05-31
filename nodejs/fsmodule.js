const fs = require('fs');
const { EventEmitter } = require('stream');


// readFile
fs.readFile('example.txt','utf8',(err , data) => {
    console.log(err, data);
});


// readFileSync
const a = fs.readFileSync('one.txt');
console.log(a);
console.log(a.toString());


//writeFile
fs.writeFile('one.txt', `\n${a.toString()}\nHello sir how are you`, () => {
    console.log("Written to the file");
});



//writeFileSync
fs.writeFileSync('one.txt', "This is file");


