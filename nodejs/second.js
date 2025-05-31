//exports

mohit = {
    id : 4,
    class : 5,
    city : "jaipur"
}

// console.log(exports, require, module, __filename, __dirname);
module.exports = mohit;

const func = function () {
    console.log("simple");
};
module.exports = func;

