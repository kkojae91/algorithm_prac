// 5 3
// 2 4 5 8 12
// 6

function solution(n, k, nList, m) {
  let answer = 0;
  let temp = Array(k).fill(0);

  function dfs(level, startNum) {
    if (level === k) {
      const sum = temp.reduce((sum, curr) => sum + curr, 0);
      if (sum % 6 === 0) {
        // console.log(temp);
        answer++;
      }
      return;
    }

    for (let i = startNum; i < n; i++) {
      temp[level] = nList[i];
      dfs(level + 1, i + 1);
    }
  }

  dfs(0, 0);

  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, k] = stdin[0].split(" ").map((str) => Number(str));
  const nList = stdin[1].split(" ").map((str) => Number(str));
  const m = Number(stdin[2]);
  console.log(solution(n, k, nList, m));
}

main();
