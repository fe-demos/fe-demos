/**
 * 去除出现次数最少的字符(保持原本的顺序)
 * 'ababac' ——> 'ababa'
 * 'aaabbbcceeff' ——> 'aaabbb'
 */
function removeFewestChars(str) {
    const map = new Map();

    for (const char of str) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }

    let minCount = Infinity;
    for (const [char, count] of map.entries()) {
        if (count < minCount) {
            minCount = count;
        }
    }

    for (const [char, count] of map.entries()) {
        if (count === minCount) {
            str = str.replaceAll(char, '');
        }
    }

    return str;
}

console.log(removeFewestChars('ababac'));
console.log(removeFewestChars('aaabbbcceeff'));
