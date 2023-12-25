const a = {
    value: 0,
    valueOf() {
        this.value++;
        return this.value;
    },
};
console.log(1 == a);
console.log(a == 2);
console.log(a == 3);
// 严格等不会调 valueOf, 而是直接比较地址
console.log(a === 4);

const b = {
    valueOf() {
        return 0;
    },
    [Symbol.toPrimitive]() {
        return 1;
    },
    toString() {
        return 2;
    },
};

console.log(+b); // => 1
console.log(`${b}`); // => 1
