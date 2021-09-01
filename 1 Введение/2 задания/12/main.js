let str = Number(prompt("Введите число от 1 до 5"));
switch(str){
    case 1:{
        alert("Один");
        break;
    }
    case 2:{
        alert("Два");
        break;
    }
    case 3:{
        alert("Три");
        break;
    }
    case 4:{
        alert("Четыре");
        break;
    }
    case 5:{
        alert("Пять");
        break;
    }
    default:{
        alert("Нет представления это числа в виде строки");
    }
}