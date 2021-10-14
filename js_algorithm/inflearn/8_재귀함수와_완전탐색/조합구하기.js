function solution(n, m) {
  let answer = [];
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split(" ");
  const n = Number(stdin[0]);
  const m = Number(stdin[1]);
  console.log(solution(n, m));
}

main();
