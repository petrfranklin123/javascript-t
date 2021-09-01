//
let str_1 = "ё";
let str_2 = "я";

console.log(str_1 > str_2);

let arr = ["Ёлка", "Ягода", "Апельсин", "Береза"];

console.log(arr.sort());

//данный объект берет информацию с компьютера, где он отрабатьывает 
let collator = new Intl.Collator();

console.log(arr.sort(
    function(item1, item2){
        return collator.compare(item1, item2);
    }
));

//объект для времени 
//стандартное время 
console.log(Date());
let dtfru = new Intl.DateTimeFormat('ru-RU');

//станадартное для России время 
console.log(dtfru.format(new Date()));

let dtfen = new Intl.DateTimeFormat('en-EN', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

console.log(dtfen.format(new Date()));
