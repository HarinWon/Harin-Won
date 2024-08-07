const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector(".orderInfo");

orderButton.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.color = "crimson";

  const newImg = document.createElement("img");
  newImg.src =
    "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b24c79dc-427b-4722-9e0c-2ca66c064ecf/G.T.+HUSTLE+3+EP+OLY.png";
  newImg.alt = "Product Image"; // alt 속성 추가

  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});
