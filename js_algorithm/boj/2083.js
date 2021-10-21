function solution(inputs) {
  let answer = "";
  const [name, age, weight] = inputs.split(" ");
  if (name === "#") {
    return "";
  }
  if (age > 17 || weight >= 80) {
    answer = name + " Senior";
    return answer;
  }
  answer = name + " Junior";
  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  let result = "";
  for (let i = 0; i < stdin.length - 1; i++) {
    if (i === stdin.length - 2) {
      result += solution(stdin[i]);
    } else {
      result += solution(stdin[i]) + "\n";
    }
  }
  console.log(result);
}

main();
