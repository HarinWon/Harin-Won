// 중첩 for 문을 이용해서 1부터 25까지 출력

// for (let i = 0; i <= 5; i++) {
//   document.write(`<tr>${i}</tr>`);
//   // for (let j = 0; j <= 5; j++) {
//   //   document.write(`<td>${i}</td>`);
//   // }
// }
let num = 1;
let t = `<table border=1>`;
for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}

t += `</table>`;

document.write(t);
