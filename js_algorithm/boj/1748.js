function solution(n) {
  let answer = 0;
  let gu = 9;
  answer = n.length * (n - 10 ** (n.length - 1) + 1);
  if (n.length > 1) {
    for (let i = 1; i < n.length; i++) {
      answer += i * gu;
      gu *= 10;
    }
  }
  return answer;
}

function main() {
  const fs = require("fs");
  const str = fs.readFileSync("/dev/stdin").toString().split("\n");

  console.log(solution(str[0]));
}

main();
