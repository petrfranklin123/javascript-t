let h1 = document.querySelector('#header');
h1.style.fontSize = "200%";
h1.style.color = "red";

//получаем все элементы p и меняем стили шрифта 
for(let elem of document.querySelectorAll('p')){
    elem.style.fontStyle = "italic";
}

//постепенное затухание 
function hide(){
    let opacity = Number(document.body.style.opacity);
    opacity -= 0.01;
    if(opacity <= 0){
        opacity = 0;
    }
    document.body.style.opacity = opacity;
    if(opacity > 0){
        setTimeout(hide, 10);
    }
}
document.body.style.opacity = 1;
hide();