function countdown(form, to) {
    // 在这里填写答案
    const duration = to - from;
    const hour = 1000 * 60 * 60;
    const day = hour * 24;
    const days = Math.floor(duration / day);
    const hours = Math.floor((duration - days * day) / hour);
    const minutes = Math.floor((duration - days * day - hours * hour) / 1000 / 60);
    const seconds = Math.floor((duration - days * day - hours * hour - minutes * 1000 * 60) / 1000);
    const milliseconds =
        duration - days * day - hours * hour - minutes * 1000 * 60 - seconds * 1000;

    return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
}

// 参考用例
const from = Date.now();
const to = from + 3 * 3600 * 1000 + 6 * 60 * 1000 + 9 * 1000 + 0;
const info = countdown(from, to);
console.log(info);
// 输出结果参考
// {
//   days: 0,
//   hours: 3,
//   minutes: 6,
//   seconds: 9,
//   milliseconds: 0
// }
