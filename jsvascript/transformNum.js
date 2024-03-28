const numMap = {
    0: '零',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
};

function trans(str) {
    const { length: len } = str;

    let result = '';
    if (len > 8) {
        result += `${trans(str.slice(0, len - 8))}亿`;
    }

    if (len > 4) {
        result += `${trans(str.slice(Math.max(len - 8, 0), len - 4))}万`;
    }

    if (len >= 4) {
        const count = str.at(-4);
        result += count === '0' ? '零': numMap[count] + '千';
    }

    if (len >= 3) {
        const count = str.at(-3);
        result += count === '0' ? '零': numMap[count] + '百';
    }

    if (len >= 2) {
        const count = str.at(-2);
        result += count === '0' ? '零' : numMap[count] + '十';
    }

    result += numMap[str.at(-1)];

    return result.replaceAll(/零{2,}/g, '零');
}

console.log(trans('123456'));
console.log(trans('100010001'));
console.log(new Intl.NumberFormat('zh-CN').format('100010001'));
