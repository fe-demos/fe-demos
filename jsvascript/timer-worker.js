globalThis.addEventListener('message', ({ data }) => {
    if (data.type === 'setInterval') {
        setInterval(() => {
            globalThis.postMessage('setIntervalTrigger');
        }, data.duration);
    }
});
