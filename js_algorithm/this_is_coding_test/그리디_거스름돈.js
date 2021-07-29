/*
당신은 음식점의 계산을 도와주는 점원이다.
거스름돈으로 사용할 500원, 100원, 50원, 10원 짜리 동전 무수히 많이 존재
손님에게 거슬러 줘야 할 돈이 N원일 때 거슬러줘야 할 동전의 최소 개수를 구하라.
단, 거슬러줘야 할 돈 N은 항상 10의 배수이다.
*/
const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(inputList) {
  let inputCoin = Number(inputList.join(""));
  const coinList = [500, 100, 50, 10];
  let count = 0;
  coinList.forEach((coin) => {
    count += parseInt(inputCoin / coin);
    inputCoin = inputCoin % coin;
  });
  return count;
}

function init() {
  const inputList = [];
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    console.log(solution(inputList));
    process.exit();
  });
}

init();
