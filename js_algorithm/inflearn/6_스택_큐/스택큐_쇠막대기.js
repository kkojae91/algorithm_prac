/*
* 쇠막대기
()(((()())(())()))(())
17
(((()(()()))(())()))(()())
24



"(" + ")" 연속적일 때 pop 하고 남아있는 "(" 개수 카운트
*/

class IronStick {
  constructor() {
    this.str = "";
    this.stack = [];
    this.answer = 0;
  }

  solution() {
    // 레이저인 경우와 막대가 끝나는 경우 구분...
    for (let i = 0; i < this.str.length; i++) {
      const string = this.str[i];
      // 스택이 비어있으면 push
      if (!this.stack) {
        this.stack.push(string);
        // 비어있지 않으면
      } else {
        const prev = this.stack[this.stack.length - 1];
        const keepPrev = this.str[i - 1];
        // 이전값 === "(" && 현재값 === ")"일 경우 stack.pop() 하고 카운팅
        // 바로 이전값이 ")" 일경우는 += 1 카운팅
        if (prev === "(" && string === ")" && keepPrev === ")") {
          this.stack.pop();
          this.answer += 1;
        } else if (prev === "(" && string === ")") {
          this.stack.pop();
          this.answer += this.stack.length;
        } else {
          this.stack.push(string);
        }
      }
    }
    return this.answer;
  }

  initialize(inputList) {
    this.str = inputList.slice(0, 1)[0];
  }
}

class IronStick2 {
  constructor() {
    this.str = "";
    this.stack = [];
    this.answer = 0;
  }

  // 조금만 더 단순하게 문제 풀이... 하자!
  solution() {
    for (let i = 0; i < this.str.length; i++) {
      const string = this.str[i];
      if (string === "(") {
        this.stack.push(string);
      } else {
        this.stack.pop();
        if (this.str[i - 1] === "(") {
          this.answer += this.stack.length;
        } else {
          this.answer += 1;
        }
      }
    }
    return this.answer;
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
    const ironStick = new IronStick();
    const ironStick2 = new IronStick2();
    ironStick.initialize(inputList);
    ironStick2.initialize(inputList);
    // console.log(ironStick.solution());
    console.log(ironStick2.solution());
    process.exit();
  });
}

main();
