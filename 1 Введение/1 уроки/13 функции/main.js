const LENGTH = 2;
function hello() {
    alert("hello");
    console.log("hello");
}
function toLog(msg){
    console.log(`Вывод в консоль внутри функции: ${msg}`);
}
function sum(x, y, r = false){
    let result = x + y;
    if(r){
        //если r = true
        return result;
    }else{
        toLog(result);    
    }
}
function checkName(name){
    return name.length >= LENGTH;
}
hello();

toLog("Что-то");

sum(10, 5);

let s = sum(15, 20, true);
console.log(s)

let name = prompt("Введите имя");
if(checkName(name)){
    alert(`Спасибо ${name}`);
}else{
    alert(`Вы ввели слишком короткое имя, оно должно состоять как минуимум из ${LENGTH} символов`);
}