const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
console.log(circle);
const buttonAll = document.querySelectorAll("a"); 

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.4;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  window.requestAnimationFrame(loop);
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
};

loop();

// 각 'a' 요소에 대해 이벤트 리스너를 추가
buttonAll.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    // 'cursorItem' 대신 'button'에 이벤트 리스너 추가
    circle.style.transform = "scale(0.6)"; // 마우스를 올리면 원이 작아짐
  });

  button.addEventListener("mouseleave", () => {
    // 마우스를 벗어날 때 원의 크기를 원래대로 복원
    circle.style.transform = "scale(1)";
  });
});
