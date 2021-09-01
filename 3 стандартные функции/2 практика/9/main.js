let interval = 500;
let counter = 0;
let i = 0;

function timeOut(){
    if(i < 10){
        setTimeout(timeOut, interval)
    } 
    counter += interval;
    console.log(counter);    
    i++;
}

setTimeout(timeOut, interval);