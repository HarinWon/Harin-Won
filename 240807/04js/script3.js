const title = document.querySelector("#title");
const author = document.querySelector("#author");
const booklist = document.querySelector("#booklist");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const liItem = document.createElement("li");

  liItem.innerHTML = `${title.value} - ${author.value}<span>삭제</span>`;

  booklist.appendChild(liItem);

  title.valut = "";
  author.value = "";

  const delButtons = document.querySelectorAll("span");

  delButtons.forEach((delButton) => {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  });
});
