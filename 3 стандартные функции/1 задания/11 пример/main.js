// программа для определения поличество совпадений вандомных чисел в заданном диапозоне 
// время начала кода 
let start = Date.now(); // аналог let start = (new Date()).getTime();
 
//start = (new Date()).getTime();

const MIN = 1;
const MAX = 10;

const COUNT = 1000;

let data = [];

let c = 0;

const DELAY = 1;

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function add(){
    if (c < COUNT){
        c++;
        let n = random(MIN, MAX);
        console.log(n);
        //добавление элемента в конец массива 
        data.push(n);
        setTimeout(add, DELAY);
    }
    else analysis();
}

function analysis(){
    console.log(data);
    let map = new Map();
    for(let v of data){
        //если есть совпадение ключа
        if (map.has(v)){
            map.set(v, map.get(v) + 1);
        //иначе передаем ключ и его значение 
        }else{
            map.set(v, 1);
        }
    }
    //выводим количество совпадений по ключам 
    for (let entry of map){
        console.log(entry[0] + " - " + entry[1]);
    }
    console.log(`Общее время выполнения скрипта ${Date.now() - start} мс`)
}

setTimeout(add, DELAY);