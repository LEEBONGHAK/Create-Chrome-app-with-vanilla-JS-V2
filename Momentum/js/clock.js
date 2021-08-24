const clock = document.querySelector("#clock");

function getTime() {
    const date = new Date();
    // padStart(stringLength, filled) : 문자열 길이를 지정하고 길이보다 적은 문자열의 경우 filled에 지정한 문자를 앞에 채워줌
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);