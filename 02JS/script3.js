const button = document.querySelector("input[type='button']");

const showSales = () => {
  // 가격과 할인율 요소의 값을 가져옵니다.
  const price = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;

  // 값을 숫자로 변환합니다.
  const priceValue = parseFloat(price);
  const rateValue = parseFloat(rate);

  // 할인가를 계산합니다.
  const savedPrice = priceValue * (rateValue / 100);
  const resultPrice = priceValue - savedPrice;

  // 결과를 표시합니다.
  document.querySelector(
    ".notice"
  ).innerText = `상품의 원래 가격은 ${priceValue}원 이고, 할인률은 ${rateValue}% 입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.`;
};

// 버튼 클릭 시 showSales 함수를 실행합니다.
button.addEventListener("click", showSales);
