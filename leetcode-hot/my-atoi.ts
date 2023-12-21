function myAtoi(s: string): number {
    // 去除前导空字符
    let start = 0;
    while (s[start] === ' ') {
        start++;
    }

    let sign = 1;
    if (s[start] === '-') {
        sign = -1;
        start++;
    } else if (s[start] === '+') {
        start++;
    }

    const maxInteger = Math.pow(2, 31) - 1;
    const minInteger = -Math.pow(2, 31);

    let result = 0;
    for (let i = start; i < s.length; i++) {
        const digit = sign * Number.parseInt(s[i]);
        if (Number.isNaN(digit)) break;

        if (sign > 0 && result > (maxInteger - digit) / 10) {
            return maxInteger;
        } else if (sign < 0 && result < (minInteger - digit) / 10) {
            return minInteger;
        }

        result = result * 10 + digit;
    }

    return result;
}

console.log(myAtoi('1235555'));
