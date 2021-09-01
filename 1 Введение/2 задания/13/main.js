const LENGTH = 2;

function returnPrompt(){
    return prompt("Введите имя");
}
function checkName(name){
    return name.length >= LENGTH;
}

let a = true;
while(a){
    let name = returnPrompt();

    let checkContinue = checkName(name);

    let checkBreak = name;

    checkBreak = Number(checkBreak);

    if(checkBreak == -1) break;

    if(checkContinue == false) continue;

    alert(`Ваше имя ${name}`);

}