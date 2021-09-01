//Создаем объект, который будем использовать в классах 
//Обычно это чей-то чужой код
let log = {
    toLog(str){
        console.log(str);
    }
}

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        //функция, к которой будет обращение
        this.toLog('Создан новый объект Point');
    }
}

class User{
    constructor(){
        this.toLog('Создан новый файл');
    }
}


// подвязываем чужой код к двум классам
Object.assign(Point.prototype, log);
Object.assign(User.prototype, log);

let p = new Point(5, 20);
new User();

p.toLog("Новое значение");