const obj = {};

obj.a = obj;

// 无法序列化当然无法 clone
// console.log(JSON.parse(JSON.stringify(obj)));
const cloned2 = structuredClone(obj);
console.log(cloned2);

const obj1 = {
    m: new Map([
        ['a', 1],
        ['b', 2],
    ]),
};

// 处理不了复杂类型
// console.log(JSON.parse(JSON.stringify(obj1)));
console.log(structuredClone(obj1));
