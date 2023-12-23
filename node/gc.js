console.log(process.memoryUsage());
let lastUsed = process.memoryUsage().heapUsed / 1024 / 1024;
console.log('used:', lastUsed);

let array = Array.from({ length: 1024 * 1024 * 5 }, () => 's');
let currentUsed = process.memoryUsage().heapUsed / 1024 / 1024;
console.log('changed:', currentUsed - lastUsed);
lastUsed = currentUsed;

array = null;
// 如果不手动调用 gc 不会立即回收，所以是不是可以认为 v8 没有使用引用计数法
// globalThis.gc();
currentUsed = process.memoryUsage().heapUsed / 1024 / 1024;
console.log('changed:', currentUsed - lastUsed);
lastUsed = currentUsed;

// {
//     rss: 32882688,
//     heapTotal: 4177920,
//     heapUsed: 3358504,
//     external: 1326543,
//     arrayBuffers: 11618
// }
// used: 3.6700973510742188
// changed: 40.00189208984375
// changed: 0.00189208984375
