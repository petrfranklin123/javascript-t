let date = new Date();
//выводит конкретную дату
console.log(date);
//выводит дату в милисекундах 01.01.1970
// 1 сек = 1000 милисек
console.log(date.getTime());

//вывести текущий год 
console.log(date.getFullYear());
//вывести текущий месяц, месяц идет от нуля 
console.log(date.getMonth());
//текущая дата 
console.log(date.getDate());
//часы
console.log(date.getHours());
//минуты
console.log(date.getMinutes());
//секунды 
console.log(date.getSeconds());
//день недели воск = 0, суббота = 6
console.log(date.getDay());


//установка времени 
date.setFullYear(2021);
date.setMonth(2);
date.setDate(21);
date.setHours(15);
date.setMinutes(14);
date.setSeconds(20);
date.setMilliseconds(0);
console.log(date);

