// document.addEventListener("DOMContentLoaded", () => {
//   const input = document.querySelector("#userId");
//   const text = document.querySelector("h1");

//   const idNameArray = [
//     { id: 123, name: "곰" },
//     { id: 1021, name: "사자" },
//     { id: 6021, name: "여우" },
//   ];

//   input.addEventListener("input", () => {
//     const inputKey = parseInt(input.value);

//     if (isNaN(inputKey)) {
//       text.innerText = "유저 검색 결과";
//       return;
//     }

//     const result = idNameArray.find((item) => item.id === inputKey);

//     if (result) {
//       text.innerText = result.name;
//     } else {
//       text.innerText = "유저 검색 결과";
//     }
//   });
// });

const userId = document.querySelector("#userId");
const result = document.querySelector("#result");

const userDataList = [
  { id: 123, name: "곰" },
  { id: 1021, name: "사자" },
  { id: 6021, name: "여우" },
];

const findUser = (searchID) => {
  const targetData = userDataList.find((data) => data.id === searchID);

  if (targetData === undefined || targetData === null) {
    result.innerText = "유저 검색결과 없음";
  }

  result.innerText = targetData.name;
};

userId.addEventListener("keyup", (e) => {
  const searchID = parseInt(e.target.value);

  console.log(typeof searchID);

  if (isNaN(searchID)) {
    result.innerText = "숫자가 아닙니다.";
    return;
  }

  findUser(searchID);
});

// 어디서부터 이벤트가 시작될 것인가?

// 이벤트가 시작된 이후에 어떤 값을 생성&처리

// 어떻게 자료구조를 만들고 갈 것 인가?

// 문법 (*매서드 // 속성 등)
