let str = "12.5";
console.log(typeof(str) + " " + str);

let number = Number(str);
console.log(typeof(number) + " " + number);
console.log(Number("abs"));
console.log(Number(true) + " " + Number(false));

console.log("1" + "2" + "String");
console.log(Number('1') + Number('2') + "Number");

console.log(String(true) + " " + typeof(String(true)));
console.log(String(15.7) + " " + typeof(String(15.7)));

console.log(Boolean(15) + " " + Boolean(0));
console.log(Boolean("abs") + " " + Boolean(""));
console.log(Boolean("0") + " " + Boolean(""));

let a = "15";
let b = "17";

console.log(a + b);
console.log(Number(a) + Number(b));
//сокращенная запись предидущей операции
console.log(+a + +b); 