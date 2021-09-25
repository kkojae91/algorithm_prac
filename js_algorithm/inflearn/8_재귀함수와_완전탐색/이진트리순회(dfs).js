function solution(vertex) {
  function dfs(vertex) {
    if (vertex > 7) {
      return;
    }
    // 전위순회 위치 (부모, 왼쪽, 오른쪽)
    // console.log(vertex);
    dfs(vertex * 2);
    // 중위순회 위치 (왼쪽, 부모, 오른쪽)
    // console.log(vertex);
    dfs(vertex * 2 + 1);
    // 후위순회 위치 (왼쪽, 오른쪽, 부모)
    console.log(vertex);
  }

  dfs(vertex);
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
    const n = Number(inputList[0]);
    solution(n);
    process.exit();
  });
}

main();
