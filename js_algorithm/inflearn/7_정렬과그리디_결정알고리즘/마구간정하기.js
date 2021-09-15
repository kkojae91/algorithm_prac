/*
* 마구간 정하기
5 3
1 2 8 4 9

3

*/

class SelectStable {
  constructor() {
    this.n = 0;
    this.c = 0;
    this.array = [];
    this.answer = 0;
  }

  count(mid) {
    let count = 1;
    let endPosition = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] - endPosition >= mid) {
        count++;
        endPosition = this.array[i];
      }
    }
    return count;
  }

  solution() {
    this.array.sort((a, b) => a - b);
    let left = 1;
    let right = this.array[this.array.length - 1];

    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      if (this.count(mid) >= this.c) {
        this.answer = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return this.answer;
  }

  initialize(inputList) {
    [this.n, this.c] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
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
    const selectStable = new SelectStable();
    selectStable.initialize(inputList);
    console.log(selectStable.solution());
    process.exit();
  });
}

main();
