/*
3
1 2 5
15
3
*/
// level값을 동전으 갯수로 판단... 조기 종료조건 설정. sum이 같을 경우와 sum이 클경우 분리
function solution(n, nList, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  function dfs(level, sum) {
    if (sum > m) {
      return;
    }
    if (level >= answer) {
      return;
    }
    if (sum === m) {
      answer = Math.min(answer, level);
      return;
    }

    for (let i = 0; i < n; i++) {
      dfs(level + 1, sum + nList[i]);
    }
  }

  dfs(0, 0);
  return answer;
}

function main() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const n = Number(inputList.slice(0, 1)[0]);
    const nList = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
    const m = Number(inputList.slice(2, 3)[0]);
    console.log(solution(n, nList, m));
    process.exit();
  });
}

main();
