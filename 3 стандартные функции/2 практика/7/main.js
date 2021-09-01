let s = new Set();

for(let i = 0; i < 100; i++){
    s.add(Math.floor(Math.random() * 10 + 1));
}

console.log(s.size);

for(let key of s){
    console.log(key);
}