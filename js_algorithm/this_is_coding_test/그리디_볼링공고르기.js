/*
볼링공 고르기.
볼링공은 총 n개, 볼링공의 무게는 1부터 m까지의 자연수 형태로 존재
두사람이 무게가 다른 볼링공을 고를 수 있는 모든 경우의 수를 구하시오.
5 3
1 3 2 3 2

8 5
1 5 4 3 2 4 5 2
*/

class PickBall {
  constructor() {
    this.n;
    this.m;
    this.balls = [];
    this.count = 0;
  }

  solution() {
    // 이중 포문을 돌면서, index가 같지 않으면서 볼 무게가 같지 않는 경우만 counting;
    for (let i = 0; i < this.n; i++) {
      for (let j = i; j < this.n; j++) {
        if (i !== j && this.balls[i] !== this.balls[j]) {
          this.count++;
        }
      }
    }
    return this.count;
  }

  initialize(inputList) {
    [this.n, this.m] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((num) => Number(num));

    this.balls = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((num) => Number(num));

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
    const pickBall = new PickBall();
    pickBall.initialize(inputList);
    process.exit();
  });
}

init();
