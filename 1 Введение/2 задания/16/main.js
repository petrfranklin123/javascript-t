
function promptt(name){
    try{
        if(Number.isNaN(name)){

        }
        a++;
    }catch(e){
        alert();
        error(e.name);
    }finally{
        console.log(`Работа функции закончена`)
    }
}
function error(msg){
    console.log(`Ошибка ${msg}`);
}

let name = prompt("введите свое имя");
promptt(name);