/*
3 2
*/

function solution(n, m) {
  let answer = 0;
  let nList = Array(m).fill(0);

  function dfs(level) {
    if (level === m) {
      answer++;
      console.log(nList);
      return;
    }

    for (let i = 1; i <= n; i++) {
      nList[level] = i;
      dfs(level + 1);
    }
  }

  dfs(0);
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
    console.log(solution(n, m));
    process.exit();
  });
}

main();
