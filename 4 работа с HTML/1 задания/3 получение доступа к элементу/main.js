let header = document.getElementById('header');

//изменение содержания 
header.innerHTML = "Новый заголовок";

//querySelectorAll выбираем сразу несколько элементов 
//применение изменений происходит через цикл
let elements = document.querySelectorAll('ul li');

for(let elem of elements){
    console.log(elem);
    elem.style.color = "#0c0";
    //метод closest ищет предков у элемента , к которому идет обращение
    //
    console.log(elem.closest(".test").nodeName)
}

//querySelector выбирает первый попавшийся элемент
console.log(document.querySelector(".test").nodeName);


function reColor(elem){
    elem.style.color = "#fff111";
}

for(let elem of elements){
    console.log(elem);
    setTimeout(reColor, 1500, elem);
}