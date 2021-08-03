function solution(word) {
  const wordObj = {};
  for (const str of word) {
    wordObj[str] === 1 ? (wordObj[str] += 1) : (wordObj[str] = 1);
  }
  return Object.keys(wordObj).join("");
}

function solution2(word) {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    // console.log(word[i], i, word.indexOf(word[i]));
    if (i === word.indexOf(word[i])) {
      answer += word[i];
    }
  }
  return answer;
}

function preprocessInput(inputList) {
  const word = inputList[0];
  // console.log(solution(word));
  console.log(solution2(word));
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
