// 함수에서 만날 수 있는 전개연산자 구문

// const fruits = ["apple", "banana", "grape"];

// console.log(fruits);

// const numbers = [1, 2, 3];

// function addNum(...numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(addNum(1, 3, 7, 4));
// 호출부에서 값을 하나 더 주어도 오류는 안나옴 중요한건 매개변수의 값
// 앞의 값은 고정값으로 가져간다.

// function displayFavorites(first, ...favs) {
//   const str = `가장 좋아하는 과일은 "${first}" 입니다`;
//   return str;
// }

// console.log(displayFavorites("딸기", "메론", "복숭아"));

// function displayFavorites(first, ...favs) {
//   const str = `가장 좋아하는 과일은 "${first}" 입니다`;

// if (favs.length > 0) {
//   const [lastFav] = favs.slice(-1);
//   console.log(`마지막으로 좋아하는 과일은 "${lastFav}" 입니다`);
// }

//   return str;
// }

// console.log(displayFavorites("딸기", "메론", "복숭아"));
