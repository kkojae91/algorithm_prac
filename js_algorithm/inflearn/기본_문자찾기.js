const { stdin, stdout } = require("process");
/*
COMPUTERPROGRAMMING
R
*/
function solution(sentence, str) {
  let count = 0;
  for (const s of sentence) {
    if (s === str) {
      count++;
    }
  }
  return count;
}

// 구분자를 활용!
function solution2(sentence, str) {
  const answer = sentence.split(str).length - 1;
  return answer;
}

function preprocessInput(inputList) {
  // console.log(solution(inputList[0], inputList[1]));
  console.log(solution2(inputList[0], inputList[1]));
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
