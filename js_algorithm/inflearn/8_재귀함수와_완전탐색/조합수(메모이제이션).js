function solution(n, r) {
  let answer = 0;
  // let arr2D = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  let arr2D = [];
  for (let i = 0; i <= n; i++) {
    let arr = Array(r + 1).fill(0);
    arr2D.push(arr);
  }

  function dfs(n, r) {
    if (arr2D[n][r] > 0) {
      return arr2D[n][r];
    }

    if (n === r || r === 0) {
      return 1;
    }
    arr2D[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r);
    // console.log(arr2D);
    return arr2D[n][r];
  }

  answer = dfs(n, r);
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
    const [n, r] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    console.log(solution(n, r));
    process.exit();
  });
}

main();
