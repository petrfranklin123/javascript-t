function sum(a,b){
    return a + b;
}
function minus(a, b){
    return a - b;
}
function umn(a, b){
    return a * b;
}
function del(a, b){
    if(b == 0){
        alert(`Второй элемент = 0`);
    }else{
        return a / b;
    }
}

while(true){
    let a = Number(prompt("Введите первое число"));
    if(a == 'exit'){
        break;
    }else if(Number.isNaN(a)){
        alert("Первое число не является числовым!");
        continue;
    }
    let znak = prompt(`Введите нужную операцию (+, -, * и /)`);
    let b = Number(prompt("Введите второе число"));
    if(Number.isNaN(b)){
        alert("Второе число не является числовым!");
        continue;
    }
    if(znak == '+') znak = sum(a, b);
    else if(znak == '-') znak = minus(a, b);
    else if(znak == '*') znak = umn(a, b);
    else if(znak == '/') znak = del(a, b);
    alert(`Ответ: ${znak}`);

}