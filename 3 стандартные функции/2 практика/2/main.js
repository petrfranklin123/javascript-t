let str = prompt("Введите строку");

let sum_symbol = 0;

for(let key in str){
    if(str[key].toLowerCase() == 'a'){
        sum_symbol = sum_symbol + 1;
    }
}

alert(`Количество символово "a" ${sum_symbol}`);