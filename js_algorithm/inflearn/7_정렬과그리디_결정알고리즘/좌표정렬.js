/*
* 좌표 정렬
5
2 7
1 3
1 2
2 5
3 6
*/

class CoordinateSort {
  constructor() {
    this.n = 0;
    this.array = [];
  }

  solution() {
    this.array.sort((a, b) => {
      return a[0] - b[0] || a[1] - b[1];
    });
    return this.array;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    inputList.slice(1, this.n + 1).forEach((str) => {
      this.array.push(str.split(" ").map((str) => Number(str)));
    });
  }
}

class CoordinateSort2 {
  constructor() {
    this.n = 0;
    this.array = [];
  }

  // 위의 문제 풀이를 조금 더 풀어서 풀면 아래와 같이 풀 수 있다.
  solution() {
    this.array.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });
    return this.array;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    inputList.slice(1, this.n + 1).forEach((str) => {
      this.array.push(str.split(" ").map((str) => Number(str)));
    });
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
    const coordinateSort = new CoordinateSort();
    const coordinateSort2 = new CoordinateSort2();
    coordinateSort.initialize(inputList);
    coordinateSort2.initialize(inputList);
    // console.log(coordinateSort.solution());
    console.log(coordinateSort2.solution());
    process.exit();
  });
}

main();
