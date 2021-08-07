const { stdin, stdout } = require("process");

function solution(str) {
  let answer = "";
  for (const s of str) {
    s === "A" ? (answer += "#") : (answer += s);
  }
  return answer;
}

function solution2(str) {
  // 정규표현식 간단한 것들을 알고 있으면 쉽게 쉽게 문자열 문제를 풀 수 있는 경우가 많다.
  str = str.replace(/A/g, "#");
  return str;
}

function preprocessInput(inputList) {
  // console.log(solution(inputList[0]));
  console.log(solution2(inputList[0]));
}

function init() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    preprocessInput(inputList);
    process.exit();
  });
}

init();
