
// import { simple, simple2 } from "./moduletwo.mjs";
// simple();
// simple2();


// import { simple } from "./moduletwo.mjs";
// simple();

// import { simple2 } from "./moduletwo.mjs";
// simple2();


// import { simple2 as simple1} from "./moduletwo.mjs";
// simple1();



import * as all from "./moduletwo.mjs";
console.log(all);
all.simple();
all.simple2();
// for use of import add type module to json file

// const myURL = new URL('https://example.org');
// myURL.pathname = '/a/b/c';
// myURL.search = '?d=e';
// myURL.hash = '#fgh';
// console.log(myURL);
