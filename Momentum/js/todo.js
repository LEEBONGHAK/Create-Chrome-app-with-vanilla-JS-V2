const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_LS = 'toDos';

function paintToDo(newToDo) {
    const li = document.createElement("li");      // html에 쓰일 tag생성
    const span = document.createElement("span");      // html에 쓰일 tag생성
    li.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handletoDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;    // input value 저장
    paintToDo(newToDo);
    toDoInput.value = "";       // input value reset
}

toDoForm.addEventListener("submit", handletoDoSubmit);