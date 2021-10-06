/**
 * 사칙연산
 * 두수 a, b 주어졌을 경우 더한값, 뺀값, 곱한값, 몫, 나머지 를 구해라
 */

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
    const arr = [a + b, a - b, a * b, parseInt(a / b), a % b];
    arr.forEach((a) => console.log(a));
    process.exit();
  });
}

main();
