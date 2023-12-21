import http from 'http';

const server = http.createServer((request, response) => {
    const { cookie } = request.headers;
    console.log('请求包含 ' + cookie?.split('; ').length + ' cookies');

    // 测试能设置最多多少个 cookie
    // 实测在 150 ~ 180 个之间，个数不固定，但是每次超过限制都是将最早设置的删除
    response.setHeader(
        'Set-Cookie',
        Array.from({ length: 200 }, (v, index) => {
            const i = index + 1;
            return 'k' + i + '=' + i;
        }),
    );
    response.end(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="data:," />
            <title>Document</title>
        </head>
        <body>
            <h1>success</h1>
            <script>
                console.log(document.cookie.split('; ').length);
            </script>
        </body>
    </html>
    
    
    `);
});

const port = 1027;
server.listen(port, () => {
    console.log(`Server start at: http://127.0.0.1:${port}`);
});
