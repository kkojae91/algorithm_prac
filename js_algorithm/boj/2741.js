function main() {
  const fs = require("fs");
  const stdin = Number(fs.readFileSync("/dev/stdin").toString());
  let answer = "";
  for (let i = 1; i <= stdin; i++) {
    answer += i + "\n";
  }
  console.log(answer.trim());
}

main();
