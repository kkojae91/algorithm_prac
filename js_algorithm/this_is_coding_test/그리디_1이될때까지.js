/*
1이 될 때까지
n이 1이 될 때까지 아래의 과정을 반복 하려고 한다. 단, 두 번째 연산은 n이 k로 나누어 떨어질 경우 수행
1. n에서 1을 뺀다.
2. n을 k로 나눈다.
n,k가 주어질 경우 n이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 최소 횟수를 구하는 프로그램을 작성하시오.
25 5
2
 */

function solution(num, k) {
  let count = 0;
  while (true) {
    if (num === 1) {
      return count;
    }
    num % k === 0 ? (num /= k) : (num -= 1);
    count++;
  }
}

function preprocessInput(inputList) {
  const [num, k] = inputList[0].split(" ").map((num) => Number(num));
  console.log(solution(num, k));
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
