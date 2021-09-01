let a = 5;

if(a > 5){
    console.log('Переменная а больше 5');
}else if(a == 5){
    console.log('Переменная а равна 5');
}else{
    console.log('Переменная а НЕ больше 5');
}
//Полный эквивалент вышестоящего варианта
if(a > 5) console.log('Переменная а больше 5');
else if(a == 5) console.log('Переменная а равна 5');
else console.log('Переменная а НЕ больше 5');

let b = 0;
let result = (b != 0)? a / b : 0;
//Эквивалент вышестоящего варианта
let result;
if(b != 0) result = a / b;
else result = 0;
