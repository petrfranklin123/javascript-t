let a = Number(prompt("Введите целое число 0т 1 до 5"));
console.log(`a ${typeof(a)}`);

switch(a){
    case 1:{
        alert("Вы ввели 1");
        break;
    }
    case 2:{
        alert("Вы ввели 2");
        break;
    }
    case 3:{
        alert("Вы ввели 3");
        break;
    }
    case 4:{
        alert("Вы ввели 4");
        break;
    }
    case 5:{
        alert("Вы ввели 5");
        break;
    }
    default:{
        alert("Некорректный ввод");
    }
}