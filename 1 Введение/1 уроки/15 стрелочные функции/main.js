/*
function sum(x, y, z){
    return x + y + z;
}
*/
let sum = (x, y, z) => (x + y + z);
let hello = () => console.log("Hello");

console.log(sum(10, 20, 30));

hello();

let div = (x, y) =>{
    if(y == 0){
        return false
    }
    return x / y;
}
console.log(div(10, 0));
console.log(div(10, 3));