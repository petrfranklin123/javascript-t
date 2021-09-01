class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Circle{
    constructor(p, r){
        this.p = p;
        this.r = r;
        this.color = ['red','green','blue'];
    }
}

let p = new Point(5, 10);

let c = new Circle(p, 20)

console.log(p);

console.log(c.p.x)

//превращаем объект в строку 
// примитивные типы данных нет необходимости оборачивать в json формат 
// объекты или массивы стоит оборачивать 
let json = JSON.stringify(c);
console.log(json, typeof(json));

//превращаем из JSON в обычный формат 

let obj = JSON.parse(json);
console.log(obj);
console.log(obj.p.x);
console.log(obj.color);