function handerButton(obj){
    //передается кнопка
    console.log(obj.innerHTML);
}

function handerButton2(obj){
    console.log(obj);
    console.log(obj.target.innerHTML);
}

function handerButton3(obj){
    console.log(obj);
    console.log(obj.target.innerHTML);
}

//присваиваем событие нажатия на кнопку и передаем функцию
document.getElementById("btn_2").onclick = handerButton2;

//такая запись более приветствуется 
//передаем два параметра, название события "click", а название подключаемых событий будет "onklick", вторым параметром будет функция
document.getElementById("btn_3").addEventListener('click', handerButton3);

//чтобы удалить событие 
//в качестве параметров передается название события и ее обработчика 
document.getElementById("btn_3").removeEventListener('click', handerButton3);

/*
// Вариант 1. Привязываем контекст и первые по порядку параметры
function someFunk(a, b, event) {
    console.log(a, b, event);
  }
  element.addEventListener('click', someFunk.bind(null, 1, 2));
  
  // Вариант 2. Используем интерфейс EventListener
  function someFunk(event) {
    console.log(this.a, this.b, event);
  }
  element.addEventListener('click', {handleEvent: someFunk, a: 1, b: 2});
  */