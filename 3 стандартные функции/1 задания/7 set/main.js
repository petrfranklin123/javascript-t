//объект set служит для сборки уникальных параметров 
//индексов у этого множества не сущствует и порядок тут не учитывается 

let s = new Set([20, 30, 40, 20]);

console.log(s);
s.add(15);
console.log(s);
console.log(s.size);
console.log(s.has(30));
s.delete(30);
console.log(s.has(30));
for(let key of s){
    console.log(key);
}
s.clear();
console.log(s)