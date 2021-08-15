/*
n개로 이루어진 수열이 주어진다.
연속부분수열의 합이 특정숫자 m이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하시오.
아래의 숫자로 나오는 부분 수열은 2, 1, 3 // 1, 3, 1, 1 // 3, 1, 1, 1 로 총 3가지 입니다.
8 6
1 2 1 3 1 1 1 2
*/

class Progression {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.frontPointer = 0;
    this.backPointer = 1;
    this.array = [];
    this.answer = [];
    this.count = 0;
  }

  solution() {
    while (this.frontPointer < this.n) {
      if (this.count === this.n) {
        this.frontPointer++;
        this.backPointer = this.frontPointer + 1;
        this.count = 0;
      }
      const current = this.array.slice(this.frontPointer, this.backPointer);
      const currentSum = current.reduce((prev, curr) => prev + curr, 0);
      if (currentSum === this.m) {
        this.answer.push(current);
        if (this.frontPointer < this.backPointer - 1) {
          this.frontPointer++;
        } else {
          this.frontPointer++;
          this.backPointer++;
        }
      } else {
        this.backPointer++;
      }
      this.count++;
    }
    return this.answer.length;
  }

  initialize(inputList) {
    [this.n, this.m] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    this.array = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
    console.log(this.solution());
  }
}

class Progression2 {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.leftPointer = 0;
    this.sum = 0;
    this.answer = 0;
    this.array = [];
  }

  solution() {
    for (let rightPointer = 0; rightPointer < this.n; rightPointer++) {
      this.sum += this.array[rightPointer];
      if (this.sum === this.m) {
        this.answer++;
      }

      while (this.sum >= this.m) {
        this.sum -= this.array[this.leftPointer];
        this.leftPointer++;
        if (this.sum === this.m) {
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
    this.array = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
    console.log(this.solution());
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
    const progression = new Progression();
    const progression2 = new Progression2();
    // progression.initialize(inputList);
    progression2.initialize(inputList);
    process.exit();
  });
}

main();
