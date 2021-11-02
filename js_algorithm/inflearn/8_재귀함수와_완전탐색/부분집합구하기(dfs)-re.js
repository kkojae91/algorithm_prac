function solution(n) {
  let answer = [];
  function dfs(level) {
    if (level > n) {
      if (answer.length > 0) {
        console.log(answer.join(" "));
      }
      return;
    }
    // 포함하는 경우;
    answer.push(level);
    dfs(level + 1);
    // 포함하지 않는 경우;
    answer.pop(level);
    dfs(level + 1);
  }

  const visited = Array(n + 1).fill(0);
  console.log(visited);
  function dfs2(level) {
    if (level > n) {
      let temp = "";
      for (let i = 1; i <= n; i++) {
        if (visited[i] === 1) {
          temp += i + " ";
        }
      }
      if (temp) {
        console.log(temp);
      }
      return;
    }
    visited[level] = 1;
    dfs2(level + 1);
    visited[level] = 0;
    dfs2(level + 1);
  }

  dfs2(1);
  // dfs(1);
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  solution(n);
}

main();
