const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
2, 4, 5, 4, 6으로 이루어진 배열이 있을 때 M = 8, K = 3
특정한 인덱스의 수가 연속해서 세 번까지만 더해질 수 있으므로 큰 수의 법칙에 따른 결과는 
6+6+6+5+6+6+6+5=46
3, 4, 3, 4, 3으로 이루어진 배열이 있을 때 M = 7, K = 2
4+4+4+4+4+4+4=28
5 8 3
2 4 5 4 6
46

5 7 2
3 4 3 4 3
*/

function solution(n, m, k, data) {
  data.sort((a, b) => b - a);
  let result = 0;
  let count = 0;
  for (let i = 0; i < m; i++) {
    if (count === k) {
      result += data[1];
      count = 0;
      continue;
    }
    result += data[0];
    count++;
  }
  return result;
}

function makeInput(inputList) {
  const [n, m, k] = inputList[0].split(" ").map((num) => Number(num));
  const data = inputList[1].split(" ").map((num) => Number(num));
  console.log(solution(n, m, k, data));
}

function init() {
  const inputList = [];
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    makeInput(inputList);
    process.exit();
  });
}

init();
