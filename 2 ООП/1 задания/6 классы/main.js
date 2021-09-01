class Point{
    z = 5;
    //метод конструктора, в данном методе создаются объекты  
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    getDistanse(){
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

//создаем объект класса
let p = new Point(10, 20);

console.log(p);

console.log(p.getDistanse());
console.log(p.x);
console.log(p.y);
console.log(p.z);
p.x = 25;
console.log(p.x);