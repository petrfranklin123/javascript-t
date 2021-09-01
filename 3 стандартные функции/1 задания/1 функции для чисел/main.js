let a = 14;
//перевод в строку (в качастве параметра мы можем указать в какую систему счисления нужно перевести)
//16-ая 
console.log(a.toString(16));
console.log(a.toString(2));

console.log(Number.isNaN(a));
//эквивалент верхней 
console.log(isNaN(a));

//является ли число конечным true - если конечная 
console.log(isFinite(a));
console.log(isFinite(1/3));

let b = 3.3333333339;
//для округления числа указываем в качестве параметра до какого знакак после запятой нужно округлить
console.log(b.toFixed(2)); //возвращает строку, не число !

//округление, без знака после запятой, выводит числовое значение
console.log(Math.round(b));

console.log(Math.floor(b)); //округляет до меньшего целого 
console.log(Math.ceil(b)); //округляет до большего целого


console.log(Math.random());
//рандомное число от 1 до 10
console.log(Math.floor(Math.random() * 10 + 1));

//первая функция извлекает целое числовое значение из простых строк, в качестве параметров она 
//берет строку и дополнительно ситему счисления 
//возвращается числовой тип
console.log(parseInt('100px'));
console.log(parseInt('100px', 10));
console.log(parseFloat('14.2 рублей'));