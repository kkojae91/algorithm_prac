class PrimaryNumber2 {
  constructor() {
    this.n = 0;
    this.numList = [];
    this.answer = [];
  }

  isPrime(num) {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  solution() {
    this.numList.forEach((num) => {
      let newNum = 0;
      while (num) {
        let remainder = num % 10;
        newNum = newNum * 10 + remainder;
        num = parseInt(num / 10);
      }
      if (this.isPrime(newNum)) {
        this.answer.push(newNum);
      }
    });
    return this.answer.join(" ");
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.numList = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((num) => Number(num));
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
    const primaryNumber2 = new PrimaryNumber2();
    primaryNumber2.initialize(inputList);
    process.exit();
  });
}

main();
