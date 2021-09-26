/*
6
1 3 5 6 7 10
YES
*/

function solution(n, nList) {
  let answer = "NO";
  let flag = 0;
  const totalSum = nList.reduce((prev, curr) => prev + curr, 0);
  function dfs(level, sum) {
    // 조기 종료 조건;
    if (flag === 1) {
      return;
    }
    // 종료 조건;
    if (level === n) {
      if (totalSum - sum === sum) {
        answer = "YES";
        flag = 1;
      }
      return;
    }

    dfs(level + 1, sum + arr[level]);
    dfs(level + 1, sum);
  }

  dfs(0, 0);
  return answer;
}

function main() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const n = Number(inputList.slice(0, 1)[0]);
    const nList = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
    solution(n, nList);
    process.exit();
  });
}

main();
