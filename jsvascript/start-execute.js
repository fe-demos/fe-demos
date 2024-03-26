/**
 * 请写出两种或两种以上实现方法满足: execute 对应的 id 按顺序打印
 * PS: 尝试只修改 start 函数体
 *
 * 输出结果参考:
 * id 0
 * id 1
 * id 2
 * id 3
 * id 4
 */

const queue = [];
let running = false;
function start(id) {
    if (running === false) {
        running = true;
        execute(id)
            .catch(console.error)
            .finally(() => {
                running = false;
                const front = queue.shift();
                if (front !== undefined) {
                    start(front);
                }
            });
    } else {
        queue.push(id);
    }
}

// 测试代码 (请勿更改):
for (let i = 0; i < 5; i++) {
    start(i);
}

function sleep() {
    const duration = Math.floor(Math.random() * 500);
    return new Promise((resolve) => setTimeout(resolve, duration));
}

function execute(id) {
    return sleep().then(() => {
        console.log('id', id);
    });
}
