// singleton objects
//Objects.create

// literals

const mySym = Symbol("key1")  // just to know about symbol

const JsUser = {
    name: "Urmik",
    email: "ujp@1234.com",
    age: "22",
    // mySym: "Mykey1",     // it will have string datatype but value same as symbol
    [mySym]: "Mykey1",
    location: "Ahmedabad"
}

// console.log(JsUser.email);
// console.log(JsUser[email]);    it will cause error...
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);


JsUser.email = "Akan@1234.com"
// Object.freeze(JsUser)  // to restrict the changes...
JsUser.email = "Akan@4567.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello user ${this.name}`);
    
}
console.log(JsUser.greeting);  // provide indefined result....
console.log(JsUser.greeting())


