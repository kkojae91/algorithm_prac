/*
동빈이는 n x m 직사각형 형태의 미로에 갇혀 있다.
미로에는 여러 마리의 괴물이 있어 이를 피해 탈출해야 한다.
동빈이의 위치는 (1, 1)이고 미로의 출구는 (n,m)의 위치에 존재하며 한번에 한 칸씩 이동할 수 있다.
이때 괴물이 있는 부분은 0으로, 괴물이 없는 부분은 1로 표시되어 있다.
미로는 반드시 탈출할 수 있는 형태로 제시된다. 이때 동빈이가 탈출하기 위해 움직여야 하는 최소 칸의 개수를 구하시오.
칸을 셀 때는 시작 칸과 마지막 칸을 모두 포함해서 계산한다.
5 6
101010
111111
000001
111111
111111
10
*/

class Queue {
  constructor() {
    this.obj = {};
    this.left = 0;
    this.right = 0;
  }

  add(num) {
    this.obj[this.right] = num;
    this.right++;
  }

  leftPop() {
    const left = this.obj[this.left];
    this.left++;
    return left;
  }

  list() {
    const list = Object.values(this.obj);
    return list.filter((li, index) => index >= this.left);
  }

  size() {
    const list = Object.values(this.obj);
    return list.filter((li, index) => index >= this.left).length;
  }
}

class EscapeMaze {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.array = [];
    // 상 하 좌 우
    this.dx = [-1, 1, 0, 0];
    this.dy = [0, 0, -1, 1];
  }

  solution() {
    // 큐를 사용해야하니 큐를 먼저 구현
    const queue = new Queue();
    // 초기값을 queue에 넣어준다.
    queue.add([0, 0]);
    while (queue.size() > 0) {
      const [userX, userY] = queue.leftPop();
      // 상 하 좌 우 체크?!
      for (let i = 0; i < 4; i++) {
        // 다음 갈 곳을 세팅
        const nx = userX + this.dx[i];
        const ny = userY + this.dy[i];

        // 범위 밖일 경우 탈출
        if (nx < 0 || nx >= this.n || ny < 0 || ny >= this.m) {
          continue;
        }

        // 괴물을 만난 경우 탈출
        if (this.array[nx][ny] === 0) {
          continue;
        }
        // 갈 수 있는 곳일 경우
        if (this.array[nx][ny] === 1) {
          // 이전 값에 + 1을 다음 갈 곳에 방문 체크
          this.array[nx][ny] = this.array[userX][userY] + 1;
          queue.add([nx, ny]);

          // 다음 이동할 곳이 탈출하는 곳이면 바로 종료
          if (this.array[nx][ny] === this.array[this.n - 1][this.m - 1]) {
            return this.array[this.n - 1][this.m - 1];
          }
        }
      }
    }
    return this.array[this.n - 1][this.m - 1];
  }

  initialize(inputList) {
    [this.n, this.m] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    inputList.slice(1, this.n + 1).forEach((str) => {
      this.array.push(str.split("").map((s) => Number(s)));
    });
  }
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
    const escapeMaze = new EscapeMaze();
    escapeMaze.initialize(inputList);
    console.log(escapeMaze.solution());
    process.exit();
  });
}

main();
