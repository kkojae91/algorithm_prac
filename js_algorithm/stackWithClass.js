/*
스택
정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
push x: 정수 x를 스택에 넣는 연산
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없을 경우 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없을 경우에는 -1을 출력한다.
14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top
*/
class Stack {
  constructor() {
    this.stackList = [];
  }

  push = (num) => {
    this.stackList.push(num);
  };

  pop = () => {
    if (this.stackList.length === 0) {
      return -1;
    }
    return this.stackList.pop();
  };

  size = () => {
    return this.stackList.length;
  };

  empty = () => {
    if (this.stackList.length === 0) {
      return 1;
    }
    return 0;
  };

  top = () => {
    if (this.stackList.length === 0) {
      return -1;
    }
    return this.stackList[this.stackList.length - 1];
  };
}

function solution(n, commands) {
  const stack = new Stack();
  commands.forEach((command) => {
    if (command[0] === "push") {
      stack.push(command[1]);
    } else if (command[0] === "pop") {
      console.log(stack.pop());
    } else if (command[0] === "size") {
      console.log(stack.size());
    } else if (command[0] === "empty") {
      console.log(stack.empty());
    } else if (command[0] === "top") {
      console.log(stack.top());
    }
  });
}

function preprocessInput(inputList) {
  const n = Number(inputList[0]);
  const commands = [];
  inputList.splice(0, 1);
  for (const input of inputList) {
    const command = input.split(" ");
    if (command.length === 2) {
      command[1] = Number(command[1]);
    }
    commands.push(command);
  }
  solution(n, commands);
}

function init2() {
  const fs = require("fs");
  // const inputList = fs.readFileSync("/dev/stdin").toString().split("\n");
  const inputList = fs.readFileSync("./stackText.txt").toString().split("\n");
  preprocessInput(inputList);
}

init2();

// function init() {
//   const readline = require("readline");
//   const inputList = [];
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   rl.on("line", (line) => {
//     inputList.push(line);
//   }).on("close", () => {
//     preprocessInput(inputList);
//     process.exit();
//   });
// }

// init();
