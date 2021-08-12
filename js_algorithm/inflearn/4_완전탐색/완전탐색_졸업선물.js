/*
졸업선물
선생님은 학생들에게 졸업선물을 사주려고 한다. 선생님은 학생들에게 상품의 가격과 배송비를 제출하라고 했습니다.
선생님이 가지고 있는 예산은 한정되어 있습니다.
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.
5 28
6 6
2 2
4 3
4 5
10 3
*/

class Graduation {
  constructor() {
    this.n = 0;
    this.budget = 0;
    this.amountList = [];
    this.deliveryList = [];
    this.discountList = [];
    this.answer = [];
  }

  solution() {
    // 전체 배열이 한번 돌면서 discountList 셋팅
    // discountList 정렬 후 budget에서 count
    // count된 값을 answer에 push
    // Math.max(...answer);

    this.amountList.forEach((amount1, index1) => {
      const array = [];
      const discountAmount = parseInt(amount1 / 2);
      const discountSum = discountAmount + this.deliveryList[index1];

      this.amountList.forEach((amount2, index2) => {
        if (index1 !== index2) {
          const normalSum = amount2 + this.deliveryList[index2];
          array.push(normalSum);
        }
      });
      array.sort((a, b) => b - a);
      array.push(discountSum);
      array.reverse();
      this.discountList.push(array);
    });

    this.discountList.forEach((discount) => {
      let count = 0;
      let budget = this.budget;
      for (const num of discount) {
        budget -= num;
        if (budget < 0) {
          break;
        } else {
          count++;
        }
      }
      this.answer.push(count);
    });

    return Math.max(...this.answer);
  }

  initialize(inputList) {
    [this.n, this.budget] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    const array = inputList.slice(1, this.n + 1);
    array.forEach((arr) => {
      const [amount, delivery] = arr.split(" ").map((str) => Number(str));
      this.amountList.push(amount);
      this.deliveryList.push(delivery);
    });
    console.log(this.solution());
  }
}

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
    const graduation = new Graduation();
    const graduation2 = new Graduation2();
    // graduation.initialize(inputList);
    graduation2.initialize(inputList);
    process.exit();
  });
}

init();
