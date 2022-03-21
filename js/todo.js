const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];
// To Do를 배열로 묶어 보과하기 위해 빈 배열을 생성

function saveToDos() {
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos));
    // localStorage.setItem("todos", toDos);
    // toDos는 Array이므로 JSON.stringify()를 이용하여 String 형태로 변환해줌
    // localstorage는 문자열만 저장할 수 있기 때문에
};

function deleteToDo(event) {
    const li = event.target.parentElement;
    // target은 button, button은 부모를 가지고 있음. li가 button의 부모
    li.remove();
};

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button); // span을 추가한 후 button을 추가
    toDoList.appendChild(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);

    const newToDo = toDoInput.value;
    // input의 현재 value를 새로운 변수에 복사
    // 비우기 전의 값

    // console.log(toDoInput.value);
    toDoInput.value = "";
    // console.log(newToDo, toDoInput.value);

    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
    
};

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("This is the turn of", item);
// };


const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // ["a","b","c"]

if(savedToDos) { // savedToDos가 존재한다면
    const parsedToDos = JSON.parse(savedToDos);
    // 살아있는 JS Object로 변환!
    
    // console.log(parsedToDos); // (3) ['a', 'b', 'c']

    // parsedToDos.forEach(sayHello);
    parsedToDos.forEach(item => console.log("This is the turn of", item));
}