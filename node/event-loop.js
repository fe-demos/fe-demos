setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
    console.log('promise.then');
});

process.nextTick(() => {
    console.log('nextTick');
});

/**
 * nextTick
 * setTimeout
 */
