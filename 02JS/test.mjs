// 미션 : 사용자로부터 태어난 연도를 받으세요
// 2. 태어난 연도를 기준으로 나이가 몇살인지
// result 공간에 출력해주세요.
// innerText 속성을 활용하시면, 특정 Node 안에 택스트 문장을 삽입할 수 있음

// document.querySelector("#result");
// const userYear = Number(prompt("태어난 년도를 입력하세요."));
// const age = 2024 - userYear;
// const result = document.getElementById("result");
// result.innerText = `당신이 태어난 연도는 ${userYear}년 이며 나이는 ${age}세 입니다.`;

const button = document.querySelector("button");
const calc = () => {
  const birthYear = Number(prompt("태어난 연도 입력", "2002"));
  const currentYear = 2024;
  const age = currentYear - birthYear;
  const result = document.querySelector("#result");
  result.innerText = `당신의 나이는 ${age}세 입니다.`;
};

button.addEventListener("click", calc);
