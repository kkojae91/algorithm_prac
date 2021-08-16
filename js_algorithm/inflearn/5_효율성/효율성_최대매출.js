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
    this.array = [];
  }

  solution() {}

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
    maxSales.initialize(inputList);
    maxSales.solution();
    process.exit();
  });
}

main();
