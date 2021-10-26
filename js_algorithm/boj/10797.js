function solution(n, nList) {
  return nList.filter((num) => num === n).length;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin[1].split(" ").map((str) => Number(str));
  console.log(solution(n, nList));
}

main();
