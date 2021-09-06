/*
* 이분검색
8 32
23 87 65 12 57 32 99 81
3
*/

class BinarySearch {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.array = [];
  }

  solution2() {
    // 이분 검색은 일단 정렬이 되어 있어야함.
    this.array.sort((a, b) => a - b);
    let left = 0;
    let right = this.n - 1;
    while (left <= right) {
      let mid = parseInt((left + right) / 2);

      if (this.array[mid] === this.m) {
        return mid + 1;
      } else if (this.array[mid] > this.m) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }

  // indexOf로 한번에 풀기
  // 중복값이 존재 하지 않기 때문에 풀이 가능한 방법
  solution() {
    this.array.sort((a, b) => a - b);
    // console.log(this.array, this.m);
    return this.array.indexOf(this.m) + 1;
  }

  initialize(inputList) {
    [this.n, this.m] = inputList
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
    const binarySearch = new BinarySearch();
    binarySearch.initialize(inputList);
    // console.log(binarySearch.solution());
    console.log(binarySearch.solution2());
    process.exit();
  });
}

main();
