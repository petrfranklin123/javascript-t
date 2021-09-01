let bool = true; 

console.log(`Вы мужчина?`);

if(bool == true){
    console.log(`Я мужчина`);
}else{
    console.log(`Я женщина`);
}

let how_old = 90;
console.log(`${how_old}`);

if(how_old <= 18){
    console.log(`У меня юный возраст`);
}else if((18 < how_old) && (how_old <= 30)){
    console.log(`Я молодой`);
}else if((30 < how_old) && (how_old <= 50)){
    console.log(`Я взрослый`);
}else if((50 < how_old) && (how_old <= 80)){
    console.log(`Я зрелый`);
}else{
    console.log(`Я старый`);
}   

if(how_old <= 18) console.log(`У меня юный возраст`);
else if((18 < how_old) && (how_old <= 30)) console.log(`Я молодой`);
else if((30 < how_old) && (how_old <= 50)) console.log(`Я взрослый`);
else if((50 < how_old) && (how_old <= 80)) console.log(`Я зрелый`);
else console.log(`Я старый`);
   
