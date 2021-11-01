function solution(n) {
  let answer = "";
  function dfs(level) {
    if (level === 0) {
      return;
    }
    const qouet = parseInt(level / 2);
    const remain = level % 2;
    dfs(qouet);
    answer += remain;
  }
  dfs(n);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  console.log(solution(n));
}

main();
