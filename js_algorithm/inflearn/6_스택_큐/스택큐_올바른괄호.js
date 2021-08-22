/*
괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, 
(()()))은 올바른 괄호가 아니다

(()(()))(()
NO

(())()
YES
*/

class Parentheses {
  constructor() {
    this.str = "";
    this.stack = [];
  }

  solution() {
    // 초기 값 stack에 push
    this.stack.push(this.str[0]);

    for (let i = 1; i < this.str.length; i++) {
      const currText = this.str[i];
      const prevText = this.stack[this.stack.length - 1];
      if (prevText === "(" && currText === ")") {
        this.stack.pop();
      } else {
        this.stack.push(currText);
      }
    }

    if (this.stack.length === 0) {
      return "YES";
    } else {
      return "NO";
    }
  }

  initialize(inputList) {
    this.str = inputList.slice(0, 1)[0];
  }
}

class Parentheses2 {
  constructor() {
    this.str = "";
    this.stack = [];
    this.answer = "YES";
  }

  solution() {
    for (const text of this.str) {
      if (text === "(") {
        this.stack.push(text);
      } else {
        if (this.stack.length === 0) {
          return "NO";
        }
        this.stack.pop();
      }
    }

    if (this.stack.length > 0) {
      return "NO";
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
    const parentheses = new Parentheses();
    const parentheses2 = new Parentheses2();
    parentheses.initialize(inputList);
    parentheses2.initialize(inputList);
    // console.log(parentheses.solution());
    console.log(parentheses2.solution());
    process.exit();
  });
}

main();
