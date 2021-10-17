// a 고정비, b 가변비, c 가격 => 손익분기점을 구해라
function solution(a, b, c) {
  let fixedCosts = a;
  let margin = c - b;
  const result = Math.floor(fixedCosts / margin) + 1;
  return margin <= 0 ? -1 : result;
}

function main() {
  const fs = require("fs");
  const [a, b, c] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((str) => Number(str));
  console.log(solution(a, b, c));
}

main();
