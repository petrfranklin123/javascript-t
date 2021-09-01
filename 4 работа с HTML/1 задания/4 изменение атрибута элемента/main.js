let element = document.querySelector('h1');

//hasAttribute условие прровверки на наличие атрибута 
//если такого атрибута нет, то false 
console.log(element.hasAttribute('data-color'));
console.log(element.hasAttribute('data-id'));

//если мы убеждены, что атрибут имеется, то мы можем запросить его через 
//getAttribute - этот метод выведет значение этого атрибута
console.log(element.getAttribute('data-id'));

//чтобы изменить значение атрибута 
//setAttribute - изменяем значение на 5
element.setAttribute('data-id', '5');
//проверяем 
console.log(element.getAttribute('data-id'));

//удаление атрибута 
element.removeAttribute('data-id');
//проверяем 
console.log(element.hasAttribute('data-id'));

//перебираем все атрибуты данного элемента
//для этого выбираем нужный элемент и вызываем метод attributes  
for(let attr of document.querySelector('p.test').attributes){
    console.log(attr);
}


//добаляем один атрибут во множество элементов
let elements = document.querySelectorAll('a');
for(let elem of elements){
    elem.setAttribute('target', '_blank');
}

//добавить атрибут класса возможно через setAttribute, но провлема в том, что предидущий класс 
//ЗАМЕНИТСЯ на тот, что послан 
//для этого существует функция classList.add()
document.querySelector('h1').classList.add('big');