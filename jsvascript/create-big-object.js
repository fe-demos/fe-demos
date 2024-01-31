function createBigObject(depth) {
    const obj = {};
    for (let i = 0; i < 30000; i++) {
        obj[i + Math.floor(Math.random() * 10000)] = {
            [Math.random() * 10000]: Math.random() * 10000,
        };
    }
    return obj;
}

createBigObject(0);
// console.log(createBigObject(0));
