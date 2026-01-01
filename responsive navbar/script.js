const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".list");
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});