import {navAnimationProcess} from "./navAnimation.js";

export const toggleNav = () => {
    const nav = document.getElementById("nav");
    const navOverlay = document.getElementById("nav-overlay");
    const logo = document.getElementById("nav-logo");
    const logoSrc = logo.src;
    const navBtn = document.getElementById("nav-btn");
    const navBtnSrc = navBtn.src;

    if (!nav.classList.contains("nav--open")) {
        if (nav.classList.contains("nav--scrolled")) nav.classList.remove("nav--scrolled");

        nav.classList.add("nav--open");
        navOverlay.style.display = "block";
        if (logo.src.includes("logo-dark.svg")) logo.src = logoSrc.replace("logo-dark.svg", "logo.svg");
        if (navBtn.src.includes("hamburger.svg")) {
            navBtn.src = navBtnSrc.replace("hamburger.svg", "close.svg");
        } else {
            navBtn.src = navBtnSrc.replace("hamburger-dark.svg", "close.svg");
        }
    } else {
        nav.classList.remove("nav--open");
        navOverlay.style.display = "none";
        navBtn.src = navBtnSrc.replace("close.svg", "hamburger.svg");
        navAnimationProcess();
    }
};