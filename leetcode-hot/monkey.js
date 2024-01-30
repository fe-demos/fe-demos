// 第二题
function Monkey(name) {
    console.log(`my name is ${name}`);
    const queue = [];
    let waiting = 0;
    let running = false;

    const result = {
        eat(food) {
            const sleepTime = waiting;
            if (waiting !== 0) {
                waiting = 0;
            }

            const task = () => {
                running = true;
                if (sleepTime !== 0) {
                    console.log(`等待 ${sleepTime}s`);
                }

                setTimeout(() => {
                    console.log(`I eat ${food}`);
                    running = false;

                    if (queue.length > 0) {
                        const frontTask = queue.shift();
                        frontTask();
                    }
                }, sleepTime * 1000);
            };

            if (running === false) {
                task();
            } else {
                queue.push(task);
            }
            return result;
        },

        sleep(seconds) {
            waiting += seconds;
            return result;
        },
    };
    return result;
}
Monkey('Alan').eat('Banana').sleep(4).eat('Apple').sleep(5).eat('Pear');
