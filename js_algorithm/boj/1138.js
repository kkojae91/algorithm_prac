// 7
// 6 1 2 1 2 0 0

function solution(n, nList) {
  // result 변수 초기화
  const result = Array(n).fill(0);

  for (let i = 1; i <= n; i++) {
    // 나보다 큰 사람들 왼쪽에 몇명 있는지 check하는 변수
    let temp = nList[i - 1];
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (count === temp && result[j] === 0) {
        result[j] = i;
        break;
      } else if (result[j] === 0) {
        count++;
      }
    }
    // console.log(result);
  }
  return result.join(" ");
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin[1].split(" ").map((str) => Number(str));
  console.log(solution(n, nList));
}

main();
