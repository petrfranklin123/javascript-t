
function mouseover(event){
    body.insertAdjacentHTML('afterbegin', `<p style="" id="fantom">Фантомный абзац</p>`)
}   

function mouseout(event){
    document.getElementById('fantom').remove();
}

function mousedown(event){
    //p_fantom.style.color = "#000";
    document.getElementById('fantom').style.color = "red";
}

function mouseup(event){
    //p_fantom.style.color = "red";
    document.getElementById('fantom').style.color = "#000";
}

//обращаемся к элементу body
let body = document.querySelector('body');
//создаем элемент div
//let void_div = document.createElement('div');
body.insertAdjacentHTML('afterbegin', `<div style="width: 150px; height: 100px; border: 1px solid #000;"></div>`);


let div = document.querySelector('div');
//обращение к тегу p 
let p_fantom = document.getElementById('fantom');

div.addEventListener('mouseover', mouseover);

div.addEventListener('mouseout', mouseout);

div.addEventListener('mousedown', mousedown);

div.addEventListener('mouseup', mouseup);