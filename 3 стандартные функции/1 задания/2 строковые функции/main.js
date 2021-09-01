

let str  = `Слово в 'кавычках', слеш \\  и символ unicode \u23F1 \u0BF6`;

console.log(str);
console.log(str.length);

// выводим конкретный символ из массива
console.log(str[0]);
console.log(str[44]);

//выводим код символа по индексу
console.log(str.codePointAt(0));
console.log(str.codePointAt(44));

console.log('-----------------------');

//выдает индекс первого символа 
console.log(str.indexOf('с'));
//выдает индекс первого символа, вторым параметром идет символ, после которого будет поиск
console.log(str.indexOf('с', 25));
//если символ не был найден, то будет выдана число -1
console.log(str.indexOf('я'));

console.log('-----------------------');

//выводит строку, первы параметром идет количество пропущенных символов, вторым длина строки
console.log(str.substr(10, 3));

//переводит строку в нижний регистр 
console.log(str.toLowerCase());
//переводит строку в верхний регистр
console.log(str.toUpperCase());