// 빈 문자열이 들어오는 경우를 예외 처리 해줘야 한다.
function solution(str) {
  str = str.trim().split(" ");
  return str[0] === "" ? 0 : str.length;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString();
  console.log(solution(stdin));
}

main();
