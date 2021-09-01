class Point{
    /*constructor(x, y){
        this._x = x;
        this._y = y;
    }*/
    set x(height){
        if(height < 0){
            return this._x = 0;
        }else{
            this._x = height;
        }
    }
    set y(width){
        if(width < 0){
            return this._y = 0;
        }else{
            this._y = width;
        }
    }
    get x(){
        alert();
        return this._x;
        
    }
    get y(){
        return this._y;
    }

    get plosh(){
        return this._x * this._y;
    }
}

let p = new Point();

//Point(10, 20);

//передаем Сеттеру данные об переменных
//и с помощью Геттера их отображаем
p.x = 10;
console.log(p.x);
p.x;
p.y = 20;
console.log(p.y);

console.log(p.plosh);
