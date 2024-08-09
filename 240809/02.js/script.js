// Math 수학 객체 => 함수

// let num = 2.1234;
// let num01 = 2.8765;

// let maxNum = Math.max(10, 5, 8, 30);
// let minNum = Math.min(10, 5, 8, 30);
// let roundNum = Math.round(num);
// let floorNum = Math.floor(num01);
// let ceilNum = Math.ceil(num);
// let rndNum = Math.random() * 45;
// let piNum = Math.PI;

// document.write(maxNum, "<br />");
// document.write(minNum, "<br />");
// document.write(roundNum, "<br />"); // 반올림
// document.write(floorNum, "<br />"); // 무조건 내림
// document.write(ceilNum, "<br />");
// document.write(rndNum, "<br />");
// document.write(piNum, "<br />");

const character = document.querySelector(".character");

let degree = 0;

const loop = () => {
  const rotation = (degree * Math.PI) / 180;
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation);

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;

  requestAnimationFrame(loop);
  // console.log(rotation);
};

loop();
