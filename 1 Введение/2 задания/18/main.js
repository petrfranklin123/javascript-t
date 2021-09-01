let counter = 0, lcounter = 0;

function increment(lcounter){
    counter++;
    lcounter++;
}

for(let i = 0; i < 3; i++){
    increment(lcounter);
}

console.log(`counter: ${counter} lcounter: ${lcounter}`);

//так как переменная lcounter локальная в функции, она будет изменяться только в функции, но counter
//в функции является глобальной прееменной, поэтому изменения, в ф-ии изменяют ее 