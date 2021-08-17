/*
하나의 수열에는 다양한 수가 존재한다. 이러한 수는 크기에 상관없이 나열되어 있다.
이 수를 큰 수부터 작을 수 순서로 정렬해야한다. 수열을 내림차순 정렬하는 프로그램을 만드시오.
3
15
27
12
*/

class UpDown {
  constructor() {
    this.n = 0;
    this.array = [];
  }

  solution() {
    return this.array.sort((a, b) => b - a).join(" ");
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.array = inputList.slice(1, this.n + 1).map((str) => Number(str));
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
    const upDown = new UpDown();
    upDown.initialize(inputList);
    console.log(upDown.solution());
    process.exit();
  });
}

main();
