/*let a = prompt('Введите первое число', '0');
let b = prompt('Введите второе число');

console.log(`Тип данных у переменной "а" ${typeof(a)}`);
console.log(`Тип данных у переменной "b" ${typeof(b)}`);

a = Number(a);
b = Number(b);

if(Number.isNaN(a)){
    alert("Некорректное первое число");
}else if(Number.isNaN(b)){
    alert("НЕкорректное второе число");
}else{
    alert(`Сумма этих чисел равна ${a + b}`);
    //console.log(`Тип данных у переменной "а" ${typeof(a)}`);
    if(confirm("Хотите узать сумму их произведений?")){
        alert(`Произведение чисел равна ${a - b}`);
    }
}*/

//Усовершенствованный вариант


let a = prompt('Введите первое число', '0');
a = Number(a);
let prov1 = true;
if(Number.isNaN(a)){
    prov1 = false;
}
while(prov1 == false){
    a = prompt('Введите первое число', '0');
    a = Number(a);
    if(Number.isNaN(a)){

    }else{
        prov1 = true;
    }
}
let b = prompt('Введите второе число');
b = Number(b);
let prov2 = true;
if(Number.isNaN(b)){
    prov2 = false;
}
while(prov2 == false){
    b = prompt('Введите второе число');
    b = Number(b);
    if(Number.isNaN(b)){

    }else{
        prov2 = true;
    }
}
alert(`Сумма этих чисел равна ${a + b}`);
if(confirm("Хотите узать сумму их произведений?")){
    alert(`Произведение чисел равна ${a - b}`);
}