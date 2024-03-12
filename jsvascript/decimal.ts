import { Decimal } from 'decimal.js';

console.log(0.1 + 0.2 === 0.3); // false
console.log(new Decimal('0.1').plus(new Decimal(0.2)).equals(new Decimal(0.3))); // true

/**
 * 整数相加
 */
function sum(integer1: string, integer2: string): string {
    let integerResult = '';
    let carry = 0;
    for (let i = 0, len = Math.max(integer1.length, integer2.length); i < len; i++) {
        const sum =
            Number.parseInt(integer1[integer1.length - i - 1] ?? 0) +
            Number.parseInt(integer2[integer2.length - i - 1] ?? 0) +
            carry;
        carry = sum >= 10 ? 1 : 0;
        integerResult = (sum % 10) + integerResult;
    }
    if (carry === 1) {
        integerResult = `1${integerResult}`;
    }
    return integerResult;
}

/**
 * 虑两个小数相加
 */
function plus(num1: number, num2: number): string {
    const str1 = String(num1);
    const str2 = String(num2);

    let [integer1, decimal1] = str1.split('.');
    let [integer2, decimal2] = str2.split('.');

    let longerDecimal: string;
    if (decimal1.length < decimal2.length) {
        longerDecimal = decimal2;
        decimal1 = decimal1.padEnd(decimal2.length, '0');
    } else {
        longerDecimal = decimal1;
        decimal2 = decimal2.padEnd(decimal1.length, '0');
    }

    let decimalResult = sum(decimal1, decimal2);
    let integerResult = sum(integer1, integer2);
    const carried = decimalResult.length !== longerDecimal.length;
    if (carried) {
        // 去除左侧多余的 1
        decimalResult = decimalResult.slice(1);
        integerResult = sum(integerResult, '1');
    }
    return `${integerResult}.${decimalResult}`;
}

console.log(plus(9.1, 11.93)); // 21.o3
