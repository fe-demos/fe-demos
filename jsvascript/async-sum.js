function add(a, b, callback) {
    return setTimeout(() => {
        callback(a + b);
    });
}

const _add = (a, b) => {
    return new Promise((resolve) => {
        add(a, b, (result) => resolve(result));
    });
};

async function sum(...args) {
    let result = 0;
    for (const arg of args) {
        result = await _add(result, arg);
    }
    return result;
}

sum(1, 2, 3).then((value) => console.log(value)); // => 6
