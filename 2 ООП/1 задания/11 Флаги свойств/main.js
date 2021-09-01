class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

let p = new Point(10, 20);
//просматриваем флаги у свойства Х и выводим их
let descriptor = Object.getOwnPropertyDescriptor(p, 'x');
console.log(descriptor);
p.x = 15;

Object.getOwnPropertyDescriptor(p, 'x', {
    //запрет на запись 
    writable: false,
    //Запрет на перечисление 
    enumerable: false,
    //Запрет на удаление
    configurable: false
    //Изначально они равны true
});

