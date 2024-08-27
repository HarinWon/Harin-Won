// const displayHello = () => {
//   console.log("Hello");
// };
// displayHello();

// const displayHello = async () => {
//   console.log("Hello");
// };
// console.log(displayHello());

// const whatsYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// };

// whatsYourFavorite().then(displaySubject).then(console.log);

// csync => 함수형태를 의미

const whatsYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

const displaySubject = async (subject) => {
  return `Hello, ${subject}`;
};

const init = async () => {
  const reponse = await whatsYourFavorite();
  const result = await displaySubject(reponse);
  console.log(result);
};

init();
