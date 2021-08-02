/*
정수 n이 입력되면 00시 00분 00초 부터 n시 59분 59초까지의 모든 시각 중에서 
3이 하나라도 포함되는 모든 경우의 수를 구하는 프로그램을 작성하시오.
00시는 23까지, 00분 00초는 59까지
*/

function solution(time) {
  let count = 0;
  for (let hour = 0; hour <= time; hour++) {
    for (let min = 0; min < 60; min++) {
      for (let sec = 0; sec < 60; sec++) {
        const strHour = String(hour);
        const strMin = String(min);
        const strSec = String(sec);
        if (strHour.indexOf("3") !== -1 || strMin.indexOf("3") !== -1 || strSec.indexOf("3") !== -1) {
          count++;
        }
      }
    }
  }
  return count;
}

function preprocessInput(inputList) {
  const time = Number(inputList[0]);
  console.log(solution(time));
}

function init() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    preprocessInput(inputList);
    process.exit();
  });
}

init();
