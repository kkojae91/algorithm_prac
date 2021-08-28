/*
* 스페셜 정렬
8
1 2 3 -3 -2 5 6 -6

-3 -2 -6 1 2 3 5 6
*/

// 그냥 푸는 방법
class SpecialSort {
  constructor() {
    this.n = 0;
    this.array = [];
    this.minusArray = [];
    this.plusArray = [];
  }

  solution() {
    this.minusArray = this.array.filter((num) => num < 0);
    this.plusArray = this.array.filter((num) => num >= 0);
    return [...this.minusArray, ...this.plusArray];
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.array = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
  }
}

// 버블정렬 활용
class SpecialSort2 {
  constructor() {
    this.n = 0;
    this.array = [];
  }

  solution() {
    for (let i = 0; i < this.n - 1; i++) {
      for (let j = 0; j < this.n - i - 1; j++) {
        if (this.array[j] >= 0 && this.array[j + 1] < 0) {
          [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
        }
      }
    }
    return this.array;
  }

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
    const specialSort = new SpecialSort();
    const specialSort2 = new SpecialSort2();
    specialSort.initialize(inputList);
    specialSort2.initialize(inputList);
    // console.log(specialSort.solution());
    console.log(specialSort2.solution());
    process.exit();
  });
}

main();
