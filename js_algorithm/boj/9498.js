function solution(num) {
  if (num >= 90 && num <= 100) {
    console.log("A");
  } else if (num >= 80 && num < 90) {
    console.log("B");
  } else if (num >= 70 && num < 80) {
    console.log("C");
  } else if (num >= 60 && num < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}

function main() {
  const readline = require("readline");
  const inputData = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputData.push(line);
  }).on("close", () => {
    const a = Number(inputData.slice(0, 1)[0]);
    solution(a);
    process.exit();
  });
}

main();
