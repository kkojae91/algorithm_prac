// 5 3
// 2 4 5 8 12
// 6

function solution(n, m, nList, k) {
  let answer = 0;

  function dfs(level, s, sum) {
    if (level === k) {
      if (sum % m === 0) {
        answer++;
      }
      return;
    }
    for (let i = s; i < n; i++) {
      dfs2(level + 1, i + 1, sum + nList[i]);
    }
  }

  dfs(0, 0, 0);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, k] = stdin[0].split(" ").map((str) => Number(str));
  const nList = stdin[1].split(" ").map((str) => Number(str));
  const m = Number(stdin[2]);
  console.log(solution(n, m, nList, k));
}

main();
