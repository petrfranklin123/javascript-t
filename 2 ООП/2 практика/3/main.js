function Squrt(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.plosh = function(){
        return this.width * this.height;
    } 
}

let pramoug = new Squrt(0, 0, 30, 45);

console.log(pramoug.plosh());

