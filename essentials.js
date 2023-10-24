const log = console.log;

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2


const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

const obj2 = { a: 1, b: { c: 2 } };
// const { a } = obj2;
let {
    b: { c: d },
} = obj2;
log(obj2);
// Two variables are bound: `a` and `d`
