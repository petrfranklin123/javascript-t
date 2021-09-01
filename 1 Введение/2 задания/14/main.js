
function error(msg){
    alert(`Проблема: ${msg}`);
}

function summ(arg1, arg2, msg){
    arg1 = Number(arg1);
    if(Number.isNaN(arg1)){
        msg("Первый аргумент не числовой")
    }
    arg2 = Number(arg2);
    if(Number.isNaN(arg2)){
        msg("Второй аргумент не числовой")
    }
    summa = arg1 + arg2;
    return summa;
}

let argum1 = prompt(`Введите первое число`);
let argum2 = prompt(`Введите второе число`);

let otvet = summ(argum1, argum2, error);

alert(`Сумма двух чисел ${otvet}`);