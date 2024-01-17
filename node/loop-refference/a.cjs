exports.c = () => {
    console.log('c');
};

const { b } = require('./b.cjs');
const a = () => {
    b();
    console.log('a');
};

exports.a = a;

a();
