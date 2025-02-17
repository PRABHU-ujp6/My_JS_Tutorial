class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get password(){
        return this._password
    }

    set password(value){
        this._password = value.toUpperCase();
    }
}

const ujp = new User("acxasvuv@gmail.com", "abcd")
console.log(ujp.password);
