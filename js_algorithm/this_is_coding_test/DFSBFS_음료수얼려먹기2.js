/*
음료수 얼려 먹기
n x m 크기의 얼음 틀이 있다. 구멍이 뚫려 있는 부분을 0, 칸막이가 존재하는 부분을 1로 표시된다.
구멍이 뚫려 있는 부분끼리, 상 하 좌 우로 붙어 있는 경우 서로 연결되어 있는 것으로 간주한다.
이때 얼음 틀의 모양이 주어졌을 때 생성되는 총 아이스크림의 개수를 구하는 프로그램을 작성하시오.
4 5
00110
00011
11111
00000
3

15 14
00000111100000
11111101111110
11011101101110
11011101100000
11011111111111
11011111111100
11000000011111
01111111111111
00000000011111
01111111111000
00011111111000
00000001111000
11111111110011
11100011111111
11100011111111
8
*/

const { threadId } = require("worker_threads");

class FreezeDrink {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.array = [];
    // 상 하 좌 우
    this.dx = [-1, 1, 0, 0];
    this.dy = [0, 0, -1, 1];
    this.answer = 0;
  }

  dfs(x, y) {
    // 범위를 벗어나는 경우는 즉시 종료
    if (x < 0 || x >= this.n || y < 0 || y >= this.m) {
      return false;
    }

    // 방문하지 않은 곳이라면,
    if (this.array[x][y] === 0) {
      // 현재 방문 표시
      this.array[x][y] = 1;
      for (let i = 0; i < 4; i++) {
        const nx = x + this.dx[i];
        const ny = y + this.dy[i];
        this.dfs(nx, ny);
      }
      return true;
    }
    // 범위를 벗어나지 않고 방문한 곳일 경우 return false
    return false;
  }

  solution() {
    // 2차원 배열을 돌면서 확인 하는 칸이 0이면 dfs 수행
    for (let x = 0; x < this.n; x++) {
      for (let y = 0; y < this.m; y++) {
        if (this.dfs(x, y)) {
          this.answer++;
        }
      }
    }
    return this.answer;
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
    const freezeDrink = new FreezeDrink();
    freezeDrink.initialize(inputList);
    console.log(freezeDrink.solution());
    process.exit();
  });
}

main();
