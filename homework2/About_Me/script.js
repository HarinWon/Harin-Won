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
  let profileCurrentIndex = 0;

  // 프로필 슬라이더 이동 함수
  function moveProfileSlider(offset) {
    profileCurrentIndex += offset;
    if (profileCurrentIndex < 0) {
      profileCurrentIndex = profileSlideItems.length - 1;
    } else if (profileCurrentIndex >= profileSlideItems.length) {
      profileCurrentIndex = 0;
    }
    profileSlider.style.transform = `translateX(${
      -profileCurrentIndex * 100
    }%)`;
  }

  // 이전 버튼 클릭 이벤트
  profilePrevBtn.addEventListener("click", () => {
    moveProfileSlider(-1);
  });

  // 다음 버튼 클릭 이벤트
  profileNextBtn.addEventListener("click", () => {
    moveProfileSlider(1);
  });

  // 프로필 슬라이더 자동 재생
  setInterval(() => {
    moveProfileSlider(1);
  }, 3000); // 3초마다 슬라이드 이동

  // 모바일 터치 이벤트
  let startX = 0;
  let endX = 0;

  profileSlider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  profileSlider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  profileSlider.addEventListener("touchend", () => {
    if (startX > endX + 50) {
      // 왼쪽으로 슬라이드
      moveProfileSlider(1);
    } else if (startX < endX - 50) {
      // 오른쪽으로 슬라이드
      moveProfileSlider(-1);
    }
  });

  // TMI 포토 슬라이더 관련 이벤트 리스너
  const tmiPrevArrow = document.querySelector("#arrow .fa-chevron-left");
  const tmiNextArrow = document.querySelector("#arrow .fa-chevron-right");
  const tmiPhotoContainer = document.querySelector(".tmi_photo");
  const tmiButtons = document.querySelectorAll(".tmi_con_box button");
  let tmiCurrentIndex = 0;
  let tmiData = [];

  // JSON 데이터 불러오기
  fetch("tmi.json")
    .then((response) => response.json())
    .then((data) => {
      tmiData = data.data;
      updateTmiText();
    })
    .catch((error) => console.error("Error loading JSON:", error));

  // TMI 슬라이더 업데이트 함수
  function updateTmiSlider() {
    const tmiPhotoWidth = tmiPhotoContainer.offsetWidth; // 슬라이더 너비 동적 계산
    const tmiOffset = -tmiCurrentIndex * tmiPhotoWidth;
    tmiPhotoContainer.style.transform = `translateX(${tmiOffset}px)`;

    // 모든 버튼의 active 클래스 제거
    tmiButtons.forEach((button) => button.classList.remove("active"));
    // 현재 인덱스에 해당하는 버튼에 active 클래스 추가
    tmiButtons[tmiCurrentIndex].classList.add("active");

    // TMI 텍스트 업데이트
    updateTmiText();
  }

  // TMI 텍스트 업데이트 함수
  function updateTmiText() {
    const tmiTitle = document.querySelector(".tmi_txt h3");
    const tmiDescription = document.querySelector(".tmi_txt p");

    // 서서히 없어지는 애니메이션
    tmiTitle.classList.remove("fade-in");
    tmiDescription.classList.remove("fade-in");
    tmiTitle.classList.add("fade-out");
    tmiDescription.classList.add("fade-out");

    setTimeout(() => {
      tmiTitle.innerText = tmiData[tmiCurrentIndex].title;
      tmiDescription.innerText = tmiData[tmiCurrentIndex].description;

      // 서서히 나타나는 애니메이션
      tmiTitle.classList.remove("fade-out");
      tmiDescription.classList.remove("fade-out");
      tmiTitle.classList.add("fade-in");
      tmiDescription.classList.add("fade-in");
    }, 500); // 애니메이션 시간과 일치
  }

  // 왼쪽 화살표 클릭 시
  tmiPrevArrow.addEventListener("click", () => {
    if (tmiCurrentIndex > 0) {
      tmiCurrentIndex--;
    } else {
      tmiCurrentIndex = tmiButtons.length - 1; // 처음으로 돌아감
    }
    updateTmiSlider();
  });

  // 오른쪽 화살표 클릭 시
  tmiNextArrow.addEventListener("click", () => {
    if (tmiCurrentIndex < tmiButtons.length - 1) {
      tmiCurrentIndex++;
    } else {
      tmiCurrentIndex = 0; // 처음으로 돌아감
    }
    updateTmiSlider();
  });

  // 버튼 클릭 이벤트
  tmiButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tmiCurrentIndex = index;
      updateTmiSlider();
    });
  });

  // 초기 상태 업데이트
  updateTmiSlider();

  // 슬라이더 크기 변경 시 업데이트
  window.addEventListener("resize", updateTmiSlider);
});
