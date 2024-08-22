const xhr = new XMLHttpRequest();

xhr.open("GET", "misson.json");
xhr.send();

const renderHTML = (products) => {
  let output = "";

  for (let product of products) {
    output += `
    <h2>${product.name}</h2>
    <ul>
      <li>제품명 : ${product.name}</li>
      <li>년도 : ${product.year}</li>
      <li>컬러 : ${product.color}</li>
      <li>제품번호 : ${product.pantone_value}</li>
    </ul>
    <hr/>
    `;
  }

  const result = document.querySelector(".product");
  result.innerHTML = output;
};

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    renderHTML(students);
  }
};
