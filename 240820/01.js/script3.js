// 1. Iterable => 순서대로 처리할 수 있는
// Iterable객체 => 객체 안에 담겨있는 각각의 독립적인 아이템요소를 찾아서 어떤 실행을 순서대로 처리할 수 있도록 할 수 있는 객체

// JS 안에서 Iterable객체 => 배열, 문자열

// Iterable객체가 되려면
// 1) for...of반복문
// 2) 전개연산자 구문
// 3) 구조분해할당

// 표현식문 VS 실행문

// JSX => Javascript And Xml
let hi = "hello";

for (let ch of hi) {
  console.log(ch);
}

let chArray = [...hi];
console.log(chArray);

let [ch1, ch2, ch3, ch4, ch5] = hi;
console.log(ch1, ch2, ch3, ch4, ch5);

const arr = [1, 2, 3, 4, 5];
console.log(arr);

let it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 이터러블한 객체 => 이터레이터 객체 속성
// 이터레이터 객체 속성 => next()
// next() => 반복문으로 무언가를 실행시키고자 할 때, 실행되는 메서드 함수

// 제너레이터
// 이터러블하지 못한 데이터 자료구조는 반복문도 못쓴다?
// => 제너레이터 함수를 사용하면 이터러블하지 않아도 반복문을 사용 가능
// 제너레이터 함수 : 태생적으로 이터러블하지 못한 요소를 이터러블한 속성을 갖게끔 하기 위한 목적으로 태어난 함수

function* fnc() {
  yield 1;
  yield 2;
  yield 3;
}

const g1 = fnc();
console.log(g1);

// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

for (let i of g1) {
  console.log(i);
}


// for문을 사용 가능 => 이터러블한 객체