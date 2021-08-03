function solution(word) {
  const startNum = parseInt(word.length / 2) - 1;
  const endNum = startNum + 2;
  if (word.length % 2 === 0) {
    return word.slice(startNum, endNum);
  }
  return word.slice(startNum + 1, endNum);
}

function solution2(word) {
  const mid = parseInt(word.length / 2);
  if (word.length % 2 === 0) {
    return word.substring(mid - 1, mid + 1);
  }
  return word.substring(mid, mid + 1);
}

function solution3(word) {
  const mid = parseInt(word.length / 2);
  if (word.length % 2 === 0) {
    return word.substr(mid - 1, 2);
  }
  return word.substr(mid, 1);
}

function preprocessInput(inputList) {
  const word = inputList[0];
  // console.log(solution(word));
  // console.log(solution2(word));
  console.log(solution3(word));
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
