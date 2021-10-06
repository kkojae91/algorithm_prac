// 4 16

function solution(n, f) {
  let answer = [];
  let flag = 0;
  const arr2d = [];
  for (let i = 0; i <= n; i++) {
    const arr = Array(n + 1).fill(0);
    arr2d.push(arr);
  }

  const checkArr = Array(n + 1).fill(0);
  const pArr = Array(n).fill(0);
  const bArr = Array(n).fill(0);

  function combi(n, r) {
    if (arr2d[n][r] > 0) {
      return arr2d[n][r];
    }

    if (n === r || r === 0) {
      return 1;
    }

    arr2d[n][r] = combi(n - 1, r - 1) + combi(n - 1, r);
    return arr2d[n][r];
  }

  function dfs(level, sum) {
    if (flag) {
      return;
    }
    if (level === n && sum === f) {
      answer = [...pArr];
      flag = 1;
    }

    for (let i = 1; i <= n; i++) {
      if (checkArr[i] === 0) {
        checkArr[i] = 1;
        pArr[level] = i;
        dfs(level + 1, sum + bArr[level] * pArr[level]);
        checkArr[i] = 0;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    bArr[i] = combi(n - 1, i);
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
    const [n, f] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    console.log(solution(n, f));
    process.exit();
  });
}

main();
