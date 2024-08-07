const stars = document.querySelectorAll(".fa-star");
const messageSpan = document.querySelector(".message");
const resultDiv = document.querySelector(".result");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    let message = "";
    let imageURL = "";

    switch (index) {
      case 0:
        message = "별로에요!";
        imageURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "보통이에요!";
        imageURL = "./img/star-lv2.png";
        break;
      case 2:
        message = "그냥그래요!";
        imageURL = "./img/star-lv3.png";
        break;
      case 3:
        message = "좋아요!";
        imageURL = "./img/star-lv4.png";
        break;
      case 4:
        message = "아주좋아요!";
        imageURL = "./img/star-lv5.png";
        break;
    }

    messageSpan.innerText = message;
    resultDiv.innerHTML = `<img src="${imageURL}" alt="Star Image">`;
  });
});
