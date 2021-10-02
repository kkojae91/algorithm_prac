// 5

function solution(n) {
  let answer = 0;
  function dfs(n) {
    if (n === 1) {
      return 1;
    }
    return n * dfs(n - 1);
  }
  answer = dfs(n);
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
    console.log(solution(n));
    process.exit();
  });
}

main();
