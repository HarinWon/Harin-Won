// 1. 안에 들어가는 값들
// 2. 뽑아야 하는 요소 체크
// 3. 중복값이 들어가면 안됨 동일한 값 x
// random함수와 반복문

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number01 = document.querySelector("#number01");
  const number02 = document.querySelector("#number02");
  const result = document.querySelector("#result");

  // 자료 값을 찾아오거나 생성 !! =>

  let winner = "";
  let pickdNumbers = [];
  for (i = 0; i < number02.value; i++) {
    let piked;

    do {
      piked = Math.floor(Math.random() * number01.value + 1);
    } while (pickdNumbers.includes(piked));

    pickdNumbers.push(piked);
    winner += `${piked}번`;
  }

  result.innerText = `당첨자 : ${winner}`;
});
