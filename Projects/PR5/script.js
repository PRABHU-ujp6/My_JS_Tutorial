const randonmColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i=0; i < 6; i++ ){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

console.log(randonmColor())

let colorInterval;

const startChangingColor =  function(){
    if(!colorInterval){
        colorInterval = setInterval(changeBgColor, 1000)

    }
    function changeBgColor(){
        document.body.style.backgroundColor = randonmColor()
    }
}

const stopChangingColor =  function(){
    clearInterval(colorInterval)
    colorInterval = null
}


document.querySelector('#start').addEventListener('click', startChangingColor )
document.querySelector('#stop').addEventListener('click', stopChangingColor)