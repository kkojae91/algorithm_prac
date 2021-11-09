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
  let graph = [];
  for (let i = 0; i <= n; i++) {
    graph.push([]);
  }
  let check = Array(n + 1).fill(0);
  let path = [];

  for (let [a, b] of mList) {
    graph[a].push(b);
  }

  function dfs(vertax) {
    if (vertax === n) {
      answer++;
      console.log(path);
      return;
    }

    for (let i = 0; i < graph[vertax].length; i++) {
      const index = graph[vertax][i];
      if (check[index] === 0) {
        check[index] = 1;
        path.push(index);
        dfs(index);
        check[index] = 0;
        path.pop();
      }
    }
  }

  check[1] = 1;
  path.push(1);
  dfs(1);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, m] = stdin[0].split(" ").map((str) => Number(str));
  const mList = [];
  for (let list of stdin.slice(1, m + 1)) {
    mList.push(list.split(" ").map((str) => Number(str)));
  }
  console.log(solution(n, m, mList));
}

main();
