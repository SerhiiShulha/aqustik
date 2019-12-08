import {textAnimationInit} from "./textAnimation.js";
import {navAnimationProcess} from "./navAnimation.js";
import {keepTilesShape} from "./keepTilesShape.js";
import {toggleNav} from "./toggleNav.js";

const headerAnimatedText = document.getElementById("header-animated-text");
const rectangles = document.querySelectorAll(".rectangle.works__item");
const navOverlay = document.getElementById("nav-overlay");
const navBtn = document.getElementById("nav-btn");

document.addEventListener("DOMContentLoaded", e => {
    navAnimationProcess();
    textAnimationInit("usable interface.", headerAnimatedText);
    keepTilesShape(rectangles);

    new WOW().init();
});

window.onscroll = navAnimationProcess;
window.onresize = () => keepTilesShape(rectangles);
navOverlay.onclick = toggleNav;
navBtn.onclick = toggleNav;


// window.onload = () => {
//     setTimeout(() => {
//         document.getElementById("loader").style.display = 'none';
//         navAnimationProcess();
//         textAnimationInit("usable interface.", headerAnimatedText);
//     }, 1000);
// };
