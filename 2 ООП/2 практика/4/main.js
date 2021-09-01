let x = Symbol();
let y = Symbol();

let obj = {}

obj[x] = 40;
obj[y] = 30;

console.log(`obj[x] ${obj[x]} obj[y] ${obj[y]}`)