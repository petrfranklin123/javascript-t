
let mass = [];

for(let i = 0; i < 25; i++){
    mass.push(Math.random() * 101 + 1 );
}

console.log(mass);

let mass_sort = mass.sort(function(item1, item2){
    return item2 - item1;
});

console.log(mass_sort);

