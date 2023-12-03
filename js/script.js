
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function  () {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menu-btn');
    var menuOptions = document.getElementById('menu-options');
  
    menuBtn.addEventListener('click', function () {
      menuOptions.style.display = (menuOptions.style.display === 'block') ? 'none' : 'block';
    });
  });