// DOM 요소 선택
const coverWrap = document.querySelector(".coverWrap");
const contWrap = document.querySelector(".contWrap");
const progressBar = document.querySelector(".bar");
const header = document.querySelector("header");
const coverTitle = document.querySelector(".coverTitle");
const overlay = document.querySelector(".overlay");

// coverWrap의 높이를 화면 높이로 설정
const coverHeight = window.innerHeight;
coverWrap.style.height = `${coverHeight}px`;
// contWrap의 margin-top을 coverWrap의 높이로 설정
contWrap.style.marginTop = `${coverHeight}px`;

// 스크롤 퍼센트를 계산하는 함수
const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

// 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", () => {
  // 스크롤된 픽셀 수
  const scrollNum = window.scrollY;
  // 문서 전체 높이에서 현재 창의 높이를 뺀 값
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  // 스크롤 퍼센트 계산
  const per = percent(scrollNum, documentHeight);
  // progressBar의 너비를 스크롤 퍼센트에 맞춰 조정
  progressBar.style.width = `${per}%`;

  // 헤더 고정 클래스 추가 및 제거
  if (scrollNum >= coverHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    coverTitle.style.top = `${-scrollNum / 5}px`;
    coverWrap.style.backgroundPosition = `center ${-scrollNum}px`;
    overlay.style.background = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
});
