/*
* n개의 숫자가 입력되면 오름차순 정렬하는 프로그램을 작성하시오. (선택정렬 사용)
6
13 5 11 7 23 15
5 7 11 13 15 23
*/

class SelectionSort {
  constructor() {
    this.n = 0;
    this.array = [];
  }

  solution() {
    for (let i = 0; i < this.n - 1; i++) {
      let index = i;
      for (let j = i + 1; j < this.n; j++) {
        if (this.array[j] < this.array[index]) {
          index = j;
        }
      }
      [this.array[i], this.array[index]] = [this.array[index], this.array[i]];
    }
    console.log(this.array);
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
    const selectionSort = new SelectionSort();
    selectionSort.initialize(inputList);
    console.log(selectionSort.solution());
    process.exit();
  });
}

main();
