"use strict";

class Initialize {
  constructor(numList) {
    this.numList = numList;
  }

  solution = () => {
    const answer = [];
    this.numList.reduce((prev, curr) => {
      if (prev < curr) {
        answer.push(curr);
      }
      return curr;
    }, -1);
    return answer.join(" ");
  };
}

function main() {
  const numList = [7, 3, 9, 5, 6, 12];
  const initialize = new Initialize(numList);
  console.log(initialize.solution());
}

main();
