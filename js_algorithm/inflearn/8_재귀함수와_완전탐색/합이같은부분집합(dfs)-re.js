// 6
// 1 3 5 6 7 10

function solution(n, nList) {
  let flag = 0;
  let nSum = nList.reduce((sum, curr) => sum + curr, 0);
  let result = "NO";
  function dfs(level, sum) {
    if (flag) {
      return;
    }
    if (level === n) {
      if (nSum - sum === sum) {
        result = "YES";
        flag = 1;
      }
      return;
    }
    // 포함하는 경우
    dfs(level + 1, sum + nList[level]);
    // 포함하지 않는 경우
    dfs(level + 1, sum);
  }

  dfs(0, 0);
  return result;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin[1].split(" ").map((str) => Number(str));
  console.log(solution(n, nList));
}

main();
