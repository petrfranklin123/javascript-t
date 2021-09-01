function clickLink(elem){
    alert(elem.target);
    elem.preventDefault();
    console.log(elem.target);
}

for(let elem of document.querySelectorAll('a')){
    console.log(elem);
    elem.addEventListener('click', clickLink);
}