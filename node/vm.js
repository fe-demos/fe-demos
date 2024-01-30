import vm from 'vm';

const code = 'globalThis.p = 666;console.log(globalThis.p);o.a = 1;o';
const context = {
    o: {},
};
const result = vm.runInContext(code, vm.createContext(context), {});
console.log(result === context.o);
console.log(globalThis.p);
console.log(context.o);
