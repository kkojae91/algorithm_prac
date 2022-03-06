function solution(n, m) {
  let answer = 0;
  let temp = Array(m).fill(0);

  function dfs(level, startNum) {
    if (level === m) {
      console.log(temp);
      answer++;
      return;
    }

    for (let i = startNum; i <= n; i++) {
      temp[level] = i;
      dfs(level + 1, i + 1);
    }
  }

  dfs(0, 1);

  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, m] = stdin[0].split(" ").map((str) => Number(str));
  console.log(solution(n, m));
}

main();
