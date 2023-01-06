const loginInput = document.querySelector("#login-form input"); 
const loginButton = document.querySelector("#login-form button");
/*
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("input"); 
const loginButton = document.querySelector("button");
이렇게도 사용 가능
*/

loginButton.addEventListener('click', ()=>{console.log(loginInput.value)});



