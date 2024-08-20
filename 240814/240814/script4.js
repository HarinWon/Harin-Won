const form = document.querySelector("form");
const result = document.querySelector("#result");

function Cylinder(diameter, height) {
  this.diameter = diameter;
  this.height = height;

  this.getVolume = function () {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

class Cylinder {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }

  getVolume = function () {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let diameter = parseFloat(document.querySelector("#diameter").value);
  let height = parseFloat(document.querySelector("#height").value);

  if (isNaN(diameter) || isNaN(height) || diameter <= 0 || height <= 0) {
    result.innerText = `정확한 지름값과 높이값을 입력해 주세요.`;
  } else {
    const cylinder01 = new Cylinder(diameter, height);
    result.innerText = `원기둥의 부피는 ${cylinder01.getVolume()}입니다!`;
  }
});
