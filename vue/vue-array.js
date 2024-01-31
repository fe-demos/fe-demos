// 获取数组的原型
const arrayProto = Array.prototype;
// 基于数组的原型创建一个新的对象
const middleProto = Object.create(arrayProto);

// 一个要被重写的方法列表
const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

for (const method of methodsToPatch) {
    // 缓存原始方法
    const original = arrayProto[method];
    // 定义重写的方法
    Object.defineProperty(middleProto, method, {
        value: function mutator(...args) {
            // 调用原始方法
            const result = original.apply(this, args);
            // 获取数组对象的 ob 对象，它是一个 Observer 实例
            const ob = this.__ob__;
            // 通知变更
            ob.dep.notify();
            return result;
        },
        enumerable: false,
        writable: true,
        configurable: true,
    });
}

// 假设 arr 是 Vue 管理的数组
// 将 arr 的原型指向重写了方法的对象
Reflect.setPrototypeOf(arr, middleProto);
