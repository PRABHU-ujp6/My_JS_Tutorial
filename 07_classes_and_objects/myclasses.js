class User {
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password

    }

    encryptPasssword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Urmik", "jshcvugvcuv@gmail.com", 1234)

console.log(chai.encryptPasssword());
console.log(chai.changeUsername());

// other method...

function User2(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
}

User2.prototype.encryptPasssword = function(){
    return `${this.password}abc`
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User2("Akan", "hsgcuagsvgu@gmail.com", 4567)
console.log(tea.encryptPasssword());
console.log((tea.changeUsername()));

