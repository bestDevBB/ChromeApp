// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");\
// const loginButton = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    // console.dir(loginInput.value);
    // console.log("click!!!");
    const username = loginInput.value;
    if(username === "") {
        console.log("Please write your name.");
    } else if(username.length > 15) {
        alert("Your name is too long.")
    }
}

loginButton.addEventListener("click", onLoginBtnClick);