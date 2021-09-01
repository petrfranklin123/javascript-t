let log = {
    log_msg(msg){
        console.log(msg);
    }
}

class User{
    static MIN_LENGTH = 3;
    static MIN_LENGTH_PASSWORD = 6;
    _login = '';
    _password = '';
    _firstname = '';
    _surname = '';
    _auth = false;

    constructor(){
        this.log_msg('Создан новый объект user');
    }

    getLogin(){
        return this._login;
    }
    isAuth(){
        return this._auth;
    }

    setLogin(login){
        if(login.length < User.MIN_LENGTH) throw new Error('Логин слишком короткий');
        this._login = login;
    }
    setPassword(password){
        if(password.length < User.MIN_LENGTH_PASSWORD) throw new Error('Пароль слишком короткий');
        this._password = password;
    }
    setFirstname(firstname){
        if(firstname.length < User.MIN_LENGTH) throw new Error('Имя слишком короткий');
        this._firstname = firstname;
    }
    setSurname(surname){
        if(surname.length < User.MIN_LENGTH) throw new Error('Логин слишком короткий');
        this._surname = surname;
    }

    get name(){
        return this._firstname + ' ' + this._surname;
    }

    auth(){
        this.log_msg('Соединение с базой данных для авторизации');
        let result = (this._login == 'admin' && this._password == '123456');
        if(result){
            this._auth = true;
            this.log_msg("Авторизация у пользователя " + this._login + " прошла успешно");
        } 
        else this.log_msg("Ошибка авторизации " + this._login);
        return result;
    }
    logout(){
        if(this._auth){
            this._auth = false;
            this.log_msg("Пользователь " + this._login + " вышел из системы");
        }
        else throw new Error('Пользователь ещё не авторизирован');
    }
}


Object.assign(User.prototype, log);

try{
    let user = new User();
    /*user.setLogin('admin');
    user.setPassword('123456');
    user.setFirstname('Гена');
    user.setSurname('Иванов');*/
    user.setLogin(prompt("Введите логин"));
    user.setPassword(prompt("Введите пароль"));
    user.setFirstname(prompt("Введите имя"));
    user.setSurname(prompt("Введите фамилию"));
    console.log(user.getLogin());
    console.log(user.isAuth());
    console.log(user.name);
    user.auth();
    console.log(user.isAuth());
    user.logout();
    

}catch (e){
    console.log(e);
}