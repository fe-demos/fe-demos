const obj = {
    *[Symbol.iterator]() {
        yield 'a';
        yield 'b';
        return 'c';
    },
};

for (const item of obj) {
    console.log(item);
}

function* gen() {
    yield 'a';
    yield 'b';
    return 'c';
}

const genObj = gen();
let result = genObj.next();
while (!result.done) {
    console.log(result.value);
    result = genObj.next();
}

console.log(result.value);
