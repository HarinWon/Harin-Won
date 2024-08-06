document.addEventListener("DOMContentLoaded", function() {
  const openButton = document.querySelector("#open");
  const modalBox = document.querySelector("#modal-box");
  const closeButton = modalBox.querySelector("#profile > button");

  openButton.addEventListener("click", function () {
    this.classList.add("btnActive");
    modalBox.classList.add("active");
  });

  closeButton.addEventListener("click", function () {
    openButton.classList.remove("btnActive");
    modalBox.classList.remove("active");
  });
});
