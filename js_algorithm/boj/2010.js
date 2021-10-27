function solution(n, nList) {
  let sum = nList.reduce((sum, curr) => sum + curr, 0);
  return sum - (n - 1);
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin.slice(1, n + 1).map((str) => Number(str));
  console.log(solution(n, nList));
}

main();
