function keydown(event){
    console.log(`Код нажатой клавиши ${event.keyCode} - ${event.code} - ${event.key}`);
}

function keyup(event){
    console.log(`Код нажатой клавиши ${event.keyCode} - ${event.code} - ${event.key}`);
}

function checkName(event){
    //отсеиваем числовые значения в области input 
    if((!event.key.match(/[a-zа-я]/i)) && event.key.toLowerCase() != 'ё'){
        event.preventDefault();
    }
}

//Для того чтобы был выбран блок не input нужно внести свойство tabindex в разметке 
document.querySelector('div').addEventListener('keydown', keydown);
//применяем для всей области обработчики
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
//вызываем функцию для input
document.querySelector('input').addEventListener('keydown', checkName);
