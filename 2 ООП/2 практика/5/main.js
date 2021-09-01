function Squrt(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.plosh = function(){
        return this.width * this.height;
    } 
    this.toString = function(){
        return `Прямоугольник с кооринатами ${this.x} и ${this.y}, шириной ${this.width} и высотой ${this.height}`;
    }
    this.valueOf = function(){
        return this.width * this.height;
    }
}

let pramoug = new Squrt(0, 0, 30, 45);

console.log(pramoug.plosh());

alert(pramoug);
alert(Number(pramoug));
