/*
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 최솟값을 찾는 프로그램을 작성하시오.
12 77 38 41 53 92 85
*/

function solution(numList) {
  const oddList = numList.filter((num) => num % 2 !== 0);
  const oddSumNum = oddList.reduce((prev, curr) => prev + curr, 0);
  const oddMinNum = Math.min(...oddList);
  console.log(oddSumNum);
  console.log(oddMinNum);
}

function preprocessInput(inputList) {
  const numList = inputList[0].split(" ").map((num) => Number(num));
  solution(numList);
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
