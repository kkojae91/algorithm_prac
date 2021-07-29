const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
계좌에 들어있는 돈 일부를 은행에서 출금하고자 한다.
돈 담을 지갑이 최대한 가볍도록 큰 금액의 화폐 위주로 받습니다.
오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 십원 동전, 일원 동전 각 몇개로 변환 되는지
금액이 큰 순서대로 배열에 담아 return 하도록 solution 메서드를 완성해주세요.
money 50237, 15000
result [1,0,0,0,0,2,0,3,7], [0,1,1,0,0,0,0,0,0]
*/

function solution(money) {
  const coinHash = { 50000: 0, 10000: 0, 5000: 0, 1000: 0, 500: 0, 100: 0, 50: 0, 10: 0, 1: 0 };
  const coinList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (const coin of coinList) {
    coinHash[coin] = parseInt(money / coin);
    money = money % coin;
  }

  const result = Object.values(coinHash).reverse();
  return result;
}

function makeInput(inputList) {
  const money = Number(inputList.join(""));
  console.log(solution(money));
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
