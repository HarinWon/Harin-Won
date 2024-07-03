// overlay
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const watchLinks = document.querySelectorAll(".watch");
  const closeOverlay = document.getElementById("closeOverlay");

  watchLinks.forEach((watch) => {
    watch.addEventListener("click", (event) => {
      event.preventDefault(); // 링크의 기본 동작을 막습니다
      overlay.style.display = "flex"; // 오버레이를 표시합니다
    });
  });

  closeOverlay.addEventListener("click", () => {
    overlay.style.display = "none"; // 오버레이를 숨깁니다
  });

  // 오버레이 바깥을 클릭하면 오버레이를 숨깁니다
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  });
});

// profile
