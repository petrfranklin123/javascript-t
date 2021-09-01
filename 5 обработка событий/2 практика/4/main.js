function ListenerEnter(event){
    //ожидаем нажатие enter 
    if(event.keyCode == "13"){
        //проверяем существует ли блок object 
        if(!document.getElementById('object')){
            //создаем перемещаемый блок
            wrapper.insertAdjacentHTML('afterbegin', '<div id="object"></div>');
            let object = document.getElementById('object');
            //получаем значение высоты и ширины рабочей области
            console.log(`${height_center} ${width_center}`);
            //рассчитываем правильно высоту, чтобы созданный блок отображался правильно
            height_center = height_center - (parseInt(object.clientHeight) / 2);
            //рассчитываем правильно ширину, чтобы созданный блок отображался правильно
            width_center = width_center - (parseInt(object.clientWidth) / 2);
            // проверка размеров созданного блока
            console.log(`${Number(object.clientHeight)} ${Number(object.clientWidth)}`);

        }
        //Блок управления клавишами
    }else if(event.keyCode == "39"){
        //изменяем позиционирование 
        width_center = width_center - 3;
        //Добавляем в стили измененные переменные 
        document.getElementById('object').style.right = width_center + "px";
    }else if(event.keyCode == "37"){
        width_center = width_center + 3;
        document.getElementById('object').style.right = width_center + "px";
    }else if(event.keyCode == "38"){
       height_center = height_center -  3;
        document.getElementById('object').style.top = height_center + "px";
    }else if(event.keyCode == "40"){
        height_center = height_center +  3;
         document.getElementById('object').style.top = height_center + "px";
     }

}


let wrapper = document.getElementById('wrapper');
let left = 0;
let right = 0;
//добаляем событие нажатий клавиш 
window.addEventListener('keydown', ListenerEnter);

//находим центр объекта body
let height_center = parseInt(document.body.clientHeight) / 2;
let width_center = parseInt(document.body.clientWidth) / 2; 


//clientHeight и clientWidth выдает рабочую область элемента, без padding
//offsetHeight и offsetWidth выдает размеры с учетом всех отступов 
 


