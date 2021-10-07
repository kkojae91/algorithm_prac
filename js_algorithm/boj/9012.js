function solution(n, parenthesisArray) {
  parenthesisArray.forEach((parenthesis) => {
    const stack = [];
    parenthesis.split("").forEach((ps) => {
      if (!stack) {
        stack.push(ps);
      } else {
        const prev = stack[stack.length - 1];
        if (prev === "(" && ps === ")") {
          stack.pop();
        } else {
          stack.push(ps);
        }
      }
    });
    stack.length === 0 ? console.log("YES") : console.log("NO");
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
    const parenthesisArray = inputList.slice(1, n + 1);
    solution(n, parenthesisArray);
    process.exit();
  });
}

main();
