
function printArray(arr){
    console.log(`Длина массива ${arr.length}`);

    for (let i = 0; i < arr.length; i++){
        console.log(`Элемент с индексом ${i} равен ${arr[i]}`);
    }

    //перебор массива ПО ИНДЕКСУ
    for(let key in arr){
        console.log(`Элемент с индексом ${key} равен ${arr[key]}`);
    }
    //перебор ЭЛЕМЕНТОВ массива
    for(let elem of arr){
        console.log(`Элемент массива ${elem}`);
    }
}
//среднее значение 
function getAverageValue(arr){
    let sum = 0;
    for(let elem of arr){
        sum += elem;
    }
    return sum / arr.length;
}
//максимальное значение в массиве
function getMaxValue(arr){
    let max = arr[0];
    for(let elem of arr){
        if(elem > max){
            max = elem;
        }
    }
    return max;
}

//объявление массива 
let arr = []; // Аналог let arr = new Array();

arr = ['Строка', 10, true, false, 'Alex'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

console.log(`----Переопределение----`);

arr[4] = 'John';
console.log(arr[4]);

//Добавление нового элемента массива 
arr[5] = 40;
console.log(arr[5]);

//Вывод всего массива в консоль
console.log(arr);

console.log(`------------`);
console.log(`Среднее значение [10, 10, 25] равно ${getAverageValue([10, 10, 25])}`);

console.log(`Максимальное значение [10, 10, 5, 25, 15] равно ${getMaxValue([10, 10, 5, 25, 15])}`);

//Двумерный массив
arr = [[1, 2 ,3], [4, 5]];

//вывод элемента в двумерном массиве 
console.log(arr[0][2]);

//перебор двумерного массива с помощью цикла по индексу
for(let row in arr){
    for(let col in arr[row]){
        console.log(`Элемент с индексом ${row}, ${col} равен ${arr[row][col]}`);
    }
}





