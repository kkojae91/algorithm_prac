/**
 * 나머지
 * (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
 * (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
 * 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
 */

function solution(num1, num2) {
  const num2Array = String(num2)
    .split("")
    .map((str) => Number(str))
    .reverse();

  num2Array.forEach((num) => console.log(num * num1));
  console.log(num1 * num2);
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
    const b = Number(inputData.slice(1, 2)[0]);
    solution(a, b);
    process.exit();
  });
}

main();
