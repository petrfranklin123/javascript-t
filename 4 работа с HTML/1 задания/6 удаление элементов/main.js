//

//создаем класс с добавлением элемента
let p = document.createElement('p');
p.innerHTML = "Эта строка добавлена через JavaSkript";
//добавляем элемент В КОНЕЦ элемента, к которому обращаются 
document.body.append(p);
//добавляем элемент В НАЧАЛО элемента, к которому обращаются 
document.body.append(p);
//эти два элемента добавляют во внутрь элемента, к котолром уобращаются 


//before добавляет до начала элмента, к которому обращаются
document.querySelector('ul').before(p);
//after добавляет после конца элмента, к которому обращаются
document.querySelector('ul').after(p);
//в данном примере будет показан только последнее изменение элепента 
//чтобы старые не затирались нужно клонировать класс Р в нашем случае 


//первым параметром метода insertAdjacentHTML куда добавляем, вторым - кого добавляем
//beforebegin - перед началом 
document.querySelector('ul').insertAdjacentHTML('beforebegin', '<p>Элемент добавлен с помощью insertAdjacentHTML<a href="#">!!!</a></p>');
//afterbegin - после начала 
document.querySelector('ul').insertAdjacentHTML('afterbegin', '<p>Элемент добавлен с помощью insertAdjacentHTML<a href="#">!!!</a></p>');

document.querySelector('ul').insertAdjacentHTML('beforeend', '<p>Элемент добавлен с помощью insertAdjacentHTML<a href="#">!!!</a></p>');

document.querySelector('ul').insertAdjacentHTML('afterend', '<p>Элемент добавлен с помощью insertAdjacentHTML<a href="#">!!!</a></p>');


//удаление элементов 
document.querySelector('a').remove();

// cloneNode клонируем элемент, при этом если в парааметрах true, то копируется весь элемент, вместе с дочерними элементами
// если false, то копируется только обертка 
let ul = document.querySelector('ul').cloneNode(true);
document.body.append(ul);