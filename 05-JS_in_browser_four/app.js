const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("active");  // list에 존재하는 지 확인 후, 있으면 token 추가하고 없으면 token 제거한다.
}

h1.addEventListener("click", handleTitleClick);