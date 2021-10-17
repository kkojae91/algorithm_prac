function solution(n) {
  let count = 0;
  if (n > 0) {
    n -= 1;
    count++;
  }
  while (n > 0) {
    n -= count * 6;
    count++;
  }
  return count;
}

function main() {
  const fs = require("fs");
  const n = Number(fs.readFileSync("/dev/stdin").toString());
  console.log(solution(n));
}

main();
