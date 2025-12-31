const display = document.querySelector(".display h2");
const btn = document.querySelector(".row");
let mode = null; //default
let counter = "0";
btn.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  mode = e.target.id;
  console.log("Current mode:", mode);
  if (mode ==="dec"){
    counter--;
    display.textContent = counter;
  }
  else if (mode === "res"){
    counter = 0;
    display.textContent = counter;
  }
  else if (mode === "inc"){
    counter++;
    display.textContent = counter;
  }
  else {
    display.textContent = "";
  }
});
