/*
* n개의 숫자가 입력되면 오름차순 정렬하는 프로그램을 작성하시오. (버블정렬 사용)
6
13 5 11 7 23 15

5 7 11 13 15 23
*/

class BubbleSort {
  constructor() {
    this.n = 0;
    this.array = [];
  }

  solution() {
    for (let i = 0; i < this.n - 1; i++) {
      for (let j = 0; j < this.n - i - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
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
    const bubbleSort = new BubbleSort();
    bubbleSort.initialize(inputList);
    console.log(bubbleSort.solution());
    process.exit();
  });
}

main();
