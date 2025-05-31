const { log } = require('console');
const  os = require('os');
const path = require('path');

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.EOL);
console.log(os.arch);
//
console.log(path.join);
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// Returns: 'quux.html'

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));
// Returns: 'quux'