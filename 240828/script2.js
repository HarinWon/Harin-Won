const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 0, 0);
// });
// img.onload = function () {
//   ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
// };

// img.src = "./canvasAPI/cat.jpg";

// const img = new Image();
// img.onload = function () {
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//   ctx.beginPath();
//   ctx.arc(480, 380, 150, 0, Math.PI * 2, false);

//   ctx.clip();

//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// };

// img.src = "./canvasAPI/bird.jpg";

// ctx.globalAlpha = 0.3;
// ctx.fillStyle = "rgb(255,0,0)";
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0,0,255)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0,200,0)";
// ctx.fillRect(250, 50, 100, 50);

// ctx.fillStyle = "rgb(255 ,200,0)";
// ctx.fillRect(350, 50, 100, 50);

ctx.fillStyle = "rgb(255,0,0,0.2)";
ctx.fillRect(50, 50, 100, 50);

ctx.fillStyle = "rgb(0,0,255,0.4)";
ctx.fillRect(150, 50, 100, 50);

ctx.fillStyle = "rgb(0,200,0,0.6)";
ctx.fillRect(250, 50, 100, 50);

ctx.fillStyle = "rgb(255 ,200,0,0.4)";
ctx.fillRect(350, 50, 100, 50);
