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
  let queue = [];
  // 상, 하, 좌, 우, 상좌, 상우, 하좌, 하우
  const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
  const dy = [0, 0, -1, 1, -1, 1, -1, 1];

  function bfs(x, y) {
    queue.push([x, y]);

    while (queue.length) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 8; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
          continue;
        }

        if (nList[nx][ny] === 0) {
          continue;
        }

        nList[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (nList[row][col] === 1) {
        nList[row][col] = 0;
        bfs(row, col);
        answer++;
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
