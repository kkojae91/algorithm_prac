// 내가 푼 방법
function solution(studentNum) {
  return studentNum % 12 === 0 ? parseInt(studentNum / 12) : parseInt(studentNum / 12) + 1;
}

// Math.ceil() 올림 함수, Math.floor() 내림 함수, Math.round() 반올림 함수
function solution2(studentNum) {
  return Math.ceil(studentNum / 12);
}

function preprocessInput(inputList) {
  console.log(solution(Number(inputList[0])));
  console.log(solution2(Number(inputList[0])));
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
