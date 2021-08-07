/*
A, B 둘이서 가위 바위 보 게임을 한다.
가위 1, 바위 2, 보 3
승 A, 패 B, 비김 D
5
2 3 3 1 3
1 1 2 2 3
*/

class RockGame {
  constructor() {
    this.n;
    this.aList = [];
    this.bList = [];
    this.answer = [];
  }

  solution2 = () => {
    let i;
    for (i = 0; i < this.aList.length; i++) {
      if (this.aList[i] === this.bList[i]) {
        this.answer.push("D");
      } else if (this.aList[i] === 1 && this.bList[i] === 3) {
        this.answer.push("A");
      } else if (this.aList[i] === 2 && this.bList[i] === 1) {
        this.answer.push("A");
      } else if (this.aList[i] === 3 && this.bList[i] === 2) {
        this.answer.push("A");
      } else {
        this.answer.push("B");
      }
    }
    console.log(this.answer);
  };

  solution = () => {
    this.aList.forEach((a, index) => {
      const b = this.bList[index];
      this.checkWinner(a, b);
    });
    return this.answer;
  };

  checkWinner = (a, b) => {
    if (a === b) {
      this.answer.push("D");
    } else if (a === 1 && b === 3) {
      this.answer.push("A");
    } else if (a === 2 && b === 1) {
      this.answer.push("A");
    } else if (a === 3 && b === 2) {
      this.answer.push("A");
    } else {
      this.answer.push("B");
    }
  };

  preprocess = (inputList) => {
    this.n = Number(inputList.splice(0, 1)[0]);
    this.aList = inputList
      .splice(0, 1)[0]
      .split(" ")
      .map((num) => Number(num));
    this.bList = inputList[0].split(" ").map((num) => Number(num));
    console.log(this.solution());
    // console.log(this.solution2());
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
    const rockGame = new RockGame();
    rockGame.preprocess(inputList);
    process.exit();
  });
}

init();
