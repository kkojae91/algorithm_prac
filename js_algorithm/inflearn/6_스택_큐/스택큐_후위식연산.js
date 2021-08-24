/*
* 후위식연산
* 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
352+*9-
12
*/

class Postfix {
  constructor() {
    this.str = "";
    this.stack = [];
    this.answer;
  }

  isNotANumber(string) {
    const stackLength = this.stack.length;
    // 아직 한 번도 계산하지 않는 경우
    if (!this.answer) {
      this.answer = this.stack[stackLength - 1];
      const num = this.stack[stackLength - 2];
      this.calculate(string, num);
      this.stack.pop();
    } else {
      const num = this.stack[stackLength - 1];
      this.calculate(string, num);
    }
  }

  calculate(string, num) {
    if (string === "+") {
      this.answer += num;
    } else if (string === "-") {
      this.answer -= num;
    } else if (string === "*") {
      this.answer *= num;
    } else {
      this.answer /= num;
    }
    this.stack.pop();
  }

  solution() {
    for (const string of this.str) {
      // 숫자일 경우 stack에 push
      if (!isNaN(string)) {
        this.stack.push(Number(string));
        // 연산식일 경우
      } else {
        this.isNotANumber(string);
      }
    }
    return this.answer;
  }

  initialize(inputList) {
    this.str = inputList.slice(0, 1)[0];
  }
}

// 항상 내가 생각하는 것보다 조금 더 쉬운 방법이 있다.
// 매번 작성하지만 조금만 더 단순하게 생각!!!
class Postfix2 {
  constructor() {
    this.str = "";
    this.stack = [];
  }

  solution() {
    for (const string of this.str) {
      // 숫자일 경우 stack에 push
      if (!isNaN(string)) {
        this.stack.push(Number(string));
      } else {
        const rightNumber = this.stack.pop();
        const leftNumber = this.stack.pop();

        if (string === "+") {
          this.stack.push(leftNumber + rightNumber);
        } else if (string === "-") {
          this.stack.push(leftNumber - rightNumber);
        } else if (string === "*") {
          this.stack.push(leftNumber * rightNumber);
        } else {
          this.stack.push(leftNumber / rightNumber);
        }
      }
    }
    return this.stack[0];
  }

  initialize(inputList) {
    this.str = inputList.slice(0, 1)[0];
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
    const postfix = new Postfix();
    const postfix2 = new Postfix2();
    postfix.initialize(inputList);
    postfix2.initialize(inputList);
    // console.log(postfix.solution());
    console.log(postfix2.solution());
    process.exit();
  });
}

main();
