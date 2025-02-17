
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

const chai = {
    name: "Ginger-chai",
    price: 15,
    isAvailable: true,
    
    orderChai: function(){
        console.log("Chai nhi banni..");
        
    } 
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    // console.log(`${key} : ${value}`);
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
    
}


