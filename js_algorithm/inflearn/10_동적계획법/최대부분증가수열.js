// 8
// 5 3 7 8 6 2 9 4

function solution(n, nList) {
  let answer = 0;
  let dp = Array(n).fill(0);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nList[j] < nList[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
    answer = Math.max(answer, dp[i]);
  }
  console.log(dp);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin[1].split(" ").map((str) => Number(str));
  console.log(solution(n, nList));
}

main();
