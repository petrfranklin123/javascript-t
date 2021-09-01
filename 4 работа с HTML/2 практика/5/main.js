//перевод из 10 в 16 систему счисления, принимется строка или число от 0 до 15
function hex(dec){
    dec = Number(dec);
    dec = dec % 16;
    switch(dec){
        case 15:{
            dec = "F";
            break;
        }
        case 14:{
            dec = "E";
            break;
        }
        case 13:{
            dec = "D";
            break;
        }
        case 12:{
            dec = "C";
            break;
        }
        case 11:{
            dec = "B";
            break;
        }
        case 10:{
            dec = "A";
            break;
        }
    }
    return String(dec);
} 

/*function system(dec, notation){
    let division, akk;
    while(1){
        dec
    }

}*/

function generateColor(){
    str_color = "#";
    let color;
    for(let i = 0; i < 6; i++){
        color = Math.floor(Math.random() * (16 - 0) + 0);
        color = hex(color);
        str_color = str_color + color;
    }
    return str_color;
}
function reColor(elem, color){
    elem.style.color = color;
}

function select_dom(){
    let dom_text = document.querySelector('body');
        color = generateColor();
        console.log(color);
        setTimeout(reColor, 200, dom_text, color);
        setTimeout(select_dom, 300);
}

select_dom();
