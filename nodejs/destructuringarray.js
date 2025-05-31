// const user = {
//   name: 'Mohit',
//   age: 25,
//   city: 'Jaipur'
// };

// const { name, age, city } = user;

// console.log(name); // Mohit
// console.log(age);  // 25
// console.log(city); // Jaipur

// const colors = ['red', 'green', 'blue'];

// const [first, second, third] = colors;

// console.log(first);  // red
// console.log(second); // green
// console.log(third);  // blue


// --- Node.js Environment ---
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');

// console.log('\n=== Node.js Environment ===');
// console.log('Platform:', os.platform());
// console.log('CPU Architecture:', os.arch());
// console.log('Free Memory:', os.freemem(), 'bytes');

// --- Event-Driven Architecture ---
// console.log('\n=== Event-Driven Architecture ===');
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log("Hello",` ${name}!`);
});

myEmitter.emit('greet', 'Alice');

// --- Non-Blocking I/O ---
// console.log('\n=== Non-Blocking I/O ===');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);
    console.log('File content:', data);
});

// console.log('Reading file asynchronously...');

// // --- Event Loop and Asynchronous Programming ---
// console.log('\n=== Event Loop ===');
// console.log('Start');

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise');
// });

// console.log('End');