// 1. 웹 브라우저에게 클릭할 이벤트 대상을 알려준다.
// querySelector()
// addEventListener()

// 2. 클릭 했을 때 , css로 정의해놓은 가상클래스를 원하는 요소에 적용시킨다.
// classList
// add() || remove()
// button => 기본속성 // 방해요소
// preventDefult()

// 2-1.가상클래스 = filledA & filled B

// const femaleBtn = document.querySelector("#femalebtn");
const femaleBtn = document.getElementById("femalebtn");
const maleBtm = document.getElementById("malebtn");

femaleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtm.querySelector("i").classList.remove("filledB");
});

maleBtm.addEventListener("click", (event) => {
  event.preventDefault();
  maleBtm.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
