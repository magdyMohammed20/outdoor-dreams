const navTab = document.getElementById("navTab")
const ul = document.getElementById("ul")
const close = document.getElementById("close")

navTab.onclick = () => {
    ul.classList.add("opacity-100")
    ul.classList.remove("scale-50");
    ul.classList.add("scale-100");
    navTab.classList.toggle("hidden")
}

close.onclick = () => {
    ul.classList.remove("scale-100");
    ul.classList.add("scale-50");
    setTimeout(() => {
        ul.classList.remove("opacity-100")
        ul.classList.add("opacity-0")
    }, 100)
    navTab.classList.toggle("hidden")
}

const updateMenuVisibility = () => {
    if (window.innerWidth >= 1024) {
        ul.classList.add("opacity-100");
        ul.classList.remove("opacity-0");
    } else {
        ul.classList.remove("opacity-100");
        ul.classList.add("opacity-0");
        navTab.classList.remove("hidden")
    }
};

updateMenuVisibility();

window.addEventListener("resize", updateMenuVisibility);

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    nav.classList.add("animate-navbar");

    nav.addEventListener("animationend", () => {
        nav.classList.remove("animate-navbar");
    });
});


const toggleButton = document.getElementById("toggle-menu");
const menuItems = document.getElementById("menu-items");
const arrowIcon = document.getElementById("arrow-icon");

toggleButton.addEventListener("click", function () {
    if (window.innerWidth < 1024) {
        menuItems.classList.toggle("hidden");
        arrowIcon.classList.toggle("rotate-180");
    }
});

document.addEventListener("click", function (event) {
    if (window.innerWidth < 1024 && !toggleButton.contains(event.target) && !menuItems.contains(event.target)) {
        menuItems.classList.add("hidden");
        arrowIcon.classList.remove("rotate-180");
    }
});







