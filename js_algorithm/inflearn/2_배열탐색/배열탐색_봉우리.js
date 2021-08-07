/*
5
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2
*/

class Mountain {
  constructor() {
    this.n = 0;
    this.array = [];
    this.mountainCount = 0;
    // 상 하 좌 우
    this.dx = [-1, 1, 0, 0];
    this.dy = [0, 0, -1, 1];
  }

  solution() {
    // 1,1 부터 이중 포문 돌면서 확인, 본인위치의 상 하 좌 우 포지션 확인해서
    // 자신 보다 큰 값이 있으면 다음으로 넘어간다.
    // 자신이 가장 큰 값일 경우 count++;
    for (let userX = 1; userX < this.n + 1; userX++) {
      for (let userY = 1; userY < this.n + 1; userY++) {
        const upNum = this.array[userX + this.dx[0]][userY + this.dy[0]];
        const downNum = this.array[userX + this.dx[1]][userY + this.dy[1]];
        const leftNum = this.array[userX + this.dx[2]][userY + this.dy[2]];
        const rightNum = this.array[userX + this.dx[3]][userY + this.dy[3]];
        const currentNum = this.array[userX][userY];
        if (currentNum > upNum && currentNum > downNum && currentNum > leftNum && currentNum > rightNum) {
          this.mountainCount++;
        }
      }
    }
    return this.mountainCount;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.array.push(Array(this.n + 2).fill(0));
    const strArray = inputList.slice(1, this.n + 1);
    strArray.forEach((arr) => {
      let line = "0 ";
      line += arr + " 0";
      this.array.push(line.split(" ").map((num) => Number(num)));
    });
    this.array.push(Array(this.n + 2).fill(0));
    console.log(this.solution());
  }
}

class Mountain2 {
  constructor() {
    this.n = 0;
    this.array = [];
    // 상, 하, 좌, 우
    this.dx = [-1, 1, 0, 0];
    this.dy = [0, 0, -1, 1];
    this.mountainCount = 0;
  }

  solution() {
    for (let userX = 0; userX < this.n; userX++) {
      for (let userY = 0; userY < this.n; userY++) {
        let flag = true;
        for (let direction = 0; direction < 4; direction++) {
          const nextX = userX + this.dx[direction];
          const nextY = userY + this.dy[direction];
          const currentNum = this.array[userX][userY];
          // 범위 밖으로 나가는지 check;
          // otherNum이 currentNum보다 크거나 같으면 봉우리가 아니다.
          if (nextX >= 0 && nextX < this.n && nextY >= 0 && nextY < this.n && this.array[nextX][nextY] >= currentNum) {
            flag = false;
            break;
          }
        }
        if (flag) {
          this.mountainCount++;
        }
      }
    }
    return this.mountainCount;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    const strArray = inputList.slice(1, this.n + 1);
    strArray.forEach((str) => {
      this.array.push(str.split(" ").map((s) => Number(s)));
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
    const mountain = new Mountain();
    const mountain2 = new Mountain2();
    // mountain.initialize(inputList);
    mountain2.initialize(inputList);
    process.exit();
  });
}

init();
