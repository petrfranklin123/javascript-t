let point = {};
point = {
    x: 10,
    y: 20
}
console.log(point);
console.log(point.x);
console.log(point.y);
//Переопределение свойства функции 
point.x = 15;
console.log(point.x);
//свойств объекта можно добавлять
point.z = 40;
console.log(point.z);
console.log(point['z']);

for(let key in point){
    console.log(`Поле ${key} равно ${point[key]}`);
}

let obj = {
    'two words': true,
    p:{
        x: 20,
        y: 30
    }
};

//Обращение к строковому свойству производится  
console.log(obj['two words']);
//обращение к вложенным свойствам 
console.log(obj.p.x);


let point1 = {
    x: 20,
    y: 30
};

//тавким образом создается только ссылка на объект, но он не дублируется 
let point2 = point1;
point.x = 100;
console.log(point2.x);



point2 = {};
// С помощью этой конструкции возможно скопировать объект
for(let key in  point1){
    point2[key] = point1[key];
}

point1.x = 100;
console.log(point2.x);

let point3 = {};

//данная конструкция позволяет производить копирование объекта первый объект "куда копируем", второй "что копируем"
Object.assign(point3, point1);
point1.x = 300;
console.log(point3.x);
