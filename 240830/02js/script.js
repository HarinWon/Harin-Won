const imgeAll = document.querySelectorAll(".imageWrap .parallaxImage");
const subpageImage = document.querySelector(".subPage .parallaxImage");
let scrollNum = 0;

console.log(imgeAll, subpageImage);

const totalNum = imgeAll.length;
let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  imgeAll.forEach((imgae, index) => {
    if (index < 4) {
      imgae.style.transform = `translateY(${
        -scrollNum / (2 * (totalNum - index))
      }px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  imgeAll[4].style.transform = `scale(1.1) translate(${-targetX / 50}px, ${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;
  imgeAll[5].style.transform = `scale(1.1) translate(${-targetX / 100}px ,${
    -scrollNum / (2 * (totalNum - 5))
  }px)`;
  subpageImage.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;

  window.requestAnimationFrame(loop);
};

loop();
