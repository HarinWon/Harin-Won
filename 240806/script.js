// const overout = document.querySelectorAll(".overout");
// console.log(overout);
// let i = 0;
// overout.forEach((item, index) => {
//   console.log(overout[0]);
//   if (index === 0) {
//     item.addEventListener("mouseover", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseover";
//       this.querySelector("p:last-of-type").innerText = ++i;
//     });
//     item.addEventListener("mouseout", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseout";
//     });
//   }
//   if (index === 1) {
//     item.addEventListener("mouseover", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseover";
//       this.querySelector("p:last-of-type").innerText = ++i;
//     });
//     item.addEventListener("mouseout", function () {
//       this.querySelector("p:first-of-type").innerText = "mouseout";
//     });
//   }
// });

// mouseover & mouseout
let o = 0;

const overoutOut = document.querySelector("div.out.overout");
overoutOut.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseover";
  pItems[3].innerText = ++o;
});

const overoutIn = document.querySelector("div.in.overout");
overoutIn.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseover";
  pItems[1].innerText = ++o;
});

let e = 0;

const enterleaveOut = document.querySelector("div.out.elterleave");
enterleaveOut.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[3].innerText = ++e;
});

const enterleaveIn = document.querySelector("div.in.elterleave");
enterleaveIn.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[1].innerText = ++e;
});

// mouserenter & mouseleave
let e = 0;
