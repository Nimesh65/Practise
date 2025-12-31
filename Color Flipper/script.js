const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "purple",
  "orange",
  "brown",
  "grey",
  "black",
];
const hex = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#9e9e9e",
  "#607d8b",
];
const btn = document.getElementById("click");
const buttons = document.querySelector(".container");
const color = document.querySelector(".color-info h2");
let mode = null; //default
let error = "Choose the format first";
buttons.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  mode = e.target.id;
  console.log("Current mode:", mode);
});
// buttons.addEventListener("click", (e) => {
//   if (e.target.tagName !== "BUTTON") return;

//   if (e.target.id === "simple") {
//     mode = "simple";
//     // simple color logic
//   }

//   if (e.target.id === "hex") {
//     // console.log("Hex clicked");
//     // hex color logic
//     mode = "hex";
//   }
// });
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
btn.addEventListener("click", function () {
  if (mode === "simple") {
    const randomNumbersimple = randomInt(0, colors.length);
    document.body.style.backgroundColor = colors[randomNumbersimple];
    color.textContent = colors[randomNumbersimple].toUpperCase();
  } else if (mode === "hex") {
    const randomNumberhex = randomInt(0, hex.length);
    document.body.style.backgroundColor = hex[randomNumberhex];
    color.textContent = hex[randomNumberhex];
  }
  else {
    color.textContent = error.toUpperCase();
  }
});
