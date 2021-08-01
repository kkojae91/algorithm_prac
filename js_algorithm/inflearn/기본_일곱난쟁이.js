/*
20 7 23 19 10 15 25 8 13
*/

function solution(nineHeight) {
  const nineHeightSum = nineHeight.reduce((prev, curr) => prev + curr, 0);
  for (let i = 0; i < nineHeight.length - 1; i++) {
    for (let j = i + 1; j < nineHeight.length; j++) {
      if (nineHeightSum - (nineHeight[i] + nineHeight[j]) === 100) {
        nineHeight.splice(j, 1);
        nineHeight.splice(i, 1);
      }
    }
  }
  return nineHeight;
}

function preprocessInput(inputList) {
  const nineHeight = inputList[0].split(" ").map((num) => Number(num));
  console.log(solution(nineHeight));
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
