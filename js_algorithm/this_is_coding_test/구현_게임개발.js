/*
정사각형으로 이루어진 n x m 크기의 직사각형으로 각각의 칸은 육지 또는 바다이다.
캐릭터는 동서남북 중 한 곳을 바라본다.
맵의 각 칸은 (a, b)로 나타낼 수 있고, a는 북쪽으로부터 떨어진 칸의 개수, b 는 서쪽으로 부터 떨어진 칸의 개수이다.
캐릭터는 상 하 좌 우로 움직일 수 있고, 바다로 되어 있는 공간에는 갈 수 없다.

메뉴얼
1. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향(반시계 방향으로 90도 회전한 방향)부터 차례대로 갈 곳을 정한다.
2. 캐릭터의 바로 왼쪽 방향에 아직 가보지 않은 칸이 존재한다면, 왼쪽 방향으로 회전한 다음 왼쪽으로 한 칸 전진한다.
    왼쪽 방향에 가보지 않은 칸이 없다면, 왼쪽 방향으로 회전만 수행하고 1단계로 돌아간다.
3. 만약 네 방향 모두 이미 가본 칸이거나 바다로 되어 있는 칸인 경우에는, 
    바라보는 방향을 유지한 채로 한 칸 뒤로 가고 1단계로 돌아 간다. 
    단, 이때 뒤쪽 방향이 바다인 칸이라 뒤로 갈 수 없는 경우 움직임을 멈춘다.

메뉴얼에 따라 캐릭터를 이동시킨 뒤에, 캐릭터가 방문한 칸의 수를 출력하는 프로그램을 만드시오.
북쪽 0, 동쪽 1, 남쪽 2, 서쪽 3
육지 0, 바다1

4 4
1 1 0
1 1 1 1
1 0 0 1
1 1 0 1
1 1 1 1

5 5
1 1 0
1 1 1 1 1
1 0 0 1 1
1 0 0 0 1
1 1 0 0 1
1 1 1 1 1
*/

class Game {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.userX = 0;
    this.userY = 0;
    this.userDirection = 0;
    // 맵정보
    this.array = [];
    // 방문체크
    this.visit = [];
    // 북, 동, 남, 서
    this.dx = [-1, 0, 1, 0];
    this.dy = [0, 1, 0, -1];
    // 다음 방향
    this.nextX = 0;
    this.nextY = 0;
    // 결과 값
    this.answer = 1;
    this.turnCount = 0;
  }

  solution = () => {
    this.visit[this.userX][this.userY] = 1;
    while (true) {
      // 좌측으로 돈다.
      this.turnLeft();
      // 다음 방향 확인
      this.nextX = this.userX + this.dx[this.userDirection];
      this.nextY = this.userY + this.dy[this.userDirection];
      // 육지이면서, 가보지 않은 경우
      if (this.array[this.nextX][this.nextY] === 0 && this.visit[this.nextX][this.nextY] === 0) {
        // 유저 이동, 방문 체크, turnCount초기화, 다시 처음부터 시작
        this.userX = this.nextX;
        this.userY = this.nextY;
        this.visit[this.userX][this.userY] = 1;
        this.answer++;
        this.turnCount = 0;
        continue;
      } else {
        // 바다일 경우
        this.turnCount++;
        if (this.turnCount === 4) {
          // 네면 모두 갈 수 없을 경우
          this.nextX = this.userX - this.dx[this.userDirection];
          this.nextY = this.userY - this.dy[this.userDirection];
          // 뒤로 갈 수 있다면 이동
          if (this.array[this.nextX][this.nextY] === 0) {
            this.userX = this.nextX;
            this.userY = this.nextY;
            this.turnCount = 0;
          } else {
            // 뒤가 바다일 경우
            break;
          }
        }
      }
    }
    return this.answer;
  };

  turnLeft = () => {
    this.userDirection -= 1;
    if (this.userDirection === -1) {
      this.userDirection = 3;
    }
  };

  initialize = (inputList) => {
    [this.n, this.m] = this.preprocess(inputList.splice(0, 1)[0]);

    [this.userX, this.userY, this.userDirection] = this.preprocess(inputList.splice(0, 1)[0]);

    inputList.forEach((strLine) => {
      const line = strLine.split(" ").map((num) => Number(num));
      this.array.push(line);
    });
    this.visitSetting();
    console.log(this.solution());
  };

  visitSetting = () => {
    let i;
    for (i = 0; i < this.n; i++) {
      this.visit.push(Array(this.m).fill(0));
    }
  };

  preprocess = (input) => {
    return input.split(" ").map((num) => Number(num));
  };
}

function init() {
  const inputList = [];
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const game = new Game();
    game.initialize(inputList);
    process.exit();
  });
}

init();
