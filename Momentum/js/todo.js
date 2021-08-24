const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_LS = 'toDos';

function deleteToDo(event) {     // 버튼을 눌으면 해당 li와 저장된 local storage 데이터를 제거하는 함수
    const btn = event.target;   // .target : 'event'에 'target'은 선택한 것이 어떤 HTML을 갖는지 알려줌
    const li = btn.parentElement;  // .parentElement : 부모 tag를 불러옴
    
    li.remove()   // .remove() : 해당 tag를 제거
}

function paintToDo(newToDo) {       // submit된 to do를 html에 추가해 보여주는 함수
    const li = document.createElement("li");      // html에 쓰일 tag생성

    const span = document.createElement("span");      // html에 쓰일 tag생성 (to do 내용)
    span.innerText = newToDo;

    const button = document.createElement("button");      // html에 쓰일 tag생성 (삭제 버튼)
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);       // button added delete function

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handletoDoSubmit(event) {  // submit event를 다루는 함수
    event.preventDefault();
    const newToDo = toDoInput.value;    // input value 저장
    paintToDo(newToDo);
    toDoInput.value = "";       // input value reset
}

toDoForm.addEventListener("submit", handletoDoSubmit);