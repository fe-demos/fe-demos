import assert from 'assert';

const obj = {};

// 非标准属性 __proto__
console.log(obj.__proto__ === Reflect.getPrototypeOf(obj));

// __proto__ 内部自定义了 getter, setter, 当 __proto__ 被设置为 null 后，__proto__ 就表现为被 delete
obj.__proto__ = null;
console.log(obj.__proto__);
console.log(Reflect.getPrototypeOf(obj));

obj.__proto__ = null;
console.log(Reflect.getPrototypeOf(obj));
console.log(obj.__proto__);

const obj1 = { id: 'obj1' };
Reflect.setPrototypeOf(obj, obj1);
console.log(Reflect.getPrototypeOf(obj));
console.log(obj.__proto__);

function Student(id) {
    this.id = id;
}

console.log(Student.prototype === new Student(1).__proto__);
console.log(Student.prototype === Reflect.getPrototypeOf(new Student(1)));

// constructor
console.log(Student.prototype.constructor === Student);
console.log(new Student(1).constructor === Student);

// stu.__proto__ -> Object.prototype -> null
const student = new Student(6);
assert(Reflect.getPrototypeOf(Reflect.getPrototypeOf(student)) === Object.prototype);
assert(Reflect.getPrototypeOf(Object.prototype) === null);

assert(Reflect.getPrototypeOf(Student) === Function.prototype);
assert(Reflect.getPrototypeOf(Function.prototype) === Object.prototype);

function Rectangle(w, h) {
    this.w = w;
    this.h = h;
}

// 组合继承
function Square1(side) {
    // 调用父类构造函数组合实例属性
    const _this = Rectangle(side, side) || {};
    _this.side = side;
}

// 原型继承
function Square2(side) {
    this.side = side;
}

Reflect.setPrototypeOf(Square2, Object.create(Rectangle.prototype));
Square2.prototype.constructor = Square2;
Square2.prototype = Rectangle.prototype;
