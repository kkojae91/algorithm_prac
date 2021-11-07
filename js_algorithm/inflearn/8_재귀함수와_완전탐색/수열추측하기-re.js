function solution(n, f) {
  let answer = [];
  let memo = [];
  for (let i = 0; i <= n; i++) {
    memo.push(Array(n + 1).fill(0));
  }
  let check = Array(n + 1).fill(0);
  let permutation = Array(n).fill(0);
  let bArray = Array(n).fill(0);

  function combi(n, r) {
    if (memo[n][r] > 0) {
      return memo[n][r];
    }
    if (n === r || r === 0) {
      return 1;
    }
    return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  let flag = 0;
  function dfs(level, sum) {
    if (flag === 1) {
      return;
    }

    if (level === n && sum === f) {
      answer = [...permutation];
      flag = 1;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        permutation[level] = i;
        dfs(level + 1, sum + bArray[level] * permutation[level]);
        check[i] = 0;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    bArray[i] = combi(n - 1, i);
  }

  dfs(0, 0);

  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, f] = stdin[0].split(" ").map((str) => Number(str));
  console.log(solution(n, f));
}

main();
