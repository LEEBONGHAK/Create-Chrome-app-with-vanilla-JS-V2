const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_LS = 'toDos';

let toDos = [];


function deleteToDo(event) {     // 버튼을 눌으면 해당 li와 저장된 local storage 데이터를 제거하는 함수
    const btn = event.target;   // .target : 'event'에 'target'은 선택한 것이 어떤 HTML을 갖는지 알려줌
    const li = btn.parentElement;  // .parentElement : 부모 tag를 불러옴
    
    li.remove()   // .remove() : 해당 tag를 제거
}


/* 
object인 array 데이터를 JOSON.stringify를 이용해 string으로 변환하여
array를 local storage에 저장해 주는 함수
(local storage에는 string으로만 저장 가능하기 때문에)
*/
function saveToDos() {      // toDos를 local storage에 저장하는 함수
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  // stringify() : 변수 등을 문자열로 바꿈
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
    toDoInput.value = "";       // input value reset
    
    toDos.push(newToDo);    // store input value in toDos array
    saveToDos();   // store toDos in local storage

    paintToDo(newToDo);
}


toDoForm.addEventListener("submit", handletoDoSubmit);

const savedToDos = localStorage.getItem(TODOS_LS);  // local storage 내용을 가져옴

if (saveToDos !== null) {    // when savedToDos exist in local storage
    const parsedToDos = JSON.parse(savedToDos);  //  parse() : 문자열을 JSON으로 바꿈
    toDos = parsedToDos;        // toDos array가 reset되어 저장된 local storage가 reset되지 않게 방지
    parsedToDos.forEach(paintToDo)  // .forEach() : array에 담겨있는 것들 각각에 한번씩 함수를 실행시킴
}