// Конструктр по правилу нужно объявлять в большой буквы
//
function Point(x_pos, y_pos){
    this.x = x_pos;
    this.y = y_pos;
    this.print = function (){
        console.log(`Точка с координатами ${this.x} и ${this.y}`);
    }
    this.distance = function(){
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}
//создание объекта
let p = new Point(10, 20);

console.log(`Объект с координатами: ${p.x} ; ${p.y}`);

//Вызовы методов 
p.print();
p.x = 5;
p.y = 7;
p.print();

console.log(p.distance());