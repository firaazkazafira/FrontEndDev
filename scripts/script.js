// JavaScript Document
var hamburgerButton = document.querySelector("#hamburger");
var hamburgerMenu = document.querySelector("nav ul:nth-of-type(2)");
var videoElement = document.querySelector("video:first-of-type");

if (videoElement) {
    videoElement.addEventListener("click", playVid);;
} else {
    console.log("nope");
}

function showHamburger() {
    hamburgerMenu.classList.toggle("show");
    console.log("hoi");
}

function playVid(){
    videoElement.play();
    console.log("yay")
}

hamburgerButton.addEventListener("click", showHamburger);



