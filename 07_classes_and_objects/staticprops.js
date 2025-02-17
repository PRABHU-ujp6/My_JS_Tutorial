class User{
    constructor(username){
        this.username = username
    }

    // with out static keyword it will be utilized... 
    static createID(){                 
        return `123`
    }
}

const chai = new User("Urmik") 
console.log(chai.createID());    
