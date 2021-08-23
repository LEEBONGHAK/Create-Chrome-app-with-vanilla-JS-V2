const loginInput = document.querySelector("#login_form input");
const loginButton = document.querySelector("#login_form button");

function handleLoginBtnClick() {
    console.log(loginInput.value);
}

loginButton.addEventListener("click", handleLoginBtnClick);