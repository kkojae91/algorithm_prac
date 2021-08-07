/*
세 수가 주어질 때 삼각형을 만들 수 있는지 판별
가장 긴변 < 짧은 변 + 짧은 변
*/

// 내가 푼 방법.
function solution(numList) {
  numList.sort((a, b) => b - a);
  console.log(numList);
  const [maxSide, minSide1, minSide2] = numList;
  const sumMinSide = minSide1 + minSide2;
  return maxSide < sumMinSide ? "YES" : "NO";
}

// if문 활용
function solution(numList) {
  let answer, max;
  const [side1, side2, side3] = numList;
  const sumNum = side1 + side2 + side3;
  if (side1 > side2) {
    max = side1;
  } else {
    max = side2;
  }
  if (max < side3) {
    max = side3;
  }
  answer = max < sumNum - max ? "YES" : "NO";
  return answer;
}

function preprocessInput(inputList) {
  const numList = inputList[0].split(" ").map((num) => Number(num));
  console.log(solution(numList));
}

function init() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    preprocessInput(inputList);
    process.exit();
  });
}

init();
