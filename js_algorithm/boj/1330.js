function solution(num1, num2) {
  if (num1 > num2) {
    console.log(">");
  } else if (num1 < num2) {
    console.log("<");
  } else {
    console.log("==");
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
    const [a, b] = inputData
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    solution(a, b);
    process.exit();
  });
}

main();
