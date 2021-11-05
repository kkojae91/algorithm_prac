function solution(n, r) {
  let check = [];
  for (let i = 0; i <= n; i++) {
    check.push(Array(r + 1).fill(0));
  }
  // console.log(check);
  function dfs(n, r) {
    if (check[n][r] > 0) {
      return check[n][r];
    }
    if (n === r || r === 0) {
      return 1;
    }
    return (check[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
  }

  return dfs(n, r);
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, r] = stdin[0].split(" ").map((str) => Number(str));
  console.log(solution(n, r));
}

main();
