function solution(sentence) {
  let answer = "";
  for (const str of sentence) {
    answer += str.toUpperCase();
  }
  return answer;
}

function preprocessInput(inputList) {
  const sentence = inputList[0];
  console.log(solution(sentence));
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
