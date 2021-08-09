/*
각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하시오.
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 return 한다.
235, 1234가 정답일 경우 1234를 출력해야 한다.
7
128 460 603 40 521 137 123
*/

class DigitSum {
  constructor() {
    this.n = 0;
    this.numList = [];
    this.sumList = [];
    this.resultList = [];
    this.maxNum = 0;
    this.maxCount = 0;
  }

  getSumList() {
    this.numList.forEach((num) => {
      const str = String(num);
      let digitSum = 0;
      for (const s of str) {
        digitSum += Number(s);
      }
      this.sumList.push(digitSum);
    });
  }

  getMaxNum() {
    this.maxNum = Math.max(...this.sumList);
  }

  getMaxCount() {
    this.maxCount = this.sumList.filter((num, index) => {
      this.getResultList(num, index);
      return num === this.maxNum;
    }).length;
  }

  getResultList(num, index) {
    if (num === this.maxNum) {
      this.resultList.push(this.numList[index]);
    }
  }

  solution() {
    this.getSumList();
    this.getMaxNum();
    this.getMaxCount();

    return Math.max(...this.resultList);
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.numList = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((num) => Number(num));
    console.log(this.solution());
  }
}

class DigitSum2 {
  constructor() {
    this.n = 0;
    this.numList = [];
    this.answer = 0;
    this.maxNum = Number.MIN_SAFE_INTEGER;
  }

  solution() {
    // numList 오름차순 정렬
    this.numList.sort((a, b) => a - b);
    this.numList.forEach((num) => {
      let variableNum = num;
      let sum = 0;

      // Number를 string화 시키지 않고 수학적으로 풀이..
      while (variableNum) {
        sum += variableNum % 10;
        variableNum = parseInt(variableNum / 10);
      }

      if (sum >= this.maxNum) {
        this.maxNum = sum;
        this.answer = num;
      }
    });
    return this.answer;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.numList = inputList
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
    const digitSum = new DigitSum();
    const digitSum2 = new DigitSum2();
    // digitSum.initialize(inputList);
    digitSum2.initialize(inputList);
    process.exit();
  });
}

init();
