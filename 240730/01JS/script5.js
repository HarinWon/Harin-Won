// 문제 : 사용자에게 숫자 1개를 받는다. => 해당 숫자가 짝수인지 홀수인지 확인하여 => 짝수라면 알림창에 "짝수" 출력 하고 만약 홀수라면 "홀수라고 출력"
// 짝수는 반드시 2로 나누어 떨어짐
// 홀수는 2로 나누었을때 안나누어떨어짐
// 반드시 삼항조건 연산자로 하세요

// 단 사용자가 취소버튼을 클릭 할 수 있다는것을 감안하여 예외조항처리를 반드시 해야 함.

// const userNum = parseFloat(prompt("숫자 1개 입력"));

// let num;

// if (userNum !== null) {
//  num = userNum % 2;
//  num == 0 ? alert("짝수입니다.") : alert("홀수입니다.");
// }

let userNumber = prompt("숫자 입력");

if (userNumber !== null) {
  userNumber = parseInt(userNumber);
  userNumber % 2 === 0
    ? alert(`${userNumber} : 짝수`)
    : alert(`${userNumber} : 홀수`);
}
