// 5 20
// 10 5
// 25 12
// 15 8
// 6 3
// 7 4

function solution(n, m, nmList) {
  let answer = Number.MIN_SAFE_INTEGER;

  function dfs(level, sum, totalTime) {
    if (totalTime > m) {
      return;
    }

    if (level === n) {
      // console.log(sum, totalTime);
      answer = Math.max(answer, sum);
      return;
    }
    const [score, time] = nmList[level];
    // 포함하는 경우
    dfs(level + 1, sum + score, totalTime + time);
    // 포함하지 않는 경우
    dfs(level + 1, sum, totalTime);
  }

  dfs(0, 0, 0);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, m] = stdin[0].split(" ").map((str) => Number(str));
  const nmList = stdin.slice(1, n + 1).map((str) => {
    return str.split(" ").map((s) => Number(s));
  });
  console.log(solution(n, m, nmList));
}

main();
