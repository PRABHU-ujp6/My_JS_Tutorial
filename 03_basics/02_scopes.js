// let a = 10
// const b = 20                  without any scope and blocks....
// var c = 30


// var c = 100    // it get override in the block...
let a = 300
if(true){
    let a = 10
    const b = 20                 
    var c = 30
    // console.log("Inner ", a);
    
}




// console.log(a);    // not possible
// console.log(b);   // not tpossible 
// console.log(c);   //  possible


function one(){
    const username = "Urmik"

    function two(){
        const website = "youtube"
        console.log(username);    // mota mathi lai sake nanu
        
    }
    // console.log(website); // create issue....nana pr thi motu na levay
    // two()
    
}

// one()

if(true){
    const username = "Urmik"

    if(username === "Urmik"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);               // create issue
    console.log(username);       // it works...
}
// console.log(username);         //create issue


console.log(addOne(5));   // it will work
function addOne(num){
    return num + 1
}

// console.log(addOne(5));           // it will work


addNew(5)  // cause error due to hoisting....
const addNew = function addTwo(num){                 // works like an expression
    return num + 1
}

// console.log(addNew(5));              // it will work


