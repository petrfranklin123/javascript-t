class Car{
    constructor(color, size, v){
        this.color = color;
        this.size = size;
        this.v = v;
    }
    rasst(){
        return 100 * this.v;
    }
}

class Model extends Car{
    constructor(color, size, v, model){
        this.color = color;
        this.size = size;
        this.v = v;
        this.model= model;
    }
}

let c = new Car("blue", 100, 250);
let m = new Model("red", 200, 100, "lada");

console.log(c);
console.log(m);