/*
0~9로만 이루어진 문자열 주어질 경우, 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하며 숫자 사이에 x, + 연산자를 넣어
결과적으로 가장 큰 수를 구하는 프로그램을 구하시오.
단, 모든 연산은 왼쪽에서 오른쪽으로 진행된다.
02984
546
567
210
*/

class Calculate {
  constructor() {
    this.str = "";
    this.numList = [];
    this.answer = 0;
  }

  solution() {
    this.numList = this.str.split("").map((num) => Number(num));
    this.answer = this.numList[0];
    for (let i = 1; i < this.numList.length; i++) {
      if (this.numList[i] <= 1 || this.answer <= 1) {
        this.answer += this.numList[i];
      } else {
        this.answer *= this.numList[i];
      }
    }
    return this.answer;
  }

  initialize(inputList) {
    this.str = inputList[0];
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
    const calculate = new Calculate();
    calculate.initialize(inputList);
    process.exit();
  });
}

init();
