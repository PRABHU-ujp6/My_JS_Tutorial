const user = {
    username: "Urmik",
    email: "abc@gmail.com",
    age: 22,

    getDetails: function(){
        // console.log("Got details from Database.");
        // console.log(`Username: ${username}`);       // will throw error becoause it does not know for which it should have to provide output.
        console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}

// console.log(user.username);
// console.log(user.getDetails());

function User(username, logCount, isLoggedIn){
    this.username = username,
    this.logCount = logCount,
    this.isLoggedIn = isLoggedIn,

    this.greeting = function(){
        console.log(`Welcome  ${this.username}`);
        
    }

    return this

}

// const userOne = User("Urmik", 4, "true")
// const userTwo = User("Akan", 6, "false")   // it will override the above userOne values...

// console.log(userOne);


// to get everytime new instances...use...=> new keyword


const userOne = new User("Urmik", 4, "true")
const userTwo = new User("Akan", 6, "false")
console.log(userOne.constructor);
// console.log(userTwo);

