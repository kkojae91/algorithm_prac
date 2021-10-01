/*
3 2
3 6 9

4 2
3 6 9 5

*/

function solution(n, m, nList) {
  const answer = [];
  let checkArray = Array(n).fill(0);
  let tempArray = Array(m).fill(0);
  function dfs(level) {
    if (level === m) {
      console.log(tempArray);
      answer.push([...tempArray]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (checkArray[i] === 0) {
        checkArray[i] = 1;
        tempArray[level] = nList[i];
        dfs(level + 1);
        checkArray[i] = 0;
      }
    }
  }
  dfs(0);
  return answer.length;
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
    const nList = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
    console.log(solution(n, m, nList));
    process.exit();
  });
}

main();
