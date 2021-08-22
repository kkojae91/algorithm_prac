/*
입력된 문자열에서 소괄호 () 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하시오.
괄호도 제거
(A(BC)D)EF(G(H)(IJ)K)LM(N)
EFLM
*/

class RemoveText {
  constructor() {
    this.str = "";
    this.stack = [];
  }

  // 여는 괄호를 만날때 까지 stack에서 pop한다.
  isAscii40() {
    let prevText = this.stack.pop();
    while (prevText !== "(") {
      prevText = this.stack.pop();
    }
  }

  solution() {
    // 문자일 경우, "(" 여는 괄호일 경우 모두 push
    // charCodeAt => 65 ~ 90, 97 ~ 122
    // "(" = 40, ")" = 41
    for (const text of this.str) {
      const ascii = text.charCodeAt();
      if (ascii === 40 || (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        this.stack.push(text);
      } else if (ascii === 41) {
        this.isAscii40();
      }
    }
    return this.stack.join("");
  }

  initialize(inputList) {
    this.str = inputList.slice(0, 1)[0];
  }
}

class RemoveText2 {
  constructor() {
    this.str = "";
    this.stack = [];
  }

  solution() {
    for (const text of this.str) {
      if (text === ")") {
        let popText = this.stack.pop();
        while (popText !== "(") {
          popText = this.stack.pop();
        }
      } else {
        this.stack.push(text);
      }
    }
    return this.stack.join("");
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
    const removeText = new RemoveText();
    const removeText2 = new RemoveText2();
    removeText.initialize(inputList);
    removeText2.initialize(inputList);
    // console.log(removeText.solution());
    console.log(removeText2.solution());
    process.exit();
  });
}

main();
