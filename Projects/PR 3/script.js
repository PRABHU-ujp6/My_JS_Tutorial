const clock = document.getElementById('clock')

setInterval(function(){
    const date = new Date();

    clock.innerHTML = date.toLocaleDateString();

}, 1000);