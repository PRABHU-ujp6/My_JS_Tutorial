const user = {
    username: "Urmik",
    price: 6422,

    welcomeMessage: function(){
        console.log(`${this.username} , please Welcome`);
        // console.log(this);    // provide all details but below calling must be toggled
        
    }
}

// user.welcomeMessage()
// user.username = "Akan"
// user.welcomeMessage()

// console.log(this);    // only shows {}


// function chai(){
//     let username = "Akan"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "Akan"
//     console.log(this.username);
// }

// chai()


// arrow functions...
const chai = () =>{
    let username = "Akan"
    console.log(this);
}

// chai()


const addTwo = (num1, num2) => {
    return num1 + num2   // explicitly return
}

// or implicitly...
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)   // parenthises is important..! 

console.log(addTwo(4,6));
