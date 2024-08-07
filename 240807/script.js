const button = document.querySelector(".button");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
  menu.classList.toggle("active");
  button.classList.toggle("active");
});
