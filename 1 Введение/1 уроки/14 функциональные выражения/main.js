//Функции в js работают как переменные
function hello(){
    console.log(`Вводим что-нибудь в консоль`);
}

let h = function(){
    console.log(`Функциональное выражение`);
}

function success(name){
    alert(`Спасибо ${name}`);
}

function error(){
    alert(`Некорректный ввод`);
}

function errorName(){
    alert(`Некорректный имя`);
}

function checkName(name, fs, fe){
    if(name.length >= 2){
        fs(name);
    }else{
        fe();
    }
}

console.log(hello);

let f = hello;
f();

h();

let name = prompt(`Введите имя:`)
//checkName(name, success, error);
checkName(name, success, errorName);

let func;

let x = Number(prompt("Введите число:"));
if(x < 0){
    func = function(){
        alert("Вы ввели отрицальельное число");
    }
}else if(x == 0){
    func = function(){
        alert("Вы ввели 0");
    }
}else{
    func = function(){
        alert("Вы ввели положительное число");
    }
}

func();