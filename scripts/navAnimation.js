export const navAnimationProcess = () => {
    const safePosition = document.getElementById("header").offsetHeight;
    const nav = document.getElementById("nav");
    const navHeight = nav.offsetHeight;
    const logo = document.getElementById("nav-logo");
    const logoSrc = logo.src;
    const navBtn = document.getElementById("nav-btn");
    const navBtnSrc = navBtn.src;

    if (!nav.classList.contains("nav--open")) {
        if (window.pageYOffset >= (safePosition - navHeight)) {
            if (!nav.classList.contains("nav--scrolled")) nav.classList.add("nav--scrolled");
            if (logo.src.includes('logo.svg')) logo.src = logoSrc.replace('logo.svg', 'logo-dark.svg');
            if (navBtn.src.includes('hamburger.svg')) navBtn.src = navBtnSrc.replace('hamburger.svg', 'hamburger-dark.svg');
        } else {
            if (nav.classList.contains("nav--scrolled")) nav.classList.remove("nav--scrolled");
            if (logo.src.includes('logo-dark.svg')) logo.src = logoSrc.replace('logo-dark.svg', 'logo.svg');
            if (navBtn.src.includes('hamburger-dark.svg')) navBtn.src = navBtnSrc.replace('hamburger-dark.svg', 'hamburger.svg');
        }
    }
};