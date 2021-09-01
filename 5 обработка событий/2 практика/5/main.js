function display(){
    error.style.display = "none";
}
function keydown_login(event){
    if((!event.key.match(/[a-z0-9]/i))){
        event.preventDefault();
        error.innerHTML = "Недопустимый символ";
        error.style.display = "block";
        setTimeout(display, 1000);
    }
}
function keydown_password(event){
    if((!event.key.match(/[a-z0-9\-\_]/i))){
        event.preventDefault();
        error.innerHTML = "Недопустимый символ в пароле";
        error.style.display = "block";
        setTimeout(display, 1000);
    }
}

function submit(event){
    console.log(event);
    console.log(event.target); // равносильно console.log(this);
    let form = event.target;
    //пример обращения через заготовленный шаблон
    let login = form.querySelector('input[name="login"]');
    let password = form.querySelector('input[name="password"]');
    let re_password = form.querySelector('input[name="re_password"]');
    if(!(password == re_password)){
        error.innerHTML = "Пароли не совпадают";
        error.style.display = "block";
        console.log("Пароли не совпадают");
        re_password.focus();
    }
    //console.log(login.value, password.value, re_password.value);
    event.preventDefault();
    
}


let login = document.getElementById('login').addEventListener('keydown', keydown_login);
let password = document.getElementById('password').addEventListener('keydown', keydown_password);
let re_password = document.getElementById('re_password').addEventListener('keydown', keydown_password);
let error = document.getElementById('error');

document.querySelector('form').addEventListener('submit', submit);