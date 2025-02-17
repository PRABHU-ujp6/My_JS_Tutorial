function multiBy5(num){
    return num*5
}

multiBy5.power = 2

// console.log(multiBy5(5));
// console.log(multiBy5.power);
// console.log(multiBy5.prototype);


function createUser(username, score){
    this.username = username,
    this.score = score
} 

createUser.prototype.increment = function(){
    // score++;  //it does not know whom to get and provide value..
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
}
const chai = new createUser("Chai", 25)
const tea = createUser("tea", 45)

// chai.printMe()
// chai.increment()


const myHeroes = ["Hulk", "Ironman"] 

const heroPower = {
    thor: "hammer",
    spiderman: "swing",

    getSpidypower: function(){
        console.log(`Spiderman power is : ${this.spiderman}`);
        
    }
}


Object.prototype.urmik = function(){
    console.log("Urmik has all powers...");
    
}

Array.prototype.heyUrmik = function(){
    console.log("Urmik says Hello...");
    
}

// heroPower.urmik
// myHeroes.urmik()
// myHeroes.heyUrmik()
// heroPower.heyUrmik()    // it cause error becoz down the chain will have the access...not the upper one..

// Inheritence

const User = {
    name: "Urmik",
    email: "abc@gmail.com"

}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__ : TeacherSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeacherSupport, Teacher)    // modern way to write

let newUserName = "uigceyveyh      ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.length}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

newUserName.trueLength()

"urmik".trueLength()
"Akan".trueLength()