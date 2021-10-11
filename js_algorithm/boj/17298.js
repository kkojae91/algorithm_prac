function solution2(n, nList) {}

// 시간 초과.. 다시 해야함..
function solution(n, nList) {
  const answer = [];
  for (let i = 0; i < n - 1; i++) {
    const prev = nList[i];
    let temp = 0;
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      const curr = nList[j];
      if (prev < curr) {
        count++;
        if (count === 1) {
          temp = curr;
        }
      }
    }
    if (temp === 0) {
      answer.push(-1);
    } else {
      answer.push(temp);
    }
  }
  answer.push(-1);
  console.log(answer.join(" "));
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin[1].split(" ").map((str) => Number(str));
  solution(n, nList);
  solution2(n, nList);
}

main();
