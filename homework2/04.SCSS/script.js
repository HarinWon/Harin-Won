const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #000";
  menuGame.style = "background: #ff799b; color: #fff";
  menuJukebox.style = "background: #ff799b; color: #fff";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #ff799b; color: #fff";
  menuGame.style = "background: #fff; color: #000";
  menuJukebox.style = "background: #ff799b; color: #fff";
};
const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jucbox.html");
  menuHome.style = "background: #ff799b; color: #fff";
  menuGame.style = "background: #ff799b; color: #fff";
  menuJukebox.style = "background: #fff; color: #000";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
