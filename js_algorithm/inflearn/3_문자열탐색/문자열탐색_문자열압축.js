/*
문자열 압축
같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
단, 반복 횟수가 1인 경우 생략한다.
KKHSSSSSSSE
K2HS7E
*/

class CompressString {
  constructor() {
    this.str = "";
    this.strCountObj = {};
    this.keysList = [];
    this.valuesList = [];
    this.answer = "";
  }

  solution() {
    for (const s of this.str) {
      this.strCountObj[s] === undefined ? (this.strCountObj[s] = 1) : (this.strCountObj[s] += 1);
    }
    this.keysList = Object.keys(this.strCountObj);
    this.valuesList = Object.values(this.strCountObj);
    this.valuesList.forEach((value, index) => {
      if (value === 1) {
        this.answer += this.keysList[index];
      } else {
        this.answer += this.keysList[index];
        this.answer += value;
      }
    });
    return this.answer;
  }

  initialize(inputList) {
    this.str = inputList[0];
    console.log(this.solution());
  }
}

class CompressString2 {
  constructor() {
    this.str = "";
    this.answer = "";
    this.strCount = 1;
  }

  // 앞 뒤를 비교해서 바로 값 업데이트 해가기.
  solution() {
    // 마지막 값도 비교하기 위해 문자열에 " "공백 문자 추가
    this.str += " ";
    for (let i = 0; i < this.str.length - 1; i++) {
      if (this.str[i] === this.str[i + 1]) {
        this.strCount++;
      } else {
        this.answer += this.str[i];
        if (this.strCount > 1) {
          this.answer += String(this.strCount);
          this.strCount = 1;
        }
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
    const compressString = new CompressString();
    const compressString2 = new CompressString2();
    compressString.initialize(inputList);
    compressString2.initialize(inputList);
    process.exit();
  });
}

init();
