/*
KoreaTimeGood
3
*/

function solution(sentence) {
  let count = 0;
  sentence.split("").forEach((str) => {
    if (str === str.toUpperCase()) {
      count++;
    }
  });
  return count;
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
