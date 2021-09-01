function zamena_text(event){
    console.log(this.a, this.b, this.btn, event);
    //!!!!!!!!target!!!!!!! выделяет нужный нам html документ, с которым мы работаем
    event.target.innerHTML = "Удалено пользователем";
    //удаляем событие 
    event.target.removeEventListener('click', zamena_text);
    //добавляем новое событие
    event.target.addEventListener('click', delate);

}
//функция для удаления элемента
function delate(event){
    event.target.remove();
}

let btn_selector = document.getElementsByClassName("btn");

for(let btn of btn_selector){
    console.log(btn);
    //передача параметров (в данном примере это излишне)
    btn.addEventListener('click', {handleEvent: zamena_text, a: 1, b: 2, d: btn});
}

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