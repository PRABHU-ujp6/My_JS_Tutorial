
const map = new Map()                   // it add only unique values...

map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("NYC", "New York City")
map.set("Aus", "Australia")

// console.log(map);

// for (const key of map) {
//     console.log(key);  
// }

// or 

for (const [key, value] of map) {
    // console.log(key, ":-" , value);  
}

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    py: "python"
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

const coding = ["JS", "python", "Java", "React", "NodeJs"]

// coding.forEach(function (item){
//     console.log(item);
    
// })

// or

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// or

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    // console.log(item.languageName);
})

// filters
// const myNums = [1,2,3,4,5,6,7,8,9,0]

// const  newNums = myNums.filter( (num) => num > 5)
// or
// const  newNums = myNums.filter( (num) => {
//     return num > 5
// })

// const newNums = []
// myNums.filter( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// maps

// const myNums = [1,2,3,4,5,6,7,8,9,0]

// // const newNums = myNums.map( (num) => num  + 10 )
// const newNums = myNums
//                     .map( (num) => num * 10)
//                     .map( (num) => num + 1)
//                     .filter( (num) => num > 40)

// console.log(newNums);

// reduce ....

const myNums = [1,2,3,4]

// const newNums = myNums.reduce( function (acc, currval) {
//     console.log(`acc : ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const newNums = myNums.reduce( (acc, currval) => acc+currval, 0)
console.log(newNums);

