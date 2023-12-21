function _instanceOf(instance, cons) {
    return cons.prototype.isPrototypeOf(instance);
}

class Man {}
class Student extends Man {}

console.log(_instanceOf(new Student(), Man));
