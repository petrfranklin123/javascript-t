//код стороннего разработчика
let point = {
    x: 10,
    y: 20
}
point.z = 30;
//код стороннего разработчика
//смысл такой, если оригинальному коду (не своему) добавлять свойства, то может возникунть ситуация, когда 
// уже существующее свойство перезапишется и вызовет неисправность в коде

//Для этого существует функция Symbol(), она создана для того чтобы добавлять свойтва невредив оригинальному коду 
let z = Symbol();
//созданное свойство с помощью этой функции записывается в квадратных скобках
point[z] = 40;

console.log(`Код разаработчика ${point.z}`);
console.log(`Код добавленный через Symbol() ${point[z]}`);