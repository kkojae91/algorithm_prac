// 5 3 7 11 2 15 17
const { stdin, stdout } = require("process");

function solution(numList) {
  return Math.min(...numList);
}

function solution2(numList) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numList.length; i++) {
    if (numList[i] < min) {
      min = numList[i];
    }
  }
  answer = min;
  return answer;
}

function preprocessInput(inputList) {
  console.log(solution(inputList[0].split(" ").map((num) => Number(num))));
  console.log(solution2(inputList[0].split(" ").map((num) => Number(num))));
}

function init() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    preprocessInput(inputList);
    process.exit();
  });
}

init();
