// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreateDate = new Date(2024, 5, 22)
// let myCreateDate = new Date(2024, 5, 22, 5, 3)
// let myCreateDate = new Date("2024-06-22")
let myCreateDate = new Date("06-22-2024")

// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()

console.log((newDate));
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate);

