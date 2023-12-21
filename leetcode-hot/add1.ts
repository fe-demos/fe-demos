function add1(num1: string, num2: string) {
    return (BigInt(num1) + BigInt(num2)).toString();
}

console.log(add1('666666666666666666666666', '88888888888888888888888888888888888'));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(add1(Number.MAX_SAFE_INTEGER.toString(), '2'));

// 88888888889555555555555555555555554
// 9007199254740991
// 9007199254740992
// 9007199254740993
