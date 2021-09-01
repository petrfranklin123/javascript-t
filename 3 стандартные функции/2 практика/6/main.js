let m = new Map();

m.set('wood', 'Дерево');
m.set('choice', 'Выбор');
m.set('good', 'Хорошо');
m.set('length', 'Длина');

for(let key of m){
    console.log(`Ключ: ${key[0]}, Значение: ${key[1]}`);
}

let param = prompt("Введите ключ и значение через запятую");

param = param.split(",");

m.set(param[0], param[1]);

for(let key of m){
    console.log(`Ключ: ${key[0]}, Значение: ${key[1]}`);
}