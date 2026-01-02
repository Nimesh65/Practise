// const btn = document.querySelector(".question-btn");
// const plus_minus = document.querySelector(".plus-icon");
// const content = document.querySelector(".question-text");
// const plus = document.querySelector(".plus-icon");
// const minus = document.querySelector(".minus-icon");
// minus.classList.toggle("block");

// btn.addEventListener("click", ()=>{
//     content.classList.toggle("block");
//     plus.classList.toggle("block");
//     minus.classList.toggle("active");
// });
// const articles = document.querySelectorAll(".question");

// articles.forEach((article) => {
//   const btn = article.querySelector(".question-btn");
//   const content = article.querySelector(".question-text");
//   const plus = article.querySelector(".plus-icon");
//   const minus = article.querySelector(".minus-icon");
//   minus.classList.toggle("block");
//   btn.addEventListener("click", () => {
//     content.classList.toggle("block");
//     plus.classList.toggle("block");
//     minus.classList.toggle("active");
//   });
// });
const articles = document.querySelectorAll(".question");

articles.forEach(article => {
  const btn = article.querySelector(".question-btn");

  btn.addEventListener("click", () => {

    // 1️⃣ Close all other articles
    articles.forEach(item => {
      if (item !== article) {
        item.querySelector(".question-text").classList.remove("block");
        item.querySelector(".plus-icon").classList.remove("block");
        item.querySelector(".minus-icon").classList.remove("active");
      }
    });

    // 2️⃣ Toggle current article
    article.querySelector(".question-text").classList.toggle("block");
    article.querySelector(".plus-icon").classList.toggle("block");
    article.querySelector(".minus-icon").classList.toggle("active");
  });
});
