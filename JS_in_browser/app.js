console.log(document.title);

const grab = document.getElementById("grab");
console.log(grab.textContent);

grab.innerText = "Got you!"
console.log(grab.innerText);

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const div_hello = document.querySelector(".div_hello h1");     // element를 css 방식(tag, .class, #id)으로 검색 (가장 첫번째 element만 찾고 그 이상은 안찾음)
console.log(div_hello);

const hellos2 = document.querySelectorAll("h1");    // html 내 모든 지정 tag들 검색하여 array로 반환
console.log(hellos2);


function handleGrabClick() {
    console.log("Grab event is happened!");
    grab.style.color = "blue";
}

function handleGrabMouseEnter() {
    grab.innerText = "Mouse is here!"
}

function handleGrabMouseLeave() {
    grab.innerText = "Mouse is gone!"
}

// document.addEventListener("click", handleGrabClick);
document.onclick = handleGrabClick;     // 위와 같은 효과(다른 표현)
// grab.addEventListener("mouseenter", handleGrabMouseEnter);
grab.onmouseenter = handleGrabMouseEnter;   // 위와 같은 효과(다른 표현)
grab.addEventListener("mouseleave", handleGrabMouseLeave);

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("Connected WIFI");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);