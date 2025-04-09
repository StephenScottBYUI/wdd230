const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

let lastScrollTop = 0;
const topbar = document.getElementById("topbar");
const navHide = document.getElementById("navHide")

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        topbar.classList.add("hide");
        if (navigation.classList.contains("open")) {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        }
    } else {
        topbar.classList.remove("hide");

    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});