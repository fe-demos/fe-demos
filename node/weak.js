console.log(process.memoryUsage());
console.log('总共可用：', process.memoryUsage().heapTotal / 1024 / 1024);
let lastUsed = process.memoryUsage().heapUsed / 1024 / 1024;
console.log('used:', lastUsed);

let array = Array.from({ length: 1024 * 1024 * 1 }, () => ({}));
let currentUsed = process.memoryUsage().heapUsed / 1024 / 1024;
console.log('changed:', currentUsed - lastUsed);
// 总可使用的堆内存会自动扩容
console.log('总共可用：', process.memoryUsage().heapTotal / 1024 / 1024);
lastUsed = currentUsed;

const set = new WeakSet();
for (const e of array) {
    set.add(e);
}
currentUsed = process.memoryUsage().heapUsed / 1024 / 1024;
console.log('changed:', currentUsed - lastUsed);
lastUsed = currentUsed;

array = null;
// 在标记清除时，WeakSet 对保存的元素的弱引用视为不可达，因此这里会直接回收
globalThis.gc();
currentUsed = process.memoryUsage().heapUsed / 1024 / 1024;
console.log('changed:', currentUsed - lastUsed);
lastUsed = currentUsed;
// {
//     rss: 32784384,
//     heapTotal: 4177920,
//     heapUsed: 3359792,
//     external: 1326950,
//     arrayBuffers: 12025
// }
// 总共可用： 4.234375
// used: 3.6729965209960938
// changed: 63.72722625732422
// 总共可用： 90
// changed: 74.94236755371094
// changed: -139.5405044555664
