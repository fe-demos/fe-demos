class Queue {
    put() {}

    take() {}

    size() {}
}

class Stack {
    constructor() {
        this.queue = new Queue();
        this.min = Infinity;
    }

    push(value) {
        this.queue.put(value);
        if (value < this.min) {
            this.min = value;
        }
    }

    pop() {
        let min = Infinity;
        let top;
        for (let i = 0, len = this.queue.size(), last = len - 1; i < len; i++) {
            const front = this.queue.take();
            if (i < last) {
                if (front < min) {
                    min = front;
                }
                this.queue.put(front);
            } else {
                top = front;
            }
        }
        this.min = min;
        return top;
    }

    printMin() {
        return this.min;
    }
}
