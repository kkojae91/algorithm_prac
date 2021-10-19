// 완전 탐색..?! => 시간초과
function solution(n) {
  let answer = 0;

  function dfs(sum, count) {
    if (sum > n) {
      return;
    }
    if (sum === n) {
      answer = count;
      return;
    }
    // 3을 포함하는 경우
    dfs(sum + 3, count + 1);
    // 5를 포함하는 경우
    dfs(sum + 5, count + 1);
  }
  dfs(0, 0);

  return answer === 0 ? -1 : answer;
}

//
function solution2(n) {
  let answer = 0;
  let five = 0;
  let three = 0;
  while (true) {
    if (n % 5 === 0) {
      five = n / 5;
      break;
    }
    if (n < 0) {
      answer = -1;
      break;
    }
    n -= 3;
    three++;
  }
  return answer === -1 ? -1 : five + three;
}

function main() {
  const fs = require("fs");
  const n = Number(fs.readFileSync("/dev/stdin").toString());
  // console.log(solution(n));
  console.log(solution2(n));
}
main();
