/*
2
I am happy today
We want to win the first prize
*/

function solution(n, strArray) {
  strArray.forEach((str) => {
    const sentence = str.split(" ").map((text) => text.split("").reverse().join(""));
    console.log(sentence.join(" "));
  });
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
    const n = Number(inputList.slice(0, 1)[0]);
    const strArray = inputList.slice(1, n + 1);
    solution(n, strArray);
    process.exit();
  });
}

main();
