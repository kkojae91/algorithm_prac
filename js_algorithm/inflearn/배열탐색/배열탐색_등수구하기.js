/*
5
87 89 92 100 76

5
87 87 87 100 12
*/

class GetRank {
  constructor() {
    this.n;
    this.scoreList = [];
    this.rankList = [];
  }

  solution = () => {
    let i, j;
    for (i = 0; i < this.scoreList.length; i++) {
      for (j = 0; j < this.scoreList.length; j++) {
        const standardNum = this.scoreList[i];
        const compareNum = this.scoreList[j];
        if (compareNum > standardNum) {
          this.rankList[i]++;
        }
      }
    }
    return this.rankList;
  };

  solution2 = () => {
    this.scoreList.forEach((standardNum, standardIndex) => {
      this.scoreList.forEach((compareNum) => {
        if (compareNum > standardNum) {
          this.rankList[standardIndex]++;
        }
      });
    });
    return this.rankList;
  };

  initialize = (inputList) => {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.scoreList = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((num) => Number(num));
    this.makeRankList();
    // console.log(this.solution());
    console.log(this.solution2());
  };

  makeRankList = () => {
    this.rankList = Array(this.n).fill(1);
  };
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
    const getRank = new GetRank();
    getRank.initialize(inputList);
    process.exit();
  });
}

init();
