const { c } = require('./a.cjs');

exports.b = () => {
    c();
    console.log('b');
};
