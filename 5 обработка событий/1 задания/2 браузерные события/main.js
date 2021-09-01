function myClick(){
    //возвращаем true или false
    return confirm('Вы точно хотите перейти по этой ссылке?');
}
function clickLink(event){
    //функция для сброса базового функционала браузера
    event.preventDefault();
    console.log(`Клик по ссылке ${event.target}`);
    alert(`Клик по ссылке ${event.target}`);
}

document.getElementById('a_4').addEventListener('click', myClick);

for(let elem of document.querySelectorAll('a')){
    //проверяем, есть ли обработчик onclick, если его нет, то выполянем присвоение события  
    if(!elem.onclick){
        elem.addEventListener('click', clickLink);
    }
}