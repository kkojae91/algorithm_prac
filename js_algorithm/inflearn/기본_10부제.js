/*
3 
25 23 11 47 53 17 33
3
0
12 20 54 30 87 91 30
3
*/
function solution(day, carList) {
  const result = carList.filter((carNum) => Number(String(carNum)[1]) === day).length;
  return result;
}

function preprocessInput(inputList) {
  const day = Number(inputList[0]);
  const carList = inputList[1].split(" ").map((num) => Number(num));
  console.log(solution(day, carList));
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
    preprocessInput(inputList);
    process.exit();
  });
}

init();
