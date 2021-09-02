/*
* 장난꾸러기 현수
9
120 125 152 130 135 135 143 127 160
3 8

6
120 130 150 150 130 150
3 5
*/

class Mischievous {
  constructor() {
    this.n = 0;
    this.array = [];
    this.count = 0;
    this.temp = 0;
  }

  solution() {}

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.array = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
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
    const mischievous = new Mischievous();
    mischievous.initialize(inputList);
    console.log(mischievous.solution());
    process.exit();
  });
}

main();
