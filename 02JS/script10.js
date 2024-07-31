// 미션 : 사용자로부터 어떤 숫자를 받습니다.
// 사용자에게 받은 숫자가 "소수"이면
// 바탕화면에 "00숫자는 소수입니다!"
// 만약 아니라면 "숫자는 소수가 아닙니다."
// 소수 = 소수점을 가지고 있는 숫자가 x
// 1은 소수가 아닙니다
// 여기서 말하는 소수는 : 1과 자기 자신만으로 나눠질 수 있는 숫자

// const num = Number(prompt("숫자 입력"));

// if (1 % num === 0 && num % num === 0) {
//   alert(`${num}은 소수입니다.`);
// } else {
//   alert(`${num}은 소수가 아닙니다.`);
// }

const num = Number(prompt("숫자를 입력하세요."));

let isPrime;

if (num === 1) {
  document.write(`1은 소수도 합성수도 아닙니다.`);
} else if (num === 2) {
  document.write(`2는 소수입니다.`);
  isPrime = true;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  if (isPrime) {
    document.write(`${num}은 소수o`);
  } else {
    document.write(`${num}은 소수x`);
  }
}
