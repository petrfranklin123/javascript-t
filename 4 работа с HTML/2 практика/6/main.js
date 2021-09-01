
document.querySelector('body').insertAdjacentHTML('afterbegin', '<ul>hi</ul>');

while(1){
    let elem = prompt("Введите запись в список");
    if(elem == "clear"){
        document.querySelector('li').remove;
        continue;
    }else if(elem == "exit"){
        break;
    }else{
        document.querySelector('ul').insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
    }
}