// 5 9
// 1 2
// 1 3
// 1 4
// 2 1
// 2 3
// 2 5
// 3 4
// 4 2
// 4 5

function solution(n, m, mList) {
  let answer = 0;
  let check = Array(n + 1).fill(0);
  let graph = [];
  let path = [];
  for (let i = 0; i <= n; i++) {
    graph.push(Array(n + 1).fill(0));
  }

  for (let [a, b] of mList) {
    graph[a][b] = 1;
  }

  function dfs(vertax) {
    if (vertax === n) {
      answer++;
      // console.log(path);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (graph[vertax][i] === 1 && check[i] === 0) {
        check[i] = 1;
        path.push(i);
        dfs(i);
        check[i] = 0;
        path.pop();
      }
    }
  }

  path.push(1);
  check[1] = 1;
  dfs(1);

  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, m] = stdin[0].split(" ").map((str) => Number(str));
  const mList = [];
  for (let nStr of stdin.slice(1, m + 1)) {
    mList.push(nStr.split(" ").map((str) => Number(str)));
  }
  console.log(solution(n, m, mList));
}

main();
