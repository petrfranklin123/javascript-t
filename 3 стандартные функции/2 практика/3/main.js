function login_reg(str){
    let reg = /^[a-z0-9][a-z0-9]{2,32}/i;
    return str.match(reg);
}

function email_reg(str){
    let reg = /[a-z0-9_][a-z0-9_]*@([a-z0-9]+[a-z0-9_-]*[a-z0-9]+\.)+[a-z0-9]+$/i;
    return str.match(reg);
}

/*let str_user = prompt("Введите логин");

let str_search = login_reg(str_user)
if(login_reg(str_user)){
    console.log(str_search)
    for(let key of str_search){
        console.log(key);
    }
    console.log("Логин верный")
}*/

let email_user = prompt("Введите email'ы");

let email_search = email_reg(email_user)
if(email_reg(email_user)){
    console.log(email_search)
    for(let key of email_search){
        console.log(key);
    }
    console.log("email верный")
}