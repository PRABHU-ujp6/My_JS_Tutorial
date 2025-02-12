
function userLogIn(username) {
    return `${username} has just logged In`
    // console.log(username)
}

// userLogIn("Urmik")
// console.log(userLogIn("Urmik"))

// for multiple values...

// function calaculateCartPrice(num1){
//     return num1   
// }


// function calaculateCartPrice(...num1){
//     return num1   
// }

function calaculateCartPrice(val1, ...num1){
    return num1   
}

// console.log(calaculateCartPrice(4, 5, 6));


const user = {
    username: "Urmik",
    price: 622
}                                                   // thing to remember...!!

function handleObject(anyobject){
    console.log(`hello ${anyobject.username}`);
    
}

// handleObject(user)

const myNewArray = [100,200,300,400]

function returnValue(getArray) {
    return getArray[2]
}

console.log(returnValue(myNewArray));
// or   console.log(returnValue([10,20,30,40]));

