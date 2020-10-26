// JavaScript Document
var hamburgerButton = document.querySelector("#hamburger");
var hamburgerMenu = document.querySelector("nav ul:nth-of-type(2)");

function showHamburger() {
    hamburgerMenu.classList.toggle("show");
    console.log("hoi");
}

hamburgerButton.addEventListener("click", showHamburger);

