function sum(...args1) {
    const elements = [];

    const f = (...args2) => {
        if (args2.length === 0) {
            return elements.reduce((acc, ele) => acc + ele, 0);
        }

        elements.push(...args2);
        return f;
    };

    return f(...args1);
}

console.log(sum(1)(2, 3)(4, 5, 6)()); // => 21
console.log(sum(1, 2)());
