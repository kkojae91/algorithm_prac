// 5 3
// 2 4 5 8 12
// 6

function solution(n, m, nList, k) {
  let answer = 0;
  let temp = Array(k).fill(0);

  // 내가 푼 방법
  function dfs(level, s) {
    if (level === k) {
      // console.log(temp);
      let sumNumber = temp.reduce((prev, curr) => prev + curr, 0);
      // console.log(sumNumber);
      if (sumNumber % m === 0) {
        // console.log("true");
        answer++;
      }
      return;
    }

    for (let i = s; i < n; i++) {
      temp[level] = nList[i];
      dfs(level + 1, i + 1);
    }
  }

  function dfs2(level, s, sum) {
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
  // dfs(0, 0);
  dfs2(0, 0, 0);
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
