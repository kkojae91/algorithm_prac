class Mentoring {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.array = [];
    this.answer = 0;
  }

  solution() {
    for (let mento = 1; mento <= this.n; mento++) {
      for (let menti = 1; menti <= this.n; menti++) {
        let count = 0;
        for (let row = 0; row < this.m; row++) {
          let mentoGrade = 0;
          let mentiGrade = 0;
          for (let col = 0; col < this.n; col++) {
            if (this.array[row][col] === mento) {
              mentoGrade = col;
            }
            if (this.array[row][col] === menti) {
              mentiGrade = col;
            }
          }
          if (mentoGrade < mentiGrade) {
            count++;
          }
        }
        if (count === this.m) {
          this.answer++;
        }
      }
    }
    return this.answer;
  }

  initialize(inputList) {
    [this.n, this.m] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    inputList.slice(1, this.m + 1).forEach((str) => {
      this.array.push(str.split(" ").map((str) => Number(str)));
    });
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
    const mentoring = new Mentoring();
    mentoring.initialize(inputList);
    process.exit();
  });
}

main();
