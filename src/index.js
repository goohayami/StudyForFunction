// 関数宣言で書く
function sengen() {
  const test1 = document.getElementById("testId1");
  test1.addEventListener("click", () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    test1.innerHTML = num1;
    console.log(test1);
  });
}
sengen();

// 関数式で書く
const shiki = function () {
  const test2 = document.getElementById("testId2");
  test2.addEventListener("click", () => {
    const num2 = Math.floor(Math.random() * 10) + 1;
    test2.innerHTML = num2;
    console.log(test2);
  });
};
shiki();

// アロー関数で書く
const arrow = () => {
  const test3 = document.getElementById("testId3");
  test3.addEventListener("click", () => {
    const num3 = Math.floor(Math.random() * 10) + 1;
    test3.innerHTML = num3;
    console.log(test3);
  });
};
arrow();
let i = 0;

// 3つの関数をまとめる
function matome() {
  const btn = document.getElementById("btn1");
  const test1 = document.getElementById("testId1");
  const test2 = document.getElementById("testId2");
  const test3 = document.getElementById("testId3");
  btn.addEventListener("click", () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const num3 = Math.floor(Math.random() * 10) + 1;
    test1.innerHTML = num1;
    test2.innerHTML = num2;
    test3.innerHTML = num3;
    const score = document.getElementById("score");

    // スコア表示
    if (i >= 0) {
      i = i + num1 + num2 + num3;
      score.innerText = i;
      console.log(i);
    }
  });
}
matome();
