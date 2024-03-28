class MySet {
    constructor(array) {
        this.map = new Map(array.map((e => [e, e])))
    }

    add(e) {
        this.map.set(e, e)
    }

    remove(e) {
        this.map.remove(e)
    }

    [Symbol.iterator]() {
        return this.map.values()
    }
}

const set = new MySet([1, 2, 2, 3, 3, 4])
console.log([...set]);