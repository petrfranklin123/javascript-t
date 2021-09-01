
function minArrayValue(arr){
    let min = 0; 
    let min_index = 0;
    for(let key in arr){
        if(arr[key] < min){
            min = arr[key];
            min_index = key;
        }
    }
    return min_index;
}

function maxDArrayValue(arr){
    let max = 0; 
    for(let row in arr){
        for(let col in arr[row]){
            if(arr[row][col] > max){
                max = arr[row][col];
            }
        }
    }
    return max;
}

let arr = [];
let summ = 0;
for(let i = 0; i < 10; i++){
    summ += i;
    arr[i] = summ;
}
console.log(`Массив arr: ${arr}`);

min_index = minArrayValue(arr);

console.log(`Минимальный индекс в массиве с числами: ${min_index}`);

let darr = [[23, 45, 12],[90, 12, 34]]

console.log(`Максимальный элемент в двумерном массиве ${maxDArrayValue(darr)}`);