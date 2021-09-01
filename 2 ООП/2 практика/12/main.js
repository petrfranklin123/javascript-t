let random = {
    x: 10, 
    randd(){
      return Math.random(0, 100);
    } 
}


class Pramoug{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.randd();
    }
    rand(){
        console.log(this.randd() - this.width);
    }
}

Object.assign(Pramoug.prototype, random);

let p = new Pramoug(20, 15);

p.rand();
