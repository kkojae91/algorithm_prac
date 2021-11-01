function solution(n) {
  const answer = [];
  // 전위 순회, 중위 순회, 후위 순회 출력해보기
  function dfs(level) {
    if (level > 7) {
      return;
    }
    // 전위 순회
    // console.log(level);
    // 왼쪽일 경우
    dfs(level * 2);
    // 중위 순회
    // console.log(level);
    // 오른쪽일 경우
    dfs(level * 2 + 1);
    // 후위 순회
    console.log(level);
  }

  dfs(n);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  console.log(solution(n));
}

main();
