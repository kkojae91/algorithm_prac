class Graduation2 {
  constructor() {
    this.n = 0;
    this.budget = 0;
    this.product = [];
    this.answer = 0;
  }

  solution() {
    // 총 비용으로 정렬
    this.product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    for (let i = 0; i < this.n; i++) {
      let money = this.budget - (this.product[i][0] / 2 + this.product[i][1]);
      let count = 1;
      for (let j = 0; j < this.n; j++) {
        const leftMoney = this.product[j][0] + this.product[j][1];
        if (j !== i && leftMoney > money) {
          break;
        }
        if (j !== i && leftMoney <= money) {
          money -= leftMoney;
          count++;
        }
      }
      this.answer = Math.max(this.answer, count);
    }
    return this.answer;
  }

  initialize(inputList) {
    [this.n, this.budget] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    const array = inputList.slice(1, this.n + 1);
    array.forEach((arr) => {
      const [amount, delivery] = arr.split(" ").map((str) => Number(str));
      this.product.push([amount, delivery]);
    });
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
    const graduation2 = new Graduation2();
    graduation2.initialize(inputList);
    process.exit();
  });
}

main();
