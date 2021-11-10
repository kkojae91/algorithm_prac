// 0 0 0 0 0 0 0
// 0 1 1 1 1 1 0
// 0 0 0 1 0 0 0
// 1 1 0 1 0 1 1
// 1 1 0 0 0 0 1
// 1 1 0 1 1 0 0
// 1 0 0 0 0 0 0

// 내가 푼 방법
function solution(arr) {
  let answer = 0;
  const n = arr.length - 1;
  const m = arr[0].length - 1;
  // 상하좌우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(x, y) {
    // 종착점에 도착했을 경우 answer++ 후 리턴
    if (x === n && y === m) {
      answer++;
      for (const a of arr) {
        console.log(a.join(""));
      }
      console.log("============");
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 범위를 벗어낫을 경우 바로 리턴
      if (nx < 0 || nx > n || ny < 0 || ny > m) {
        continue;
      }
      // 갈 수 없는 곳일 경우 바로 리턴
      if (arr[nx][ny] === 1) {
        continue;
      }

      // console.log(x, nx, y, ny);
      arr[nx][ny] = 1;
      dfs(nx, ny);
      arr[nx][ny] = 0;
    }
  }

  arr[0][0] = 1;
  dfs(0, 0);
  return answer;
}

function solution2(board) {
  let answer = 0;
  const n = board.length - 1;
  const m = board[0].length - 1;
  // 상 우 하 좌;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  function dfs(x, y) {
    if (x === n && y === m) {
      answer++;
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      // 움직일 수 잇는 경우!!
      if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && board[nx][ny] === 0) {
        board[nx][ny] = 1;
        dfs(nx, ny);
        board[nx][ny] = 0;
      }
    }
  }

  board[0][0] = 1;
  dfs(0, 0);
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const arr = [];
  for (let std of stdin) {
    if (std !== "") {
      arr.push(std.split(" ").map((str) => Number(str)));
    }
  }
  // console.log(solution(arr));
  console.log(solution2(arr));
}

main();
