/*
k 번째 큰 수
1~100 사이의 자연수가 적힌 n장의 카드를 가지고 있습니다.
같은 숫자의 카드가 여러장 있을 수 있다.
현수는 이중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다.
3장을 뽑을 수 있는 모든 경우를 기록합니다.
기록한 값 중 k번재로 큰 수를 출력하는 프로그램을 작성하세요.
만들어진 큰 수가 25 25 23 23 22 20 19 ...
일 경우 k값이 3이라면 k번째 큰 값은 22입니다. (즉, 중복일 경우 같은 등수)
10 3
13 15 34 23 45 65 33 11 26 42
143
*/

class KthMaxNum {
  constructor() {
    this.n = 0;
    this.k = 0;
    this.array = [];
    this.answer = [];
    this.result = [];
  }

  solution() {
    for (let index1 = 0; index1 < this.n - 2; index1++) {
      for (let index2 = index1 + 1; index2 < this.n - 1; index2++) {
        for (let index3 = index2 + 1; index3 < this.n; index3++) {
          const sumNum = this.array[index1] + this.array[index2] + this.array[index3];
          this.answer.push(sumNum);
        }
      }
    }
    this.answer = [...new Set(this.answer)].sort((a, b) => b - a);
    this.result = this.answer.slice(this.k - 1, this.k)[0];
    return this.result;
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
    console.log(this.solution());
  }
}

class KthMaxNum2 {
  constructor() {
    this.n = 0;
    this.k = 0;
    this.card = [];
    this.set = new Set();
    this.result = 0;
  }

  solution() {
    for (let i = 0; i < this.n; i++) {
      for (let j = i + 1; j < this.n; j++) {
        for (let k = j + 1; k < this.n; k++) {
          this.set.add(this.card[i] + this.card[j] + this.card[k]);
        }
      }
    }

    this.result = [...this.set].sort((a, b) => b - a)[this.k - 1];
    return this.result;
  }

  initialize(inputList) {
    [this.n, this.k] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    this.card = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
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
    const kthMaxNum = new KthMaxNum();
    const kthMaxNum2 = new KthMaxNum2();
    // kthMaxNum.initialize(inputList);
    kthMaxNum2.initialize(inputList);
    process.exit();
  });
}

init();
