/*
5
1 3 9 5 2
5
3 2 5 7 8
*/

class GetElement {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.nList = [];
    this.mList = [];
    this.answer;
  }

  solution() {
    const mSet = new Set(this.mList);
    // 교집합 추출 후 오름차순 정렬
    this.answer = this.nList.filter((num) => mSet.has(num)).sort((a, b) => a - b);
    return this.answer.join(" ");
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.nList = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
    this.m = Number(inputList.slice(2, 3)[0]);
    this.mList = inputList
      .slice(3, 4)[0]
      .split(" ")
      .map((str) => Number(str));
    console.log(this.solution());
  }
}

class GetElement2 {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.nPointer = 0;
    this.mPointer = 0;
    this.nList = [];
    this.mList = [];
    this.answer = [];
  }

  solution() {
    this.nList.sort((a, b) => a - b);
    this.mList.sort((a, b) => a - b);

    while (this.nPointer < this.n && this.mPointer < this.m) {
      // 값이 같을 경우 push 후 pointer++;
      if (this.nList[this.nPointer] === this.mList[this.mPointer]) {
        this.answer.push(this.nList[this.nPointer]);
        this.nPointer++;
        this.mPointer++;
        // 작은 값을 pointer++;
      } else if (this.nList[this.nPointer] < this.mList[this.mPointer]) {
        this.nPointer++;
      } else {
        this.mPointer++;
      }
    }
    return this.answer.join(" ");
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.nList = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
    this.m = Number(inputList.slice(2, 3)[0]);
    this.mList = inputList
      .slice(3, 4)[0]
      .split(" ")
      .map((str) => Number(str));
    console.log(this.solution());
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
    const getElement = new GetElement();
    const getElement2 = new GetElement2();
    // getElement.initialize(inputList);
    getElement2.initialize(inputList);
    process.exit();
  });
}

main();
