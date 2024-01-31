function set(obj, keyPath, value) {
    let i = 0;
    while (i < keyPath.length - 1) {
        const key = keyPath[i];
        const current = obj[key];
        if (current === undefined) {
            obj[key] = {};
        }
        obj = obj[key];
        i++;
    }

    obj[keyPath[i]] = value;
}

function transform(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        set(result, key.split('.'), value);
    }
    return result;
}

console.log(
    transform({
        A: 1,
        'B.C': 2,
        'B.D.E': 3,
        'CC.DD.EE': 4,
    }),
);
