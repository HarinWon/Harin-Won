const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rotate
// ctx.fillStyle = "#ccc";
// ctx.fillRect(150, 150, 100, 100);

// ctx.translate(150, 150);
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(0, 0, 100, 100);

// scail
ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);

// save 와 restore는 같이 자주 쓰임 
ctx.save();
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50);
ctx.restore(); //원래 스타일 상태로 복구

ctx.strokeRect(200, 50, 100, 50);
