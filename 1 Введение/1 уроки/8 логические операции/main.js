let a = true, b = false;
console.log(`a = ${a}`);
console.log(`b = ${b}`);

console.log(`!a = ${a}`);
console.log(`a && a =  ${a && a}`);
console.log(`a || a =  ${a || a}`);

console.log(`a ^ a =  ${a ^ a}`);
console.log(`3 ^ 4 =  ${3 ^ 4}`);
console.log(`3 & 4 =  ${3 & 4}`);
console.log(`3 | 4 =  ${3 | 4}`);

console.log(`a && (a || b || (5 < 7)) = ${a && (a || b || (5 < 7))}`);
console.log(`true && true || false || (5 < 7) =  ${true && true || false || (5 < 7)}`);
