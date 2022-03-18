// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");\
// const loginButton = loginForm.querySelector("button");
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     // console.dir(loginInput.value);
//     // console.log("click!!!");

//     const username = loginInput.value;
//     // if(username === "") {
//     //     console.log("Please write your name.");
//     // } else if(username.length > 15) {
//     //     alert("Your name is too long.")
//     // }

//     console.log(username);
// };

// function onLoginBtnSubmit(event) {
//     event.preventDefault();
//     // 브라우저가 기본 동작을 실행하지 못하도록 막아줌
//     // submit은 기본적으로 실행할 경우 새로고침이 되는데
//     // 새로고침이 되는 것을 막아줌
//     // const username = loginInput.value;

//     // console.log(username);
//     console.log(event);
//     console.log(loginInput.value);
// };

// loginButton.addEventListener("click", onLoginBtnClick);

// loginForm.addEventListener("submit", onLoginBtnSubmit);




// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";
// // string만 포함된 변수는 대문자로 표기

// // const link = document.querySelector("a");

// function onLoginBtnSubmit(event) {
//     // event.preventDefault();
//     // console.log(event);
//     // console.log(loginInput.value);

//     event.preventDefault();
//     loginForm.classList.add("hidden"); // login-form 폼에 hidden이라는 class를 추가
//     // const username = loginInput.value;
//     // // console.log(username);
//     // localStorage.setItem(USERNAME_KEY, username); // key / value


//     localStorage.setItem(USERNAME_KEY, username); // key / value


//     // greeting.innerText = `Hello, ${username}`;
//     // greeting.classList.remove(HIDDEN_CLASSNAME);
//     // paintGreeting(username);
//     paintGreetings();
// };

// // function paintGreeting(username) {
// function paintGreetings() {
//     const username = localStorage.getItem(USERNAME_KEY);
//     greeting.innerText = `Hello, ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// };

// // function handleLinkClick(event) {
// //     event.preventDefault();
// //     console.dir(event);
// //     // alert("clicked!");
// // }


// // loginForm.addEventListener("submit", onLoginBtnSubmit);
// // link.addEventListener("click", handleLinkClick)

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// // console.log(savedUsername);

// if(savedUsername === null) {
//     // form을 보여줌

//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     // username이 없을 경우(null)에는 hidden class를 없애서 form을 보여준다!

//     loginForm.addEventListener("submit", onLoginBtnSubmit);
// } else {
//     // id가 greeting인 h1을 보여줌!
//     // greeting.innerText = `Hello, ${savedUsername}`;
//     // greeting.classList.remove(HIDDEN_CLASSNAME);
//     // paintGreeting(savedUsername);
//     paintGreetings();
// }





// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";


// function onLoginBtnSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add("hidden"); // login-form 폼에 hidden이라는 class를 추가

//     localStorage.setItem(USERNAME_KEY, loginInput.value); // key / value
//     paintGreetings();
// };

// function paintGreetings() {
//     const username = localStorage.getItem(USERNAME_KEY);
//     greeting.innerText = `Hello, ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// };


// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if(savedUsername === null) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginBtnSubmit);
// } else {
//     paintGreetings();
// }





const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden"); // login-form 폼에 hidden이라는 class를 추가
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // key / value
    paintGreetings(username);
};

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // form을 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnSubmit);
} else {
    // id가 greeting인 h1을 보여줌!
    paintGreetings(savedUsername);
}