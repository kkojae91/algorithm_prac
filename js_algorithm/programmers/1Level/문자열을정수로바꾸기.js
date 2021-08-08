function solution(s) {
  return Number(s);
}

// 문자열 변수를 숫자로 사칙연산하게 되면 숫자로 변환되는 자바스크립트의 특징을 이용한 풀이
function solution2(s) {
  return s / 1;
}

function init() {
  const sList = ["1234", "-1234"];
  for (let s of sList) {
    console.log(solution(s));
    console.log(solution2(s));
  }
}

init();
