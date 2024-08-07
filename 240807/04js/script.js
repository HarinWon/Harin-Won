const container = document.querySelector(".container");
const newP = document.createElement("p");
const textNode = document.createTextNode("Typescript");
newP.appendChild(textNode);

const newP02 = document.createElement("p");
const textNode02 = document.createTextNode("React.js");
newP02.appendChild(textNode02);

const basisNode = document.querySelectorAll("p")[2];

container.insertBefore(newP02, basisNode);

// const terget = document.querySelectorAll("p")[0];

// terget.addEventListener("click", function () {
//   this.remove();
// });

const items = document.querySelectorAll("p");
items.forEach((item) => {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });
});
