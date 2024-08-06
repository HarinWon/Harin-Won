const usetId = document.querySelector("#userId");
console.log(userId);

usetId.addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});

usetId.addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});
