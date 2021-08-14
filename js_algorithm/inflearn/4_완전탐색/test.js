class ArrayCombine {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.nPointer = 0;
    this.mPointer = 0;
    this.nList = [];
    this.mList = [];
  }

  solution() {
    while (this.nPointer < this.n && this.mPointer < this.m) {}
  }

  initialize(inputList) {}
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
