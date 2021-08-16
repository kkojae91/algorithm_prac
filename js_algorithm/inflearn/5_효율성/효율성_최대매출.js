/*
현수의 아빠는 제과점을 운영합니다.
현수 아빠는 현수에게 n일 동안의 매출기록을 주고 연속된 k일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
만약 n이 10이고 10일 간의 매출기록이 아래와 같습니다. 이때 k가 3이면
12 15 11 20 25 10 20 19 13 15
연속된 3일간의 최대 매출액은 11+ 20+ 25= 56 입니다.
여러분이 현수를 도와주는 프로그램을 작성해주세요.
10 3
12 15 11 20 25 10 20 19 13 15
56
*/

class MaxSales {
  constructor() {
    this.n = 0;
    this.k = 0;
    this.leftPointer = 0;
    this.sum = 0;
    this.answer = 0;
    this.count = 0;
    this.array = [];
  }

  solution() {
    // 오른쪽 포인터가 끝이나면 종료
    // k번째가 되면 왼쪽 포인터를 한칸 이동
    for (let rightPointer = 0; rightPointer < this.n; rightPointer++) {
      if (this.count === this.k) {
        this.answer = Math.max(this.answer, this.sum);
        this.sum -= this.array[this.leftPointer];
        this.leftPointer++;
        this.count -= 1;
      }
      this.sum += this.array[rightPointer];
      this.count++;
    }
    return this.answer;
  }

  initialize(inputList) {
    [this.n, this.k] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    this.array = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
  }
}

class MaxSales2 {
  constructor() {
    this.n = 0;
    this.k = 0;
    this.sum = 0;
    this.answer = 0;
    this.array = [];
  }

  solution() {
    for (let i = 0; i < this.k; i++) {
      this.sum += this.array[i];
    }

    this.answer = this.sum;

    for (let i = this.k; i < this.n; i++) {
      this.sum += this.array[i] - this.array[i - this.k];
      this.answer = Math.max(this.answer, this.sum);
    }
    return this.answer;
  }

  initialize(inputList) {
    [this.n, this.k] = inputList
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
    const maxSales = new MaxSales();
    const maxSales2 = new MaxSales2();
    maxSales.initialize(inputList);
    maxSales2.initialize(inputList);
    // console.log(maxSales.solution());
    console.log(maxSales2.solution());
    process.exit();
  });
}

main();
