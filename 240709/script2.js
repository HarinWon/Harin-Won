const circle = document.querySelector("#circle");
const articles = document.querySelectorAll("article");

articles.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  el.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
