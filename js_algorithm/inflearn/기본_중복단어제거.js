/*
5
good
time
good
time
student
*/

function solution(n, wordList) {
  const answer = [];
  for (let i = 0; i < wordList.length; i++) {
    if (i === wordList.indexOf(wordList[i])) {
      answer.push(wordList[i]);
    }
  }
  return answer;
}

function solution2(n, wordList) {
  const wordObj = {};
  for (const word of wordList) {
    wordObj[word] === 1 ? (wordObj[word] += 1) : (wordObj[word] = 1);
  }
  return Object.keys(wordObj);
}

// Array.filter()를 적극적으로 활용하자!! 유용함!
function solution3(n, wordList) {
  const answer = wordList.filter((word, index) => index === wordList.indexOf(word));
  return answer;
}

function preprocessInput(inputList) {
  const n = Number(inputList.splice(0, 1)[0]);
  // console.log(solution(n, inputList));
  // console.log(solution2(n, inputList));
  console.log(solution3(n, inputList));
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
