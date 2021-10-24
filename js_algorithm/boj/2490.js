function solution(list) {
  list.forEach((li) => {
    let zeroCount = 0;
    let oneCount = 0;
    li.split(" ").forEach((str) => {
      if (str === "0") {
        zeroCount++;
      } else {
        oneCount++;
      }
    });
    if (oneCount === 4) {
      console.log("E");
    } else if (zeroCount === 1) {
      console.log("A");
    } else if (zeroCount === 2) {
      console.log("B");
    } else if (zeroCount === 3) {
      console.log("C");
    } else if (zeroCount === 4) {
      console.log("D");
    }
  });
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  solution(stdin);
}

main();
