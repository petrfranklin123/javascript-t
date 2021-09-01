function div(x, y){
    let result;
    try{
        if(y == 0){
            //создание нового исключение 
            throw new Error("Деление на ноль");
        }
        result = x / y;
        return result;
        //исключение. где "е" это текст сообщения об ошибке 
    }catch(e){
        console.log(`Ошибка ${e.name}`);
        console.log(e);
    }
    finally{
        console.log("В любом случае finally выполняется");
    }
}

let d = div(10, 5);
console.log(d);
console.log(div(10, 0));

//функция показа ошибок в появляющемся окне 
window.onerror = function(msg, url, line){
    alert(`Ошибка ${msg} на ${line} строке файла ${url}`);
}