// 내가 푼 방법 아스키 코드 x
function solution(s, n) {
  const lowerAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let answer = "";

  for (const str of s) {
    if (str === " ") {
      answer += " ";
    } else if (str === str.toUpperCase()) {
      const upperIndex = upperAlpha.indexOf(str) + n;
      upperIndex > 25 ? (answer += upperAlpha[upperIndex - 26]) : (answer += upperAlpha[upperIndex]);
    } else {
      const lowerIndex = lowerAlpha.indexOf(str) + n;
      lowerIndex > 25 ? (answer += lowerAlpha[lowerIndex - 26]) : (answer += lowerAlpha[lowerIndex]);
    }
  }
  return answer;
}

// 아스키코드 활용
function solution2(s, n) {}

function init() {
  const sList = ["AB", "z", "a B z"];
  const nList = [1, 1, 4];
  sList.forEach((str, index) => {
    // console.log(solution(str, nList[index]));
    console.log(solution2(str, nList[index]));
  });
}

init();
