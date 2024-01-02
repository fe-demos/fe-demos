import Koa from 'koa';
import logger from 'koa-logger';
import cors from '@koa/cors';

const server = new Koa();

server.use(logger());
server.use(
    cors({
        credentials: true,
        maxAge: 60 * 1000,
        origin(ctx) {
            return ctx.get('Origin') || '*';
        },
    }),
);
server.use((ctx) => {
    ctx.body = 'Hello';
});

server.listen(1027, () => {
    console.log('server start at: http://127.0.0.1:1027');
});
