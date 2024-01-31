function cloneDeep(value) {
    const map = new Map();

    function _cloneDeep(value) {
        const isObject = typeof value === 'object' && value !== null;

        if (!isObject) return value;

        if (map.has(value)) {
            return map.get(value);
        }

        const clone = Array.isArray(value) ? [] : {};
        for (const [key, v] of value.entries()) {
            clone[key] = _cloneDeep(v);
        }
        map.set(value, clone);
        return clone;
    }

    return _cloneDeep(value);
}
