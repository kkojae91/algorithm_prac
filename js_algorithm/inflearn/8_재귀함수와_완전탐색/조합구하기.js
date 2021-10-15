function solution(n, m) {
  let answer = [];
  let temp = Array(m).fill(0);
  function dfs(level, s) {
    if (level === m) {
      answer.push([...temp]);
      return;
    }

    for (let i = s; i <= n; i++) {
      temp[level] = i;
      dfs(level + 1, i + 1);
    }
  }

  dfs(0, 1);

  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split(" ");
  const n = Number(stdin[0]);
  const m = Number(stdin[1]);
  console.log(solution(n, m));
}

main();
