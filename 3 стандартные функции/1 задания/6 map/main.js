let m = new Map();

//поздаем объект map и передаем ему параметры 
m.set('name', 'Alex');
m.set('age', 25);
m.set('single', true);

console.log(m);
//размер
console.log(m.size);
//запрашиваем имя
console.log(m.get('name'));
//проверяем наличие данного параметра 
console.log(m.has('single'));
//удаление ключа
m.delete('single');
console.log(m.has('single'));
//добавляем 
m.set('single', false);

console.log("------------------");
//перебор ключей 
for(let k of m.keys()){
    console.log(k);
}
//перебор значений 
for(let k of m.values()){
    console.log(k);
}

//перебор ключей и значений 
for(let k of m.entries()){ // аналог for(let k of m)
    console.log(`ключ ${k[0]} значение ${k[1]}`);
}
//очистка объекта
m.clear();

console.log(m);