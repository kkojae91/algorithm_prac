// 4 2
// 3 6 9 5

function solution(n, m, nList) {
  let temp = Array(m).fill(0);
  let check = Array(n).fill(0);
  let answer = 0;
  function dfs(level) {
    if (level === m) {
      console.log(temp.join(" "));
      answer++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (check[i] === 0) {
        temp[level] = nList[i];
        check[i] = 1;
        dfs(level + 1);
        check[i] = 0;
      }
    }
  }

  dfs(0);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, m] = stdin[0].split(" ").map((str) => Number(str));
  const nList = stdin[1].split(" ").map((str) => Number(str));
  console.log(solution(n, m, nList));
}

main();
