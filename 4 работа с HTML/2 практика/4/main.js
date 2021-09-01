let elements = document.querySelectorAll('a');

for(let elem of elements){
    //console.log(elem);
    let href = elem.getAttribute('href');
    if(elem.getAttribute('href') != 'http://mysite.local'){
        elem.setAttribute('href', `http://mysite.local/r?a=${href}`);
    }
}

 