/*
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
155
*/

class MaxSum {
  constructor() {
    this.n;
    this.array = [];
    this.diagSumList = [];
    this.rowSumList = [];
    this.colSumList = [];
  }

  solution2() {
    let i, j;
    for (i = 0; i < this.n; i++) {
      let rowSum = 0;
      let colSum = 0;
      for (j = 0; j < this.n; j++) {
        rowSum += this.array[i][j];
        colSum += this.array[j][i];
      }
      this.rowSumList.push(rowSum);
      this.colSumList.push(colSum);
    }

    let k;
    let diagSum = 0;
    let diagSum2 = 0;
    for (k = 0; k < this.n; k++) {
      diagSum += this.array[k][k];
      diagSum2 += this.array[k][this.n - k - 1];
    }
    this.diagSumList.push(diagSum);
    this.diagSumList.push(diagSum2);
    return Math.max(...this.diagSumList, ...this.rowSumList, ...this.colSumList);
  }

  solution() {
    this.getRowSum();
    this.getColSum();
    this.getDiagSum();
    this.getDiagReverseSum();
    return Math.max(...this.diagSumList, ...this.rowSumList, ...this.colSumList);
  }

  getDiagReverseSum() {
    let i, j;
    let count = 0;
    let reverseSum = 0;
    for (i = 0; i < this.n; i++) {
      for (j = this.n - 1; j >= 0; j--) {
        if (count % 6 === 0) {
          reverseSum += this.array[i][j];
        }
        count++;
      }
    }
    this.diagSumList.push(reverseSum);
  }

  getDiagSum() {
    let i, j;
    let diagSum = 0;
    for (i = 0; i < this.n; i++) {
      for (j = 0; j < this.n; j++) {
        if (i === j) {
          diagSum += this.array[i][j];
        }
      }
    }
    this.diagSumList.push(diagSum);
  }

  getRowSum() {
    this.array.forEach((arr) => {
      this.rowSumList.push(arr.reduce((prev, curr) => prev + curr, 0));
    });
    console.log(this.rowSumList);
  }

  getColSum() {
    let i, j;
    for (i = 0; i < this.n; i++) {
      let colSum = 0;
      for (j = 0; j < this.n; j++) {
        colSum += this.array[j][i];
      }
      this.colSumList.push(colSum);
    }
    console.log(this.colSumList);
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    const strList = inputList.slice(1, this.n + 1);
    strList.forEach((str) => {
      this.array.push(str.split(" ").map((s) => Number(s)));
    });
    // console.log(this.solution());
    console.log(this.solution2());
  }
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
    const maxSum = new MaxSum();
    maxSum.initialize(inputList);
    process.exit();
  });
}

init();
