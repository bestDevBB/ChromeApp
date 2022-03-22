"use strict";

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// To Do를 배열로 묶어 보과하기 위해 빈 배열을 생성
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // toDos는 Array이므로 JSON.stringify()를 이용하여 String 형태로 변환해줌
    // localstorage는 문자열만 저장할 수 있기 때문에
};

function deleteToDo(event) {
    const li = event.target.parentElement;
    // target은 button, button은 부모를 가지고 있음. li가 button의 부모
    
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
};

function paintToDo(newTodo) { // object를 받음
    const li = document.createElement("li");
    li.id = newTodo.id;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.classList.add("todo-delete-btn");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    button.addEventListener("click", deleteToDo);
    li.appendChild(button); // span을 추가한 후 button을 추가
    li.appendChild(span);
    toDoList.appendChild(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);

    const newToDo = toDoInput.value;
    // input의 현재 value를 새로운 변수에 복사
    // 비우기 전의 값

    toDoInput.value = "";

    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }
    
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) { // savedToDos가 존재한다면
    const parsedToDos = JSON.parse(savedToDos);
    // 살아있는 JS Object로 변환!
    toDos = parsedToDos; // 기존꺼가 사라지지 않고 복원되게 함

    parsedToDos.forEach(paintToDo);
    // forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행함
}