const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);