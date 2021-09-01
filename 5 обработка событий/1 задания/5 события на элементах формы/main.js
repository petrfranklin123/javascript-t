
function handlerFocus(event){
    if(event.type == 'focus'){
        console.log('Фокус установлен на элементе');
    }else if(event.type == "blur"){
        console.log(this.value);
        
    }
    //console.log(event);
    console.log(this);
}

function submitForm(event){
    console.log("ddd");

    let form = event.target;
    let error = document.getElementById('error');
    error.innerHTML = "";
    let name = form.querySelector('input[name="name"]');
    if(name.value.length == 0){
        error.innerHTML += "Вы не ввели имя";
        name.focus();
    }
    if(!form.querySelector('input[name="rules"]').checked){
        error.innerHTML += "Вы не согласились с условиями";
    }
    if(!error == ""){
        error.style.display = "block";
        event.preventDefault();
    }
    
}

//вешвем фокус на поле для ввода
document.querySelector('input[name="name"]').addEventListener('focus', handlerFocus);
document.querySelector('input[name="name"]').addEventListener('blur', handlerFocus);

//обработка формы
document.querySelector('form').addEventListener('submit', submitForm);

