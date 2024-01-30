Array.prototype.reduce = function (callback, init) {
    let array = this;
    let acc = init;
    if (init === undefined) {
        acc = array[0];
        array = array.slice(1);
    }

    for (const [index, item] of array.entries()) {
        acc = callback(acc, item, init === undefined ? index + 1 : index);
    }
    return acc;
};
