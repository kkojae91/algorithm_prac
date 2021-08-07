/*
10
1 0 1 1 1 0 0 1 1 0
*/

class OxQuiz {
  constructor() {
    this.n;
    this.array = [];
    this.sum = 0;
    this.count = 0;
  }

  solution = () => {
    this.array.forEach((num) => {
      if (num === 1) {
        this.count++;
        this.sum += this.count;
      } else {
        this.count = 0;
      }
    });
    return this.sum;
  };

  initialize = (inputList) => {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.array = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((num) => Number(num));
    console.log(this.solution());
  };
}

function init() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const oxQuiz = new OxQuiz();
    oxQuiz.initialize(inputList);
    process.exit();
  });
}

init();
