function solution(n) {
  let answer = 0;
  let dp = Array(n + 2).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  answer = dp[n + 1];
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  console.log(solution(n));
}

main();
