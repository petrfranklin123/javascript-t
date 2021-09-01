let x = 0; 
let y = 10;

function test1(){
    console.log(x);
}

function test2(){
    let x = 0;
    function print(){
        console.log(x);
        console.log(y);
    }
    print();
}

x = 5;
test1();
test2();