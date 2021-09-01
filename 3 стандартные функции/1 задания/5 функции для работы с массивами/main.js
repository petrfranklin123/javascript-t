
//создам переменные x и y 
let [x, y] = [5, 7];

console.log(x);
console.log(y);

let array = [10, 15, 5, 7, 10];

console.log(array);
//размер функции 
console.log(array.length);

//добавляет в конце массива элемент
array.push(15);
console.log(array);

//добавление  начало массива 
array.unshift(3);
console.log(array);

//чтобы удалить последний элемен (можно записпать удаленный элемент в переменную)
let a = array.pop();
console.log(array);
console.log(a);

//удалить первый элемент массива
array.shift();
console.log(array);

console.log("----------");

//поиск элемента по его зачению, выдает индекс 
console.log(array.indexOf(10));
//в качестве второго параметра передается индекс элемента, с которого будет начинаться отсчет
console.log(array.indexOf(10, 2));
//ищем с конца 
console.log(array.lastIndexOf(10));
//если ничего не найдено, то вернет -1
console.log(array.indexOf(9));


let points = [
    {x: 5, y: 10},
    {x: 7, y: 15},
    {x: 5, y: 23}
];

//параметр (элемент, индекс, ссылка)
function filter(item, index, array){
    return item.x == 5;
}
//возвращает элемент масива, который будет равен x = 5 
console.log(points.find(filter));
//возвращает индекс 
//если ничего не найдено, то вернет -1
console.log(points.findIndex(filter));

//возвращает весь элемент массива 
let pointsfilter = points.filter(filter);
console.log(pointsfilter)

console.log("----------");

//сортировка, в данном случае сортировка будт по алфавиту 
array.sort();
console.log(array)

//в функции указывам правило сортировки 
array.sort(function(item1, item2){
    //обычная сортировка 
    return item1 - item2;
    //обраьная сортировка 
    //return item2 - item1;
})

console.log(array);

console.log("----------");

//объединение массива
array = array.concat([2, 4],[4, 5]);
console.log(array);

//данная ф-я убирает все после 3-го элемента 
array.splice(3);
console.log(array);

console.log("----------");

let str = "23,45,56,78,96";
//разделение строки в массив 
array = str.split(",");
console.log(array);