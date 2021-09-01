class Point{
    //статические свойства и методы пренадлежат только классу
    static counter = 0;
    constructor(x, y){
        this.x = x;
        this.y = y;
        //такая конструкция вызывает статичекую переменную
        //таким образом мы считаем сколько объектов было создано
        Point.counter++;
    }
    static getCounter(){
        return Point.counter;
    }
    static getDistanceBetweenPoints(p1, p2){
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
}

console.log(Point.counter);

let p1 = new Point(1, 5);
let p2 = new Point(10, 20);
let p3 = new Point(14, 13);

console.log(Point.counter)
console.log(Point.getCounter());

console.log(Point.getDistanceBetweenPoints(p1, p2));
console.log(Point.getDistanceBetweenPoints(p2, p3));
console.log(Point.getDistanceBetweenPoints(p1, p3));