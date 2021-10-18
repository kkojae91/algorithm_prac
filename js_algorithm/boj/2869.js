// 시간 초과..
function solution(a, b, v) {
  let result = 0;
  let count = 0;
  while (result < v) {
    result += a;
    if (result < v) {
      result -= b;
    }
    count++;
  }
  return count;
}

function solution2(a, b, v) {
  return Math.ceil((v - b) / (a - b));
}

function main() {
  const fs = require("fs");
  const [a, b, v] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((str) => Number(str));
  // console.log(solution(a, b, v));
  console.log(solution2(a, b, v));
}
main();
