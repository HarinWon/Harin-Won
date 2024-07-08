// script.js
document.addEventListener("DOMContentLoaded", () => {
  // 모달 관련 이벤트 리스너
  const modalBtn = document.querySelector("#open");
  const modalBox = document.querySelector("#modal_box");
  const modalClose = document.querySelector("#close");

  modalBtn.addEventListener("click", () => {
    modalBox.classList.add("active");
  });

  modalClose.addEventListener("click", () => {
    modalBox.classList.remove("active");
  });

  // 프로필 슬라이더 관련 이벤트 리스너
  const profilePrevBtn = document.querySelector(".fa-chevron-left");
  const profileNextBtn = document.querySelector(".fa-chevron-right");
  const profileSlider = document.querySelector(".profile_slider");
  const profileSlideItems = document.querySelectorAll(".profile_slider_con");
  const profileSlideWidth = profileSlideItems[0].offsetWidth;
  let profileCurrentOffset = 0;

  // 프로필 슬라이더 이동 함수
  function moveProfileSlider(offset) {
    profileCurrentOffset += offset;
    if (profileCurrentOffset > 0) {
      profileCurrentOffset =
        -(profileSlideItems.length - 1) * profileSlideWidth;
    } else if (
      profileCurrentOffset <
      -(profileSlideItems.length - 1) * profileSlideWidth
    ) {
      profileCurrentOffset = 0;
    }
    profileSlider.style.transform = `translateX(${profileCurrentOffset}px)`;
  }

  // 이전 버튼 클릭 이벤트
  profilePrevBtn.addEventListener("click", () => {
    moveProfileSlider(profileSlideWidth);
  });

  // 다음 버튼 클릭 이벤트
  profileNextBtn.addEventListener("click", () => {
    moveProfileSlider(-profileSlideWidth);
  });

  // TMI 포토 슬라이더 관련 이벤트 리스너
  const tmiPrevArrow = document.querySelector("#arrow .fa-chevron-left");
  const tmiNextArrow = document.querySelector("#arrow .fa-chevron-right");
  const tmiPhotos = document.querySelectorAll(".tmi_photo p");
  const tmiPhotoContainer = document.querySelector(".tmi_photo");
  const tmiPhotoWidth = 550; // 이미지 하나의 너비
  let tmiCurrentIndex = 0;

  // TMI 슬라이더 업데이트 함수
  function updateTmiSlider() {
    const tmiOffset = -tmiCurrentIndex * tmiPhotoWidth;
    tmiPhotoContainer.style.transform = `translateX(${tmiOffset}px)`;
  }

  // 왼쪽 화살표 클릭 시
  tmiPrevArrow.addEventListener("click", () => {
    if (tmiCurrentIndex > 0) {
      tmiCurrentIndex--;
      updateTmiSlider();
    }
  });

  // 오른쪽 화살표 클릭 시
  tmiNextArrow.addEventListener("click", () => {
    if (tmiCurrentIndex < tmiPhotos.length - 1) {
      tmiCurrentIndex++;
      updateTmiSlider();
    }
  });
});
