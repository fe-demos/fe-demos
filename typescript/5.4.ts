function createStreetLight<C extends string>(colors: C[], defaultColor?: NoInfer<C>) {
    // ...
}

createStreetLight(['red', 'yellow', 'green'], 'blue');
//                                            ~~~~~~
// error!
// Argument of type '"blue"' is not assignable to parameter of type '"red" | "yellow" | "green" | undefined'.

declare global {
    interface ImportAttributes {
        name: '123';
    }
}

import { add } from './mod' with { name: '1' };

console.log(add);

function help(a: string, b: string, c: number) {
    return a + b;
}

function main(a: string, b: string, c: number) {
    return help(a, b, c);
}
