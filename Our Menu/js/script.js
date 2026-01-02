const container = document.querySelector(".btn-container");
const breakfast = document.querySelectorAll(".breakfast");
const lunch = document.querySelectorAll(".lunch");
const shakes = document.querySelectorAll(".shakes");
const dinner = document.querySelectorAll(".dinner");
const buttons = container.querySelectorAll("button");
container.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const clicked = e.target.textContent.trim().toLowerCase();
  // remove active from all buttons
  buttons.forEach((btn) => btn.classList.remove("active"));

  // add active to clicked button
  e.target.classList.add("active");
  if (clicked === "breakfast") {
    breakfast.forEach((item) => item.classList.remove("block"));
    lunch.forEach((item) => item.classList.add("block"));
    shakes.forEach((item) => item.classList.add("block"));
    dinner.forEach((item) => item.classList.add("block"));
  } else if (clicked === "lunch") {
    lunch.forEach((item) => item.classList.remove("block"));
    breakfast.forEach((item) => item.classList.add("block"));
    shakes.forEach((item) => item.classList.add("block"));
    dinner.forEach((item) => item.classList.add("block"));
  } else if (clicked === "shakes") {
    shakes.forEach((item) => item.classList.remove("block"));
    lunch.forEach((item) => item.classList.add("block"));
    breakfast.forEach((item) => item.classList.add("block"));
    dinner.forEach((item) => item.classList.add("block"));
  } else if (clicked === "dinner") {
    dinner.forEach((item) => item.classList.remove("block"));
    lunch.forEach((item) => item.classList.add("block"));
    breakfast.forEach((item) => item.classList.add("block"));
    shakes.forEach((item) => item.classList.add("block"));
  } else {
    lunch.forEach((item) => item.classList.remove("block"));
    breakfast.forEach((item) => item.classList.remove("block"));
    shakes.forEach((item) => item.classList.remove("block"));
    dinner.forEach((item) => item.classList.remove("block"));
  }
});
