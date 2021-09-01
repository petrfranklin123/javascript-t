console.log(document.body);
console.log(document.documentElement);
console.log(document.head);


console.log("--------------");

// document.body.childNodes выбирает все дочерние элементы body
for(let node of document.body.childNodes){
    console.log(node);
    //выбираем список ul и выводим дочерние элементы  
    if(node.nodeName == "ul"){
        console.log(node.childNodes);
    }
}


console.log("--------------");

//выбираем 7-й элемент из body
console.log(document.body.childNodes[7]);
console.log(document.body.childNodes[7].childNodes[3]);

let elem = document.body.childNodes[7];

//переприсваиваем элементу ul новую html разметку
elem.innerHTML = '<li>1</li><li>2</li><li>3</li>';

