

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        return `USERNAME is: ${this.username}`
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    displayEmail(){
        return `Email is ${this.email}`
    }
}

const chai = new Teacher("Akan", "gscgcvugv@gmail.com", 12345678)
console.log(chai.logMe());
console.log(chai.displayEmail());
console.log(chai instanceof Teacher);
console.log(chai instanceof User);



