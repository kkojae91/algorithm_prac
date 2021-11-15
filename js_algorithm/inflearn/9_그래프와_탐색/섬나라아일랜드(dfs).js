// 7
// 1 1 0 0 0 1 0
// 0 1 1 0 1 1 0
// 0 1 0 0 0 0 0
// 0 0 0 1 0 1 1
// 1 1 0 1 1 0 0
// 1 0 0 0 1 0 0
// 1 0 1 0 1 0 0

function solution(n, nList) {
  let answer = 0;
  // 상, 하, 좌, 우, 좌상, 좌하, 우상, 우하
  let dx = [-1, 1, 0, 0, -1, 1, -1, 1];
  let dy = [0, 0, -1, 1, -1, -1, 1, 1];

  function dfs(x, y) {
    nList[x][y] = 0;
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 범위를 벗어나는 경우
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
        continue;
      }

      // 바다인 경우
      if (nList[nx][ny] === 0) {
        continue;
      }

      // nList[nx][ny] = 0;
      dfs(nx, ny);
    }
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (nList[row][col] === 1) {
        answer++;
        // nList[row][col] = 0;
        dfs(row, col);
      }
    }
  }
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin
    .slice(1, n + 1)
    .map((str) => str.split(" ").map((s) => Number(s)));
  console.log(solution(n, nList));
}

main();
