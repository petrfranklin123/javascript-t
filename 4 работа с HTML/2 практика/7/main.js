/*let count = 500; 

let names = ['Алексей', 'Петр', 'Надежда', 'Катя', 'Ваня', 'Михаил', 'Егор'];

let users = [];

//генератор случайных пользователей
for(let i = 0; i < 500; i++){
    //создаем объект
    let user = {
        name: names[Math.floor(Math.random() * names.length)],
        age: Math.floor(Math.random() * 100) + 1,
        //короткая запись рандомного выброса true или false 
        single: Math.random() > 0.5
    }
    //запись в массив объекта
    users.push(user);
}

console.log(users);

for(let user of users){
    let template = document.getElementById('user-template').cloneNode(true);
    template.removeAttribute("id");
    template.querySelector('.name').innerHTML = user.name;
    template.querySelector('.age').innerHTML = user.age;
    template.querySelector('.single').innerHTML = (user.single)? 'Да' : 'Нет';
    document.body.append(template);
}*/

//создание рандомной даты
function randDate(){
    let date = new Date();
    date.setFullYear(Math.floor(Math.random() * (2020 - 1900)));
    date.setMonth(Math.floor(Math.random() * (12 - 1)));
    date.setDate(Math.floor(Math.random() * (30 - 1)));
    date.setHours(Math.floor(Math.random() * (24 - 1)));
    date.setMinutes(Math.floor(Math.random() * (59 - 1)));
    date.setSeconds(Math.floor(Math.random() * (59 - 1)));
    return date;
}

let count = 10;

//7
let names = ['Алексей', 'Петр', 'Надежда', 'Катя', 'Ваня', 'Михаил', 'Егор'];

//6
let comments = ['alias quibusdam omnis iusto!', 'quia blanditiis repellat dolorum', 'atque perspiciatis aliquid iste consequuntur voluptatibus', 'incidunt. Eum, facilis accusantium atque perspiciatis', 'Reiciendis ab unde voluptate', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'];

let date = new Date();

let users = [];

for(let i = 0; i < count; i++){
    let user = {
        name: names[Math.floor(Math.random() * names.length)],
        date: randDate(),
        commsent: comments[Math.floor(Math.random() * comments.length)],
    }
    users.push(user);
}

console.log(users);

for(let user of users){
    let shablon = document.getElementById("user-template").cloneNode(true);
    shablon.removeAttribute("id");
    shablon.querySelector(".date").innerHTML =  user.date;
    shablon.querySelector(".name").innerHTML = user.name;
    shablon.querySelector(".text").innerHTML = user.commsent;
    document.body.append(shablon);
}