function solution(c, n, nList) {
  let answer = Number.MIN_SAFE_INTEGER;

  function dfs(level, sum) {
    if (sum > c) {
      return;
    }

    if (level === n) {
      if (sum <= c) {
        answer = Math.max(answer, sum);
      }
      return;
    }
    // 포함하는 경우
    dfs(level + 1, sum + nList[level]);
    // 포함하지 않는 경우
    dfs(level + 1, sum);
  }

  dfs(0, 0);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [weight, n] = stdin[0].split(" ").map((str) => Number(str));
  const nList = stdin.slice(1, n + 1).map((str) => Number(str));
  console.log(solution(weight, n, nList));
}

main();

// 259 5
// 81
// 58
// 42
// 33
// 61
