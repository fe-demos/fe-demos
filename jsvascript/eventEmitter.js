class EventEmitter {
    constructor() {
        this.eventCallbackMap = {};
    }

    emit(eventName, data) {
        // biome-ignore lint/complexity/noForEach: <explanation>
        (this.eventCallbackMap[eventName] ?? []).forEach((cb) => {
            cb(data);
        });
    }

    on(eventName, cb) {
        const callbacks = this.eventCallbackMap[eventName] ?? [];
        callbacks.push(cb);
        this.eventCallbackMap[eventName] = callbacks;
    }
}

const emitter = new EventEmitter();

emitter.on('click', (data) => {
    console.log(data);
});

emitter.emit('click', 'hello');
