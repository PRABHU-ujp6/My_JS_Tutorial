// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Urmik"
tinderUser.email = "Ujp@1234.com"

// console.log((tinderUser));

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        newFullName: {
            firstname: "Akan",
            lastname: "Patel"
        }
    }
}

// console.log(regularUser.fullname.newFullName.lastname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("email")

const course = {
    coursename: "js in hindi",
    price: "444",
    courseTnstructor: "Urmik Patel"
}

const {courseTnstructor: instructor} = course

// console.log(courseTnstructor);
console.log(instructor);

