/*
동빈이는 n x m 크기의 직사각형 형태의 미로에 갇혀 있다. 미로에는 여러 마리의 괴물이 있어 이를 피해 탈출해야 한다.
동빈이의 위치는 (1, 1)이고 미로의 출구는 (n,m)의 위치에 존재하며 한 번에 한 칸씩 이동할 수 있다.
이때 괴물이 있는 부분은 0으로, 괴물이 없는 부분은 1로 표시되어 있다.
미로는 반드시 탈출할 수 있는 형태로 제시된다.
이때 동빈이가 탈출하기 위해 움직여야 하는 최소 칸의 개수를 구하시오. 칸을 셀때는 시작 칸과 마지막 칸을 모두 포함해서 계산한다.

5 6
101010
111111
000001
111111
111111
10
*/

class EscapeMaze {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.array = [];
    this.queue = [];
    // 상하좌우
    this.dx = [-1, 1, 0, 0];
    this.dy = [0, 0, -1, 1];
  }

  // bfs 최단 거리 소스코드 구현
  bfs(userX, userY) {
    // list로 queue구현!
    this.queue.push([userX, userY]);

    // queue list가 빌때까지! 반복하기
    while (this.queue.length !== 0) {
      [userX, userY] = this.queue.shift();

      // 현재 위치에서 4가지 방향으로의 위치 확인
      for (let i = 0; i < 4; i++) {
        const nx = userX + this.dx[i];
        const ny = userY + this.dy[i];

        // 맵정보를 벗어나는 경우 무시
        if (nx < 0 || nx >= this.n || ny < 0 || ny >= this.m) {
          continue;
        }

        // 괴물을 만났을 경우 무시
        if (this.array[nx][ny] === 0) {
          continue;
        }

        // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
        if (this.array[nx][ny] === 1) {
          // 이동할 위치값을 현재 위치값 + 1을 할당한다.
          this.array[nx][ny] = this.array[userX][userY] + 1;
          // 이동할 위치를 queue에 push
          this.queue.push([nx, ny]);
          // 다음 이동할 곳이 탈출할 수 있는 곳이라면 조기 종료 (불필요한 반복을 줄인다.)
          if (nx === this.n - 1 && ny === this.m - 1) {
            console.log(this.array);
            return this.array[this.n - 1][this.m - 1];
          }
        }
      }
    }
    console.log(this.array);
    return this.array[this.n - 1][this.m - 1];
  }

  initialize(inputList) {
    [this.n, this.m] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    inputList.slice(1, this.n + 1).forEach((str) => {
      const list = str.split("").map((s) => Number(s));
      this.array.push(list);
    });
    // user의 시작 위치를 bfs에 넘겨준다.
    console.log(this.bfs(0, 0));
  }
}

function init() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const escapeMaze = new EscapeMaze();
    escapeMaze.initialize(inputList);
    process.exit();
  });
}

init();
