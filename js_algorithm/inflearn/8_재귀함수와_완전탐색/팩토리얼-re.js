function solution(n) {
  function dfs(num) {
    if (num === 1) {
      return 1;
    }
    return num * dfs(num - 1);
  }

  return dfs(n);
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  console.log(solution(n));
}

main();
