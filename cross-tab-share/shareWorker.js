const connections = new Set();

self.onconnect = (event) => {
    /** @type {MessagePort} */
    const port = event.ports[0];

    connections.add(port);

    port.onmessage = (event) => {
        [...connections].forEach((connection) => {
            try {
                connection.postMessage(event.data);
            } catch {
                connections.delete(connection);
            }
        });
    };
};
