/*
* n개의 숫자가 입력되면 오름차순 정렬하는 프로그램을 작성하시오. (선택정렬 사용)
6
11 7 5 6 10 9

5 6 7 9 10 11
*/

class InsertSort {
  constructor() {
    this.n = 0;
    this.array = [];
  }

  solution() {
    for (let i = 1; i < this.n; i++) {
      let temp = this.array[i];
      let j;
      for (j = i - 1; j >= 0; j--) {
        if (this.array[j] > temp) {
          this.array[j + 1] = this.array[j];
        } else {
          break;
        }
      }
      this.array[j + 1] = temp;
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
    const insertSort = new InsertSort();
    insertSort.initialize(inputList);
    console.log(insertSort.solution());
    process.exit();
  });
}

main();
