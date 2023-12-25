function _new(cons, args) {
    const instance = Object.create(cons.prototype);
    const result = cons.apply(instance, args);
    return (result !== null && typeof result === 'object') || typeof result === 'function'
        ? result
        : instance;
}

function Student(id) {
    this.id = id;
}

function Student1(id) {
    this.id = id;
    return () => {};
}

console.log(new Student(1).id);
console.log(new Student1(1).id);

console.log(_new(Student, [1]));
console.log(_new(Student1, [1]));
