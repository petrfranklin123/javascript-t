if(confirm("Хотите вопрос?")){
    let a = prompt("Сколько вам лет?");
    a = Number(a);
    /*if(Number.isNaN(a)){
        alert("Вы ввели неправильный возраст!");
    }else{
        alert(`Вам ${a} лет`)
    }*/
    while(Number.isNaN(a)){
        alert("Вы ввели неправильный возраст!");
        a = prompt("Сколько вам лет?");
    }
    alert(`Вам ${a} лет`)
}