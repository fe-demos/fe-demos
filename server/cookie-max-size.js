import http from 'http';

const server = http.createServer((request, response) => {
    const { cookie } = request.headers;
    // 4096 + 7 === 4104
    console.log(cookie?.length); // 4106, 多出来的两个字节应是分号和空格
    console.log(cookie?.at(-1));
    console.log(cookie);

    // 实测一对 key/value 能存 4k + 1字节
    response.setHeader('Set-Cookie', [
        // 4097
        // 当多于 4097 浏览器设置这个 cookie 失败，其它 cookie 还是可以设置成功
        'key=' + Array.from({ length: 1024 * 4 - 5 }, () => 's').join('') + 'en',
        // 7
        'name=ly666',
    ]);
    response.end(`<h1>success</h1>
<script>
console.log(document.cookie.length);
console.log(document.cookie.at(-1));
</script>
    `);
});

const port = 1027;
server.listen(port, () => {
    console.log(`Server start at: http://127.0.0.1:${port}`);
});
