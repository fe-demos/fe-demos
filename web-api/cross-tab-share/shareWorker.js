const connections = new Set();

self.onconnect = (event) => {
    /** @type {MessagePort} */
    const port = event.ports[0];

    connections.add(port);

    port.onmessage = (event) => {
        for (const connection of [...connections]) {
            try {
                connection.postMessage(event.data);
            } catch {
                connections.delete(connection);
            }
        }
    };
};
