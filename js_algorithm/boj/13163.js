function solution(n, nList) {
  let answer = "";
  nList.forEach((str) => {
    const strList = str.split(" ");
    strList[0] = "god";
    answer += strList.join("") + "\n";
  });
  return answer.trim();
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin.slice(1, n + 1);
  console.log(solution(n, nList));
}

main();
