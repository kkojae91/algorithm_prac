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

  // dfs로 특정 노드를 방문하고 연결된 모든 노드들도 방문
  dfs(row, col) {
    // 주어진 범위에서 벗어날 경우 종료
    if (row <= -1 || row >= this.n || col <= -1 || col >= this.m) {
      return;
    }

    // 현재 노드가 방문되지 않는 노드일 경우
    if (this.array[row][col] === 0) {
      // 해당 노드 방문 처리
      this.array[row][col] = 1;
      // 상 하 좌 우의 위치들도 모두 재귀적으로 호출 하여 조건에 만족할 경우 방문처리
      for (let i = 0; i < 4; i++) {
        this.dfs(row + this.dx[i], col + this.dy[i]);
      }
      return true;
    }
    return false;
  }

  solution() {
    // 모든 노드 (위치)에 대하여 음료수 채우기
    for (let row = 0; row < this.n; row++) {
      for (let col = 0; col < this.m; col++) {
        // 현재 위치에서 DFS 수행 값이 true 일 경우 this.answer++;
        if (this.dfs(row, col)) {
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
      .map((num) => Number(num));

    inputList.slice(1, this.n + 1).forEach((str) => {
      this.array.push(str.split("").map((s) => Number(s)));
    });
    console.log(this.solution());
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
    const freezeDrink = new FreezeDrink();
    freezeDrink.initialize(inputList);
    process.exit();
  });
}

init();
