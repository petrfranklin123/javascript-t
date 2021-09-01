function demostrate(obj){
    //console.log(obj);
    for(let key in obj){
        console.log(`${key} параметр равен ${obj[key]}`)
    }
}
let squere = {
    top: 0,
    left: 0,
    width: 100,
    height: 100
}

demostrate(squere);

squere.top = 100;
squere.left = 100;
squere.width = 300;
squere.height = 300;

demostrate(squere);