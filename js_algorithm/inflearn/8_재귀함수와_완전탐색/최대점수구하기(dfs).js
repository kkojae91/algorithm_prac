/*
이진트리는 depth가 깊어지면 깊어질 수록 굉장히 오래걸린다...
5 20
10 5
25 12
15 8
6 3
7 4
*/

function solution2(n, m, array) {
  let answer = Number.MIN_SAFE_INTEGER;

  function dfs(level, sum, time) {
    // time이 m 보다 클 경우를 조기 종료 조건으로 걸어주면 answer 값이 업데이트 되지 않는다.
    if (time > m) {
      return;
    }

    // 종료 조건.
    if (level === n) {
      answer = Math.max(answer, sum);
      return;
    }

    // 포함하는 경우
    dfs(level + 1, sum + array[level][0], time + array[level][1]);
    // 포함하지 않는 경우
    dfs(level + 1, sum, time);
  }
  dfs(0, 0, 0);
  return answer;
}

// 내가 푼 방법
function solution(n, m, array) {
  let answer = Number.MIN_SAFE_INTEGER;
  let scoreStorage = Number.MIN_SAFE_INTEGER;
  function dfs(level, sumScore, time) {
    console.log(answer);
    console.log(sumScore, time);
    // 종료 조건
    if (time >= m || level === n) {
      if (time > m) {
        answer = Math.max(answer, sumScore - scoreStorage);
      } else {
        answer = Math.max(answer, sumScore);
      }
      return;
    }
    const currScore = array[level][0];
    const currTime = array[level][1];
    scoreStorage = currScore;
    // 포함되는 경우
    dfs(level + 1, sumScore + currScore, time + currTime);
    // 포함되지 않는 경우
    dfs(level + 1, sumScore, time);
  }
  dfs(0, 0, 0);

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
    const [n, m] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    const array = [];
    inputList.slice(1, n + 1).forEach((str) => {
      array.push(str.split(" ").map((s) => Number(s)));
    });
    // console.log(solution(n, m, array));
    console.log(solution2(n, m, array));
    process.exit();
  });
}

main();
