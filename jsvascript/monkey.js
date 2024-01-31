// 第二题
function Monkey(name) {
    console.log(`my name is ${name}`);
    let waiting = 0;

    const result = {
        eat(food) {
            if (waiting === 0) {
                console.log(`I eat ${food}`);
            } else {
                setTimeout(() => {
                    console.log(`I eat ${food}`);
                }, waiting);
            }

            return result;
        },

        sleep(seconds) {
            console.log(`等待 ${seconds}s`);
            waiting += seconds;
            return result;
        },
    };
    return result;
}
Monkey('Alan').eat('Banana').sleep(4).eat('Apple').sleep(5).eat('Pear');
// my name is Alan
// I eat Banana
// 等待 4s
// I eat Apple
// 等待 5s
// I eat Pear
