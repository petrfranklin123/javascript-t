function Point(x, y){
    this.x = x;
    this.y = y;
    //данный метод возвращет строку, при обращении к объекту
    this.toString = function(){
        return `Точка с координами ${this.x} и ${this.y}`;
    }
    //этот метод вызыватеся при запросе числового значения 
    this.valueOf = function(){
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}
let p = new Point(10, 30);

alert(p);
console.log(p);

alert(Number(p));
console.log(Number(p));