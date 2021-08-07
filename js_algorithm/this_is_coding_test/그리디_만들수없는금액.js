/*
만들 수 없는 금액
n개의 동전이 주어지고, n개의 동전을 이용하여 만들 수 없는 양의 정수 금액 중 최솟값을 구하는 프로그램을 작성하시오.
5
3 2 1 1 9
8
*/

class Uncreatable {
  constructor() {
    this.n = 0;
    this.moneyList = [];
    this.target = 1;
  }

  solution() {
    // moneyList 오름차순 정렬
    this.moneyList.sort((a, b) => a - b);
    // this.target 보다 money값이 클 경우 만들 수 없는 금액은 target
    for (const money of this.moneyList) {
      if (this.target < money) {
        break;
      }
      this.target += money;
    }
    return this.target;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.moneyList = inputList
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
    const uncreatable = new Uncreatable();
    uncreatable.initialize(inputList);
    process.exit();
  });
}

init();
