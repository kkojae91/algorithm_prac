function solution(num) {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    answer += i;
  }
  return answer;
}

function preprocessInput(inputList) {
  console.log(solution(Number(inputList[0])));
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
