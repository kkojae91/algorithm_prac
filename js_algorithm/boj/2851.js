// 계속 더하다 100이 될 경우, 100보다 한 번 작을 경우, 100보다 클 경우 세가지의 경우를 구해야한다.
// 100일 경우 100 출력
// 100일 경우가 없을 때는 100보다 한 번 작은 숫자와, 100보다 한 번 큰 숫자 중 100에 가까운 경우의 수를 출력
// 차이가 같을 경우 큰 수를 출력
function solution(nList) {
  let answer = [];
  let sum = 0;
  let prev = 0;
  for (const num of nList) {
    if (sum >= 100) {
      answer.push(prev);
      answer.push(sum);
      break;
    } else {
      prev = sum;
      sum += num;
    }
  }

  if (sum < 100) {
    return sum;
  }

  if (answer.includes(100)) {
    return 100;
  } else {
    const previous = 100 - answer[0];
    const later = answer[1] - 100;
    if (previous < later) {
      return answer[0];
    } else {
      return answer[1];
    }
  }
}

function main() {
  const fs = require("fs");
  const stdin = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((str) => Number(str));
  console.log(solution(stdin));
}

main();
