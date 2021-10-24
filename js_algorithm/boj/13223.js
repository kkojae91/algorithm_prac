// 어떤 부분의 예외처리를 놓친지 모르겠다....
function solution(currTime, saltTime) {
  let [currHour, currMin, currSec] = currTime.split(":").map((str) => Number(str));
  let [saltHour, saltMin, saltSec] = saltTime.split(":").map((str) => Number(str));

  // 시간은 23:59:59
  // 우선 saltHour가 다음 날인지 오늘인지 hour를 기준으로 체크
  // 다음날일 경우와 오늘일 경우를 다르게 계산
  // 다음날일 경우
  if (currSec > saltSec) {
    saltMin--;
    saltSec += 60;
  }

  if (currMin > saltMin) {
    saltHour--;
    saltMin += 60;
  }

  if (currHour > saltHour) {
    saltHour += 24;
  }

  let resultHour = saltHour - currHour;
  let resultMin = saltMin - currMin;
  let resultSec = saltSec - currSec;

  if (resultHour < 10) {
    resultHour = `0${resultHour}`;
  }

  if (resultMin < 10) {
    resultMin = `0${resultMin}`;
  }

  if (resultSec < 10) {
    resultSec = `0${resultSec}`;
  }

  let answer = `${String(resultHour)}:${String(resultMin)}:${String(resultSec)}`;
  return answer;
}

function main() {
  const fs = require("fs");
  const [currTime, saltTime] = fs.readFileSync("/dev/stdin").toString().split("\n");
  console.log(solution(currTime, saltTime));
}

main();
