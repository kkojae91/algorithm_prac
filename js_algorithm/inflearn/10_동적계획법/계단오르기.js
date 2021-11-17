// 내가 푼 방법 (이진 트리)
function solution(n) {
  let answer = 0;

  function dfs(sum) {
    if (sum > n) {
      return;
    }
    if (sum === n) {
      answer++;
      return;
    }
    // 1을 포함하는 경우
    dfs(sum + 1);
    // 2를 포함하는 경우
    dfs(sum + 2);
  }

  dfs(0);
  return answer;
}

function solution2(n) {
  let answer = 0;
  let dynamicArray = Array(n + 1).fill(0);

  dynamicArray[1] = 1;
  dynamicArray[2] = 2;

  for (let i = 3; i <= n; i++) {
    dynamicArray[i] = dynamicArray[i - 2] + dynamicArray[i - 1];
  }
  answer = dynamicArray[n];
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  // console.log(solution(n));
  console.log(solution2(n));
}

main();
