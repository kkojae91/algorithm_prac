function solution(num) {
  let answer;
  let checkList = Array(num + 1).fill(0);
  // console.log(checkList);
  function dfs(vertex) {
    // 종료조건
    if (vertex === num + 1) {
      let list = [];
      for (let i = 0; i <= num; i++) {
        if (checkList[i] === 1) {
          list.push(i);
        }
      }
      // 출력 조건
      if (list.length !== 0) {
        console.log(list.join(" "));
      }
      return;
    }
    checkList[vertex] = 1;
    dfs(vertex + 1);
    checkList[vertex] = 0;
    dfs(vertex + 1);
  }

  dfs(1);
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
    const num = Number(inputList[0]);
    solution(num);
    process.exit();
  });
}

main();
