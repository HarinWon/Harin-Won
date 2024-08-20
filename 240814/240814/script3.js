// 생성자 함수, 삼항조건 연산자 활용 예제

function Book(title, pages, done = false) {
  //field
  this.title = title;
  this.pages = pages;
  this.done = done;
  //Method
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독함");
    return str;
  };
}

const book1 = new Book("자바스크립트", 648, true);
console.log(book1); // 인스턴스 객체

class Book2 {
  // feild 영역 constructor 구문으로 대체한 것
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  // 직관적으로 직접 선언(자바스크립트의 class 선언임)
  finish() {
    let str = "";
    this.done = false ? (str = "읽는 중") : (str = "완독함");
    return str;
  }
}
