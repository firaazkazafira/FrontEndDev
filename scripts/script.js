// JavaScript Document
var hamburgerButton = document.querySelector("#hamburger");
var hamburgerMenu = document.querySelector("nav ul:nth-of-type(2)");
var videoElement = document.querySelector("video");

function showHamburger() {
    hamburgerMenu.classList.toggle("show");
    console.log("hoi");
}
function playVid(){
    videoElement.play();
}


hamburgerButton.addEventListener("click", showHamburger);
videoElement.addEventListener("click", playVid);


