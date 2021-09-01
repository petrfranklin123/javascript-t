function mouseover(event){
    console.log(`Наведение мыши ${event.target}`);
}

function mouseout(event){
    console.log(`Уведение мыши ${event.target}`);
}

function mousemove(event){
    console.log(`КОординаты ${event.x}  ${event.y}`);
}

function mousedown(event){
    console.log(`Нажатие мыши на элементе ${event.target}`);
}

function mouseup(event){
    console.log(`Отжатие мыши на элементе ${event.target}`);
}
function scroll_(event){
    console.log(event);
    //определение координаты смещения 
    console.log(`Смещение ${pageYOffset}`);
}


let div = document.querySelector('div');
//mouseover событие наведения мыши 
div.addEventListener('mouseover', mouseover);
//mouseout событие уведения мыши
div.addEventListener('mouseout', mouseout);
//событие перемещения 
div.addEventListener('mousemove', mousemove);
//Нажатие мыши на элементе
div.addEventListener('mousedown', mousedown);
//Отжатие мыши на элементе
div.addEventListener('mouseup', mouseup);
//скролл 
window.addEventListener('scroll', scroll_);