"use strict";

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