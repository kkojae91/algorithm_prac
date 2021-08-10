/*
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
예를 들어 32 -> 23 23은 소수 그러면 23을 출력한다.
단, 910 -> 019 -> 19로 숫자화 시켜야한다. 첫 자리부터의 연속된 0은 무시한다.
9
32 55 62 20 250 370 200 30 100
*/

const { threadId } = require("worker_threads");

class PrimaryNumber {
  constructor() {
    this.n = 0;
    this.numList = [];
    this.strList = [];
    this.answer = [];
  }

  checkPrimaryNum(reverseNum) {
    // 에라토스테네스의 체
    const checkList = Array(reverseNum + 1).fill(true);

    for (let i = 2; i <= reverseNum; i++) {
      if (checkList[i]) {
        for (let j = i * i; j <= reverseNum; j += i) {
          checkList[j] = false;
        }
      }
    }

    checkList.splice(0, 2, false, false);
    return checkList[reverseNum];
  }

  solution() {
    this.strList = this.numList.map((num) => String(num));
    this.strList.forEach((str) => {
      const reverseNum = Number(str.split("").reverse().join(""));
      if (this.checkPrimaryNum(reverseNum)) {
        this.answer.push(reverseNum);
      }
    });
    return this.answer.join(" ");
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

class PrimaryNumber2 {
  constructor() {
    this.n = 0;
    this.numList = [];
    this.answer = [];
  }

  isPrime(num) {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  solution() {
    this.numList.forEach((num) => {
      // String 사용하지 않고 number 변수 뒤집기
      // 몫과 나머지를 이용
      let newNum = 0;
      while (num) {
        let remainder = num % 10;
        newNum = newNum * 10 + remainder;
        num = parseInt(num / 10);
      }
      if (this.isPrime(newNum)) {
        this.answer.push(newNum);
      }
    });
    return this.answer.join(" ");
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
    const primaryNumber = new PrimaryNumber();
    const primaryNumber2 = new PrimaryNumber2();
    // primaryNumber.initialize(inputList);
    primaryNumber2.initialize(inputList);
    process.exit();
  });
}

init();
