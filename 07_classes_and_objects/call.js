function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)   // upar wala ni value badhi mali jse,,this lakhvanu imp 6e..

    this.email = email
    this.password = password
}

const userOne = new createUser("Akan", "isduvugv@gail.com", 1234)
console.log(userOne);
