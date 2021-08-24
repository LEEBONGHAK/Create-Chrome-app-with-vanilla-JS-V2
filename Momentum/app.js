const loginInput = document.querySelector("#login_form input");
const loginButton = document.querySelector("#login_form button");

function handleLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", handleLoginBtnClick);