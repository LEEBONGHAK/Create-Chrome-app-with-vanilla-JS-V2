const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden", 
    USER_LS = "currentUser";

function onLoginSubmit(event) {
    event.preventDefault();     // 기본 event 제거
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USER_LS, username);        // localStorage에 이름 저장
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const loadUsername = localStorage.getItem(USER_LS);     // localStorage에 저장된 이름 가져오기

if (loadUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(loadUsername);
}
