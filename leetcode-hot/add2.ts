function add2(num1: string, num2: string): string {
    let reversedNum1 = num1.split('').reverse().join('');
    let reversedNum2 = num2.split('').reverse().join('');

    if (reversedNum2.length > reversedNum1.length) {
        [reversedNum1, reversedNum2] = [reversedNum2, reversedNum1];
    }

    let result = '';
    let carry = 0;
    for (let i = 0; i < reversedNum1.length; i++) {
        const sum =
            Number.parseInt(reversedNum1[i]) + Number.parseInt(reversedNum2[i] ?? 0) + carry;
        result += sum % 10;
        carry = sum >= 10 ? 1 : 0;
    }

    if (carry) {
        result += '1';
    }

    return result.split('').reverse().join('');
}

console.log(add2('666666666666666666666666', '88888888888888888888888888888888888'));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(add2(Number.MAX_SAFE_INTEGER.toString(), '2'));
console.log(add2('99999999999999999999', '1'));

// 88888888889555555555555555555555554
// 9007199254740991
// 9007199254740992
// 9007199254740993
