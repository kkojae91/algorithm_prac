function solution(n) {
  console.log(n);
  const answer = [];
  function dfs(level) {
    if (level === 0) {
      return;
    }
    dfs(level - 1);
    answer.push(level);
  }
  dfs(n);

  return answer.join(" ");
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  console.log(solution(n));
}

main();
