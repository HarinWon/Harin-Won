anime({
  targets: "li",
  translateY: (el, i) => {
    // i는 각 요소의 인덱스를 나타냅니다.
    if (i % 2 === 0) {
      return 80; // 짝수 인덱스 요소는 80px 이동
    } else {
      return 0; // 홀수 인덱스 요소는 이동하지 않음
    }
  },
  opacity: 1,
  duration: 1500,
  easing: "linear",
});
