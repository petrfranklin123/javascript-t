//Наследование классов, это возможность создания нового класса и перенять все свойста из класса, который встал в основу нового класса
class Shape{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getDistance(){
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}
//наследовательные классы
class Point extends Shape{
    draw(){
        console.log('Рисуем точку');
    }
}

class Circle extends Shape{
    constructor(x, y, r){
        super(x, y);
        this.r = r;
    }
    draw(){
        console.log('Рисуем окружность');
    }
}

let s = new Shape(5, 4);
let p = new Point(3, 7);
let c = new Circle(5, 5, 10);

console.log(s);
console.log(p);
console.log(c);

console.log(s.getDistance());
console.log(p.getDistance());
console.log(c.getDistance());

//s.draw();
p.draw();
c.draw();