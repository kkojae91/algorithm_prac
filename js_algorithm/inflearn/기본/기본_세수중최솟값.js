const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");

// 내가 푼 방법
function solution(numList) {
  return Math.min(...numList);
}

// if문 활용
function solution2(numList) {
  const [a, b, c] = numList;
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer) {
    answer = c;
  }
  return answer;
}

function makeInput(inputList) {
  const numList = inputList[0].split(" ").map((num) => Number(num));
  console.log(solution(numList));
  console.log(solution2(numList));
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
    makeInput(inputList);
    process.exit();
  });
}

init();
