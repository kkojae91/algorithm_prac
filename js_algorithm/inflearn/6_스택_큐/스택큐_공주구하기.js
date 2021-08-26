/*
* 공주구하기

8 3
7
*/

class RescuePrincess {
  constructor() {
    this.n = 0;
    this.k = 0;
    this.queue = [];
  }

  solution() {
    // 큐 세팅
    for (let i = 1; i <= this.n; i++) {
      this.queue.push(i);
    }

    while (this.queue.length !== 1) {
      for (let i = 0; i < this.k - 1; i++) {
        const popPrince = this.queue.shift();
        this.queue.push(popPrince);
      }
      this.queue.shift();
    }
    return this.queue[0];
  }

  initialize(inputList) {
    [this.n, this.k] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
  }
}

class RescuePrincess2 {
  constructor() {
    this.n = 0;
    this.k = 0;
    this.queue = [];
  }

  solution() {
    this.queue = Array.from({ length: this.n }, (value, index) => index + 1);

    while (this.queue.length !== 1) {
      for (let i = 1; i < this.k; i++) {
        const PopPrince = this.queue.shift();
        this.queue.push(PopPrince);
      }
      this.queue.shift();
    }

    return this.queue[0];
  }

  initialize(inputList) {
    [this.n, this.k] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
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
    const rescuePrincess = new RescuePrincess();
    const rescuePrincess2 = new RescuePrincess2();
    rescuePrincess.initialize(inputList);
    rescuePrincess2.initialize(inputList);
    // console.log(rescuePrincess.solution());
    console.log(rescuePrincess2.solution());
    process.exit();
  });
}

main();
