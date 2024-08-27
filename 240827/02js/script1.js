const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 원 혹은 호
// arc(x, y, r, startAngle, endAngle, counterClockwise)

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();

// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "red";
// ctx.stroke();
// ctx.fill();

// 반원
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, Math.PI, true);
// ctx.arc(250, 100, 50, 0, Math.PI, false);
// ctx.closePath();
// ctx.fillStyle = "green";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.closePath();
// ctx.strokeStyle = "rgb(0,0,255)";
// ctx.stroke();

// rect() => 사각형
// 삼각형, 원
// arc()
// ellipse()

// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClock)

// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.closePath();
// ctx.strokeStyle = "green";
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.closePath();
// ctx.strokeStyle = "blue";
// ctx.stroke();

ctx.beginPath();

ctx.scale(1, 0.7);
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();

// 사각형 형태의 도형을 만들 때에는
// 속성 정의 먼저(*색상, 외각선 => 도형 그림)

// 삼각형 형태의 도형을 만들 때에는
// 도형 드로잉 선언
// beginPath()
// 경로 정의
// 위치 좌표값을 셋팅하거나 이동하고자 할 때 : moveTo(x, y)
// 직선경로 : lineTo(x, y)
// closePath() => 어떤 도형을 그릴 것인가에 대한 경로 드로잉에 대한 종료 선언
// 외각선을 페인팅 & 내부 도형 채색
// 실제 경로가 그려지도록 하는 함수 stroke()
// 해당 경로사이에 채색 함수 fill()

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();
// // closePath는 생략이 가능함
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.fillStyle = "rgb(0,200,0)";
// ctx.fill();
