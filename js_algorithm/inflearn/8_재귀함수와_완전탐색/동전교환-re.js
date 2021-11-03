// 3
// 1 2 5
// 15

function solution(n, nList, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  function dfs(level, sum) {
    if (sum > m) {
      return;
    }

    if (level >= answer) {
      return;
    }

    if (sum === m) {
      answer = Math.min(answer, level);
      console.log(sum, level);
      return;
    }
    for (let i = 0; i < n; i++) {
      dfs(level + 1, sum + nList[i]);
    }
  }
  dfs(0, 0);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin[1].split(" ").map((str) => Number(str));
  const m = Number(stdin[2]);
  console.log(solution(n, nList, m));
}

main();
