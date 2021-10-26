function solution(num) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

function main() {
  const fs = require("fs");
  const num = Number(fs.readFileSync("/dev/stdin").toString());
  solution(num);
}

main();
