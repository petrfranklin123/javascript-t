let arr = [];
while (true){
    let code = prompt(`Введите код операции\n (1 - добавить элемент; 2 - вывести массив; 3 - выход из цикла)`);
    if(code == '1'){
        arr[arr.length] = prompt(`Введите элемент`);
    }else if(code == '2'){
        let str = '';
        for(let key in arr){
            str += `${key} - й элемент массива равен ${arr[key]}`;
            if(Number(key) + 1 != arr.length){
                str += '\n';
            }
        }
        alert(str);
    }else if(code == '3'){
        break;
    }else{
        alert("Неизвестный код!");
    }
}