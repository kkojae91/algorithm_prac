function solution(n, m) {
  const temp = Array(m).fill(0);
  let count = 0;
  function dfs(level) {
    if (level === m) {
      console.log(temp.join(" "));
      count++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      temp[level] = i;
      dfs(level + 1);
      temp[level] = 0;
    }
  }

  dfs(0);
  return count;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, m] = stdin[0].split(" ").map((str) => Number(str));
  console.log(solution(n, m));
}

main();
