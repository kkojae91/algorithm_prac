/*
259 5
81
58
42
33
61
*/

function solution2(c, n, cList) {
  let answer = Number.MIN_SAFE_INTEGER;

  function dfs(level, sum) {
    // 조기 종료 조건; (가지치기)
    // sum값이 c를 넘어가는 순간 그 노드 포함 하위 노드들은 모두 계산하지 않는다.
    if (sum > c) {
      return;
    }
    // 종료 조건;
    if (level === n) {
      answer = Math.max(answer, sum);
      return;
    }

    // 포함하는 경우
    dfs(level + 1, sum + cList[level]);
    // 포함하지 않는 경우
    dfs(level + 1, sum);
  }

  dfs(0, 0);
  return answer;
}

// 내가 푼 방법
function solution(c, n, cList) {
  let answer = [];
  function dfs(level, sum) {
    // 종료 조건
    if (level === n) {
      answer.push(sum);
      return;
    }

    // 포함하는 경우
    dfs(level + 1, sum + cList[level]);
    // 포함하지 않는 경우
    dfs(level + 1, sum);
  }

  dfs(0, 0);
  answer.sort((a, b) => b - a);
  // console.log(answer);
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] <= c) {
      return answer[i];
    }
  }
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
    const [c, n] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    const cList = inputList.slice(1, n + 1).map((str) => Number(str));
    console.log(solution(c, n, cList));
    console.log(solution2(c, n, cList));
    process.exit();
  });
}

main();
