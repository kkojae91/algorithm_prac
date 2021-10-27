function solution(nList) {
  let answer = [];
  nList.forEach((nStr, index) => {
    const numList = nStr.split(" ").map((str) => Number(str));
    const numSum = numList.reduce((sum, curr) => sum + curr, 0);
    answer.push([index + 1, numSum]);
  });
  answer.sort((a, b) => b[1] - a[1]);
  return answer[0].join(" ");
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  console.log(solution(stdin));
}
main();
