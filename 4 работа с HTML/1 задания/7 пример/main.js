let count = 500; 

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
}