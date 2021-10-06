/**
 * 나머지
 * (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
 * (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
 * 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
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
    const [A, B, C] = inputData
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    console.log((A + B) % C);
    console.log(((A % C) + (B % C)) % C);
    console.log((A * B) % C);
    console.log(((A % C) * (B % C)) % C);
    process.exit();
  });
}

main();
