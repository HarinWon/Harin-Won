// mouseover & mouseout 기능 구현
const outerElement1 = document.querySelector(".out.overout");
let outerCount1 = 0;

outerElement1.addEventListener("mouseover", () => {
  const pElements = outerElement1.querySelectorAll("p");
  if (pElements.length > 0) {
    pElements[0].innerText = `Outer Box Over: ${outerCount1++}`;
  }
});

const innerElement1 = document.querySelector(".in.overout");
console.log(outerElement1, innerElement1);
let innerCount1 = 0;
innerElement1.addEventListener("mouseover", () => {
  const pElements = innerElement1.querySelectorAll("p");
  if (pElements.length > 0) {
    pElements[0].innerText = `Inner Box Over: ${outerCount1++}`;
  }
});

// mouseenter & mouseleave 기능 구현


