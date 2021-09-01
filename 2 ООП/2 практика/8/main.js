class Point{
    static counter = 0;
    constructor(width, height){
        this.height = height;
        this.width = width;
        Point.counter++;
    }
    static vievCounter(){
        return Point.counter;
    }
}

let p1 = new Point(23, 78);
let p2 = new Point(33, 88);
let p3 = new Point(22, 58);

console.log(Point.vievCounter());