/*
n개의 수로 이루어진 수열이 주어진다.
연속부분수열의 합이 특정숫자 m이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.

5 5
1 3 1 2 3
10
*/

class Sequence {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.leftPointer = 0;
    this.rightPointer = 0;
    this.sum = 0;
    this.answer = 0;
    this.array = [];
  }

  solution() {
    while (this.leftPointer < this.n) {
      this.sum += this.array[this.rightPointer];
      if (this.sum <= this.m) {
        this.answer++;
        this.rightPointer++;
      } else {
        this.sum = 0;
        this.leftPointer++;
        this.rightPointer = this.leftPointer;
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
  }
}

class Sequence2 {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.leftPointer = 0;
    this.sum = 0;
    this.answer = 0;
    this.array = [];
  }

  // 1 3 1 2 3
  solution() {
    for (let rightPointer = 0; rightPointer < this.n; rightPointer++) {
      this.sum += this.array[rightPointer];

      while (this.sum > this.m) {
        this.sum -= this.array[this.leftPointer];
        this.leftPointer++;
      }

      this.answer += rightPointer - this.leftPointer + 1;
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
    const sequence = new Sequence();
    sequence.initialize(inputList);
    // console.log(sequence.solution());
    const sequence2 = new Sequence2();
    sequence2.initialize(inputList);
    console.log(sequence2.solution());
    process.exit();
  });
}

main();
