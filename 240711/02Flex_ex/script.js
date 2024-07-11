document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menubar = document.querySelector(".menubar");
  const close = document.querySelector(".close");

  menu.addEventListener("click", () => {
    menubar.classList.toggle("active");
  });

  close.addEventListener("click", () => {
    menubar.classList.remove("active");
  });
});
