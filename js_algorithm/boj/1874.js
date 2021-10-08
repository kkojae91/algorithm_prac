function solution(n, nList) {
  const stack = [];
  let answer = "";
  nList.reverse();
  for (let i = 1; i <= n; i++) {
    stack.push(i);
    answer += "+\n";
    while (stack[stack.length - 1] === nList[nList.length - 1]) {
      if (nList.length === 0 || stack.length === 0) {
        break;
      }
      stack.pop();
      nList.pop();
      answer += "-\n";
    }
  }
  if (stack.length !== 0) {
    console.log("NO");
    return;
  }
  console.log(answer);
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin.slice(1, n + 1).map((str) => Number(str));
  solution(n, nList);
}

main();
