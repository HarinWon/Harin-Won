// 페이지 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  const gototop = document.querySelector(".gototop");

  if (scroll > 50) {
    header.classList.add("active");
    gototop.classList.add("active");
  } else {
    header.classList.remove("active");
    gototop.classList.remove("active");
  }
});

// 메뉴 트리거 및 GNB 링크 클릭 이벤트 리스너 추가
const trigger = document.querySelector(".trigger");
const gnbLinks = document.querySelectorAll(".gnb a");
const gnb = document.querySelector(".gnb");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  gnb.classList.toggle("active");
});

gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

// Slick 슬라이더 초기화
$(document).ready(function () {
  $(".myslider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  });
});

// ScrollTo
$(".gototop, .gnb a").click(function () {
  $.scrollTo(this.hash || 0, 800);
});
