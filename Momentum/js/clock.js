const clock = document.querySelector("#clock");

function getTime() {
    const date = new Date();
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getTime();
setInterval(getTime, 1000);