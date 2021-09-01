


/*let a = Number(prompt("Введите число, чтобы его округлить"));

let b = Number(prompt("До какого знака произвести округление?"));

alert(a.toFixed(b));*/
//console.log(a.toFixed(2));

//let c = 3.3333333339;
//для округления числа указываем в качестве параметра до какого знакак после запятой нужно округлить
//console.log(c.toFixed(2));
let a = 14;
//перевод в строку (в качастве параметра мы можем указать в какую систему счисления нужно перевести)
//16-ая 
console.log(a.toString(16));

let str = Number(prompt("Введите строку"));
let cod = Number(prompt("Нужная кодировка"));

alert(str.toString(cod));

console.log(str.toString(cod));