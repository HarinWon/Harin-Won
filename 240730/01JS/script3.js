// 문제 : 사용자로부터 3개의 값을 받으세요
// 교통비, 식대, 음료비,
// 위 3개의 값이 만원을 초과한다면 "예산관리 잘해주세요."
// 위 3개의 값이 만원 이하라면 "예산관리 잘하셨어요"

// const traffic = Number(prompt("교통비를 입력해주세요"));
// const food = Number(prompt("식대를 입력해주세요."));
// const beverage = Number(prompt("음료 비용을 입력해주세요."));

// 반복문을 사용하면
let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력"));
  arr.push(userNum);
}

const [traffic, food, drink] = arr;

const travelExpenses = traffic + food + drink;
console.log(travelExpenses);

// if (travelExpenses > 10000) {
//   alert("예산관리 잘해주세요.");
// } else {
//   alert("예산관리 잘하셨어요.");
// }

if (isNaN(travelExpenses) || travelExpenses === 0) {
  alert("잘못입력");
} else if (travelExpenses <= 10000) {
  alert("예산관리 잘함!");
} else {
  alert("예산관리 잘해!");
}
