const cross = document.querySelector(".btn");
const col = document.querySelector(".col1");
const hamburger = document.querySelector(".hamburger")
col.classList.toggle("close");
function close() {
  col.classList.toggle("close");
}
cross.addEventListener("click", () => {
  close();
});

hamburger.addEventListener("click", ()=>{
    close();
});
