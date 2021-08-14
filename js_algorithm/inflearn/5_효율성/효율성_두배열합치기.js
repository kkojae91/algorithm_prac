/*
3
1 3 5
5
2 3 6 7 9
*/

class ArrayCombine {
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
    while (this.nPointer < this.n && this.mPointer < this.m) {
      if (this.nList[this.nPointer] <= this.mList[this.mPointer]) {
        this.answer.push(this.nList[this.nPointer]);
        this.nPointer++;
      } else {
        this.answer.push(this.mList[this.mPointer]);
        this.mPointer++;
      }
    }
    while (this.nPointer < this.n) {
      this.answer.push(this.nList[this.nPointer]);
      this.nPointer++;
    }
    while (this.mPointer < this.m) {
      this.answer.push(this.mList[this.mPointer]);
      this.mPointer++;
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
    const arrayCombine = new ArrayCombine();
    arrayCombine.initialize(inputList);
    process.exit();
  });
}

main();
