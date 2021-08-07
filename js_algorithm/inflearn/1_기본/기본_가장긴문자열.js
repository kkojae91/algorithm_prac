/*
5
teacher
time
student 
beautiful 
good
*/

function solution(n, wordList) {
  let maxLengthWord = "";
  let maxLength = 0;
  wordList.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      maxLengthWord = word;
    }
  });
  return maxLengthWord;
}

function preprocessInput(inputList) {
  const n = Number(inputList[0]);
  const wordList = [];
  inputList.splice(0, 1);
  inputList.forEach((input) => wordList.push(input));
  console.log(solution(n, wordList));
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
